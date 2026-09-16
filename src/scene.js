// 3D 卡片总览：圆环网格 / 弹簧螺旋（卡片朝外贴圆柱面，相机环绕）+ 详情面板
// 布局逻辑参考《信息档案馆.html》：grid=多行圆环，spiral=4 圈弹簧
import * as THREE from 'three';

const CAT_COLORS = {
  '吞噬': '#e0e0da', '造梦': '#c6c6bf', '呼吸': '#adada6',
  '景观': '#94948d', '黑灯': '#7b7b74',
};
const FONT_STACK = 'Outfit, "Microsoft YaHei", SimHei, sans-serif';
const RED = '#e0483a';

export function initScene(items, panel) {
  const canvas = document.getElementById('stage');
  const wrapper = document.getElementById('overview');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x101013, 34, 92);
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);

  const world = new THREE.Group();
  scene.add(world);

  /* ---------- 预载条目图片 ---------- */
  function loadImages() {
    return Promise.all(items.map(it => new Promise(res => {
      if (!it.img) return res(null);
      const im = new Image();
      im.onload = () => res(im);
      im.onerror = () => res(null);
      im.src = it.img;
    })));
  }

  /* ---------- 卡片贴图 ---------- */
  function drawChip(c, it) {
    c.fillStyle = CAT_COLORS[it.cat] || '#888';
    c.fillRect(14, 14, 50, 20);
    c.fillStyle = '#111';
    c.font = `900 13px ${FONT_STACK}`;
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillRect(20, 20, 8, 8);
  }
  function drawTitle(c, it, maxLines, fontSize, lineH, y0, maxW) {
    c.fillStyle = '#e8e6df';
    c.font = `900 ${fontSize}px ${FONT_STACK}`;
    c.textAlign = 'left'; c.textBaseline = 'alphabetic';
    const lines = [];
    let line = '';
    for (const ch of it.title) {
      if (ch === '\n' || c.measureText(line + ch).width > maxW) { lines.push(line); line = ''; }
      line += ch;
      if (lines.length >= maxLines) break;
    }
    if (line && lines.length < maxLines) lines.push(line);
    lines.forEach((l, i) => c.fillText(l, 16, y0 + i * lineH));
    return y0 + lines.length * lineH;
  }

  function makeTexture(it, img) {
    const W = 256, H = 320;
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    const c = cv.getContext('2d');

    if (img) {
      const s = Math.max(W / img.width, H / img.height);
      const dw = img.width * s, dh = img.height * s;
      c.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
      c.fillStyle = 'rgba(20,20,18,.82)';
      c.fillRect(0, H - 84, W, 84);
      drawChip(c, it);
      drawTitle(c, it, 2, 17, 22, H - 56, W - 32);
      c.fillStyle = '#9a9890';
      c.font = `600 11px ${FONT_STACK}`;
      c.fillText(`${it.year || '——'} · ${it.src}`, 16, H - 14);
    } else {
      c.fillStyle = '#1e1e1c'; c.fillRect(0, 0, W, H);
      for (let i = 0; i < 400; i++) {
        c.fillStyle = `rgba(255,255,255,${Math.random() * 0.02})`;
        c.fillRect(Math.random() * W, Math.random() * H, 1, 1);
      }
      c.strokeStyle = '#33332f'; c.lineWidth = 2; c.strokeRect(6, 6, W - 12, H - 12);
      drawChip(c, it);
      const end = drawTitle(c, it, 2, 18, 24, 58, W - 32);
      const text = (it.excerpt || it.content).replace(/\n/g, ' ').slice(0, 120);
      c.fillStyle = RED;
      c.font = `600 14px ${FONT_STACK}`;
      c.textAlign = 'left';
      const lines = [];
      let line = '';
      for (const ch of text) {
        if (c.measureText(line + ch).width > W - 36) { lines.push(line); line = ''; }
        line += ch;
        if (lines.length >= 7) break;
      }
      if (line && lines.length < 7) lines.push(line);
      lines.forEach((l, i) => c.fillText(l, 18, end + 14 + i * 22));
      c.fillStyle = '#6f6f67';
      c.font = `600 11px ${FONT_STACK}`;
      c.fillText(`${it.year || '——'} · ${it.src}`, 16, H - 14);
    }
    const tex = new THREE.CanvasTexture(cv);
    tex.anisotropy = 4;
    return tex;
  }

  /* ---------- 布局：圆环网格 / 4 圈弹簧螺旋（参考信息档案馆） ---------- */
  const N = items.length;
  function layoutTargets(m) {
    if (m === 'grid') {
      const R = 24, perRow = 44, rowH = 3.35;
      const rows = Math.ceil(N / perRow);
      return items.map((_, i) => {
        const r = Math.floor(i / perRow), k = i % perRow;
        const n = Math.min(perRow, N - r * perRow);
        const a = (k / n) * Math.PI * 2 + r * 0.5; // 行间错半格
        const y = (r - (rows - 1) / 2) * rowH;
        return { pos: new THREE.Vector3(Math.cos(a) * R, y, Math.sin(a) * R), ry: Math.PI / 2 - a };
      });
    }
    const R = 24;
    return items.map((_, i) => {
      const t = i / (N - 1);
      const a = t * Math.PI * 2 * 4; // 4 圈
      return { pos: new THREE.Vector3(Math.cos(a) * R, (t - 0.5) * 38, Math.sin(a) * R), ry: Math.PI / 2 - a };
    });
  }

  /* ---------- 建卡 ---------- */
  const geo = new THREE.PlaneGeometry(1.72, 2.15);
  const meshes = [];
  let mode = 'grid';
  let targets = [];

  function applyLayout(m, instant) {
    mode = m;
    targets = layoutTargets(m);
    meshes.forEach((mesh, i) => {
      mesh.userData.target = targets[i].pos;
      mesh.userData.ryTarget = targets[i].ry;
      if (instant) {
        mesh.position.copy(targets[i].pos);
        mesh.rotation.set(0, targets[i].ry, 0);
      }
    });
  }

  function buildCards(images) {
    items.forEach((it, i) => {
      const mat = new THREE.MeshBasicMaterial({
        map: makeTexture(it, images[i]), transparent: true, side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.userData = { item: it, sTarget: 1, opacityTarget: 1, dimmed: false };
      world.add(mesh);
      meshes.push(mesh);
    });
    applyLayout('grid', true);
  }

  /* ---------- 模式切换 ---------- */
  const slider = document.querySelector('.mode-slider');
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.mode === mode) return;
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b === btn));
      slider.style.transform = btn.dataset.mode === 'spiral' ? 'translateX(96px)' : 'translateX(0)';
      if (opened) closeCard();
      applyLayout(btn.dataset.mode, false);
      camRadiusTarget = btn.dataset.mode === 'spiral' ? 42 : 38;
    });
  });

  /* ---------- 滚动驱动 ---------- */
  let scrollP = 0;
  function readScroll() {
    const rect = wrapper.getBoundingClientRect();
    const total = wrapper.offsetHeight - window.innerHeight;
    scrollP = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
  }
  window.addEventListener('scroll', readScroll, { passive: true });

  /* ---------- 鼠标视差 + 拾取 ---------- */
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2(-10, -10);
  let hovered = null;
  const par = { x: 0, y: 0, tx: 0, ty: 0 };

  canvas.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    par.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    par.ty = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  canvas.addEventListener('pointerleave', () => { pointer.set(-10, -10); });

  /* ---------- 中键拖动旋转 ---------- */
  let userRot = 0, userRotT = 0;
  let midDrag = null;
  canvas.addEventListener('pointerdown', e => {
    if (e.button !== 1) return;
    e.preventDefault();
    midDrag = { x: e.clientX };
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', e => {
    if (midDrag && (e.buttons & 4)) {
      userRotT += (e.clientX - midDrag.x) * 0.005;
      midDrag = { x: e.clientX };
    }
  });
  canvas.addEventListener('pointerup', e => { if (e.button === 1) midDrag = null; });
  canvas.addEventListener('auxclick', e => { if (e.button === 1) e.preventDefault(); });

  /* ---------- 滚轮缩放 ---------- */
  const CAM_MIN = 30, CAM_MAX = 60;
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    e.stopPropagation();
    camRadiusTarget = Math.min(CAM_MAX, Math.max(CAM_MIN, camRadiusTarget + e.deltaY * 0.028));
  }, { passive: false });

  /* ---------- 聚焦（点击卡片） ---------- */
  const focus = { on: false, px: 0, py: 0, pz: 0, lx: 0, ly: 0, lz: 0 };
  const lookCur = new THREE.Vector3(0, 0, 0);
  let opened = null;
  const outward = (mesh) => {
    const b = mesh.userData.target;
    const v = new THREE.Vector3(b.x, 0, b.z);
    return v.lengthSq() > 0.001 ? v.normalize() : new THREE.Vector3(1, 0, 0);
  };

  function openCard(mesh) {
    opened = mesh;
    focus.on = true;
    world.updateMatrixWorld(true);
    const wp = new THREE.Vector3();
    mesh.getWorldPosition(wp);
    const dir = new THREE.Vector3(wp.x, 0, wp.z).normalize();
    focus.px = wp.x + dir.x * 6.2; focus.py = wp.y; focus.pz = wp.z + dir.z * 6.2;
    focus.lx = wp.x; focus.ly = wp.y; focus.lz = wp.z;

    mesh.userData.sTarget = 1.9;
    meshes.forEach(m => {
      if (m !== mesh) { m.userData.dimmed = true; m.userData.opacityTarget = 0.55; m.userData.sTarget = 1; }
    });
    panel.open(mesh.userData.item);
  }
  function closeCard() {
    if (!opened) return;
    opened.userData.sTarget = 1;
    meshes.forEach(m => {
      m.userData.dimmed = false;
      m.userData.opacityTarget = 1;
      m.userData.sTarget = 1;
      m.material.color.setRGB(1, 1, 1);
    });
    focus.on = false;
    opened = null;
    panel.close();
  }
  canvas.addEventListener('click', (e) => {
    if (hovered && !opened) { e.stopPropagation(); openCard(hovered); }
    else if (opened) { e.stopPropagation(); closeCard(); }
    // 未命中卡片：不拦截，冒泡到视图层 → 空白跳转
  });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCard(); });
  panel.onClose = closeCard;

  /* ---------- 尺寸 ---------- */
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  /* ---------- 动画循环 ---------- */
  const clock = new THREE.Clock();
  let slowSpin = 0;
  let theta = 0.6;
  let camRadius = 38, camRadiusTarget = 38;
  const desired = new THREE.Vector3();
  const DIM = new THREE.Color(0.42, 0.42, 0.44);

  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);

    par.x += (par.tx - par.x) * 0.05;
    par.y += (par.ty - par.y) * 0.05;

    if (!focus.on) {
      slowSpin += dt * 0.12;
      world.rotation.y = slowSpin + scrollP * Math.PI * 2 * 1.6;
      world.position.y = (scrollP - 0.5) * 7;
      camRadius += (camRadiusTarget - camRadius) * 0.06;
      userRot += (userRotT - userRot) * 0.07;
      const th = theta + userRot + par.x * 0.05;
      camera.position.set(
        Math.sin(th) * camRadius + par.x * 1.1,
        -par.y * 0.8,
        Math.cos(th) * camRadius
      );
      lookCur.lerp(new THREE.Vector3(0, 0, 0), 0.08);
      camera.lookAt(lookCur);
    } else {
      camera.position.x += (focus.px - camera.position.x) * 0.08;
      camera.position.y += (focus.py - camera.position.y) * 0.08;
      camera.position.z += (focus.pz - camera.position.z) * 0.08;
      lookCur.lerp(new THREE.Vector3(focus.lx, focus.ly, focus.lz), 0.1);
      camera.lookAt(lookCur);
    }

    // 悬停拾取
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(meshes, false)[0];
    const newHover = hit && !opened ? hit.object : null;
    if (newHover !== hovered) {
      hovered = newHover;
      document.body.style.cursor = hovered ? 'pointer' : 'default';
    }

    // 每帧 lerp：位置（含悬停/选中/变暗的沿法线偏移）、旋转、缩放、透明度、颜色
    meshes.forEach(m => {
      const u = m.userData;
      desired.copy(u.target);
      const n = outward(m);
      if (m === opened) desired.addScaledVector(n, 3.2);
      else if (m === hovered) desired.addScaledVector(n, 1.5);
      else if (u.dimmed) desired.addScaledVector(n, -1.6);
      m.position.lerp(desired, 0.09);
      m.rotation.y += (u.ryTarget - m.rotation.y) * 0.09;
      m.rotation.x += (0 - m.rotation.x) * 0.09;
      const s = m.scale.x + (u.sTarget - m.scale.x) * 0.1;
      m.scale.setScalar(s);
      m.material.opacity += (u.opacityTarget - m.material.opacity) * 0.1;
      if (u.dimmed) m.material.color.lerp(DIM, 0.1);
      else m.material.color.lerp(new THREE.Color(1, 1, 1), 0.1);
    });

    renderer.render(scene, camera);
  }

  /* ---------- 启动 ---------- */
  loadImages().then(images => {
    buildCards(images);
    window.__factory = {
      project(i) {
        const v = new THREE.Vector3();
        meshes[i].getWorldPosition(v);
        v.project(camera);
        const r = canvas.getBoundingClientRect();
        return { x: r.left + (v.x + 1) / 2 * r.width, y: r.top + (1 - v.y) / 2 * r.height };
      },
      hoverId: () => (hovered ? hovered.userData.item.id : null),
      openedId: () => (opened ? opened.userData.item.id : null),
    };
    readScroll();
    animate();
  });

  return { closeCard };
}
