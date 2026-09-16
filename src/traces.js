// 人的痕迹 · 遗物陈列 —— 真实物品图像，无边框，可自由拖拽
// 点击物品调出相关作品；拖拽换位置

import { B } from './base.js';

const OBJECTS = [
  {
    name: '安全帽', en: 'HELMET', img: B + 'images/objects-t/helmet.png',
    x: 12, y: 26, w: 150, ids: [77, 67, 53, 28],
    kw: /建设|工地|安全帽|脚手架|会战/,
    desc: '戴在头上的屋顶——建设者的第一道防线。',
  },
  {
    name: '扳手', en: 'WRENCH', img: B + 'images/objects-t/wrench.png',
    x: 30, y: 58, w: 130, ids: [57, 84, 65],
    kw: /检修|维修|换机|锻工|锅炉/,
    desc: '拧松紧掉的零件，也拧紧时间的缝隙。',
  },
  {
    name: '焊工面罩', en: 'MASK', img: B + 'images/objects-t/weldermask.png',
    x: 47, y: 22, w: 140, ids: [64, 11],
    kw: /电焊|弧光|炉光|钢水|火花/,
    desc: '面罩降下的瞬间，工人拥有自己的小太阳。',
  },
  {
    name: '搪瓷缸', en: 'MUG', img: B + 'images/objects-t/mug.png',
    x: 63, y: 60, w: 120, ids: [80, 95, 31],
    kw: /师徒|耐心|虚心|学先进|教|课堂/,
    desc: '车间一角的水——师徒之间传递的温度。',
  },
  {
    name: '工牌', en: 'BADGE', img: B + 'images/objects-t/badge.png',
    x: 79, y: 24, w: 125, ids: [151, 179, 180],
    kw: /工厂法|打卡|工牌|996|规训/,
    desc: '号码先于名字——人被登记为劳动力的那一刻。',
  },
  {
    name: '考勤表', en: 'TIMESHEET', img: B + 'images/objects-t/timesheet.png',
    x: 88, y: 55, w: 135, ids: [152, 61, 12],
    kw: /泰勒|计时|争分夺秒|考勤|秒表/,
    desc: '每一个动作都被计时——科学管理从一张表开始。',
  },
  {
    name: '毛巾', en: 'TOWEL', img: B + 'images/objects-t/towel.png',
    x: 20, y: 74, w: 135, ids: [52, 22, 86],
    kw: /汗水|汗|彩虹|飞花|擦洗/,
    desc: '擦去钢水的亮度，也擦去一天的重量。',
  },
  {
    name: '工装', en: 'OVERALLS', img: B + 'images/objects-t/overalls.png',
    x: 41, y: 76, w: 150, ids: [93, 76, 85],
    kw: /工人形象|工装|车间里|纺纱|上岗/,
    desc: '统一的蓝色——穿上它，你就是“咱们工人”。',
  },
  {
    name: '手套', en: 'GLOVES', img: B + 'images/objects-t/gloves.png',
    x: 58, y: 40, w: 125, ids: [91, 90, 68],
    kw: /搬运|铸造|炉间|重体力|农具/,
    desc: '手掌的铠甲——直接接触高温与重物的地方。',
  },
  {
    name: '离职纸箱', en: 'BOX', img: B + 'images/objects-t/box.png',
    x: 70, y: 78, w: 155, ids: [183, 184, 157, 158],
    kw: /裁员|关闭|停产|跑路|福报|失业/,
    desc: '一只装走全部家当的纸箱——流水线不再需要人时。',
  },
  {
    name: '手机', en: 'PHONE', img: B + 'images/objects-t/phone.png',
    x: 8, y: 52, w: 105, ids: [21, 32, 189],
    kw: /手机|网红|MCN|内容工厂|造星/,
    desc: '新流水线上的工具——人也开始在屏幕里被加工。',
  },
  {
    name: '老花镜', en: 'GLASSES', img: B + 'images/objects-t/glasses.png',
    x: 90, y: 38, w: 115, ids: [125, 170, 26, 39],
    kw: /废墟|遗产|记忆|改造|筒仓|美术馆/,
    desc: '回望厂房的眼神——废墟成为档案，档案成为纪念。',
  },
];

export function initTraces(items, pop) {
  const field = document.getElementById('traces-field');
  if (!field) return;

  const byId = new Map(items.map(it => [it.id, it]));
  const matched = OBJECTS.map(o => {
    const out = [];
    const seen = new Set();
    o.ids.forEach(id => {
      const it = byId.get(id);
      if (it && !seen.has(it.id)) { seen.add(it.id); out.push(it); }
    });
    items.forEach(it => {
      if (!seen.has(it.id) && o.kw.test(it.title)) { seen.add(it.id); out.push(it); }
    });
    return out;
  });

  OBJECTS.forEach((o, i) => {
    const el = document.createElement('div');
    el.className = 'tobj';
    el.dataset.i = i;
    el.style.left = o.x + '%';
    el.style.top = o.y + '%';
    el.style.width = o.w + 'px';
    // 视频路径由图片名推导：/images/objects-t/helmet.png → /videos/objects/helmet.mp4
    const vid = B + 'videos/objects/' + o.img.split('/').pop().replace('.png', '.mp4');
    // 立体三维物品：多层堆叠 + preserve-3d；悬停优先切换 3D 模型旋转视频
    el.innerHTML = `<div class="tobj-media">
        <div class="tobj-3d">
          <img class="t3d-layer t3d-back2" src="${o.img}" alt="" draggable="false" />
          <img class="t3d-layer t3d-back1" src="${o.img}" alt="" draggable="false" />
          <img class="t3d-face" src="${o.img}" alt="${o.name}" draggable="false" />
        </div>
        <video src="${vid}" muted loop playsinline preload="auto"></video>
      </div>
      <div class="tobj-tag"><b>${o.name}</b><span>${o.en}</span></div>`;
    field.appendChild(el);

    /* 悬停 → 3D 模型小动画（缓慢自转），移开 → 恢复静态照片 */
    const video = el.querySelector('video');
    video.addEventListener('error', () => { el.dataset.novid = '1'; }, { once: true });
    el.addEventListener('pointerenter', () => {
      if (el.dataset.novid) return; // 无视频则保留多层立体旋转
      el.classList.add('vid-on');
      video.play().catch(() => {});
    });
    el.addEventListener('pointerleave', () => {
      el.classList.remove('vid-on');
      video.pause();
      try { video.currentTime = 0; } catch (e) { /* 忽略 */ }
    });
  });

  /* ---------- 拖拽 + 点击 ---------- */
  let drag = null;
  field.addEventListener('pointerdown', e => {
    const el = e.target.closest('.tobj');
    if (!el) return;
    e.preventDefault();
    el.setPointerCapture(e.pointerId);
    drag = {
      el, i: +el.dataset.i,
      startX: e.clientX, startY: e.clientY,
      baseX: 0, baseY: 0, moved: false,
    };
    // 读取当前 translate 基准
    const m = /translate\((-?[\d.]+)px,\s*(-?[\d.]+)px\)/.exec(el.style.transform || '');
    if (m) { drag.baseX = +m[1]; drag.baseY = +m[2]; }
    el.classList.add('dragging');
  });
  field.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.startX, dy = e.clientY - drag.startY;
    if (Math.abs(dx) + Math.abs(dy) > 6) drag.moved = true;
    if (drag.moved) {
      drag.el.style.transform = `translate(${drag.baseX + dx}px, ${drag.baseY + dy}px)`;
    }
  });
  field.addEventListener('pointerup', e => {
    if (!drag) return;
    const d = drag;
    drag = null;
    d.el.classList.remove('dragging');
    if (!d.moved) {
      // 点击 → 调出相关作品
      const o = OBJECTS[d.i];
      field.querySelectorAll('.tobj').forEach(t => t.classList.toggle('on', t === d.el));
      pop.open({
        num: String(d.i + 1).padStart(2, '0'),
        title: `人的痕迹 · ${o.name}`,
        sub: `${o.en} · ${matched[d.i].length} 条相关档案`,
        desc: o.desc, items: matched[d.i],
      });
    }
  });
  field.addEventListener('pointercancel', () => {
    if (drag) { drag.el.classList.remove('dragging'); drag = null; }
  });
}
