// 地球版图 · 工厂事件世界地图
// 鼠标悬停某国 → 显示该国相关作品预览；点击 → 调出全部相关作品
// 相关作品越多，国家颜色越深
import { MAP_COUNTRIES } from './map-data.js';
import { B } from './base.js';

/* ---------- 国家 → 关键词（城市名优先于国名） ---------- */
const COUNTRY_KWS = [
  { cn: '中国', kws: ['上海', '北京', '武汉', '天津', '广州', '沈阳', '深圳', '南京', '郑州', '鞍山', '包头', '东莞', '济南', '中山', '大连', '重庆', '西安', '青岛', '苏州', '无锡', '杭州', '宁波', '厦门', '佛山', '唐山', '太原', '兰州', '成都', '哈尔滨', '长春', '香港', '台湾', '台北', '高雄', '澳门', '中国'] },
  { cn: '美国', kws: ['纽约', '曼哈顿', '芝加哥', '克利夫兰', '底特律', '匹兹堡', '硅谷', '洛杉矶', '旧金山', '西雅图', '波士顿', '费城', '亚特兰大', '休斯顿', '新奥尔良', '新泽西', '美国'] },
  { cn: '德国', kws: ['柏林', '德累斯顿', '法兰克福', '莱比锡', '慕尼黑', '汉堡', '科隆', '鲁尔', '埃森', '多特蒙德', '斯图加特', '德国'] },
  { cn: '法国', kws: ['巴黎', '里昂', '马赛', '法国'] },
  { cn: '英国', kws: ['伦敦', '曼彻斯特', '利物浦', '伯明翰', '谢菲尔德', '利兹', '格拉斯哥', '爱丁堡', '英国', '英格兰'] },
  { cn: '意大利', kws: ['米兰', '都灵', '罗马', '意大利'] },
  { cn: '苏联 / 俄罗斯', kws: ['苏联', '莫斯科', '圣彼得堡', '俄罗斯', '西伯利亚'] },
  { cn: '日本', kws: ['东京', '大阪', '京都', '名古屋', '横滨', '日本'] },
  { cn: '荷兰', kws: ['鹿特丹', '阿姆斯特丹', '荷兰'] },
  { cn: '西班牙', kws: ['马德里', '巴塞罗那', '毕尔巴鄂', '西班牙'] },
  { cn: '墨西哥', kws: ['墨西哥'] },
  { cn: '韩国', kws: ['首尔', '釜山', '韩国'] },
  { cn: '朝鲜', kws: ['平壤', '朝鲜'] },
  { cn: '印度', kws: ['德里', '孟买', '加尔各答', '班加罗尔', '印度'] },
  { cn: '斯洛伐克', kws: ['斯洛伐克', '布拉迪斯拉发'] },
  { cn: '捷克', kws: ['布拉格', '捷克', '斯柯达', '波希米亚'] },
  { cn: '波兰', kws: ['华沙', '罗兹', '克拉科夫', '波兰', '西里西亚'] },
  { cn: '巴西', kws: ['圣保罗', '里约', '巴西'] },
  { cn: '加拿大', kws: ['多伦多', '蒙特利尔', '温哥华', '加拿大'] },
  { cn: '澳大利亚', kws: ['悉尼', '墨尔本', '澳大利亚'] },
  { cn: '土耳其', kws: ['伊斯坦布尔', '土耳其'] },
  { cn: '埃及', kws: ['开罗', '埃及'] },
  { cn: '南非', kws: ['约翰内斯堡', '开普敦', '南非'] },
  { cn: '瑞典', kws: ['哥德堡', '马尔默', '斯德哥尔摩', '瑞典'] },
  { cn: '比利时', kws: ['布鲁塞尔', '比利时'] },
  { cn: '奥地利', kws: ['维也纳', '奥地利'] },
  { cn: '瑞士', kws: ['日内瓦', '苏黎世', '瑞士'] },
  { cn: '越南', kws: ['河内', '胡志明', '越南'] },
  { cn: '泰国', kws: ['曼谷', '泰国'] },
  { cn: '新加坡', kws: ['新加坡'] },
  { cn: '印尼', kws: ['雅加达', '印尼'] },
  { cn: '马来西亚', kws: ['吉隆坡', '马来西亚'] },
];

/* ---------- 国家 → 行政规划图 ---------- */
const PLANS = {
  '中国': 'plan-china', '美国': 'plan-usa', '德国': 'plan-germany', '法国': 'plan-france',
  '英国': 'plan-uk', '意大利': 'plan-italy', '苏联 / 俄罗斯': 'plan-russia', '日本': 'plan-japan',
  '荷兰': 'plan-netherlands', '西班牙': 'plan-spain', '墨西哥': 'plan-mexico', '韩国': 'plan-korea',
  '印度': 'plan-india', '斯洛伐克': 'plan-slovakia', '朝鲜': 'plan-nk',
};

/* ---------- 颜色：越深 = 相关作品越多 ---------- */
function depthColor(n, max) {
  if (n <= 0) return '#232329';
  const t = Math.min(1, n / Math.max(1, max));
  // #2a2a31 → #7a2a1e → #d43a2a
  const stops = [[42, 42, 49], [122, 42, 30], [212, 58, 42]];
  const seg = t < 0.55 ? 0 : 1;
  const lt = t < 0.55 ? t / 0.55 : (t - 0.55) / 0.45;
  const a = stops[seg], b = stops[seg + 1];
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * lt));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}

export function initWorld(items, pop, panel) {
  const view = document.getElementById('world');
  const stage = document.getElementById('world-map');
  const tip = document.getElementById('world-tip');
  if (!view || !stage) return;

  /* ---------- 匹配每个国家的相关作品 ---------- */
  const countryData = COUNTRY_KWS.map(c => {
    const out = [];
    const seen = new Set();
    items.forEach(it => {
      const text = `${it.title || ''} ${it.content || ''} ${it.note || ''} ${it.excerpt || ''}`;
      if (!seen.has(it.id) && c.kws.some(k => text.includes(k))) {
        seen.add(it.id);
        out.push(it);
      }
    });
    return { ...c, items: out };
  });
  const matched = new Map(countryData.map(c => [c.cn, c]));
  const byId = new Map(items.map(it => [it.id, it]));
  const max = Math.max(...countryData.map(c => c.items.length), 1);
  const withWorks = countryData.filter(c => c.items.length > 0);

  /* ---------- 建图 ---------- */
  const paths = MAP_COUNTRIES.map(c => {
    const rec = matched.get(c.cn);
    const n = rec ? rec.items.length : 0;
    return `<path class="wc" data-name="${c.cn}" d="${c.d}" fill="${depthColor(n, max)}"
      stroke="#3a3a40" stroke-width="0.6" data-cx="${c.cx}" data-cy="${c.cy}"/>`;
  }).join('');

  stage.innerHTML = `
    <svg id="world-svg" viewBox="0 0 1000 520" xmlns="http://www.w3.org/2000/svg" aria-label="世界地图">
      <rect x="0" y="0" width="1000" height="520" fill="#0a0a0d"/>
      <g id="wzoom">
      <g stroke="#18181c" stroke-width="0.5">
        ${[0, 1, 2, 3, 4, 5, 6].map(i => `<line x1="0" y1="${i * 86.7}" x2="1000" y2="${i * 86.7}"/>`).join('')}
        ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="520"/>`).join('')}
      </g>
      ${paths}
      </g>
    </svg>
    <div class="world-legend">
      <span>相关作品密度</span>
      <i style="background:#232329"></i><i style="background:#5c3327"></i><i style="background:#96402c"></i><i style="background:#d43a2a"></i>
      <b>${withWorks.length} 个国家 / 地区 · ${withWorks.reduce((s, c) => s + c.items.length, 0)} 条档案</b>
    </div>`;

  /* ---------- 行政规划图面板 ---------- */
  const planBox = document.getElementById('world-plan');
  let pinned = null;   // 点击固定的国家
  let hoverPlan = null;

  function planHTML(name) {
    const rec = matched.get(name);
    const n = rec ? rec.items.length : 0;
    const imgKey = PLANS[name];
    const reps = rec ? rec.items.filter(it => it.img).slice(0, 3) : [];
    const titles = rec ? rec.items.slice(0, 8) : [];
    return `
      <div class="wp-head2"><b>${name}</b><span>行政规划 · ${n} 条相关档案</span></div>
      ${imgKey ? `<img class="wp-img" src="${B}images/plans/${imgKey}.png" alt="${name}行政规划图" />` : ''}
      <div class="wp-works">
        ${reps.length ? `<div class="wpw-reps">${reps.map(it => `<img src="${it.img}" data-wid="${it.id}" alt="" title="《${it.title}》" />`).join('')}</div>` : ''}
        <div class="wpw-list">${titles.map(it => `<p data-wid="${it.id}">《${it.title}》</p>`).join('')}</div>
      </div>
      <p class="wp-hint">${imgKey ? '悬停规划图查看相关作品 · ' : ''}点击作品查看介绍 · 点击版图固定 · 点击空白退出</p>`;
  }

  function showPlan(name, pin) {
    if (pin) pinned = name;
    hoverPlan = name;
    planBox.innerHTML = planHTML(name);
    planBox.classList.add('show');
    planBox.classList.toggle('pin', !!pinned);
    bindPlanHover();
    // 点击作品 → 跳出该作品介绍（详情页）
    planBox.querySelectorAll('[data-wid]').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        const it = byId.get(+el.dataset.wid);
        if (it && panel) panel.open(it);
      });
    });
  }
  function hidePlan() {
    hoverPlan = null;
    if (pinned) { showPlan(pinned, true); return; }
    planBox.classList.remove('show');
    planBox.classList.remove('pin');
    planBox.classList.remove('works-on');
  }
  // 从国家移向面板的短暂间隙内不隐藏，避免面板闪失
  let hideTimer = null;
  function hidePlanSoon() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => { if (!planBox.matches(':hover')) hidePlan(); }, 280);
  }
  planBox.addEventListener('pointerenter', () => clearTimeout(hideTimer));
  planBox.addEventListener('pointerleave', () => { if (!pinned) hidePlan(); });
  // 悬停在规划图上 → 显示该地区对应的作品（移出面板时由 pointerleave 收起）
  function bindPlanHover() {
    const img = planBox.querySelector('.wp-img');
    if (!img) {
      planBox.classList.add('works-on');
      return;
    }
    planBox.classList.remove('works-on');
    img.addEventListener('mouseenter', () => planBox.classList.add('works-on'));
  }

  /* ---------- 悬停国家 → 出现该国行政规划图 ---------- */
  let hoverName = null;
  stage.querySelectorAll('.wc').forEach(p => {
    const name = p.dataset.name;
    const rec = matched.get(name);
    if (!rec || rec.items.length === 0) return; // 无作品的国家不响应
    p.classList.add('has');

    p.addEventListener('mouseenter', () => {
      hoverName = name;
      p.classList.add('hot');
      showPlan(name, false);
      tip.innerHTML = `
        <div class="wt-head"><b>${name}</b><span>${rec.items.length} 条相关档案 · 点击查看规划图</span></div>
        <div class="wt-titles">${rec.items.slice(0, 3).map(it => `<p>《${it.title}》</p>`).join('')}</div>`;
      tip.classList.add('show');
    });
    p.addEventListener('mouseleave', () => {
      hoverName = null;
      p.classList.remove('hot');
      tip.classList.remove('show');
      hidePlanSoon();
    });
    p.addEventListener('click', e => {
      // 详情页打开时不拦截，冒泡给 bindBlankNav 先关详情
      if (document.getElementById('panel').classList.contains('open')) return;
      e.stopPropagation();
      pinned = pinned === name ? null : name; // 再次点击取消固定
      if (pinned) showPlan(name, true);
      else hidePlan();
    });
  });

  /* tooltip 定位：跟随鼠标 */
  view.addEventListener('pointermove', e => {
    if (!hoverName) return;
    tip.style.left = Math.min(e.clientX + 20, window.innerWidth - 340) + 'px';
    tip.style.top = Math.min(Math.max(e.clientY - 40, 76), window.innerHeight - 220) + 'px';
  });

  /* 点击空白：先取消固定，再（由 main.js）返回总览 */
  view.addEventListener('click', e => {
    // 作品详情页打开时，让 bindBlankNav 优先关闭详情，不再触发取消固定
    if (document.getElementById('panel').classList.contains('open')) return;
    if (e.target.closest('.wc') || e.target.closest('#world-plan')) return;
    if (pinned) { pinned = null; hidePlan(); e.stopPropagation(); }
  });

  /* ---------- 滚轮缩放（指向光标）+ 中键平移 ---------- */
  const svg = stage.querySelector('#world-svg');
  const zg = stage.querySelector('#wzoom');
  const zoom = { s: 1, tx: 0, ty: 0 };
  const Z_MIN = 1, Z_MAX = 9;
  let panDrag = null;

  function applyZoom() {
    zg.setAttribute('transform', `translate(${zoom.tx} ${zoom.ty}) scale(${zoom.s})`);
  }
  function clientToMap(e) {
    const r = svg.getBoundingClientRect();
    return {
      x: (e.clientX - r.left) / r.width * 1000,
      y: (e.clientY - r.top) / r.height * 520,
    };
  }

  svg.addEventListener('wheel', e => {
    e.preventDefault();
    e.stopPropagation();
    const f = e.deltaY < 0 ? 1.18 : 1 / 1.18;
    const ns = Math.min(Z_MAX, Math.max(Z_MIN, zoom.s * f));
    if (ns === zoom.s) return;
    const p = clientToMap(e);
    zoom.tx = p.x - (p.x - zoom.tx) * (ns / zoom.s);
    zoom.ty = p.y - (p.y - zoom.ty) * (ns / zoom.s);
    zoom.s = ns;
    applyZoom();
  }, { passive: false });

  svg.addEventListener('pointerdown', e => {
    if (e.button !== 1) return;
    e.preventDefault();
    panDrag = { x: e.clientX, y: e.clientY };
    svg.setPointerCapture(e.pointerId);
  });
  svg.addEventListener('pointermove', e => {
    if (!panDrag || !(e.buttons & 4)) return;
    const r = svg.getBoundingClientRect();
    zoom.tx += (e.clientX - panDrag.x) / r.width * 1000;
    zoom.ty += (e.clientY - panDrag.y) / r.height * 520;
    panDrag = { x: e.clientX, y: e.clientY };
    applyZoom();
  });
  svg.addEventListener('pointerup', e => { if (e.button === 1) panDrag = null; });
  svg.addEventListener('auxclick', e => { if (e.button === 1) e.preventDefault(); });
}
