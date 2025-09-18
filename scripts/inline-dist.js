/* Minimal bundler: inlines dist/index.html with emitted CSS/JS into a single HTML file */
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const outFile = path.resolve(distDir, 'single-file.html');

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function inline() {
  const htmlPath = path.join(distDir, 'index.html');
  let html = read(htmlPath);

  // Inline CSS links
  html = html.replace(/<link[^>]+href=\"([^\"]+\.css)\"[^>]*>/g, (_, href) => {
    const cssPath = path.join(distDir, href);
    const css = read(cssPath);
    return `<style>\n${css}\n</style>`;
  });

  // Inline JS scripts
  html = html.replace(/<script[^>]+src=\"([^\"]+\.js)\"[^>]*><\/script>/g, (_, src) => {
    const jsPath = path.join(distDir, src);
    const js = read(jsPath);
    return `<script>\n${js}\n</script>`;
  });

  fs.writeFileSync(outFile, html, 'utf8');
  console.log(`Wrote ${outFile}`);
}

inline();


