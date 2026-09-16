// 机器碎片 · 流水线 —— 真实机械零件三维模型沿传送带从远处运来，点击调出相关作品
import * as THREE from 'three';

const FONT_STACK = 'Outfit, "Microsoft YaHei", SimHei, sans-serif';

/* ---------- 零件配置：相关作品（精选 id + 标题关键词） ---------- */
const PARTS = [
  {
    name: '齿轮', en: 'GEAR', model: 'gear', ids: [9, 135, 123, 152],
    kw: /流水线|韵律|节拍|自动钢琴|机器与狼|泰勒/,
    desc: '传动的原点——节拍、韵律与不可停止的循环。',
  },
  {
    name: '活塞', en: 'PISTON', model: 'piston', ids: [18, 2, 3],
    kw: /活塞|金属|往复|冲程/,
    desc: '往复运动的心脏——把爆炸翻译成直线。',
  },
  {
    name: '钢水包', en: 'LADLE', model: 'ladle', ids: [11, 52, 66, 71, 83],
    kw: /钢水|熔化|熔炉|出钢|锻铁|炉/,
    desc: '盛装一千两百度——炉光是一间车间唯一的太阳。',
  },
  {
    name: '焊枪', en: 'WELDER', model: 'torch', ids: [64, 11],
    kw: /电焊|焊接|弧光|火花|钢水/,
    desc: '工人自制的小太阳——弧光是车间里的手造星辰。',
  },
  {
    name: '滚筒', en: 'ROLLER', model: 'roller', ids: [9, 41, 162],
    kw: /传送带|流水线|生产线|拣货|滚筒|黑灯/,
    desc: '不停转的表面——东西在上面移动，人在旁边重复。',
  },
  {
    name: '烟囱管', en: 'STACK', model: 'stack', ids: [4, 17, 15],
    kw: /烟囱|发电厂|废气|烟雾/,
    desc: '伸向天空的排气管——工厂对天空的署名。',
  },
  {
    name: '阀门', en: 'VALVE', model: 'valve', ids: [116, 138, 148],
    kw: /管道|阀门|下水道|地下|咽喉/,
    desc: '控制流动的开关——工业区看不见的手。',
  },
  {
    name: '仪表', en: 'GAUGE', model: 'gauge', ids: [10, 8, 178, 196],
    kw: /数据可视化|仪表盘|NeRF|算法|数字|监控/,
    desc: '车间的眼睛——把轰鸣翻译成数字。',
  },
  {
    name: '螺栓', en: 'BOLT', model: 'bolt', ids: [3, 24, 75],
    kw: /锈蚀|腐蚀|碎片|肌理|表皮|丰碑/,
    desc: '最小的连接件——锈蚀之后，它成了时间的铭文。',
  },
  {
    name: '锈板', en: 'RUST', model: 'plate', ids: [3, 75, 87, 125],
    kw: /锈蚀|锈|腐蚀|夕阳工业|废墟|遗迹/,
    desc: '氧化的表面——铁皮用自己的化学反应作画。',
  },
];

const BELT = { width: 10.6, zNear: 16, zFar: -80 };
const LANES = [-3.9, -2, 0, 2, 3.9];

/* ---------- 材质 ---------- */
const M = {
  steel: new THREE.MeshStandardMaterial({ color: 0xa8a8b0, metalness: 0.72, roughness: 0.3 }),
  polished: new THREE.MeshStandardMaterial({ color: 0xd4d7de, metalness: 0.9, roughness: 0.16 }),
  darkSteel: new THREE.MeshStandardMaterial({ color: 0x5c5c64, metalness: 0.62, roughness: 0.42 }),
  iron: new THREE.MeshStandardMaterial({ color: 0x3d3d44, metalness: 0.45, roughness: 0.58 }),
  brass: new THREE.MeshStandardMaterial({ color: 0xb39250, metalness: 0.7, roughness: 0.32 }),
  copper: new THREE.MeshStandardMaterial({ color: 0xa96b42, metalness: 0.75, roughness: 0.35 }),
  rust: new THREE.MeshStandardMaterial({ color: 0x8a5236, metalness: 0.2, roughness: 0.92 }),
  rustDark: new THREE.MeshStandardMaterial({ color: 0x5c3a24, metalness: 0.15, roughness: 1 }),
};

const mesh = (geo, mat, x = 0, y = 0, z = 0) => {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  return m;
};

/* ---------- 零件三维模型 ---------- */
function buildGear() {
  const g = new THREE.Group();
  const teeth = 16, ro = 0.78, ri = 0.62, hole = 0.18;
  const shape = new THREE.Shape();
  for (let i = 0; i <= teeth * 2; i++) {
    const a = (i / (teeth * 2)) * Math.PI * 2;
    const r = i % 2 === 0 ? ro : ri;
    const x = Math.cos(a) * r, y = Math.sin(a) * r;
    i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
  }
  const h = new THREE.Path();
  h.absarc(0, 0, hole, 0, Math.PI * 2, true);
  shape.holes.push(h);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.24, bevelEnabled: true, bevelThickness: 0.025, bevelSize: 0.025, bevelSegments: 2,
  });
  geo.center();
  const wheel = mesh(geo, M.steel);
  wheel.rotation.y = 0.4;
  g.add(wheel);
  // 轮毂 + 辐条 + 轴套
  g.add(mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.4, 20), M.darkSteel, 0, 0, 0.1));
  for (let i = 0; i < 4; i++) {
    const spoke = mesh(new THREE.BoxGeometry(0.68, 0.09, 0.1), M.darkSteel, 0, 0, 0.12);
    spoke.rotation.z = (i / 4) * Math.PI;
    g.add(spoke);
  }
  const collar = mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.56, 14), M.polished, 0, 0, 0.28);
  collar.rotation.x = Math.PI / 2;
  g.add(collar);
  // 后方小齿轮（副轴）
  const pinGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.14, 24);
  const pinion = mesh(pinGeo, M.brass, 0.02, -0.02, -0.28);
  pinion.rotation.x = Math.PI / 2;
  g.add(pinion);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const tooth = mesh(new THREE.BoxGeometry(0.07, 0.07, 0.14), M.brass,
      Math.cos(a) * 0.32, Math.sin(a) * 0.32 - 0.02, -0.28);
    tooth.rotation.z = a;
    g.add(tooth);
  }
  g.userData.spinAxis = 'z';
  return g;
}

function buildPiston() {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.52, 32), M.polished, 0, 0.1, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.1, 32), M.darkSteel, 0, 0.4, 0));
  // 顶部燃烧室凹面
  const crown = mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.03, 24), M.iron, 0, 0.46, 0);
  g.add(crown);
  // 三道活塞环
  for (let i = 0; i < 3; i++) {
    g.add(mesh(new THREE.TorusGeometry(0.402, 0.022, 8, 36), M.steel, 0, 0.02 + i * 0.09, 0))
      .children[g.children.length - 1].rotation.x = Math.PI / 2;
  }
  // 销孔 + 活塞销
  const pin = mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.9, 16), M.polished, 0, -0.18, 0);
  pin.rotation.z = Math.PI / 2;
  g.add(pin);
  [-0.42, 0.42].forEach(x => {
    const cir = mesh(new THREE.TorusGeometry(0.085, 0.014, 6, 18), M.darkSteel, x, -0.18, 0);
    cir.rotation.y = Math.PI / 2;
    g.add(cir);
  });
  // 连杆 + 大头盖
  const rod = mesh(new THREE.CylinderGeometry(0.09, 0.13, 0.85, 14), M.steel, 0, -0.72, 0);
  rod.rotation.z = 0.12;
  g.add(rod);
  const bigEnd = mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.16, 20), M.darkSteel, -0.1, -1.1, 0);
  bigEnd.rotation.z = Math.PI / 2;
  g.add(bigEnd);
  [-0.2, 0.06].forEach(x => {
    const cap = mesh(new THREE.CylinderGeometry(0.175, 0.175, 0.05, 20), M.iron, x - 0.03, -1.1, 0);
    cap.rotation.z = Math.PI / 2;
    g.add(cap);
  });
  g.add(mesh(new THREE.CylinderGeometry(0.14, 0.17, 0.6, 18), M.iron, 0, -0.62, 0));
  return g;
}

function buildLadle() {
  const g = new THREE.Group();
  const pts = [
    new THREE.Vector2(0.03, 0), new THREE.Vector2(0.42, 0.05), new THREE.Vector2(0.58, 0.22),
    new THREE.Vector2(0.62, 0.45), new THREE.Vector2(0.56, 0.62),
  ];
  const bowlGeo = new THREE.LatheGeometry(pts, 32);
  const bowl = mesh(bowlGeo, M.iron, 0, 0.18, 0);
  const inner = mesh(new THREE.LatheGeometry(pts.map(p => new THREE.Vector2(p.x * 0.92, p.y)), 32),
    new THREE.MeshStandardMaterial({ color: 0xb05a20, metalness: 0.4, roughness: 0.5, emissive: 0x431c05, emissiveIntensity: 0.9 }), 0, 0.2, 0);
  g.add(bowl, inner);
  // 外壳加强箍 + 耐火内衬沿口
  [0.32, 0.52].forEach(y => {
    const rib = mesh(new THREE.TorusGeometry(0.6 - y * 0.06, 0.025, 8, 36), M.darkSteel, 0, y, 0);
    rib.rotation.x = Math.PI / 2;
    g.add(rib);
  });
  const lip = mesh(new THREE.TorusGeometry(0.55, 0.035, 8, 36), M.darkSteel, 0, 0.79, 0);
  lip.rotation.x = Math.PI / 2;
  g.add(lip);
  // 耳轴 + 齿圈
  [-0.68, 0.68].forEach(x => {
    const trunnion = mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.2, 14), M.polished, x, 0.55, 0);
    trunnion.rotation.z = Math.PI / 2;
    g.add(trunnion);
  });
  const gearRing = mesh(new THREE.TorusGeometry(0.14, 0.035, 8, 24), M.brass, 0.74, 0.55, 0);
  gearRing.rotation.y = Math.PI / 2;
  g.add(gearRing);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const t = mesh(new THREE.BoxGeometry(0.04, 0.04, 0.06), M.brass, 0.74, 0.55 + Math.sin(a) * 0.17, Math.cos(a) * 0.17);
    g.add(t);
  }
  // 支座 + 加强筋
  [-0.45, 0.45].forEach(x => g.add(mesh(new THREE.BoxGeometry(0.12, 0.3, 0.12), M.iron, x, 0.06, 0)));
  [-0.45, 0.45].forEach(x => {
    const rib2 = mesh(new THREE.BoxGeometry(0.05, 0.26, 0.18), M.darkSteel, x, 0.28, 0);
    rib2.rotation.z = x > 0 ? -0.3 : 0.3;
    g.add(rib2);
  });
  return g;
}

function buildTorch() {
  const g = new THREE.Group();
  const body = mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.6, 18), M.brass, 0, 0.55, 0);
  body.rotation.z = -0.5;
  const tip = mesh(new THREE.ConeGeometry(0.07, 0.3, 14), M.darkSteel, 0.22, 0.9, 0);
  tip.rotation.z = -0.5;
  const nozzle = mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.1, 12), M.polished, 0.3, 0.98, 0);
  nozzle.rotation.z = -0.5;
  const grip = mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.5, 14), M.iron, -0.16, 0.25, 0);
  grip.rotation.z = 0.35;
  // 扳机 + 阀门旋钮 + 接头螺帽
  const trigger = mesh(new THREE.BoxGeometry(0.04, 0.16, 0.05), M.polished, -0.02, 0.42, 0);
  trigger.rotation.z = 0.4;
  const knob = mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.06, 12), M.brass, 0.08, 0.72, 0);
  knob.rotation.x = Math.PI / 2;
  g.add(knob);
  [-0.04, 0.04].forEach(dz => {
    const wing = mesh(new THREE.BoxGeometry(0.16, 0.03, 0.03), M.brass, 0.08, 0.72, dz);
    g.add(wing);
  });
  const nut = mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.1, 6), M.polished, -0.3, 0.12, 0);
  nut.rotation.z = 0.35;
  g.add(body, tip, nozzle, grip, trigger, nut);
  const cable = mesh(new THREE.TorusGeometry(0.32, 0.035, 8, 26, Math.PI), M.rustDark, -0.34, 0.16, 0);
  cable.rotation.z = Math.PI * 0.6;
  g.add(cable);
  //  cable 接头
  const ferrule = mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.12, 10), M.darkSteel, -0.42, 0.1, 0);
  ferrule.rotation.z = Math.PI * 0.35;
  g.add(ferrule);
  return g;
}

function buildRoller() {
  const g = new THREE.Group();
  const drum = mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.3, 28), M.polished, 0, 0.35, 0);
  drum.rotation.z = Math.PI / 2;
  g.add(drum);
  [-0.68, 0.68].forEach(x => {
    const disc = mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.07, 28), M.darkSteel, x, 0.35, 0);
    disc.rotation.z = Math.PI / 2;
    g.add(disc);
    const axle = mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.28, 12), M.iron, x + (x > 0 ? 0.12 : -0.12), 0.35, 0);
    axle.rotation.z = Math.PI / 2;
    g.add(axle);
    // 轴承座
    const housing = mesh(new THREE.BoxGeometry(0.2, 0.3, 0.24), M.iron, x + (x > 0 ? 0.3 : -0.3), 0.3, 0);
    g.add(housing);
    const bearingCap = mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.22, 16), M.darkSteel,
      x + (x > 0 ? 0.24 : -0.24), 0.35, 0);
    bearingCap.rotation.z = Math.PI / 2;
    g.add(bearingCap);
    // 地脚
    const foot = mesh(new THREE.BoxGeometry(0.3, 0.06, 0.34), M.darkSteel, x + (x > 0 ? 0.3 : -0.3), 0.12, 0);
    g.add(foot);
  });
  for (let i = 0; i < 7; i++) {
    const band = mesh(new THREE.TorusGeometry(0.302, 0.012, 6, 30), M.darkSteel, -0.54 + i * 0.18, 0.35, 0);
    band.rotation.y = Math.PI / 2;
    g.add(band);
  }
  g.userData.spinAxis = 'x';
  return g;
}

function buildStack() {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(0.26, 0.31, 1.9, 28), M.iron, 0, 0.95, 0));
  // 顶部内口 + 雨帽 + 避雷针
  const mouth = mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.06, 22),
    new THREE.MeshStandardMaterial({ color: 0x14100c, roughness: 1 }), 0, 1.93, 0);
  g.add(mouth);
  const cap = mesh(new THREE.ConeGeometry(0.34, 0.18, 24), M.darkSteel, 0, 2.1, 0);
  g.add(cap);
  [-0.12, 0.12].forEach(x => {
    const strut = mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.16, 8), M.darkSteel, x, 2.0, 0);
    g.add(strut);
  });
  const rod = mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.3, 8), M.polished, 0, 2.3, 0);
  g.add(rod);
  const rim = mesh(new THREE.TorusGeometry(0.27, 0.04, 8, 28), M.darkSteel, 0, 1.9, 0);
  rim.rotation.x = Math.PI / 2;
  g.add(rim, mesh(new THREE.CylinderGeometry(0.44, 0.48, 0.16, 26), M.darkSteel, 0, 0.08, 0));
  // 法兰 + 螺栓
  [0.55, 1.15].forEach(y => {
    const band = mesh(new THREE.TorusGeometry(0.29, 0.022, 8, 28), M.rust, 0, y, 0);
    band.rotation.x = Math.PI / 2;
    g.add(band);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      g.add(mesh(new THREE.SphereGeometry(0.028, 8, 6), M.darkSteel,
        Math.cos(a) * 0.29, y, Math.sin(a) * 0.29));
    }
  });
  // 爬梯
  for (let i = 0; i < 5; i++) {
    const rung = mesh(new THREE.BoxGeometry(0.16, 0.025, 0.025), M.darkSteel, 0, 0.4 + i * 0.3, 0.28);
    g.add(rung);
  }
  return g;
}

function buildValve() {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.0, 20), M.polished, 0, 0.5, 0));
  // 两端法兰盘 + 螺栓
  [0.18, 0.82].forEach(y => {
    const fl = mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.05, 20), M.darkSteel, 0, y, 0);
    g.add(fl);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      g.add(mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.08, 6), M.steel,
        Math.cos(a) * 0.155, y, Math.sin(a) * 0.155));
    }
  });
  // 阀体鼓包 + 填料压盖
  g.add(mesh(new THREE.SphereGeometry(0.17, 18, 14), M.darkSteel, 0, 0.5, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.12, 14), M.brass, 0, 0.94, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 12), M.polished, 0, 1.12, 0));
  const wheel = mesh(new THREE.TorusGeometry(0.3, 0.045, 10, 30), M.rust, 0, 1.3, 0);
  wheel.rotation.x = Math.PI / 2;
  g.add(wheel);
  // 轮辐 ×3 + 边缘握把珠
  for (let i = 0; i < 3; i++) {
    const spoke = mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.58, 8), M.rust, 0, 1.3, 0);
    spoke.rotation.z = Math.PI / 2;
    spoke.rotation.y = (i / 3) * Math.PI;
    g.add(spoke);
  }
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    g.add(mesh(new THREE.SphereGeometry(0.035, 10, 8), M.rust,
      Math.cos(a) * 0.3, 1.3, Math.sin(a) * 0.3));
  }
  g.add(mesh(new THREE.SphereGeometry(0.06, 14, 10), M.brass, 0, 1.3, 0));
  return g;
}

function gaugeFaceTexture() {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 256;
  const c = cv.getContext('2d');
  c.fillStyle = '#e9e4d4'; c.beginPath(); c.arc(128, 128, 126, 0, Math.PI * 2); c.fill();
  c.strokeStyle = '#2a2a2e'; c.lineWidth = 5;
  c.beginPath(); c.arc(128, 128, 118, 0, Math.PI * 2); c.stroke();
  for (let i = 0; i <= 12; i++) {
    const a = Math.PI * 0.75 + (i / 12) * Math.PI * 1.5;
    const r1 = 118, r2 = i % 3 === 0 ? 88 : 100;
    c.lineWidth = i % 3 === 0 ? 6 : 3;
    c.beginPath();
    c.moveTo(128 + Math.cos(a) * r1, 128 + Math.sin(a) * r1);
    c.lineTo(128 + Math.cos(a) * r2, 128 + Math.sin(a) * r2);
    c.stroke();
  }
  // 指针
  const na = Math.PI * 0.75 + 0.62 * Math.PI * 1.5;
  c.strokeStyle = '#b5432e'; c.lineWidth = 7;
  c.beginPath(); c.moveTo(128, 128); c.lineTo(128 + Math.cos(na) * 84, 128 + Math.sin(na) * 84); c.stroke();
  c.fillStyle = '#2a2a2e'; c.beginPath(); c.arc(128, 128, 12, 0, Math.PI * 2); c.fill();
  const tex = new THREE.CanvasTexture(cv);
  return tex;
}

function buildGauge() {
  const g = new THREE.Group();
  const body = mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.2, 32), M.darkSteel, 0, 0.75, 0);
  body.rotation.x = Math.PI / 2;
  g.add(body);
  const face = mesh(new THREE.CircleGeometry(0.37, 32),
    new THREE.MeshBasicMaterial({ map: gaugeFaceTexture() }), 0, 0.75, 0.105);
  g.add(face);
  // 玻璃罩 +  bezel + 固定螺栓
  const glass = mesh(new THREE.CircleGeometry(0.36, 32),
    new THREE.MeshStandardMaterial({ color: 0xdfeaf5, transparent: true, opacity: 0.22, roughness: 0.05, metalness: 0.1 }), 0, 0.75, 0.118);
  g.add(glass);
  const rim = mesh(new THREE.TorusGeometry(0.42, 0.045, 10, 34), M.polished, 0, 0.75, 0.1);
  g.add(rim);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    g.add(mesh(new THREE.SphereGeometry(0.025, 8, 6), M.darkSteel,
      Math.cos(a) * 0.42, 0.75 + Math.sin(a) * 0.42, 0.12));
  }
  // 侧接管 + 下部接头
  const side = mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.24, 12), M.steel, 0.42, 0.75, 0);
  side.rotation.z = Math.PI / 2;
  g.add(side);
  g.add(mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.1, 12), M.darkSteel, 0.55, 0.75, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.06, 0.09, 0.45, 14), M.steel, 0, 0.28, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.14, 0.17, 0.1, 16), M.darkSteel, 0, 0.05, 0));
  // U型管弯头
  const elbow = mesh(new THREE.TorusGeometry(0.12, 0.05, 8, 16, Math.PI), M.brass, 0, 0.02, 0);
  elbow.rotation.z = Math.PI;
  g.add(elbow);
  return g;
}

function buildBolt() {
  const g = new THREE.Group();
  // 六角头 + 头部标识槽
  g.add(mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.26, 6), M.polished, 0, 0.68, 0));
  const slot = mesh(new THREE.BoxGeometry(0.4, 0.02, 0.06), M.darkSteel, 0, 0.82, 0);
  g.add(slot);
  const washer = mesh(new THREE.TorusGeometry(0.24, 0.05, 8, 26), M.darkSteel, 0, 0.53, 0);
  washer.rotation.x = Math.PI / 2;
  g.add(washer);
  // 杆身 + 更多螺纹 + 尖端
  g.add(mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.62, 18), M.polished, 0, 0.2, 0));
  for (let i = 0; i < 7; i++) {
    const t = mesh(new THREE.TorusGeometry(0.152, 0.016, 6, 24), M.darkSteel, 0, 0.42 - i * 0.06, 0);
    t.rotation.x = Math.PI / 2;
    g.add(t);
  }
  const tip = mesh(new THREE.ConeGeometry(0.13, 0.14, 14), M.darkSteel, 0, -0.16, 0);
  tip.rotation.x = Math.PI;
  g.add(tip);
  // 配套螺母
  const nut = mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.18, 6), M.steel, 0.5, 0.12, 0.3);
  nut.rotation.x = Math.PI / 2;
  g.add(nut);
  const nut2 = mesh(new THREE.TorusGeometry(0.16, 0.035, 6, 6), M.darkSteel, 0.5, 0.03, 0.3);
  nut2.rotation.x = Math.PI / 2;
  g.add(nut2);
  return g;
}

function buildPlate() {
  const g = new THREE.Group();
  const p = mesh(new THREE.BoxGeometry(1.35, 0.07, 0.95), M.rust, 0, 0.05, 0);
  p.rotation.y = 0.12;
  g.add(p);
  // 波纹楞线
  [-0.3, -0.1, 0.1, 0.3].forEach(z => {
    const rib = mesh(new THREE.BoxGeometry(1.3, 0.025, 0.05), M.rustDark, 0, 0.095, z);
    rib.rotation.y = 0.12;
    g.add(rib);
  });
  const patch = mesh(new THREE.BoxGeometry(0.5, 0.05, 0.4), M.rustDark, -0.3, 0.11, 0.15);
  patch.rotation.y = -0.2;
  g.add(patch);
  const patch2 = mesh(new THREE.BoxGeometry(0.3, 0.045, 0.26), M.rustDark, 0.42, 0.105, -0.2);
  patch2.rotation.y = 0.4;
  g.add(patch2);
  // 补丁铆钉 + 边缘铆钉
  const rivetGeo = new THREE.CylinderGeometry(0.045, 0.05, 0.06, 10);
  [[-0.48, 0.02], [-0.12, 0.28], [-0.12, 0.02], [0.3, -0.28], [0.3, -0.12], [0.54, -0.28]].forEach(([x, z]) =>
    g.add(mesh(rivetGeo, M.darkSteel, x, 0.13, z)));
  [[-0.58, -0.38], [-0.58, 0.38], [0.58, -0.38], [0.58, 0.38]].forEach(([x, z]) =>
    g.add(mesh(rivetGeo, M.darkSteel, x, 0.1, z)));
  // 卷边
  const curl = mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.9, 10), M.rustDark, -0.68, 0.09, 0);
  g.add(curl);
  return g;
}

const BUILDERS = {
  gear: buildGear, piston: buildPiston, ladle: buildLadle, torch: buildTorch,
  roller: buildRoller, stack: buildStack, valve: buildValve, gauge: buildGauge,
  bolt: buildBolt, plate: buildPlate,
};

/* ---------- 名称标牌 ---------- */
function makeNameSprite(part) {
  const cv = document.createElement('canvas');
  cv.width = 320; cv.height = 84;
  const c = cv.getContext('2d');
  c.fillStyle = 'rgba(12,12,14,.82)';
  c.fillRect(24, 8, 272, 52);
  c.strokeStyle = '#6d6d66'; c.lineWidth = 2.5;
  c.strokeRect(25, 9, 270, 50);
  c.fillStyle = '#eceae4';
  c.font = `600 30px ${FONT_STACK}`;
  c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText(part.name, 160, 35);
  c.fillStyle = '#7b7b74'; c.font = `500 17px ${FONT_STACK}`;
  c.fillText(part.en, 160, 74);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(cv), transparent: true, depthTest: false,
  }));
  sp.scale.set(1.7, 0.45, 1);
  sp.renderOrder = 10;
  return sp;
}

export function initParts(items, pop) {
  const canvas = document.getElementById('parts-belt');
  const view = document.getElementById('parts');
  if (!canvas || !view) return;

  const byId = new Map(items.map(it => [it.id, it]));

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0c0c0e);
  scene.fog = new THREE.Fog(0x0c0c0e, 26, 72);

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
  const camBase = new THREE.Vector3(0, 6.6, 13.2);
  camera.position.copy(camBase);
  camera.lookAt(0, 0.3, -12);

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  scene.add(new THREE.HemisphereLight(0xcdd2e0, 0x333338, 0.85));
  const key = new THREE.DirectionalLight(0xffffff, 1.35);
  key.position.set(6, 14, 8);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x9a9aa8, 0.7);
  rim.position.set(-8, 8, -12);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0xb8bcc8, 0.6);
  fill.position.set(-9, 6, 10);
  scene.add(fill);

  /* ---------- 传送带 ---------- */
  function beltTexture() {
    const cv = document.createElement('canvas');
    cv.width = 128; cv.height = 512;
    const c = cv.getContext('2d');
    c.fillStyle = '#131316'; c.fillRect(0, 0, 128, 512);
    for (let y = 0; y < 512; y += 64) {
      c.fillStyle = '#191920'; c.fillRect(0, y, 128, 3);
      c.fillStyle = '#0d0d10'; c.fillRect(0, y + 3, 128, 1);
    }
    c.fillStyle = '#202027';
    for (let y = 0; y < 512; y += 32) c.fillRect(62, y, 4, 16);
    const eg = c.createLinearGradient(0, 0, 128, 0);
    eg.addColorStop(0, 'rgba(0,0,0,.55)'); eg.addColorStop(0.12, 'rgba(0,0,0,0)');
    eg.addColorStop(0.88, 'rgba(0,0,0,0)'); eg.addColorStop(1, 'rgba(0,0,0,.55)');
    c.fillStyle = eg; c.fillRect(0, 0, 128, 512);
    const tex = new THREE.CanvasTexture(cv);
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 5);
    tex.anisotropy = 4;
    return tex;
  }

  const beltLen = BELT.zNear - BELT.zFar;
  const beltTex = beltTexture();
  const belt = new THREE.Mesh(
    new THREE.PlaneGeometry(BELT.width, beltLen),
    new THREE.MeshBasicMaterial({ map: beltTex })
  );
  belt.rotation.x = -Math.PI / 2;
  belt.position.set(0, 0, (BELT.zNear + BELT.zFar) / 2);
  scene.add(belt);

  const base = new THREE.Mesh(
    new THREE.BoxGeometry(BELT.width + 1.2, 0.5, beltLen),
    new THREE.MeshStandardMaterial({ color: 0x0a0a0c, roughness: 0.9 })
  );
  base.position.set(0, -0.26, belt.position.z);
  scene.add(base);

  const railMat = new THREE.MeshStandardMaterial({ color: 0x74747a, metalness: 0.9, roughness: 0.42 });
  [-1, 1].forEach(s => {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, beltLen), railMat);
    rail.position.set(s * (BELT.width / 2 + 0.25), 0.26, belt.position.z);
    scene.add(rail);
  });

  /* ---------- 匹配相关作品 ---------- */
  function matchItems(part) {
    const out = [];
    const seen = new Set();
    part.ids.forEach(id => {
      const it = byId.get(id);
      if (it && !seen.has(it.id)) { seen.add(it.id); out.push(it); }
    });
    items.forEach(it => {
      if (!seen.has(it.id) && part.kw.test(it.title)) {
        seen.add(it.id); out.push(it);
      }
    });
    return out;
  }

  /* ---------- 零件模型 ---------- */
  const movers = [];

  PARTS.forEach((part, i) => {
    part.matched = matchItems(part);
    const group = new THREE.Group();
    const model = BUILDERS[part.model]();
    group.add(model);

    // 悬停光圈
    const ringGeo = new THREE.TorusGeometry(0.85, 0.028, 8, 40);
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
      color: 0xd4d4ce, transparent: true, opacity: 0, depthWrite: false,
    }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.03;
    group.add(ring);

    // 透明命中盒
    const hit = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 0.85, 1.9, 8),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
    );
    hit.position.y = 0.85;
    group.add(hit);

    const label = makeNameSprite(part);
    label.position.y = 2.0;
    group.add(label);

    group.rotation.y = (Math.random() - 0.5) * 0.5;
    group.position.set(
      LANES[i % LANES.length] + (Math.random() - 0.5) * 0.4,
      0.32,
      BELT.zFar + (i / PARTS.length) * (beltLen - 12) + 5
    );
    scene.add(group);
    movers.push({
      group, model, hit, ring, part,
      speed: 3.6 + Math.random() * 1.5,
      phase: Math.random() * Math.PI * 2,
      sTarget: 1, yBase: 0.32,
      spinAxis: model.userData.spinAxis || 'y',
    });
  });

  /* ---------- 视口可见时才渲染 ---------- */
  let inView = true;
  new IntersectionObserver(es => { inView = es[0].isIntersecting; }, { threshold: 0.05 }).observe(view);

  /* ---------- 悬停 + 点击 ---------- */
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2(-10, -10);
  const par = { x: 0, y: 0, tx: 0, ty: 0 };
  let hovered = null;

  canvas.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    par.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    par.ty = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  canvas.addEventListener('pointerleave', () => pointer.set(-10, -10));

  /* ---------- 中键拖动：旋转视角 ---------- */
  const lookTarget = new THREE.Vector3(0, 0.3, -12);
  let camAz = 0, camAzT = 0;
  let midDrag = null;
  canvas.addEventListener('pointerdown', e => {
    if (e.button !== 1) return;
    e.preventDefault();
    midDrag = { x: e.clientX };
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', e => {
    if (midDrag && (e.buttons & 4)) {
      camAzT = Math.min(0.55, Math.max(-0.55, camAzT + (e.clientX - midDrag.x) * 0.0022));
      midDrag = { x: e.clientX };
    }
  });
  canvas.addEventListener('pointerup', e => { if (e.button === 1) midDrag = null; });
  canvas.addEventListener('auxclick', e => { if (e.button === 1) e.preventDefault(); });

  /* ---------- 滚轮：流水线前移 / 后退 ---------- */
  let beltBoost = 0, beltBoostT = 0;
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    e.stopPropagation();
    beltBoostT = Math.min(9, Math.max(-9, beltBoostT + e.deltaY * 0.006));
  }, { passive: false });

  canvas.addEventListener('click', e => {
    if (hovered) {
      e.stopPropagation();
      pop.open({
        num: '', title: `机器碎片 · ${hovered.part.name}`,
        sub: `${hovered.part.en} · ${hovered.matched.length} 条相关档案`,
        desc: hovered.part.desc, items: hovered.matched,
      });
    }
    // 未命中零件：不拦截，冒泡到视图层 → 空白退出
  });

  function resize() {
    const w = view.clientWidth, h = view.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  /* ---------- 动画 ---------- */
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    if (!inView) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    beltBoost += (beltBoostT - beltBoost) * 0.08;
    beltTex.offset.y -= dt * Math.max(-1.6, 0.45 + beltBoost * 0.09);

    movers.forEach(m => {
      m.group.position.z += (m.speed + beltBoost) * dt;
      if (m.group.position.z > BELT.zNear) {
        m.group.position.z = BELT.zFar - Math.random() * 6;
        m.group.position.x = LANES[Math.floor(Math.random() * LANES.length)]
          + (Math.random() - 0.5) * 0.4;
      }
      m.model.rotation[m.spinAxis] += dt * 0.6;
      m.group.rotation.y += Math.sin(t * 1.2 + m.phase) * 0.0004;
      const s = m.group.scale.x + (m.sTarget - m.group.scale.x) * 0.12;
      m.group.scale.setScalar(s);
      m.group.position.y += ((m.yBase + (m === hovered ? 0.22 : 0)) - m.group.position.y) * 0.12;
      m.ring.material.opacity += ((m === hovered ? 0.95 : 0) - m.ring.material.opacity) * 0.14;
    });

    par.x += (par.tx - par.x) * 0.05;
    par.y += (par.ty - par.y) * 0.05;
    camAz += (camAzT - camAz) * 0.07;
    camera.position.set(
      lookTarget.x + Math.sin(camAz) * 25.2 + par.x * 1.1,
      camBase.y - par.y * 0.5,
      lookTarget.z + Math.cos(camAz) * 25.2
    );
    camera.lookAt(par.x * 1.6 + lookTarget.x * 0.4, 0.3, -12);

    raycaster.setFromCamera(pointer, camera);
    const hitMesh = raycaster.intersectObjects(movers.map(m => m.hit), false)[0];
    const newHover = hitMesh ? movers.find(m => m.hit === hitMesh.object) : null;
    if (newHover !== hovered) {
      if (hovered) hovered.sTarget = 1;
      hovered = newHover;
      if (hovered) hovered.sTarget = 1.16;
      document.body.style.cursor = hovered ? 'pointer' : 'default';
    }

    renderer.render(scene, camera);
  }
  animate();
}
