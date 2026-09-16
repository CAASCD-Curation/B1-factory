// 建筑骨骼 · 空间拆解 —— Three.js 三维爆炸模型
// 六层工厂结构悬浮拆解：悬停展示该层具体图，点击调出相关作品
import * as THREE from 'three';

const SECTIONS = [
  {
    num: '01', name: '烟囱与天际线', en: 'CHIMNEY & SKYLINE',
    desc: '工厂最先被看见的部分——烟囱、冷却塔与轮廓线，是工业写在天空上的署名。',
    ids: [4, 5, 63, 69, 88, 40, 15, 17, 96, 74, 81, 126, 142, 145],
    kw: /烟囱|冷却塔|天际线|剪影|轮廓|拂晓|风力|风车/,
  },
  {
    num: '02', name: '屋顶之上', en: 'ON THE ROOF',
    desc: '屋顶跑道、滑雪大跳台与筒仓——厂房之顶，是工厂最意想不到的再利用空间。',
    ids: [45, 40, 39, 44, 34, 20, 140, 50],
    kw: /屋顶|跑道|大跳台|筒仓|天窗|谷仓|跳台|俯瞰/,
  },
  {
    num: '03', name: '厂房与车间', en: 'THE HALL',
    desc: '容纳生产的主体空间——车间、厂房与无尘盒子：人从这里被组织进生产。',
    ids: [51, 12, 99, 60, 65, 72, 76, 90, 85, 89, 54, 25, 43, 29, 42, 23],
    kw: /车间|厂房|厂区|无尘|大楼|工坊|校舍|艺术中心/,
  },
  {
    num: '04', name: '骨架与结构', en: 'THE FRAME',
    desc: '钢骨、桁架与等轴测图解——支撑一切的、通常看不见的秩序。',
    ids: [7, 46, 50, 6, 8, 10, 14, 16, 67, 98, 78, 49, 48],
    kw: /钢构|钢架|骨架|框架|脚手架|速写|构成|等轴测|数据可视化|重建/,
  },
  {
    num: '05', name: '地面与流水线', en: 'THE FLOOR LINE',
    desc: '传送带、熔炉与机械韵律——地面的节拍器，定义了现代劳动的速度。',
    ids: [9, 41, 18, 2, 11, 52, 53, 61, 66, 83, 33, 152, 162, 163],
    kw: /流水线|生产线|传送带|机器人|黑灯|自动化|装配|熔炉|钢水|轧|锻|铸造|活塞/,
  },
  {
    num: '06', name: '地下与基础', en: 'THE FOUNDATION',
    desc: '基坑、矿井与培养舱——工厂向地下的延伸，和它对“基础”的重新定义。',
    ids: [127, 116, 37, 82, 79, 49, 48, 121],
    kw: /基坑|地基|矿井|煤矿|矿山|培养舱|墓|埋葬|下水道|地下机房/,
  },
];

/* ---------- 材质（浅淡科技蓝 · 素雅线面简模） ---------- */
const MAT = {
  plate: new THREE.MeshStandardMaterial({ color: 0xf6f8fc, roughness: 0.92, metalness: 0.04 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x8b96a9, roughness: 0.85, metalness: 0.12 }),
  silver: new THREE.MeshStandardMaterial({ color: 0xd9dfe9, roughness: 0.38, metalness: 0.55 }),
  frame: new THREE.MeshStandardMaterial({ color: 0xaeb9cb, roughness: 0.5, metalness: 0.4 }),
  iron: new THREE.MeshStandardMaterial({ color: 0x5d687c, roughness: 0.6, metalness: 0.35 }),
  glow: new THREE.MeshStandardMaterial({ color: 0xc4d9ee, roughness: 0.6, emissive: 0x7fa3c8, emissiveIntensity: 0.55 }),
  smoke: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, transparent: true, opacity: 0.5 }),
  belt: new THREE.MeshStandardMaterial({ color: 0x66738a, roughness: 0.95 }),
};

const box = (w, h, d, mat) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);

/* ---------- 构造辅助 ---------- */
const EDGE_MAT = new THREE.LineBasicMaterial({ color: 0x5d6d85, transparent: true, opacity: 0.5 });

// 带轮廓线的网格：返回 [mesh, edgesLine]
function detailed(m, opacity) {
  const e = new THREE.LineSegments(
    new THREE.EdgesGeometry(m.geometry, 24),
    opacity == null ? EDGE_MAT : new THREE.LineBasicMaterial({ color: 0x8f8f89, transparent: true, opacity })
  );
  e.position.copy(m.position);
  e.rotation.copy(m.rotation);
  e.scale.copy(m.scale);
  return [m, e];
}

// 沿 (x1,z1)-(x2,z2) 的栏杆：扶手 + 立柱
function railing(g, x1, z1, x2, z2, y, h = 0.34) {
  const dx = x2 - x1, dz = z2 - z1;
  const len = Math.hypot(dx, dz);
  const n = Math.max(2, Math.round(len / 0.55));
  const rail = box(len, 0.05, 0.05, MAT.silver);
  rail.position.set((x1 + x2) / 2, y + h, (z1 + z2) / 2);
  rail.rotation.y = -Math.atan2(dz, dx);
  g.add(rail);
  for (let i = 0; i <= n; i++) {
    const post = box(0.04, h, 0.04, MAT.silver);
    post.position.set(x1 + dx * (i / n), y + h / 2, z1 + dz * (i / n));
    g.add(post);
  }
}

// 板面网格线（建筑模型底板刻度感）
const GRID_MAT = new THREE.LineBasicMaterial({ color: 0x9db0c6, transparent: true, opacity: 0.4 });
function plateGrid(g, w, d, y) {
  const pts = [];
  for (let x = -w / 2 + 1; x < w / 2; x += 1) pts.push(x, 0, -d / 2, x, 0, d / 2);
  for (let z = -d / 2 + 1; z < d / 2; z += 1) pts.push(-w / 2, 0, z, w / 2, 0, z);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const lines = new THREE.LineSegments(geo, GRID_MAT);
  lines.position.y = y;
  g.add(lines);
}

// 两跑楼梯（踏步 + 斜梁）
function staircase(g, x, z, y, h, dirZ = 1) {
  const steps = 9;
  for (let i = 0; i < steps; i++) {
    const st = box(0.5, 0.05, 0.24, MAT.dark);
    st.position.set(x, y + (i + 0.5) * (h / steps), z + dirZ * (i * 0.22));
    g.add(st);
  }
  const beamL = Math.hypot(h, steps * 0.22);
  [-0.24, 0.24].forEach(dx => {
    const beam = box(0.06, beamL, 0.08, MAT.frame);
    beam.position.set(x + dx, y + h / 2, z + dirZ * steps * 0.11);
    beam.rotation.x = dirZ * Math.atan2(steps * 0.22, h);
    g.add(beam);
  });
}

// 工人剪影（比例人）
function figure(g, x, z, y = 0.36) {
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.42, 8), MAT.iron);
  body.position.set(x, y + 0.21, z);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), MAT.iron);
  head.position.set(x, y + 0.52, z);
  g.add(body, head);
}

/* ---------- 各层建造 ---------- */
const PW = 9, PD = 7; // 板尺寸

function buildChimney() {
  const g = new THREE.Group();
  detailed(box(PW, 0.3, PD, MAT.plate)).forEach(o => g.add(o));
  plateGrid(g, PW, PD, 0.151);
  // 烟囱：筒身 + 环箍 + 爬梯 + 顶帽
  const ch = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.4, 2.8, 20), MAT.dark);
  ch.position.set(2.4, 1.55, -1.2);
  detailed(ch).forEach(o => g.add(o));
  [0.7, 1.4, 2.1].forEach(y => {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.345 + (2.8 - y) * 0.012, 0.022, 8, 22), MAT.silver);
    band.rotation.x = Math.PI / 2;
    band.position.set(2.4, y, -1.2);
    g.add(band);
  });
  for (let i = 0; i < 7; i++) {
    const rung = box(0.2, 0.03, 0.03, MAT.silver);
    rung.position.set(2.4, 0.5 + i * 0.34, -0.82);
    g.add(rung);
  }
  detailed(box(0.9, 0.22, 0.9, MAT.silver)).forEach(o => { o.position.set(2.4, 3.0, -1.2); g.add(o); });
  // 天际线：错落的厂房体量 + 窗带
  const hs = [0.5, 0.9, 0.65, 1.2, 0.75, 0.55, 1.0];
  hs.forEach((h, i) => {
    const b = box(0.7 + (i % 3) * 0.25, h, 0.8, MAT.dark);
    b.position.set(-3.6 + i * 1.1, 0.15 + h / 2, 1.6 + (i % 2) * 0.7);
    detailed(b, 0.4).forEach(o => g.add(o));
    for (let w = 0; w < 3; w++) {
      const win = box(0.12, 0.1, 0.02, MAT.glow);
      win.position.set(b.position.x - 0.2 + w * 0.2, 0.3 + h * 0.5, b.position.z + 0.41);
      g.add(win);
    }
  });
  // 冷却塔（双曲线） + 连廊
  const coolPts = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8;
    coolPts.push(new THREE.Vector2(0.28 + Math.sin(t * Math.PI) * 0.24, t * 1.1));
  }
  const cool = new THREE.Mesh(new THREE.LatheGeometry(coolPts, 18), MAT.dark);
  cool.position.set(-3.2, 0.15, -1.8);
  detailed(cool, 0.35).forEach(o => g.add(o));
  detailed(box(2.4, 0.16, 0.5, MAT.frame)).forEach(o => { o.position.set(-0.6, 0.5, -1.6); g.add(o); });
  // 板边栏杆
  railing(g, -PW / 2 + 0.1, -PD / 2 + 0.1, PW / 2 - 0.1, -PD / 2 + 0.1, 0.15);
  // 电杆 + 导线
  [-3.6, -0.4].forEach(x => {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 2.2, 8), MAT.dark);
    pole.position.set(x, 1.25, 2.6);
    g.add(pole);
    const cross = box(0.5, 0.04, 0.04, MAT.dark);
    cross.position.set(x, 2.15, 2.6);
    g.add(cross);
  });
  const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 3.2, 6), MAT.silver);
  wire.rotation.z = Math.PI / 2;
  wire.position.set(-2, 2.08, 2.6);
  g.add(wire);
  // 烟
  [[0, 0, 0, 0.34], [0.3, 0.5, -0.15, 0.44], [0.7, 1.05, -0.3, 0.55]].forEach(([x, y, z, r]) => {
    const s = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 12), MAT.smoke);
    s.position.set(2.4 + x, 3.3 + y, -1.2 + z); g.add(s);
  });
  return g;
}

function buildRoof() {
  const g = new THREE.Group();
  detailed(box(PW, 0.28, PD, MAT.plate)).forEach(o => g.add(o));
  plateGrid(g, PW, PD, 0.141);
  // 天窗（带窗棂）
  [-2.2, 0, 2.2].forEach(x => {
    const sk = box(1.5, 0.14, 2.2, MAT.glow);
    sk.position.set(x, 0.2, -0.6);
    detailed(sk, 0.7).forEach(o => g.add(o));
    [-0.5, 0, 0.5].forEach(dx => {
      const bar = box(0.05, 0.18, 2.2, MAT.frame);
      bar.position.set(x + dx, 0.22, -0.6);
      g.add(bar);
    });
  });
  // 女儿墙护栏（含立柱）
  [[0, -PD / 2 + 0.08, PW, 0.1], [0, PD / 2 - 0.08, PW, 0.1]].forEach(([x, z, w]) => {
    const r = box(w, 0.3, 0.08, MAT.silver);
    r.position.set(x, 0.28, z);
    g.add(r);
    railing(g, x - w / 2, z, x + w / 2, z, 0.42, 0.26);
  });
  [-PW / 2 + 0.08, PW / 2 - 0.08].forEach(x => {
    const r = box(0.08, 0.3, PD, MAT.silver);
    r.position.set(x, 0.28, 0);
    g.add(r);
    railing(g, x, -PD / 2, x, PD / 2, 0.42, 0.26);
  });
  // 屋顶测试跑道（灵格托）
  const track = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.045, 8, 60), MAT.frame);
  track.rotation.x = -Math.PI / 2;
  track.position.set(0, 0.18, 0.4);
  track.scale.set(1.5, 1, 1);
  g.add(track);
  // 通风帽 + 楼梯间出屋面
  [[-3.4, 2.2], [-2.8, 2.5]].forEach(([x, z]) => {
    const vent = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.5, 14), MAT.dark);
    vent.position.set(x, 0.5, z);
    detailed(vent, 0.4).forEach(o => g.add(o));
    const cap = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.18, 14), MAT.silver);
    cap.position.set(x, 0.83, z);
    g.add(cap);
  });
  const bulk = box(0.9, 0.7, 0.8, MAT.dark);
  bulk.position.set(3.4, 0.5, -2.4);
  detailed(bulk, 0.45).forEach(o => g.add(o));
  const doorFrame = box(0.4, 0.5, 0.04, MAT.glow);
  doorFrame.position.set(3.4, 0.45, -1.98);
  g.add(doorFrame);
  // 屋面通风管道
  const duct = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 5.4, 12), MAT.dark);
  duct.rotation.z = Math.PI / 2;
  duct.position.set(0.4, 0.42, 2.5);
  detailed(duct, 0.3).forEach(o => g.add(o));
  const ductElbow = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.13, 8, 12, Math.PI / 2), MAT.dark);
  ductElbow.position.set(3.05, 0.55, 2.5);
  ductElbow.rotation.z = Math.PI / 2;
  g.add(ductElbow);
  // 波纹屋面楞线
  [-1.9, -1.3, -0.7, 0.7, 1.3, 1.9].forEach(z => {
    const rib = box(PW - 0.6, 0.04, 0.06, MAT.frame);
    rib.position.set(0, 0.16, z);
    g.add(rib);
  });
  return g;
}

function buildHall() {
  const g = new THREE.Group();
  detailed(box(PW, 0.3, PD, MAT.plate)).forEach(o => g.add(o));
  plateGrid(g, PW, PD, 0.151);
  const H = 1.9, T = 0.12;
  // 墙体（带轮廓线）
  const walls = [
    [PW, H, T, 0, -PD / 2 + T / 2], [PW, H, T, 0, PD / 2 - T / 2],
    [T, H, PD, -PW / 2 + T / 2, 0], [T, H, PD, PW / 2 - T / 2, 0],
  ];
  walls.forEach(([w, h, d, x, z]) => {
    const m = box(w, h, d, MAT.dark);
    m.position.set(x, h / 2, z);
    detailed(m, 0.45).forEach(o => g.add(o));
  });
  // 内部柱网（两行五列）
  for (let i = 0; i < 5; i++) {
    const x = -PW / 2 + 0.9 + i * (PW - 1.8) / 4;
    [-1.5, 1.5].forEach(z => {
      const col = box(0.13, H, 0.13, MAT.frame);
      col.position.set(x, H / 2, z);
      detailed(col, 0.35).forEach(o => g.add(o));
    });
  }
  // 窗带 + 窗棂
  [-2.6, -0.9, 0.9, 2.6].forEach(x => {
    const w1 = box(1.0, 0.55, 0.04, MAT.glow); w1.position.set(x, 1.15, -PD / 2 + T + 0.02);
    const w2 = w1.clone(); w2.position.z = PD / 2 - T - 0.02;
    g.add(w1, w2);
    [-0.33, 0, 0.33].forEach(dx => {
      const m1 = box(0.04, 0.55, 0.05, MAT.frame); m1.position.set(x + dx, 1.15, -PD / 2 + T + 0.03);
      const m2 = m1.clone(); m2.position.z = PD / 2 - T - 0.03;
      g.add(m1, m2);
    });
  });
  // 大门（门框 + 双扇）
  const doorL = box(0.58, 1.35, 0.06, MAT.glow); doorL.position.set(-0.3, 0.82, PD / 2 - T - 0.03);
  const doorR = doorL.clone(); doorR.position.x = 0.3;
  const dFrame = box(1.3, 0.08, 0.1, MAT.silver); dFrame.position.set(0, 1.53, PD / 2 - T - 0.03);
  g.add(doorL, doorR, dFrame);
  // 屋架：横梁 + 弧形桁架
  const beam = box(PW, 0.14, 0.3, MAT.frame); beam.position.set(0, H + 0.05, 0);
  g.add(beam);
  // 墙面板拼缝
  for (let x = -3.85; x <= 3.85; x += 1.1) {
    const seamN = box(0.03, H - 0.1, 0.02, MAT.frame);
    seamN.position.set(x, H / 2, -PD / 2 + T + 0.01);
    const seamS = seamN.clone(); seamS.position.z = PD / 2 - T - 0.01;
    g.add(seamN, seamS);
  }
  // 波纹屋面楞线
  [-2.2, -1.1, 0, 1.1, 2.2].forEach(z => {
    const rib = box(PW - 0.3, 0.05, 0.07, MAT.frame);
    rib.position.set(0, H + 0.16, z);
    g.add(rib);
  });
  [-2.4, -0.8, 0.8, 2.4].forEach(x => {
    const truss = new THREE.Mesh(new THREE.TorusGeometry(PD / 2 - 0.15, 0.05, 6, 24, Math.PI), MAT.frame);
    truss.rotation.y = Math.PI / 2;
    truss.position.set(x, H + 0.12, 0);
    g.add(truss);
  });
  // 内部房间隔墙（清晰可见的室内分隔）
  const PT = 0.07, PH = 1.35;
  [[-2.9, -PD / 2 + T, -2.9, -0.6], [-1.3, -PD / 2 + T, -1.3, -1.4],
   [2.2, 1.2, 2.2, PD / 2 - T], [-3.4, 1.6, -1.6, 1.6]].forEach(([x1, z1, x2, z2]) => {
    const dx = x2 - x1, dz = z2 - z1;
    const m = box(Math.max(Math.abs(dx), PT), PH, Math.max(Math.abs(dz), PT), MAT.plate);
    m.position.set((x1 + x2) / 2, PH / 2, (z1 + z2) / 2);
    detailed(m, 0.5).forEach(o => g.add(o));
  });
  // 角部楼梯 + 工人剪影
  staircase(g, -3.9, -2.6, 0.15, H, 1);
  figure(g, 1.4, 0.6);
  figure(g, -1.8, -0.8);
  return g;
}

function buildFrame() {
  const g = new THREE.Group();
  const H = 1.9;
  for (let i = 0; i < 5; i++) {
    const x = -PW / 2 + 0.6 + i * (PW - 1.2) / 4;
    [-PD / 2 + 0.5, PD / 2 - 0.5].forEach(z => {
      const col = box(0.14, H, 0.14, MAT.frame);
      col.position.set(x, H / 2, z);
      detailed(col, 0.4).forEach(o => g.add(o));
      // 柱脚加劲板
      const foot = box(0.3, 0.08, 0.3, MAT.dark);
      foot.position.set(x, 0.04, z);
      g.add(foot);
    });
    // 桁架斜撑
    const diag = box(0.08, Math.hypot(PD - 1, 2.2), 0.08, MAT.frame);
    diag.position.set(x, H + 0.55, 0);
    diag.rotation.x = Math.atan2(2.2, PD - 1) * (i % 2 ? 1 : -1);
    g.add(diag);
    // 柱间 X 交叉撑
    if (i < 4) {
      const x2 = -PW / 2 + 0.6 + (i + 1) * (PW - 1.2) / 4;
      [Math.PI / 5.2, -Math.PI / 5.2].forEach(a => {
        const brace = box(x2 - x, 0.06, 0.06, MAT.silver);
        brace.position.set((x + x2) / 2, H * 0.5, -PD / 2 + 0.5);
        brace.rotation.z = a;
        g.add(brace);
      });
    }
  }
  [-PD / 2 + 0.5, PD / 2 - 0.5].forEach(z => {
    const beam = box(PW, 0.16, 0.16, MAT.frame);
    beam.position.set(0, H, z); g.add(beam);
    const ridge = box(PW, 0.12, 0.12, MAT.silver);
    ridge.position.set(0, H + 1.1, 0); g.add(ridge);
  });
  // 檩条
  [-2.6, -1.3, 0, 1.3, 2.6].forEach(x => {
    const purlin = box(0.07, 0.07, PD - 0.6, MAT.dark);
    purlin.position.set(x, H + 0.62, 0);
    g.add(purlin);
  });
  // 屋面平面斜撑
  [0.5, -0.5].forEach(a => {
    const brace = box(0.06, 0.06, PD - 0.8, MAT.silver);
    brace.position.set(0, H + 0.62, 0);
    brace.rotation.x = a;
    g.add(brace);
  });
  // 独立基础块
  [-3.4, 0, 3.4].forEach(x => [-2, 2].forEach(z => {
    const base = box(0.5, 0.3, 0.5, MAT.dark);
    base.position.set(x, -0.15, z);
    detailed(base, 0.35).forEach(o => g.add(o));
  }));
  return g;
}

function buildFloor() {
  const g = new THREE.Group();
  detailed(box(PW, 0.3, PD, MAT.plate)).forEach(o => g.add(o));
  plateGrid(g, PW, PD, 0.151);
  // 传送带 + 侧帮 + 滚筒
  const belt = box(6.2, 0.16, 1.3, MAT.belt); belt.position.set(-0.4, 0.24, 0); g.add(belt);
  [-0.7, 0.7].forEach(dz => {
    const side = box(6.2, 0.1, 0.06, MAT.frame);
    side.position.set(-0.4, 0.36, dz);
    g.add(side);
  });
  for (let i = 0; i < 12; i++) {
    const roller = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.34, 10), MAT.frame);
    roller.rotation.x = Math.PI / 2;
    roller.position.set(-3.3 + i * 0.53, 0.36, 0);
    g.add(roller);
  }
  // 车床：床身 + 主轴箱 + 卡盘
  const lathe1 = box(1.5, 0.35, 0.55, MAT.dark); lathe1.position.set(2.6, 0.48, -2);
  detailed(lathe1, 0.4).forEach(o => g.add(o));
  const head = box(0.4, 0.5, 0.55, MAT.frame); head.position.set(1.95, 0.62, -2); g.add(head);
  const chuck = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.22, 16), MAT.silver);
  chuck.rotation.z = Math.PI / 2; chuck.position.set(2.25, 0.6, -2); g.add(chuck);
  // 立式压力机
  const pressBase = box(0.7, 0.25, 0.6, MAT.dark); pressBase.position.set(2.6, 0.42, 1.4); g.add(pressBase);
  [-0.25, 0.25].forEach(dx => {
    const post = box(0.09, 1.0, 0.09, MAT.frame); post.position.set(2.6 + dx, 0.95, 1.4); g.add(post);
  });
  const pressBeam = box(0.7, 0.16, 0.24, MAT.frame); pressBeam.position.set(2.6, 1.5, 1.4); g.add(pressBeam);
  const ram = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.4, 12), MAT.silver);
  ram.position.set(2.6, 1.2, 1.4); g.add(ram);
  // 料箱 + 托盘
  const c1 = box(0.7, 0.6, 0.7, MAT.dark); c1.position.set(3.8, 0.6, -0.4);
  detailed(c1, 0.35).forEach(o => g.add(o));
  const c2 = box(0.55, 0.42, 0.55, MAT.dark); c2.position.set(4.0, 0.5, 0.6); g.add(c2);
  const pallet = box(0.9, 0.08, 0.9, MAT.frame); pallet.position.set(-3.6, 0.38, 2.3); g.add(pallet);
  [[-3.75, 2.15], [-3.45, 2.45], [-3.6, 2.3]].forEach(([x, z], i) => {
    const b = box(0.34, 0.3, 0.34, MAT.dark); b.position.set(x, 0.57 + (i === 2 ? 0.31 : 0), z); g.add(b);
  });
  // 地面标线
  [[-3, 2.9, 6, 0.05], [0.5, -2.9, 5, 0.05]].forEach(([x, z, w, d]) => {
    const line = box(w, 0.012, d, MAT.silver);
    line.position.set(x, 0.36, z);
    g.add(line);
  });
  // 机械臂
  const armBase = box(0.5, 0.5, 0.5, MAT.dark); armBase.position.set(-4, 0.55, -2.2); g.add(armBase);
  const arm1 = box(0.16, 1.3, 0.16, MAT.silver); arm1.position.set(-4, 1.4, -2.2); arm1.rotation.z = 0.4; g.add(arm1);
  const arm2 = box(0.12, 1.0, 0.12, MAT.silver); arm2.position.set(-3.55, 2.15, -2.2); arm2.rotation.z = -0.9; g.add(arm2);
  const gripper = box(0.2, 0.12, 0.2, MAT.frame); gripper.position.set(-3.0, 2.2, -2.2); g.add(gripper);
  // 桥式行车：牛腿柱 + 轨道 + 桥架 + 吊钩
  [-3.2, 3.2].forEach(x => [-2.6, 2.6].forEach(z => {
    const leg = box(0.12, 2.0, 0.12, MAT.frame);
    leg.position.set(x, 1.36, z);
    g.add(leg);
  }));
  [-2.6, 2.6].forEach(z => {
    const railCrane = box(6.6, 0.08, 0.12, MAT.silver);
    railCrane.position.set(0, 2.4, z);
    g.add(railCrane);
  });
  const bridge = box(0.3, 0.18, 5.4, MAT.dark);
  bridge.position.set(0.8, 2.52, 0);
  detailed(bridge, 0.35).forEach(o => g.add(o));
  const hoist = box(0.24, 0.2, 0.24, MAT.frame); hoist.position.set(0.8, 2.36, -1.2); g.add(hoist);
  const cableCrane = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.8, 6), MAT.silver);
  cableCrane.position.set(0.8, 1.9, -1.2); g.add(cableCrane);
  const hook = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.02, 6, 12, Math.PI * 1.4), MAT.silver);
  hook.position.set(0.8, 1.48, -1.2); hook.rotation.z = Math.PI * 0.8;
  g.add(hook);
  // 工人剪影
  figure(g, -1.2, 1.8);
  figure(g, 3.2, 0.4);
  figure(g, 0.4, -1.9);
  return g;
}

function buildBase() {
  const g = new THREE.Group();
  // 地基台阶（带轮廓）+ 土层
  const f1 = box(PW, 0.34, PD, MAT.plate);
  const f2 = box(PW - 1.2, 0.3, PD - 1.2, MAT.dark); f2.position.y = -0.34;
  const soil = box(PW + 0.8, 0.5, PD + 0.8, new THREE.MeshStandardMaterial({ color: 0xa89a86, roughness: 1 }));
  soil.position.y = -0.72;
  detailed(f1, 0.4).forEach(o => g.add(o));
  detailed(f2, 0.35).forEach(o => g.add(o));
  g.add(soil);
  // 桩基（4×3 阵列）
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      const pile = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 1.1, 10), MAT.frame);
      pile.position.set(-3 + i * 2, -1.45, -2 + j * 2);
      g.add(pile);
      const cap = box(0.26, 0.1, 0.26, MAT.dark);
      cap.position.set(-3 + i * 2, -0.98, -2 + j * 2);
      g.add(cap);
    }
  }
  // 地下管廊 + 拱圈
  const tunnel = box(6.5, 0.5, 1.1, MAT.belt); tunnel.position.set(0, -0.85, 0.8); g.add(tunnel);
  [-2.2, 0, 2.2].forEach(x => {
    const arch = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.07, 8, 20, Math.PI), MAT.frame);
    arch.position.set(x, -0.6, 0.8);
    g.add(arch);
  });
  // 管道 + 阀轮
  [-0.5, -0.9].forEach((y, i) => {
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 8, 10), MAT.silver);
    pipe.rotation.z = Math.PI / 2;
    pipe.position.set(0, y, -1.6 - i * 0.35);
    g.add(pipe);
  });
  [1.8, -1.2].forEach(x => {
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.03, 8, 18), MAT.frame);
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(x, -0.42, -1.6);
    g.add(wheel);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.2, 8), MAT.silver);
    stem.position.set(x, -0.52, -1.6);
    g.add(stem);
  });
  // 电缆桥架
  const tray = box(5.5, 0.06, 0.3, MAT.dark); tray.position.set(0, -1.15, -2.6); g.add(tray);
  for (let i = 0; i < 4; i++) {
    const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 5.5, 6), MAT.glow);
    cable.rotation.z = Math.PI / 2;
    cable.position.set(0, -1.1, -2.7 + i * 0.07);
    g.add(cable);
  }
  // 检查井 + 爬梯
  const manhole = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.06, 18), MAT.dark);
  manhole.position.set(3.2, -0.68, 2.4);
  g.add(manhole);
  for (let i = 0; i < 4; i++) {
    const rung = box(0.26, 0.03, 0.03, MAT.silver);
    rung.position.set(-3.9, -0.9 - i * 0.22, 2.9);
    g.add(rung);
  }
  return g;
}

const BUILDERS = [buildChimney, buildRoof, buildHall, buildFrame, buildFloor, buildBase];

export function initBones(items, pop) {
  const view = document.getElementById('bones');
  const canvas = document.getElementById('bones-canvas');
  const tip = document.getElementById('bones-tip');
  const listEl = document.getElementById('bones-list');
  if (!view || !canvas) return;

  /* ---------- 匹配每层相关作品 & 代表图 ---------- */
  const byId = new Map(items.map(it => [it.id, it]));
  const matched = SECTIONS.map(sec => {
    const out = [];
    const seen = new Set();
    sec.ids.forEach(id => {
      const it = byId.get(id);
      if (it && !seen.has(it.id)) { seen.add(it.id); out.push(it); }
    });
    items.forEach(it => {
      if (!seen.has(it.id) && sec.kw.test(it.title)) { seen.add(it.id); out.push(it); }
    });
    return out;
  });
  const reps = matched.map(list => (list.find(it => it.img) || {}).img || '');

  /* ---------- 场景 ---------- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0e14);
  scene.fog = new THREE.Fog(0x0b0e14, 46, 105);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
  camera.position.set(12.5, 9.5, 12.5);
  camera.lookAt(0, 0, 0);

  /* 柔和打光：冷色调 */
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  scene.add(new THREE.HemisphereLight(0xaebfd8, 0x1c222e, 0.8));
  const key = new THREE.DirectionalLight(0xffffff, 1.2);
  key.position.set(10, 20, 8);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.left = -14; key.shadow.camera.right = 14;
  key.shadow.camera.top = 14; key.shadow.camera.bottom = -14;
  key.shadow.camera.far = 60;
  key.shadow.bias = -0.0004;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x8fb4dd, 0.55);
  rim.position.set(-10, 8, -12);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0x7286a3, 0.4);
  fill.position.set(-12, 9, 12);
  scene.add(fill);

  const world = new THREE.Group();
  scene.add(world);

  /* 细密网格地面（压黑背景） */
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(46, 64),
    new THREE.MeshStandardMaterial({ color: 0x10151f, roughness: 1 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -9.35;
  ground.receiveShadow = true;
  scene.add(ground);
  const gridFine = new THREE.GridHelper(90, 90, 0x2a3850, 0x1a2334);
  gridFine.position.y = -9.33;
  gridFine.material.transparent = true;
  gridFine.material.opacity = 0.6;
  scene.add(gridFine);

  /* ---------- 六层爆炸模型 ---------- */
  const LAYER_Y = [6.9, 4.2, 1.5, -1.2, -3.9, -6.6];
  const layers = [];
  const hitMeshes = [];
  BUILDERS.forEach((build, i) => {
    const g = build();
    g.position.y = LAYER_Y[i];
    g.userData = { i, yBase: LAYER_Y[i], lift: 0, liftT: 0 };
    g.traverse(o => {
      if (o.isMesh && o.material && o.material.transparent !== true) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    world.add(g);
    layers.push(g);
    // 透明命中盒
    const hit = new THREE.Mesh(
      new THREE.BoxGeometry(PW + 0.8, 2.6, PD + 0.8),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
    );
    hit.position.y = LAYER_Y[i] + 0.9;
    hit.userData.i = i;
    world.add(hit);
    hitMeshes.push(hit);
  });

  // 层间虚线导轨（垂直细柱）
  [[-PW / 2 - 0.4, -PD / 2 - 0.4], [PW / 2 + 0.4, -PD / 2 - 0.4],
   [-PW / 2 - 0.4, PD / 2 + 0.4], [PW / 2 + 0.4, PD / 2 + 0.4]].forEach(([x, z]) => {
    const rod = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 19, 6),
      new THREE.MeshBasicMaterial({ color: 0x2c3a52 })
    );
    rod.position.set(x, 0, z);
    world.add(rod);
  });

  /* ---------- 层标签（白色标签框 + 引出指引线） ---------- */
  function makeLabel(text, sub) {
    const cv = document.createElement('canvas');
    cv.width = 512; cv.height = 128;
    const c = cv.getContext('2d');
    // 白色标签底
    c.fillStyle = 'rgba(255,255,255,.96)';
    c.fillRect(6, 24, 500, 76);
    c.strokeStyle = '#c3cfdd'; c.lineWidth = 3;
    c.strokeRect(7.5, 25.5, 497, 73);
    // 左侧色条
    c.fillStyle = '#6f9fd8';
    c.fillRect(7.5, 25.5, 10, 73);
    c.fillStyle = '#33415c';
    c.font = '600 38px Outfit, "Microsoft YaHei", SimHei, sans-serif';
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText(text, 266, 62);
    c.fillStyle = '#8496ad'; c.font = '500 21px Outfit, sans-serif';
    c.fillText(sub, 256, 116);
    const tex = new THREE.CanvasTexture(cv);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
    sp.scale.set(4.6, 1.15, 1);
    sp.renderOrder = 10;
    return sp;
  }
  layers.forEach((g, i) => {
    const sp = makeLabel(`${SECTIONS[i].num} ${SECTIONS[i].name}`, SECTIONS[i].en);
    sp.position.set(-(PW / 2) - 3.3, 0.25, 0);
    sp.userData.i = i;
    g.add(sp);
    // 引出指引线：标签 → 楼层边缘
    const lg = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-(PW / 2) - 1.05, 0.25, 0),
      new THREE.Vector3(-(PW / 2) - 0.15, 0.25, 0),
    ]);
    const line = new THREE.Line(lg, new THREE.LineBasicMaterial({ color: 0x8ea2ba }));
    line.renderOrder = 9;
    g.add(line);
    // 端点圆点
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 10, 8),
      new THREE.MeshBasicMaterial({ color: 0x6f9fd8 })
    );
    dot.position.set(-(PW / 2) - 0.15, 0.25, 0);
    dot.renderOrder = 9;
    g.add(dot);
  });

  /* ---------- 右侧层列表 ---------- */
  listEl.innerHTML = SECTIONS.map((s, i) =>
    `<button class="bl-item" data-i="${i}">
      <span class="bli-num">${s.num}</span>
      <span class="bli-name">${s.name}</span>
      <span class="bli-en">${s.en}</span>
    </button>`).join('');

  /* ---------- 悬停 / 点击 ---------- */
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2(-10, -10);
  const par = { x: 0, y: 0, tx: 0, ty: 0 };
  let hovered = -1;
  let mouseX = 0, mouseY = 0;

  /* ---------- 中键轨道旋转 + 滚轮缩放 ---------- */
  const orbit = {
    azim: 0, azimT: 0,      // 水平角（叠加在自动旋转上）
    elev: 0.40, elevT: 0.40, // 仰角（轴测 45° 感）
    radius: 25, radiusT: 25,
  };
  const R_MIN = 16, R_MAX = 38, E_MIN = 0.08, E_MAX = 1.1;
  let midDrag = null;
  canvas.addEventListener('pointerdown', e => {
    if (e.button !== 1) return;
    e.preventDefault();
    midDrag = { x: e.clientX, y: e.clientY };
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', e => {
    if (midDrag && (e.buttons & 4)) {
      orbit.azimT += (e.clientX - midDrag.x) * 0.006;
      orbit.elevT = Math.min(E_MAX, Math.max(E_MIN, orbit.elevT + (midDrag.y - e.clientY) * 0.004));
      midDrag = { x: e.clientX, y: e.clientY };
    }
  });
  canvas.addEventListener('pointerup', e => { if (e.button === 1) midDrag = null; });
  canvas.addEventListener('auxclick', e => { if (e.button === 1) e.preventDefault(); });
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    e.stopPropagation();
    orbit.radiusT = Math.min(R_MAX, Math.max(R_MIN, orbit.radiusT + e.deltaY * 0.02));
  }, { passive: false });

  function setHover(i) {
    if (i === hovered) return;
    hovered = i;
    layers.forEach(g => { g.userData.liftT = g.userData.i === i ? 0.5 : 0; });
    listEl.querySelectorAll('.bl-item').forEach(b =>
      b.classList.toggle('hot', +b.dataset.i === i));
    document.body.style.cursor = i >= 0 ? 'pointer' : 'default';
    if (i >= 0 && reps[i]) {
      tip.innerHTML = `<img src="/images/bones/axo-${i + 1}.png" onerror="this.onerror=null;this.src='${reps[i]}'" alt="" /><div class="bt-text"><b>${SECTIONS[i].num} ${SECTIONS[i].name}</b><span>悬停查看 · 点击调出 ${matched[i].length} 条相关作品</span></div>`;
      tip.classList.add('show');
    } else {
      tip.classList.remove('show');
    }
  }

  canvas.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    par.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    par.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    mouseX = e.clientX; mouseY = e.clientY;
  });
  canvas.addEventListener('pointerleave', () => { pointer.set(-10, -10); setHover(-1); });

  function select(i) {
    const sec = SECTIONS[i];
    pop.open({
      num: sec.num, title: sec.name,
      sub: `${sec.en} · ${matched[i].length} 条相关档案`,
      desc: sec.desc, items: matched[i],
      hero: `/images/bones/axo-${i + 1}.png`,
      heroFallback: reps[i],
    });
  }

  canvas.addEventListener('click', e => {
    if (hovered >= 0) { e.stopPropagation(); select(hovered); }
    // 未命中：冒泡到视图层 → 空白退出
  });

  listEl.querySelectorAll('.bl-item').forEach(b => {
    const i = +b.dataset.i;
    b.addEventListener('mouseenter', () => setHover(i));
    b.addEventListener('click', e => { e.stopPropagation(); select(i); });
  });
  listEl.addEventListener('mouseleave', () => setHover(-1));

  /* ---------- 尺寸 / 可见性 ---------- */
  function resize() {
    const w = view.clientWidth, h = view.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  let inView = true;
  new IntersectionObserver(es => { inView = es[0].isIntersecting; }, { threshold: 0.05 }).observe(view);

  /* ---------- 动画 ---------- */
  const clock = new THREE.Clock();
  let spin = Math.PI / 4; // 初始轴测 45° 视角
  function animate() {
    requestAnimationFrame(animate);
    if (!inView) return;
    const dt = Math.min(clock.getDelta(), 0.05);

    spin += dt * 0.1; // 模型缓慢顺时针旋转
    par.x += (par.tx - par.x) * 0.05;
    par.y += (par.ty - par.y) * 0.05;
    world.rotation.y = spin;
    orbit.azim += (orbit.azimT - orbit.azim) * 0.08;
    orbit.elev += (orbit.elevT - orbit.elev) * 0.08;
    orbit.radius += (orbit.radiusT - orbit.radius) * 0.08;
    const az = orbit.azim + par.x * 0.12;
    const ce = Math.cos(orbit.elev);
    camera.position.set(
      Math.sin(az) * ce * orbit.radius,
      Math.sin(orbit.elev) * orbit.radius - par.y * 0.9,
      Math.cos(az) * ce * orbit.radius
    );
    camera.lookAt(0, -0.3, 0);

    // 悬停拾取
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(hitMeshes, false)[0];
    setHover(hit ? hit.object.userData.i : -1);

    // 层高程 lerp
    layers.forEach(g => {
      g.userData.lift += (g.userData.liftT - g.userData.lift) * 0.1;
      g.position.y = g.userData.yBase + g.userData.lift;
    });
    hitMeshes.forEach(hm => {
      hm.position.y = layers[hm.userData.i].position.y + 0.9;
    });

    //  tooltip 跟随
    if (hovered >= 0) {
      tip.style.left = Math.min(mouseX + 22, window.innerWidth - 330) + 'px';
      tip.style.top = Math.min(Math.max(mouseY - 60, 76), window.innerHeight - 180) + 'px';
    }

    renderer.render(scene, camera);
  }
  animate();
}
