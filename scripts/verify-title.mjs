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
console.log('glyph count:', glyphs.length);
const labels = await page.evaluate(() =>
  [...document.querySelectorAll('#factory-title .glyph')].map(g => g.classList.contains('g-space') ? ' ' : g.textContent.trim()).join(''));
console.log('title text:', labels);
await page.screenshot({ path: 'shots/t0-title-full.png' });

// 悬停 H（FACTORY ARCHIVE 的 ARCHIVE 首字母，index 8）
const box = await glyphs[8].boundingBox();
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: 'shots/t1-h-mid.png' });
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: 'shots/t2-h-settled.png' });

console.log(errors.length ? 'ERRORS: ' + errors.join(' | ') : 'NO ERRORS');
await browser.close();
