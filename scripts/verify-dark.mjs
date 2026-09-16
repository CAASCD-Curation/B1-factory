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
await new Promise(r => setTimeout(r, 2500));

// 1. HERO 暗色
await page.screenshot({ path: 'shots/d1-hero-dark.png' });

// 2. 流水线区
await page.evaluate(() => document.getElementById('conveyor').scrollIntoView());
await new Promise(r => setTimeout(r, 1800));
await page.screenshot({ path: 'shots/d2-conveyor.png' });

// 3. 移动鼠标扫点 + 点击物件 → 详情面板
const clicked = await page.evaluate(() => {
  return new Promise(res => {
    const cvs = document.getElementById('belt');
    const rect = cvs.getBoundingClientRect();
    const w = cvs.clientWidth, h = cvs.clientHeight;
    let tries = 0;
    const scan = () => {
      const x = rect.left + w * (0.25 + Math.random() * 0.5);
      const y = rect.top + h * (0.3 + Math.random() * 0.6);
      cvs.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true }));
      tries++;
      if (document.body.style.cursor === 'pointer') {
        cvs.dispatchEvent(new PointerEvent('click', { clientX: x, clientY: y, bubbles: true }));
        res('hover+click at try ' + tries);
      } else if (tries > 600) res('no hover found');
      else requestAnimationFrame(scan);
    };
    scan();
  });
});
console.log('conveyor click:', clicked);
await new Promise(r => setTimeout(r, 900));
await page.screenshot({ path: 'shots/d3-conveyor-panel.png' });
const panelOpen = await page.evaluate(() => document.getElementById('panel').classList.contains('open'));
console.log('panel open:', panelOpen);
await page.keyboard.press('Escape');
await new Promise(r => setTimeout(r, 700));

// 4. 总览区
await page.evaluate(() => document.getElementById('overview').scrollIntoView());
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: 'shots/d4-overview.png' });

// 5. 篇章区
await page.evaluate(() => document.getElementById('chapters').scrollIntoView());
await new Promise(r => setTimeout(r, 1200));
await page.screenshot({ path: 'shots/d5-chapters.png' });

console.log(errors.length ? 'ERRORS: ' + errors.join(' | ') : 'NO ERRORS');
await browser.close();
