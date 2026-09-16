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
const box = await glyphs[2].boundingBox();
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
await new Promise(r => setTimeout(r, 260));
await page.screenshot({ path: 'shots/h1-bulge-mid.png' });
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: 'shots/h2-bulge-settled.png' });
const intro = await page.evaluate(() => {
  const names = [...document.querySelectorAll('.ch-name')];
  const bre = names.find(n => n.textContent.trim() === '呼吸');
  return bre ? bre.closest('.chapter').querySelector('.ch-intro').textContent : 'NOT FOUND';
});
console.log('呼吸 INTRO:', intro);
console.log(errors.length ? 'ERRORS: ' + errors.join(' | ') : 'NO ERRORS');
await browser.close();
