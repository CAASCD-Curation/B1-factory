// 入口：视图路由（无滚动翻页）+ 各模块初始化
import { initLetters } from './letters.js';
import { initScene } from './scene.js';
import { initPanel, initWorksPop } from './panel.js';
import { initBones } from './bones.js';
import { initParts } from './parts.js';
import { initBlueprint } from './blueprint.js';
import { initTraces } from './traces.js';
import { initWorld } from './mapview.js';
import './style.css';

const VIEW_ORDER = ['hero', 'overview', 'bones', 'parts', 'blueprint', 'traces', 'world'];

let pop = null;

function showView(name) {
  VIEW_ORDER.forEach(v => {
    document.getElementById(v).classList.toggle('active', v === name);
  });
  document.querySelectorAll('#topnav [data-view]').forEach(b => {
    b.classList.toggle('active', b.dataset.view === name);
  });
  if (pop) pop.close();
}

/* 点击空白处的行为：
   hero → 总览；overview → 建筑骨骼；
   四个分类页 → 先关作品弹层，没有弹层则返回总览 */
function bindBlankNav() {
  const NEXT = { hero: 'overview', overview: 'bones' };
  const CAT_VIEWS = ['bones', 'parts', 'blueprint', 'traces', 'world'];
  // 交互元素：命中则不算“空白”（画布未命中内容时会自行冒泡，故不在此列）
  const INTERACTIVE = 'button, a, input, .mode-btn, #panel, #panel-mask, #works-pop, #factory-title, #bones-list, #bones-tip, #bones-gfa, .bone-layer, .bone-label, .bp-marker, .tcard, .tobj, .tobj-3d, .wc.has, #world-plan';

  VIEW_ORDER.forEach(v => {
    const el = document.getElementById(v);
    el.addEventListener('click', e => {
      if (e.target.closest(INTERACTIVE)) return;
      const panel = document.getElementById('panel');
      if (panel.classList.contains('open')) { panel.classList.remove('open'); document.getElementById('panel-mask').classList.remove('show'); return; }
      if (pop && pop.isOpen()) { pop.close(); return; }
      if (NEXT[v]) showView(NEXT[v]);
      else if (CAT_VIEWS.includes(v)) showView('overview');
    });
  });

  // 键盘：ESC 先关详情/弹层，再回总览
  window.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.getElementById('panel').classList.contains('open')) {
      document.getElementById('panel-close').click();
      return;
    }
    if (pop && pop.isOpen()) { pop.close(); return; }
    showView('overview');
  });
}

async function boot() {
  initLetters();

  const res = await fetch('/data/items.json');
  const items = await res.json();
  window.__items = items; // 调试验证用

  const panel = initPanel();
  pop = initWorksPop(panel);
  panel.onClose = () => panel.close();

  // 等 Outfit 字体就绪再生成卡片贴图，保证 Canvas 内字体一致
  try {
    await Promise.race([
      Promise.all([
        document.fonts.load('900 24px Outfit'),
        document.fonts.load('600 14px Outfit'),
        document.fonts.ready,
      ]),
      new Promise(r => setTimeout(r, 3000)),
    ]);
  } catch (e) { /* 字体加载失败则回退系统字体 */ }

  initScene(items, panel);
  initBones(items, pop);
  initParts(items, pop);
  initBlueprint(items, pop);
  initTraces(items, pop);
  initWorld(items, pop, panel);
  bindBlankNav();

  // 顶部导航
  document.querySelectorAll('#topnav [data-view]').forEach(btn => {
    btn.addEventListener('click', () => showView(btn.dataset.view));
  });
  showView('hero');
}

boot().catch(err => {
  console.error('BOOT FAILED', err);
  document.body.innerHTML = `<pre style="color:#c2543a;padding:40px">加载失败：${err.message}</pre>`;
});
