/**
 * split-index.js
 * Splits the monolithic index.html into:
 *   - style.css  (already created, this script skips it)
 *   - app.js     (all JS from the main <script> block + tail scripts)
 *   - index.html (slim HTML shell linking to style.css and app.js)
 *
 * Usage: node split-index.js
 */

const fs = require('fs');
const path = require('path');

const dir = __dirname;
const srcFile = path.join(dir, 'index.html');
const content = fs.readFileSync(srcFile, 'utf-8');

// --- Extract the main <script> block (lines between the first <script> after </div></div> and its </script>) ---
// We know the structure:
//   <style>CSS</style>
//   </head>
//   <body>
//     ...HTML...
//   <script>
//     ...JS (main block)...
//   </script>
//   <style>...email-link CSS...</style>
//   <script>...email-link JS...</script>
//   </body>
//   </html>

// 1. Find the main script block
const mainScriptStart = content.indexOf('  <script>\n    // -------');
const mainScriptStartAlt = content.indexOf('  <script>\r\n    // -------');
const scriptStartIdx = mainScriptStart !== -1 ? mainScriptStart : mainScriptStartAlt;

if (scriptStartIdx === -1) {
  console.error('Could not find main <script> block start marker');
  process.exit(1);
}

// Find the opening <script> tag
const scriptTagEnd = content.indexOf('>', scriptStartIdx) + 1;

// Find the corresponding </script>
// The main script ends right before the email-link <style> block
const emailStyleMarker = '  <style>\n    /* Styling';
const emailStyleMarkerAlt = '  <style>\r\n    /* Styling';
let emailStyleIdx = content.indexOf(emailStyleMarker);
if (emailStyleIdx === -1) emailStyleIdx = content.indexOf(emailStyleMarkerAlt);

// The main </script> is right before that
const mainScriptEndTag = content.lastIndexOf('</script>', emailStyleIdx);
const mainScriptContent = content.substring(scriptTagEnd, mainScriptEndTag).replace(/^\r?\n/, '');

// 2. Find the email protection script
const emailScriptStart = content.indexOf('  <script>\n    // Globaler Schutz');
const emailScriptStartAlt = content.indexOf('  <script>\r\n    // Globaler Schutz');
const emailScriptIdx = emailScriptStart !== -1 ? emailScriptStart : emailScriptStartAlt;

let emailScriptContent = '';
if (emailScriptIdx !== -1) {
  const emailScriptTagEnd = content.indexOf('>', emailScriptIdx) + 1;
  const emailScriptEndTag = content.indexOf('</script>', emailScriptIdx);
  emailScriptContent = content.substring(emailScriptTagEnd, emailScriptEndTag).replace(/^\r?\n/, '');
}

// 3. Build app.js
// Remove the dynamic style injection (tooltip CSS) since it's now in style.css
let jsContent = mainScriptContent;

// Remove the dynamic style creation block
const dynamicStyleStart = jsContent.indexOf("    // Add tooltip style");
const dynamicStyleEnd = jsContent.indexOf("document.head.appendChild(style);");
if (dynamicStyleStart !== -1 && dynamicStyleEnd !== -1) {
  const afterAppend = jsContent.indexOf('\n', dynamicStyleEnd) + 1;
  jsContent = jsContent.substring(0, dynamicStyleStart) + jsContent.substring(afterAppend);
}

// Combine main JS + email protection JS
const fullJs = jsContent.trimEnd() + '\n\n' + emailScriptContent.trim() + '\n';

fs.writeFileSync(path.join(dir, 'app.js'), fullJs, 'utf-8');
console.log(`Created app.js (${fullJs.length} bytes)`);

// 4. Build index.html
// Extract the HTML body content (between <body> and the first <script>)
const bodyStart = content.indexOf('<body>');
const bodyContent = content.substring(bodyStart, scriptStartIdx);

const newHtml = `<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Berlin Admin – Gewählte Vertreter nach Wahlkreis</title>

  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/proj4@2.9.0/dist/proj4.min.js"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/shapefile@0.6.6/dist/shapefile.min.js"><\/script>
  <link rel="stylesheet" href="style.css" />
</head>

${bodyContent.trim()}

  <script src="app.js"><\/script>
</body>

</html>
`;

// Backup original
const backupPath = path.join(dir, 'index.html.bak');
fs.copyFileSync(srcFile, backupPath);
console.log(`Backed up original to index.html.bak`);

fs.writeFileSync(srcFile, newHtml, 'utf-8');
console.log(`Overwrote index.html (${newHtml.length} bytes)`);
console.log('Done! Verify by opening index.html in a browser.');
