// 纸上工厂 · 平面图纸 —— CAD 风格车间平面图
// 双线图墙 + 柱网 + 红色尺寸链 + 轴线圈 + 门窗开启线 + 设备布置 + 物流箭头
// 点击标注，调出相关作品

import { B } from './base.js';

const ZONES = [
  { num: 'A1', key: 'gate', name: '大门 · 门房', en: 'GATEHOUSE', cx: 210, cy: 610,
    desc: '每天进出厂房的关卡——打卡、点名、搜身，工厂权力的第一道闸门。',
    ids: [151, 179, 183, 146], kw: /工厂法|打卡|门房|进出|包身工|铁丝网/ },
  { num: 'B1', key: 'rolling', name: '轧钢车间', en: 'STEEL ROLLING MILL', cx: 840, cy: 300,
    desc: '火光与轧辊之间——钢铁与乳液在这里被压成形状，车间是工厂的心脏。',
    ids: [51, 12, 58, 72, 99, 2], kw: /轧钢|轧铁|轧|炼钢车间|车间/ },
  { num: 'B2', key: 'textile', name: '纺织车间', en: 'WEAVING SHED', cx: 430, cy: 160,
    desc: '织机围出牢笼般的工位——织物越鲜亮，围困越明显。',
    ids: [85, 89, 13, 36], kw: /纺织|织工|纱厂|纱|织机/ },
  { num: 'C1', key: 'warehouse', name: '原料检收室', en: 'RAW MATERIAL INTAKE', cx: 640, cy: 140,
    desc: '原料第一道关——检收、过磅、登记，生产从验收开始。',
    ids: [41, 108, 193, 134], kw: /仓库|仓储|库房|罐头|堆积|原料/ },
  { num: 'C2', key: 'boiler', name: '锅炉房 · 烟囱', en: 'BOILER HOUSE', cx: 1170, cy: 320,
    desc: '厂房的心脏与肺——蒸汽从这里送往每一台机器。',
    ids: [83, 66, 4, 17, 15], kw: /锅炉|熔炉|烟囱|发电厂|锻铁|熔化/ },
  { num: 'D1', key: 'office', name: '办公楼', en: 'OFFICE BLOCK', cx: 190, cy: 140,
    desc: '表格、批文与盖章——比车间更慢的那台机器，叫“程序”。',
    ids: [107, 193, 129, 108], kw: /城堡|官僚|程序|办公室|文员/ },
  { num: 'D2', key: 'archive', name: '图纸档案室', en: 'DRAFTING ROOM', cx: 190, cy: 250,
    desc: '画图纸与写档案的房间——纸上的工厂先于真实的工厂存在。',
    ids: [109, 137, 140, 8, 10], kw: /印刷|1984|白噪音|图纸|档案|数据|监控/ },
  { num: 'E1', key: 'canteen', name: '食堂', en: 'CANTEEN', cx: 430, cy: 640,
    desc: '轮班吃饭的半小时——胃也是流水线的一环。',
    ids: [110, 130, 31, 106], kw: /屠场|酒馆|食堂|厨房|巧克力/ },
  { num: 'E2', key: 'dorm', name: '宿舍区', en: 'DORMITORY', cx: 190, cy: 610,
    desc: '鸽子笼般的工房——休息只是下一次上班的预备。',
    ids: [146, 132, 120, 115], kw: /包身工|女工|宿舍|鸽子笼|工房|生死场/ },
];

/* ---------- 图纸线色 ---------- */
const L = '#c9c9c2';   // 主线
const L2 = '#6d6d66';  // 次要线
const RED = '#b5432e'; // 尺寸/柱
const GREEN = '#4a9e5c'; // 物流箭头
const PURPLE = '#9e4a8e'; // 管线

function wall(x1, y1, x2, y2, t = 5) {
  // 双线图墙：沿墙方向偏移 ±t
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const nx = -dy / len * t, ny = dx / len * t;
  return `<path class="bp-w" d="M${x1 + nx} ${y1 + ny} L${x2 + nx} ${y2 + ny} M${x1 - nx} ${y1 - ny} L${x2 - nx} ${y2 - ny}"/>`;
}

function door(x, y, w, dir, label) {
  // dir: 'E'|'S' 门垛朝向（开启弧 90°）
  const arc = dir === 'E'
    ? `M${x} ${y} A${w} ${w} 0 0 1 ${x + w} ${y - w}`
    : `M${x} ${y} A${w} ${w} 0 0 1 ${x - w} ${y + w}`;
  const leaf = dir === 'E' ? `M${x} ${y} L${x + w} ${y - w}` : `M${x} ${y} L${x - w} ${y + w}`;
  return `<g class="bp-door">
    <path d="${arc}"/><path d="${leaf}"/>
    <text x="${dir === 'E' ? x + w + 4 : x - w - 4}" y="${dir === 'E' ? y - w - 2 : y + w + 10}" text-anchor="middle">${label}</text>
  </g>`;
}

function dim(x1, y1, x2, y2, text, off = 0, horiz = true) {
  const tx = horiz ? (x1 + x2) / 2 : x1 + off;
  const ty = horiz ? y1 + off : (y1 + y2) / 2;
  const tick = horiz
    ? `M${x1} ${y1 + off - 5} l0 10 M${x2} ${y1 + off - 5} l0 10`
    : `M${x1 + off - 5} ${y1} l10 0 M${x1 + off - 5} ${y2} l10 0`;
  return `<g class="bp-dim">
    <path d="M${x1} ${y1 + off} L${x2} ${y2 + off} ${tick}"/>
    <text x="${tx}" y="${ty - 5}" text-anchor="middle">${text}</text>
  </g>`;
}

function vlabel(x, y, chars, cls = 'bp-rname') {
  // 竖排房间名：逐字堆叠
  const tspans = [...chars].map((ch, i) => `<tspan x="${x}" y="${y + i * 15}">${ch}</tspan>`).join('');
  return `<text class="${cls}">${tspans}</text>`;
}

function column(x, y) {
  return `<rect class="bp-col" x="${x - 5}" y="${y - 5}" width="10" height="10"/>`;
}

function tank(x, y, r, label) {
  return `<g class="bp-eq">
    <circle cx="${x}" cy="${y}" r="${r}"/>
    <path d="M${x - r / 2} ${y} h${r} M${x} ${y - r / 2} v${r}"/>
    <text x="${x}" y="${y + r + 13}" text-anchor="middle">${label}</text>
  </g>`;
}

function machine(x, y, w, h, label) {
  return `<g class="bp-eq">
    <rect x="${x}" y="${y}" width="${w}" height="${h}"/>
    <path d="M${x + 4} ${y + 4} h${w - 8} v${h - 8} h${-(w - 8)} Z"/>
    <text x="${x + w / 2}" y="${y + h + 13}" text-anchor="middle">${label}</text>
  </g>`;
}

function arrow(x1, y1, x2, y2, color) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const bx = x2 - 9 * Math.cos(a - 0.42), by = y2 - 9 * Math.sin(a - 0.42);
  const cx = x2 - 9 * Math.cos(a + 0.42), cy = y2 - 9 * Math.sin(a + 0.42);
  return `<path class="bp-arrow" style="stroke:${color}" d="M${x1} ${y1} L${x2} ${y2} M${bx} ${by} L${x2} ${y2} L${cx} ${cy}"/>`;
}

function buildSVG() {
  const GX = [80, 300, 560, 720, 880, 1120]; // 竖向轴线 x
  const GY = [80, 190, 300, 430, 560, 700]; // 横向轴线 y
  let s = '';

  /* 轴线圈 + 轴网 */
  GX.forEach((x, i) => {
    s += `<line class="bp-axis" x1="${x}" y1="30" x2="${x}" y2="750"/>
      <g class="bp-bubble"><circle cx="${x}" cy="46" r="13"/><text x="${x}" y="50" text-anchor="middle">${i + 1}</text></g>`;
  });
  GY.forEach((y, i) => {
    s += `<line class="bp-axis" x1="40" y1="${y}" x2="1250" y2="${y}"/>
      <g class="bp-bubble"><circle cx="58" cy="${y}" r="13"/><text x="58" y="${y + 4}" text-anchor="middle">${'ABCDE'[i]}</text></g>`;
  });

  /* 尺寸链（红色，顶部 + 左侧） */
  for (let i = 0; i < GX.length - 1; i++) {
    s += dim(GX[i], 0, GX[i + 1], 0, '19000', 66 + (i % 2) * 0);
  }
  s += dim(GX[0], 0, GX[GX.length - 1], 0, '95000', 20);
  for (let i = 0; i < GY.length - 1; i++) {
    s += dim(0, GY[i], 0, GY[i + 1], ['11000', '11000', '13000', '13000', '14000'][i], -34, false);
  }

  /* 外墙（沿轴网，含大门开口在 1-2 轴之间下端） */
  s += wall(80, 80, 1120, 80);
  s += wall(80, 80, 80, 700);
  s += wall(1120, 80, 1120, 700);
  s += wall(80, 700, 150, 700);   // 大门左
  s += wall(240, 700, 1120, 700); // 大门右

  /* 内隔墙 */
  s += wall(300, 80, 300, 300);   // 左区与中区（上段）
  s += wall(300, 560, 300, 700);  // （下段，留门厅通道）
  s += wall(560, 80, 560, 560);
  s += wall(880, 80, 880, 190);   // 收乳/配料
  s += wall(300, 190, 560, 190);  // 更衣间上下
  s += wall(300, 300, 560, 300);
  s += wall(300, 560, 560, 560);
  s += wall(560, 190, 1120, 190); // 生产区顶
  s += wall(560, 430, 1120, 430); // 生产/灌装包装
  s += wall(880, 430, 880, 560);  // 灌装/包装
  s += wall(560, 560, 1120, 560); // 仓库顶
  s += wall(190, 80, 190, 300);   // 办公/会议
  s += wall(80, 520, 300, 520);   // 门厅下

  /* 柱网（轴交点） */
  GX.forEach(x => GY.forEach(y => { if (!(x === 80 && y === 700) ) s += column(x, y); }));

  /* 门（开启弧） */
  s += door(150, 700, 45, 'E', 'M-1');   // 大门
  s += door(300, 330, 40, 'E', 'M-2');   // 门厅→风淋
  s += door(300, 140, 38, 'E', 'M-2');   // 办公→更衣
  s += door(560, 140, 38, 'E', 'M-2');   // 检收→配料走廊
  s += door(560, 360, 40, 'E', 'M-3');   // 生产区通道
  s += door(720, 430, 38, 'S', 'M-2');   // 生产→灌装
  s += door(990, 430, 38, 'S', 'M-2');   // 生产→包装
  s += door(840, 560, 38, 'S', 'M-3');   // 灌装→仓库

  /* 房间名（竖排）—— 取自档案作品中的工厂空间 */
  s += vlabel(140, 112, '厂部办公室');
  s += vlabel(245, 220, '生产调度室');
  s += vlabel(140, 380, '门厅 · 光荣榜');
  s += vlabel(140, 580, '宿舍');
  s += vlabel(245, 580, '门房 · 打卡');
  s += vlabel(345, 110, '女工更衣间');
  s += vlabel(345, 215, '男工更衣间');
  s += vlabel(345, 320, '女工盥洗室');
  s += vlabel(345, 430, '男工盥洗室');
  s += vlabel(500, 110, '澡堂');
  s += vlabel(500, 320, '医务室');
  s += vlabel(500, 580, '托儿所');
  s += vlabel(430, 120, '纺织车间');
  s += vlabel(620, 112, '原料库房');
  s += vlabel(780, 120, '过磅间');
  s += vlabel(960, 112, '配料车间');
  s += `<text class="bp-rname-h" x="840" y="215" text-anchor="middle">轧 钢 车 间</text>`;
  s += `<text class="bp-rname-h" x="700" y="470" text-anchor="middle">精 整 车 间</text>`;
  s += `<text class="bp-rname-h" x="990" y="470" text-anchor="middle">包 装 车 间</text>`;
  s += `<text class="bp-rname-h" x="840" y="640" text-anchor="middle">成 品 仓 库</text>`;

  /* 主生产设备 */
  s += tank(660, 280, 30, 'L-1 均热炉');
  s += tank(790, 280, 30, 'L-2 均热炉');
  s += tank(920, 280, 30, 'L-3 均热炉');
  s += tank(660, 370, 26, 'L-4 轧机机架');
  s += tank(790, 370, 26, 'L-5 轧机机架');
  s += machine(960, 250, 110, 55, '万能轧钢机组');
  s += machine(960, 335, 110, 45, '冷却泵站');
  /* 精整 / 包装设备 */
  s += machine(620, 490, 70, 40, '剪切机 A');
  s += machine(710, 490, 70, 40, '剪切机 B');
  s += machine(930, 490, 90, 40, '捆扎机');
  s += machine(1040, 490, 60, 40, '地磅');
  /* 仓库货架 */
  [[620, 600], [760, 600], [900, 600], [1040, 600]].forEach(([x, y]) => {
    s += `<g class="bp-rack"><rect x="${x}" y="${y}" width="90" height="26"/><path d="M${x} ${y + 9} h90 M${x} ${y + 18} h90"/></g>`;
  });

  /* 物流箭头（绿色） */
  s += arrow(700, 190, 700, 240, GREEN);
  s += arrow(700, 240, 660, 246, GREEN);
  s += arrow(920, 190, 920, 240, GREEN);
  s += arrow(1015, 250, 1015, 190, GREEN);
  s += arrow(760, 400, 740, 430, GREEN);
  s += arrow(940, 400, 960, 430, GREEN);
  s += arrow(700, 532, 700, 565, GREEN);
  s += arrow(990, 532, 990, 565, GREEN);
  s += arrow(260, 330, 296, 330, GREEN);
  s += arrow(840, 30, 840, 74, GREEN); // 原料入口
  s += `<text class="bp-flow" x="856" y="24">原料入口</text>`;

  /* 管线（紫色虚线）：锅炉房 → 生产区 */
  s += `<path class="bp-pipe" d="M1150 380 H1128 M1128 380 V250 H1015" />`;
  s += `<path class="bp-pipe" d="M1128 380 V520 H990"/>`;

  /* 锅炉房附房 */
  s += wall(1120, 260, 1220, 260);
  s += wall(1220, 260, 1220, 380);
  s += wall(1120, 380, 1220, 380);
  s += vlabel(1160, 290, '锅炉房');
  s += `<g class="bp-eq"><circle cx="1170" cy="345" r="16"/><path d="M1170 329 v-14 M1163 322 h14"/></g>`;

  /* 大门图例 */
  s += `<g class="bp-gate2"><path d="M150 700 v-26 M240 700 v-26 M150 682 h90"/></g>`;

  /* 指北针 */
  s += `<g class="bp-north"><circle cx="1190" cy="640" r="20"/><path d="M1190 622 L1196 646 L1190 640 L1184 646 Z"/><text x="1190" y="682" text-anchor="middle">N</text></g>`;

  /* 标注（可点击） */
  ZONES.forEach((z, i) => {
    s += `<g class="bp-marker" data-i="${i}">
      <circle cx="${z.cx}" cy="${z.cy}" r="17"/>
      <text x="${z.cx}" y="${z.cy + 4}" text-anchor="middle">${z.num}</text>
    </g>`;
  });

  /* 图框 + 标题栏 */
  s += `<rect class="bp-border" x="20" y="16" width="1260" height="788"/>
    <rect class="bp-border2" x="28" y="24" width="1244" height="772"/>
    <g class="bp-titleblock">
      <rect x="1000" y="716" width="264" height="72"/>
      <path d="M1000 740 h264 M1088 716 v72 M1176 716 v72 M1000 716 v72 h264 v-72"/>
      <text class="tb1" x="1010" y="734">FACTORY GENERAL PLAN</text>
      <text class="tb2" x="1010" y="762">工厂总平面布置图</text>
      <text class="tb3" x="1096" y="734">图号 F-2026</text>
      <text class="tb3" x="1096" y="762">比例 1:300</text>
      <text class="tb3" x="1184" y="734">2026-09</text>
      <text class="tb3" x="1184" y="762">共 1 张</text>
    </g>`;

  return `<svg id="bp-svg" viewBox="0 0 1300 820" xmlns="http://www.w3.org/2000/svg" aria-label="工厂车间平面图纸">
    <rect x="0" y="0" width="1300" height="820" fill="#0c0c0e"/>
    ${s}
  </svg>`;
}

export function initBlueprint(items, pop) {
  const sheet = document.getElementById('bp-sheet');
  if (!sheet) return;

  sheet.innerHTML = buildSVG();

  const byId = new Map(items.map(it => [it.id, it]));
  const matched = ZONES.map(z => {
    const out = [];
    const seen = new Set();
    z.ids.forEach(id => {
      const it = byId.get(id);
      if (it && !seen.has(it.id)) { seen.add(it.id); out.push(it); }
    });
    items.forEach(it => {
      if (!seen.has(it.id) && z.kw.test(it.title)) { seen.add(it.id); out.push(it); }
    });
    return out;
  });

  sheet.querySelectorAll('.bp-marker').forEach(g => {
    const i = +g.dataset.i;
    const z = ZONES[i];
    // 悬停：显示该空间的轴测图
    g.addEventListener('mouseenter', () => {
      const tip = document.getElementById('bp-tip');
      if (!tip) return;
      tip.innerHTML = `<img src="${B}images/zones/bp-${z.key}.png" onerror="this.closest('#bp-tip').classList.remove('show')" alt="" />
        <div class="bt-text"><b>${z.num} ${z.name}</b><span>${z.en} · 悬停查看 · 点击调出 ${matched[i].length} 条相关作品</span></div>`;
      tip.classList.add('show');
    });
    g.addEventListener('mousemove', e => {
      const tip = document.getElementById('bp-tip');
      if (!tip) return;
      tip.style.left = Math.min(e.clientX + 22, window.innerWidth - 330) + 'px';
      tip.style.top = Math.min(Math.max(e.clientY - 60, 76), window.innerHeight - 220) + 'px';
    });
    g.addEventListener('mouseleave', () => {
      document.getElementById('bp-tip')?.classList.remove('show');
    });
    g.addEventListener('click', e => {
      e.stopPropagation();
      sheet.querySelectorAll('.bp-marker').forEach(m => m.classList.toggle('on', m === g));
      pop.open({
        num: z.num, title: `纸上工厂 · ${z.name}`,
        sub: `${z.en} · ${matched[i].length} 条相关档案`,
        desc: z.desc, items: matched[i],
      });
    });
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); e.stopPropagation();
        g.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    });
  });
}
