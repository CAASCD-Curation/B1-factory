import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  headless: true, args: ['--window-size=1440,900'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto('http://localhost:7100', { waitUntil: 'networkidle0', timeout: 45000 });
await new Promise(r => setTimeout(r, 2000));
const glyphs = await page.$$('.glyph');
for (const [idx, name] of [[10, 'h'], [12, 'v'], [13, 'e'], [14, 'e2']]) {
  const box = await glyphs[idx].boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await new Promise(r => setTimeout(r, 900));
  await page.screenshot({ path: `shots/t3-${name}.png` });
}
console.log(errors.length ? 'ERRORS: ' + errors.join(' | ') : 'NO ERRORS');
await browser.close();
