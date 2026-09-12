/* ============================================================
   F96 — 工厂研究档案 · app.js（浅色版）
   多环平行 WebGL 展示页 / 图文叠层详情 / 图在前文字在后
   ============================================================ */
(function () {
  'use strict';
  const D = window.FACTORY_DATA;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const pad2 = n => String(n).padStart(2, '0');
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const CATS = [
    { key: 'form', cn: '形式灵感', en: 'Form & Inspiration' },
    { key: 'art',  cn: '艺术档案', en: 'Art Archive' },
    { key: 'lit',  cn: '文学意象', en: 'Literary Imagery' },
    { key: 'soc',  cn: '社会素材', en: 'Social Archive' },
  ];
  const RINGS = 8, PER = 10; /* 首屏圆环：8 环 × 10 张 = 80 */

  /* ---------- 字符双行滚动（40ms 错峰） ---------- */
  function rollify(el) {
    const text = el.textContent.trim();
    el.textContent = '';
    [...text].forEach((ch, i) => {
      const s = document.createElement('span');
      s.className = 'roll-char';
      s.style.setProperty('--i', i);
      const a = document.createElement('i');
      a.textContent = ch === ' ' ? ' ' : ch;
      a.dataset.c = ch === ' ' ? ' ' : ch;
      s.appendChild(a); el.appendChild(s);
    });
  }
  $$('[data-roll]').forEach(a => rollify($('.nav__link-text', a)));
  $$('[data-roll-menu]').forEach((el, i) => { el.style.setProperty('--i', i); rollify(el); });

  /* ============================================================
     Preloader
     ============================================================ */
  const boot = $('.boot-loader'), counter = $('#bootCounter');
  const heroLines = $$('[data-hero-line]');
  heroLines.forEach(line => {
    const inner = document.createElement('span');
    inner.textContent = line.textContent;
    line.textContent = '';
    line.appendChild(inner);
  });
  const fixedBar = buildFixedBar();

  const bootPool = [];
  CATS.forEach(c => D[c.key].forEach(it => { if (it.img) bootPool.push(it); }));
  const bootCard = document.createElement('div');
  bootCard.className = 'boot-card';
  bootCard.innerHTML = `<img src="assets/img/${(bootPool[0] || {}).img || ''}" alt="">`;
  boot.appendChild(bootCard);

  /* 快速划过的图片流：速度从快到慢（起步 ~26ms/张，逐渐放缓） */
  const bootImg = bootCard.querySelector('img');
  let bootImgIdx = 0, bootCycle = null, bootDelay = 26;
  if (!REDUCED && bootPool.length > 1) {
    const bootTickImg = () => {
      bootImgIdx = (bootImgIdx + 1) % bootPool.length;
      const im = new Image();
      im.src = `assets/img/${bootPool[bootImgIdx].img}`;
      im.onload = () => {
        if (bootImg.isConnected) bootImg.src = im.src;
        (window.__bootTimes = window.__bootTimes || []).push(performance.now());
      };
      bootDelay = Math.min(260, bootDelay * 1.085);
      bootCycle = setTimeout(bootTickImg, bootDelay);
    };
    bootCycle = setTimeout(bootTickImg, bootDelay);
  }

  function finishBoot() {
    clearTimeout(bootCycle);
    if (REDUCED) {
      boot.remove();
      fixedBar.classList.add('is-in');
      return;
    }
    setTimeout(() => {
      boot.classList.add('is-leaving');
      heroLines.forEach((l, i) => {
        const inner = l.firstElementChild;
        inner.style.transition = `transform 1.1s var(--ease) ${.1 + i * .12}s`;
        inner.style.transform = 'translateY(0)';
      });
      fixedBar.classList.add('is-in');
      boot.classList.add('is-done');
      setTimeout(() => boot.remove(), 1000);
    }, 350);
  }
  if (REDUCED) { counter.textContent = '[100]'; finishBoot(); }
  else {
    let progress = 0;
    const bootTick = () => {
      progress = Math.min(100, progress + Math.random() * .9 + .35);
      counter.textContent = `[${Math.floor(progress)}]`;
      if (progress < 100) return requestAnimationFrame(bootTick);
      counter.textContent = '[100]';
      finishBoot();
    };
    requestAnimationFrame(bootTick);
  }

  function buildFixedBar() {
    const bar = document.createElement('div');
    bar.className = 'fixed-bar';
    const cols = ['BRAND & DIGITAL DESIGN STUDIO', '', '© 2026'];
    cols.forEach((t, i) => {
      const c = document.createElement('div');
      c.className = 'fixed-bar__col';
      c.innerHTML = `<span class="rise" style="--i:${i}"><i>${t || '…'}</i></span>`;
      bar.appendChild(c);
    });
    document.body.appendChild(bar);
    queueMicrotask(() => requestAnimationFrame(() => {
      const total = CATS.reduce((n, c) => n + D[c.key].length, 0);
      const imgs = CATS.reduce((n, c) => n + D[c.key].filter(it => it.img).length, 0);
      bar.children[1].querySelector('i').textContent = `${Math.min(RINGS * PER, imgs)} / ${total} selected Works`;
    }));
    window.addEventListener('scroll', () => {
      const heroH = $('#hero').offsetHeight || window.innerHeight;
      bar.classList.toggle('is-off', window.scrollY > heroH * .92);
    }, { passive: true });
    return bar;
  }

  /* ============================================================
     Custom cursor
     ============================================================ */
  const cursor = $('#cursor'), label = $('#cursorLabel');
  let cx = -100, cy = -100, rx = -100, ry = -100;
  window.addEventListener('pointermove', e => { cx = e.clientX; cy = e.clientY; });
  (function cursorLoop() {
    rx += (cx - rx) * .18; ry += (cy - ry) * .18;
    $('.cursor__dot').style.left = cx + 'px'; $('.cursor__dot').style.top = cy + 'px';
    const ring = $('.cursor__ring');
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(cursorLoop);
  })();
  document.addEventListener('pointerover', e => {
    const t = e.target.closest('[data-cursor], a, button, .work-row, .entry__fig, .entry');
    cursor.classList.remove('is-hover', 'is-label');
    label.textContent = '';
    if (!t) return;
    const mode = t.closest('[data-cursor]')?.dataset.cursor;
    if (mode === 'drag') { cursor.classList.add('is-label'); label.textContent = 'DRAG'; }
    else cursor.classList.add('is-hover');
  });
  document.addEventListener('pointerdown', () => cursor.classList.add('is-down'));
  document.addEventListener('pointerup', () => cursor.classList.remove('is-down'));

  /* ============================================================
     详情页：文字铺底，图片压前（文字藏到图片后面）
     ============================================================ */
  const detail = $('#detail');
  function bodyText(it) {
    const t = it.quote || it.note || it.desc || it.analysis;
    if (t) return t;
    /* 兜底：素材 raw 全文，去掉与标题重复的前缀 */
    if (it.raw) {
      const stripped = it.raw.split(it.title).join('').trim();
      return stripped || it.raw;
    }
    return '';
  }
  function openDetail(it) {
    $('#detailTitle').textContent = it.title;
    $('#detailDesc').textContent = bodyText(it);
    const img = $('#detailImg');
    if (it.img) { img.src = `assets/img/${it.img}`; img.style.display = ''; }
    else img.style.display = 'none';
    detail.classList.toggle('detail--noimg', !it.img);
    const meta = [
      it.cat ? it.cat.cn : '',
      it.year || '', it.source || '',
      (it.tags || []).join(' · '),
    ].filter(Boolean).join('　/　');
    $('#detailMeta').textContent = meta;
    detail.classList.add('is-open');
    detail.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeDetail() {
    detail.classList.remove('is-open');
    detail.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  $('#detailClose').addEventListener('click', closeDetail);
  detail.addEventListener('click', e => {
    if (!e.target.closest('.detail__figure') && !e.target.closest('.detail__close')) closeDetail();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && detail.classList.contains('is-open')) closeDetail();
  });

  /* ============================================================
     Hero —— 多个上下平行的 3D 圆环（WebGL / CSS 回退）
     ============================================================ */
  const stage = $('#heroStage');
  const heroPool = [];
  CATS.forEach(c => D[c.key].forEach((it, idx) => { if (it.img) heroPool.push({ ...it, cat: c, catIdx: idx }); }));
  const HERO_N = Math.min(RINGS * PER, heroPool.length);
  const heroItems = [];
  for (let i = 0; i < HERO_N; i++) heroItems.push(heroPool[Math.floor(i * heroPool.length / HERO_N)]);
  const ringOf = i => Math.floor(i / PER);
  const idxInRing = i => i % PER;

  /* 共享状态：水平 rot + 垂直 voff 双轴惯性 */
  let rot = 0, vel = REDUCED ? 0 : .09, dragging = false, lastX = 0, lastY = 0, moved = 0, tweenTo = null;
  let voff = 0, vvel = 0;
  let backend = null;
  /* 每环转速倍率（相邻环反向，形成平行对转） */
  const SPEEDS = [1.5, -1.05, 1.25, -.9, 1.15, -1.3, 1.0, -1.2];
  /* 平滑正弦上下浮动（无跳变、不断续） */
  const BOB_AMP = .3, BOB_SPEED = .45;
  const bobOf = (r, j) => Math.sin(performance.now() / 1000 * BOB_SPEED + j * 1.31 + r * 2.1) * BOB_AMP;
  const VOFF_MAX = 1.6;
  /* 爆炸展开：确定性随机散落起点 */
  const frand = i => { const x = Math.sin(i * 12.9898) * 43758.5453; return x - Math.floor(x); };
  const scatter = i => ({
    x: frand(i) * 20 - 10,
    y: frand(i + 57) * 12 - 6,
    z: frand(i + 113) * 9 - 7,
  });

  const labelTitle = $('#labelTitle'), labelIndex = $('#labelIndex');
  const plabel = $('#projectLabel');
  const arrow = document.createElement('span');
  arrow.className = 'project-label__arrow';
  arrow.textContent = '↗';
  plabel.insertBefore(arrow, plabel.firstChild);
  plabel.classList.add('is-idle');

  /* 共享拖拽：水平转环 + 垂直滑图 */
  stage.addEventListener('pointerdown', e => {
    dragging = true; lastX = e.clientX; lastY = e.clientY; moved = 0; tweenTo = null; vel = 0; vvel = 0;
    stage.classList.add('is-drag'); stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - lastX, dy = e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY; moved += Math.abs(dx) + Math.abs(dy);
    rot += dx * .22; vel = dx * .22;
    voff = Math.max(-VOFF_MAX, Math.min(VOFF_MAX, voff + dy * .006));
    vvel = dy * .006;
    if (moved > 8) plabel.classList.remove('is-idle');
  });
  /* 滚轮：仅滑动图片，不滚动页面 */
  stage.addEventListener('wheel', e => {
    e.preventDefault();
    if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
      voff = Math.max(-VOFF_MAX, Math.min(VOFF_MAX, voff + e.deltaY * .0016));
      vvel = e.deltaY * .0016;
    } else {
      vel += e.deltaX * .02;
    }
  }, { passive: false });
  const endDrag = e => {
    if (!dragging) return;
    dragging = false; stage.classList.remove('is-drag');
    if (moved < 6 && backend) backend.click(e.clientX, e.clientY);
  };
  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);

  (function heroLoop() {
    if (tweenTo != null) {
      rot += (tweenTo - rot) * .09;
      if (Math.abs(tweenTo - rot) < .15) tweenTo = null;
    } else if (!dragging) {
      vel *= .96;
      if (Math.abs(vel) < .05) vel += ((REDUCED ? 0 : .09) - vel) * .02;
      rot += vel;
    }
    /* 垂直惯性 + 缓慢回中 */
    if (!dragging) {
      voff += vvel;
      vvel *= .92;
      voff += (0 - voff) * .012;
      voff = Math.max(-VOFF_MAX, Math.min(VOFF_MAX, voff));
    }
    if (backend) backend.update();
    const front = backend ? backend.front() : 0;
    const it = heroItems[front];
    if (it) {
      labelTitle.textContent = it.title;
      labelIndex.textContent = `${pad2(front + 1)} / ${pad2(HERO_N)} — ${it.cat.cn}`;
    }
    requestAnimationFrame(heroLoop);
  })();

  /* 点击非正面卡片 → 补间到正面 */
  function tweenToFront(i) {
    const r = ringOf(i), aNow = rot * SPEEDS[r] + idxInRing(i) * (360 / PER);
    tweenTo = rot - aNow / SPEEDS[r];
  }

  /* ---------- 后端 A：WebGL ---------- */
  function initWebGL() {
    if (!window.THREE) return false;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
    catch (e) { return false; }
    const W = () => stage.clientWidth, H = () => stage.clientHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W(), H());
    stage.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, W() / H(), .1, 100);
    camera.position.set(0, 0, 12.6);

    const loader = new THREE.TextureLoader();
    const meshes = heroItems.map((it, i) => {
      const tex = loader.load('assets/img/' + it.img);
      tex.minFilter = THREE.LinearFilter;
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(.78, 1.04),
        new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide })
      );
      m.userData.i = i;
      /* 爆炸展开：从散落位置收拢成环 */
      const s = REDUCED ? { x: 0, y: 0, z: 0 } : scatter(i);
      m.position.set(s.x, s.y, s.z);
      scene.add(m);
      return m;
    });

    const R = Math.max(4.4, Math.min(5.4, W() / 280));
    const YS = [-4.0, -2.85, -1.7, -.55, .55, 1.7, 2.85, 4.0];
    const tmp = new THREE.Vector3();
    function targetFor(i) {
      const r = ringOf(i), j = idxInRing(i);
      const a = (rot * SPEEDS[r] + j * (360 / PER)) * Math.PI / 180;
      return {
        x: Math.sin(a) * R,
        y: YS[r] + bobOf(r, j) + voff * .9,
        z: Math.cos(a) * R,
      };
    }
    function update() {
      meshes.forEach((m, i) => {
        const t = targetFor(i);
        m.position.x += (t.x - m.position.x) * .07;
        m.position.y += (t.y - m.position.y) * .07;
        m.position.z += (t.z - m.position.z) * .07;
        tmp.set(m.position.x * 2, m.position.y * 2, m.position.z * 2);
        m.lookAt(tmp);
      });
      renderer.render(scene, camera);
    }
    const _pv = new THREE.Vector3();
    function front() {
      const r = renderer.domElement.getBoundingClientRect();
      let best = -1, bs = -1e9, bestAny = 0, bsAny = -1e9;
      meshes.forEach((m, i) => {
        if (m.position.z > bsAny) { bsAny = m.position.z; bestAny = i; }
        _pv.copy(m.position).project(camera);
        const sx = (_pv.x + 1) / 2 * r.width + r.left;
        const sy = (1 - _pv.y) / 2 * r.height + r.top;
        const onScreen = sx > -120 && sx < window.innerWidth + 120 && sy > -120 && sy < window.innerHeight + 120;
        if (onScreen && m.position.z > bs) { bs = m.position.z; best = i; }
      });
      return best >= 0 ? best : bestAny;
    }
    const ray = new THREE.Raycaster(), ptrv = new THREE.Vector2();
    function click(cx2, cy2) {
      const r = renderer.domElement.getBoundingClientRect();
      ptrv.x = ((cx2 - r.left) / r.width) * 2 - 1;
      ptrv.y = -((cy2 - r.top) / r.height) * 2 + 1;
      ray.setFromCamera(ptrv, camera);
      const hit = ray.intersectObjects(meshes)[0];
      if (!hit) { $('#archive').scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' }); return; }
      const i = hit.object.userData.i;
      if (i === front()) openDetail(heroItems[i]);
      else tweenToFront(i);
    }
    window.addEventListener('resize', () => {
      camera.aspect = W() / H();
      camera.updateProjectionMatrix();
      renderer.setSize(W(), H());
    });
    /* 调试钩子 */
    window.__heroDebug = {
      frontPos() {
        const m = meshes[front()];
        const v = m.position.clone().project(camera);
        const r = renderer.domElement.getBoundingClientRect();
        return { x: r.left + (v.x + 1) / 2 * r.width, y: r.top + (1 - v.y) / 2 * r.height };
      },
      probe(x, y) {
        const r = renderer.domElement.getBoundingClientRect();
        ptrv.x = ((x - r.left) / r.width) * 2 - 1;
        ptrv.y = -((y - r.top) / r.height) * 2 + 1;
        ray.setFromCamera(ptrv, camera);
        return { hits: ray.intersectObjects(meshes).map(h => h.object.userData.i), front: front() };
      },
    };
    backend = { update, front, click };
    return true;
  }

  /* ---------- 后端 B：CSS 3D 回退 ---------- */
  function initCSS() {
    const R = Math.max(320, Math.min(620, window.innerWidth * .34));
    const YSpx = [-480, -343, -206, -69, 69, 206, 343, 480];
    const PXR = 105; /* 世界单位 → px */
    const cur = heroItems.map((_, i) => {
      const s = REDUCED ? { x: 0, y: 0, z: 0 } : scatter(i);
      return { x: s.x * PXR, y: s.y * PXR, z: s.z * PXR };
    });
    const cards = heroItems.map((it, i) => {
      const f = document.createElement('figure');
      f.className = 'hero__card';
      f.innerHTML = `<img src="assets/img/${it.img}" alt="${esc(it.title)}" loading="eager" draggable="false">
        <figcaption>${pad2(i + 1)} / ${pad2(HERO_N)}</figcaption>`;
      stage.appendChild(f);
      return f;
    });
    function update() {
      cards.forEach((c, i) => {
        const r = ringOf(i), j = idxInRing(i);
        const a = (rot * SPEEDS[r] + j * (360 / PER)) * Math.PI / 180;
        const tx = Math.sin(a) * R;
        const ty = YSpx[r] + (bobOf(r, j) + voff * .9) * PXR;
        const tz = Math.cos(a) * 160;
        cur[i].x += (tx - cur[i].x) * .07;
        cur[i].y += (ty - cur[i].y) * .07;
        cur[i].z += (tz - cur[i].z) * .07;
        const zn = cur[i].z / 160;
        const scale = .55 + (zn + 1) / 2 * .5;
        c.style.transform = `translate(-50%,-50%) translate3d(${cur[i].x}px,${cur[i].y}px,${cur[i].z}px) scale(${scale})`;
        c.style.zIndex = Math.round(zn * 100) + 200;
        c.style.opacity = .3 + (zn + 1) / 2 * .7;
      });
    }
    function front() {
      let best = 0, bs = -1e9;
      cards.forEach((c, i) => {
        if (cur[i].z > bs) { bs = cur[i].z; best = i; }
      });
      return best;
    }
    function click(x, y) {
      const el = document.elementFromPoint(x, y)?.closest('.hero__card');
      if (!el) { $('#archive').scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' }); return; }
      const i = cards.indexOf(el);
      if (i < 0) return;
      if (i === front()) openDetail(heroItems[i]);
      else tweenToFront(i);
    }
    backend = { update, front, click };
  }

  /* file:// 直连打开时 WebGL 纹理被浏览器 CORS 拦截（全黑），强制走 CSS 回退 */
  if (location.protocol === 'file:') initCSS();
  else if (!initWebGL()) initCSS();

  /* --- 跟随光标玻璃标签 --- */
  let lx = 0, ly = 0, lt = null, idleTimer = null;
  const hero = $('#hero');
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    lx = e.clientX - r.left + 22; ly = e.clientY - r.top + 22;
    plabel.classList.remove('is-idle');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => plabel.classList.add('is-idle'), 2600);
  });
  hero.addEventListener('pointerleave', () => plabel.classList.add('is-idle'));
  (function labelLoop() {
    lt = lt || { x: 0, y: 0 };
    lt.x += (lx - lt.x) * .1; lt.y += (ly - lt.y) * .1;
    if (plabel.classList.contains('is-idle')) plabel.style.transform = '';
    else plabel.style.transform = `translate(${lt.x}px,${lt.y}px)`;
    requestAnimationFrame(labelLoop);
  })();

  /* ============================================================
     作品索引 / 筛选 —— 马赛克艺术布局
     ============================================================ */
  const worksList = $('#worksList'), preview = $('#worksPreview'), previewImg = $('#worksPreviewImg');
  const ALL = [];
  CATS.forEach(c => D[c.key].forEach((it, idx) => ALL.push({ ...it, cat: c, catIdx: idx })));
  $('#worksCount').textContent = ALL.length;
  $('#archiveCount').textContent = ALL.length;
  const SPANS = [2, 3, 2, 4, 3, 2, 3, 5, 2, 3, 2, 4];
  ALL.forEach((it, i) => {
    const row = document.createElement('div');
    row.className = 'work-row span-' + SPANS[i % SPANS.length];
    row.dataset.cat = it.cat.key;
    row.draggable = true;
    /* 进场错峰（整齐排放） */
    row.style.setProperty('--d', ((i % 12) * 45) + 'ms');
    row.innerHTML = `
      <span class="work-row__idx">${pad2(i + 1)}</span>
      <span class="work-row__title">${esc(it.title)}</span>
      ${it.img ? '' : '<span class="work-row__mark">纯文本 · 无图</span>'}
      <span class="work-row__cat">${it.cat.cn}</span>
      <span class="work-row__year">${esc(it.year || it.source || '')}</span>`;
    worksList.appendChild(row);
    if (it.img) {
      row.addEventListener('pointerenter', () => {
        previewImg.src = `assets/img/${it.img}`;
        /* 悬浮图按图片原始比例 */
        preview.style.aspectRatio = it.wh ? `${it.wh[0]} / ${it.wh[1]}` : '';
        preview.classList.add('is-on');
      });
      row.addEventListener('pointerleave', () => preview.classList.remove('is-on'));
    }
    /* 点击词条：展开「左图右文」面板；再次点击退出 */
    row.addEventListener('click', () => {
      if (row.classList.contains('is-open')) { closeRow(row); return; }
      $$('.work-row.is-open').forEach(closeRow);
      openRow(row, it);
    });
  });

  function openRow(row, it) {
    row.classList.add('is-open');
    const text = bodyText(it);
    const meta = [it.cat.cn, it.year || '', it.source || '', (it.tags || []).join(' · ')].filter(Boolean).join('　/　');
    const panel = document.createElement('div');
    panel.className = 'work-row__panel';
    panel.innerHTML = `
      ${it.img ? `<figure class="work-row__panel-fig" ${it.wh ? `style="aspect-ratio:${it.wh[0]} / ${it.wh[1]}"` : ''}><img src="assets/img/${it.img}" alt="${esc(it.title)}"></figure>` : ''}
      <div class="work-row__panel-text">
        ${text && text !== it.title ? `<p>${esc(text)}</p>` : `<p class="work-row__panel-empty">暂无详细介绍，欢迎补充。</p>`}
        ${meta ? `<p class="work-row__panel-meta">${esc(meta)}</p>` : ''}
      </div>`;
    row.appendChild(panel);
    requestAnimationFrame(() => panel.classList.add('is-in'));
  }
  function closeRow(row) {
    row.classList.remove('is-open');
    $('.work-row__panel', row)?.remove();
  }

  /* ---------- 拖拽打组 + 编辑组名 + 移出组 + 撤回 ---------- */
  let dragRow = null, dragGroup = null;
  const undoStack = [];
  function pushUndo(fn) { undoStack.push(fn); }
  function undoGroup() {
    const fn = undoStack.pop();
    if (fn) { fn(); syncGroupHints(); }
  }
  /* 记录/还原元素位置 */
  function placeOf(el) { return { el, parent: el.parentNode, next: el.nextSibling }; }
  function restorePlace(rec) {
    if (!rec || !rec.parent) return;
    rec.parent.insertBefore(rec.el, rec.next && rec.next.parentNode === rec.parent ? rec.next : null);
  }
  /* 组空了自动移除，返回还原记录 */
  function removeGroupIfEmpty(g) {
    if (g && g.isConnected && g.querySelectorAll('.work-row').length === 0) {
      const rec = placeOf(g);
      g.remove();
      return rec;
    }
    return null;
  }
  function syncGroupHints() {
    $$('.work-group').forEach(g => {
      const n = g.querySelectorAll('.work-row').length;
      $('.work-group__hint', g).textContent =
        `拖拽词条入组 · 拖到空白移出 · 双击改名${n ? ` · ${n} 项` : ''}`;
    });
  }

  worksList.addEventListener('dragstart', e => {
    if (e.target.closest('input')) return;
    const head = e.target.closest('.work-group__head');
    if (head) {
      dragGroup = head.parentElement;
      dragGroup.classList.add('is-dragging');
    } else {
      const r = e.target.closest('.work-row');
      if (!r) return;
      dragRow = r;
      r.classList.add('is-dragging');
    }
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      try { e.dataTransfer.setData('text/plain', ''); } catch (_) {}
    }
  });
  worksList.addEventListener('dragend', () => {
    $$('.is-dragging,.is-over').forEach(el => el.classList.remove('is-dragging', 'is-over'));
    worksList.classList.remove('is-over');
    dragRow = null; dragGroup = null;
  });
  worksList.addEventListener('dragover', e => {
    if (!dragRow && !dragGroup) return;
    e.preventDefault();
    const t = e.target.closest('.work-row, .work-group');
    $$('.work-group.is-over,.work-row.is-over').forEach(el => el.classList.remove('is-over'));
    worksList.classList.toggle('is-over', !t);
    const invalid = !t || (dragGroup && t.contains(dragGroup)) || (dragRow && (t === dragRow || t.contains(dragRow)));
    if (!invalid) t.classList.add('is-over');
  });
  worksList.addEventListener('drop', e => {
    if (!dragRow && !dragGroup) return;
    e.preventDefault();
    const t = e.target.closest('.work-row, .work-group');
    $$('.is-over').forEach(el => el.classList.remove('is-over'));
    worksList.classList.remove('is-over');

    if (dragGroup) {
      /* ---- 拖动整个组 ---- */
      const g = dragGroup; dragGroup = null;
      g.classList.remove('is-dragging');
      const targetGroup = t && (t.classList.contains('work-group') ? t : t.closest('.work-group'));
      const gRec = placeOf(g);
      if (targetGroup && targetGroup !== g && !targetGroup.contains(g)) {
        /* 合并：本组所有词条并入目标组 */
        const rows = Array.from($('.work-group__body', g).children);
        const tBody = $('.work-group__body', targetGroup);
        const rowRecs = rows.map(r => placeOf(r));
        rows.forEach(r => tBody.appendChild(r));
        g.remove();
        pushUndo(() => {
          restorePlace(gRec);
          rowRecs.forEach(restorePlace);
        });
      } else if (t && t.classList.contains('work-row') && !t.closest('.work-group')) {
        /* 拖到独立词条 → 新建组收纳双方 */
        const g2 = createGroup();
        const tRec = placeOf(t);
        worksList.insertBefore(g2, t);
        $('.work-group__body', g2).appendChild(t);
        Array.from($('.work-group__body', g).children).forEach(r => $('.work-group__body', g2).appendChild(r));
        g.remove();
        pushUndo(() => {
          restorePlace(gRec);
          restorePlace(tRec);
          Array.from($('.work-group__body', g2).children).forEach(r => $('.work-group__body', g).appendChild(r));
          g2.remove();
        });
      }
      syncGroupHints();
      return;
    }

    /* ---- 拖动词条 ---- */
    const row = dragRow; dragRow = null;
    row.classList.remove('is-dragging');
    if (t === row || (t && t.contains(row))) return;
    const rowRec = placeOf(row);
    const fromGroup = row.closest('.work-group');

    if (t && t.classList.contains('work-group')) {
      /* 放到组上 → 入组 */
      $('.work-group__body', t).appendChild(row);
      const emptied = fromGroup && fromGroup !== t ? removeGroupIfEmpty(fromGroup) : null;
      pushUndo(() => {
        restorePlace(rowRec);
        if (emptied) restorePlace(emptied);
      });
    } else if (t && t.classList.contains('work-row')) {
      const targetGroup = t.closest('.work-group');
      if (targetGroup) {
        /* 放到组内词条旁 → 入组并排在它后面 */
        $('.work-group__body', targetGroup).insertBefore(row, t.nextSibling);
        const emptied = fromGroup && fromGroup !== targetGroup ? removeGroupIfEmpty(fromGroup) : null;
        pushUndo(() => {
          restorePlace(rowRec);
          if (emptied) restorePlace(emptied);
        });
      } else {
        /* 两张独立词条 → 新建分组 */
        const g = createGroup();
        const tRec = placeOf(t);
        worksList.insertBefore(g, t);
        $('.work-group__body', g).appendChild(t);
        $('.work-group__body', g).appendChild(row);
        pushUndo(() => {
          restorePlace(tRec);
          restorePlace(rowRec);
          g.remove();
        });
      }
    } else {
      /* 拖到空白处 → 移出分组 */
      if (fromGroup) {
        worksList.appendChild(row);
        const emptied = removeGroupIfEmpty(fromGroup);
        pushUndo(() => {
          restorePlace(rowRec);
          if (emptied) restorePlace(emptied);
        });
      }
    }
    syncGroupHints();
  });
  function createGroup(name) {
    const g = document.createElement('div');
    g.className = 'work-group';
    g.innerHTML = `
      <div class="work-group__head" draggable="true" title="拖动整个组">
        <span class="work-group__dot"></span>
        <span class="work-group__name">${esc(name || '新分组')}</span>
        <span class="work-group__hint">拖拽词条入组 · 拖到空白移出 · 双击改名</span>
      </div>
      <div class="work-group__body"></div>`;
    const nameEl = $('.work-group__name', g);
    nameEl.addEventListener('dblclick', () => {
      const input = document.createElement('input');
      input.className = 'work-group__input';
      input.value = nameEl.textContent;
      input.maxLength = 24;
      nameEl.replaceWith(input);
      input.focus(); input.select();
      let done = false;
      const commit = () => {
        if (done) return;
        done = true;
        nameEl.textContent = input.value.trim() || '未命名分组';
        if (input.parentNode) input.replaceWith(nameEl);
      };
      input.addEventListener('blur', commit);
      input.addEventListener('keydown', ev => {
        if (ev.key === 'Enter') input.blur();
        if (ev.key === 'Escape') { input.value = nameEl.textContent; input.blur(); }
      });
    });
    return g;
  }
  /* Ctrl / Cmd + Z 撤回打组 */
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'z') {
      if (e.target.closest && e.target.closest('input, textarea, [contenteditable]')) return;
      e.preventDefault();
      undoGroup();
    }
  });
  /* 撤回按钮（放在筛选旁） */
  const undoBtn = document.createElement('button');
  undoBtn.className = 'filter-btn filter-btn--undo';
  undoBtn.textContent = '↩ 撤回分组';
  undoBtn.onclick = undoGroup;
  $('#worksFilters').appendChild(undoBtn);

  window.addEventListener('pointermove', e => {
    if (!preview.classList.contains('is-on')) return;
    const w = preview.offsetWidth, h = preview.offsetHeight;
    let x = e.clientX + 30, y = e.clientY - h / 2;
    if (x + w > window.innerWidth - 12) x = e.clientX - w - 30;
    y = Math.max(12, Math.min(y, window.innerHeight - h - 12));
    preview.style.left = x + 'px'; preview.style.top = y + 'px';
  });
  const filters = $('#worksFilters');
  [{ key: 'all', cn: '全部' }, ...CATS].forEach((c, i) => {
    const b = document.createElement('button');
    b.className = 'filter-btn' + (i === 0 ? ' is-active' : '');
    b.textContent = c.cn;
    b.onclick = () => {
      $$('.filter-btn').forEach(x => x.classList.remove('is-active'));
      b.classList.add('is-active');
      $$('.work-row').forEach(r => r.classList.toggle('is-hide', c.key !== 'all' && r.dataset.cat !== c.key));
    };
    filters.appendChild(b);
  });

  /* ============================================================
     档案板块 —— 统一「图在前 · 文字藏后」叠层条目
     ============================================================ */
  const root = $('#archiveRoot');
  CATS.forEach((c, ci) => {
    const items = D[c.key];
    if (!items.length) return;
    const sec = document.createElement('div');
    sec.className = 'archive-block reveal';
    sec.id = `block-${c.key}`;
    sec.innerHTML = `
      <div class="archive-block__head">
        <span class="archive-block__num">${pad2(ci + 1)}</span>
        <h3 class="archive-block__title">${c.cn}</h3>
        <span class="archive-block__en">${c.en}</span>
        <span class="archive-block__count">${items.length} entries</span>
      </div>
      <div class="archive-block__body"></div>`;
    root.appendChild(sec);
    renderEntries(items, $('.archive-block__body', sec), c);
  });

  function renderEntries(items, box, cat) {
    items.forEach((it, i) => {
      const hasImg = !!it.img;
      const text = bodyText(it);
      const entry = document.createElement('article');
      entry.className = 'entry reveal' + (hasImg ? '' : ' entry--text-only');
      entry.innerHTML = `
        ${hasImg ? `
        <figure class="entry__fig" data-cursor="view" ${it.wh ? `style="aspect-ratio:${it.wh[0]} / ${it.wh[1]}"` : ''}>
          <img src="assets/img/${it.img}" alt="${esc(it.title)}" loading="lazy">
          <figcaption class="entry__figcap">${esc(it.source || '')} ${esc(it.year || '')} · 点击查看</figcaption>
        </figure>` : ''}
        <div class="entry__text">
          <span class="entry__idx">${pad2(i + 1)} — ${esc(it.year || it.source || cat.en)}</span>
          ${it.quote ? '<span class="entry__quote-mark">“</span>' : ''}
          <h4 class="entry__title">${esc(it.title)}</h4>
          ${text && text !== it.title ? `<p class="entry__note is-clamp">${esc(text)}</p>` : ''}
          ${it.tags && it.tags.length ? `<div class="entry__tags">${it.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>` : ''}
        </div>`;
      box.appendChild(entry);

      /* 点击大图 → 详情页 */
      const fig = $('.entry__fig', entry);
      if (fig) fig.addEventListener('click', () => openDetail({ ...it, cat }));

      /* 长文字展开 */
      const note = $('.entry__note', entry);
      if (note) requestAnimationFrame(() => {
        if (note.scrollHeight > note.clientHeight + 4) addExpandBtn(note, $('.entry__text', entry));
      });
    });
  }

  function addExpandBtn(target, scope) {
    const btn = document.createElement('button');
    btn.className = 'expand-btn';
    btn.textContent = '展开 +';
    btn.onclick = () => {
      const open = target.classList.toggle('is-clamp') === false;
      btn.textContent = open ? '收起 −' : '展开 +';
    };
    (scope || target.parentElement).appendChild(btn);
  }

  $('#footerCounter').textContent = `${ALL.length} / ${ALL.length} selected entries`;

  /* ============================================================
     菜单 / 锚点转场 / scrollspy / reveal
     ============================================================ */
  const burger = $('#burger'), menuEl = $('#menu');
  burger.onclick = () => {
    const open = menuEl.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
    menuEl.setAttribute('aria-hidden', String(!open));
  };

  const layer = $('#transitionLayer');
  $$('[data-nav]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();
      if (menuEl.classList.contains('is-open')) { menuEl.classList.remove('is-open'); burger.classList.remove('is-open'); }
      layer.classList.remove('is-active'); void layer.offsetWidth; layer.classList.add('is-active');
      setTimeout(() => {
        const t = $(href);
        if (t) t.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' });
      }, 380);
    });
  });

  const navLinks = $$('.nav__link');
  const spy = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    const idx = en.target.id === 'works' ? 0 : 1;
    navLinks.forEach((l, i) => l.classList.toggle('is-active', i === idx));
  }), { rootMargin: '-40% 0px -50% 0px' });
  ['works', 'archive'].forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el); });

  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { threshold: 0, rootMargin: '0px 0px -5% 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }
})();
