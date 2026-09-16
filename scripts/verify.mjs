// 验证 v4：浅色主题、字母透明图、图片卡片、弹簧螺旋、红字原文
import puppeteer from 'puppeteer-core';

const EXE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const browser = await puppeteer.launch({ executablePath: EXE, headless: true, args: ['--window-size=1440,900'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
const errors = [];
page.on('console', m => { if (m.type() === 'error') errors.push('[console] ' + m.text()); });
page.on('pageerror', e => errors.push('[pageerror] ' + e.message));
page.on('requestfailed', r => errors.push('[reqfail] ' + r.url()));

await page.goto('http://localhost:7100', { waitUntil: 'networkidle0', timeout: 45000 });
await new Promise(r => setTimeout(r, 2500));
await page.screenshot({ path: 'shots/n1-hero.png' });

// 悬停两个字母看透明零件图效果
const glyphs = await page.$$('.glyph');
for (const gi of [0, 4]) {
  const box = await glyphs[gi].boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await new Promise(r => setTimeout(r, 900));
}
await page.screenshot({ path: 'shots/n2-hero-hover.png' });

// 总览网格
await page.evaluate(() => {
  const ov = document.getElementById('overview');
  window.scrollTo(0, ov.offsetTop + (ov.offsetHeight - innerHeight) * 0.5);
});
await new Promise(r => setTimeout(r, 2200));
await page.screenshot({ path: 'shots/n3-grid.png' });

// 点击一张「有图」卡片
const target = await page.evaluate(() => {
  const ids = window.__items.map((it, i) => it.img ? i : -1).filter(i => i >= 0);
  let best = null, bd = 1e9;
  for (const i of ids) {
    const p = window.__factory.project(i);
    if (p.x < 350 || p.x > 950 || p.y < 220 || p.y > 680) continue;
    const d = (p.x - 640) ** 2 + (p.y - 450) ** 2;
    if (d < bd) { bd = d; best = { i, ...p, id: window.__items[i].id }; }
  }
  return best;
});
console.log('IMG TARGET', JSON.stringify(target));
await page.mouse.move(target.x, target.y);
await new Promise(r => setTimeout(r, 700));
await page.mouse.click(target.x, target.y);
await new Promise(r => setTimeout(r, 1800));
await page.screenshot({ path: 'shots/n4-detail-img.png' });
const panelMedia = await page.evaluate(() => ({
  hasImg: !!document.querySelector('#panel .pm-img'),
  opened: window.__factory.openedId(),
}));
console.log('PANEL', JSON.stringify(panelMedia));
await page.keyboard.press('Escape');
await new Promise(r => setTimeout(r, 700));

// 弹簧螺旋
await page.evaluate(() => document.querySelector('[data-mode="spiral"]').click());
await new Promise(r => setTimeout(r, 3000));
await page.screenshot({ path: 'shots/n5-spring.png' });

// 五章区图片卡片
await page.evaluate(() => document.getElementById('chapters').scrollIntoView({ behavior: 'instant' }));
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: 'shots/n6-chapters.png' });

console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO ERRORS');
await browser.close();
