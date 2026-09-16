// FACTORY 字母：悬停切换为零件图案 + 弹性膨胀 + 邻字母位移
// 模仿 boknows/text-image 的悬停动效：放大缩小带回弹，相邻字母被挤开
export function initLetters() {
  const title = document.getElementById('factory-title');
  const letters = 'FACTORY ARCHIVE'.split('');
  const glyphs = [];

  // 弹性缓动（ease-out-back）
  const ELASTIC = 'cubic-bezier(.34, 1.56, .64, 1)';
  const rnd = (a, b) => a + Math.random() * (b - a);

  letters.forEach((L) => {
    // 空格：只作间隔，无图案无悬停
    if (L === ' ') {
      const sp = document.createElement('span');
      sp.className = 'glyph g-space';
      title.appendChild(sp);
      glyphs.push(sp);
      return;
    }
    // 预载
    const img = new Image();
    img.src = `/letters/${L}.png`;

    const glyph = document.createElement('span');
    glyph.className = 'glyph';
    glyph.innerHTML =
      `<span class="g-text">${L}</span>` +
      `<span class="g-img" style="background-image:url('/letters/${L}.png')"></span>`;
    title.appendChild(glyph);
    glyphs.push(glyph);

    const layers = glyph.querySelectorAll('.g-text, .g-img');
    // 记录被挤开的邻居，离开时复位
    let displaced = [];

    const resetNeighbors = () => {
      displaced.forEach(([el, d]) => {
        el.style.transition = `transform ${rnd(500, 700)}ms ${ELASTIC}`;
        el.style.transform = 'translateX(0) scale(1)';
      });
      displaced = [];
    };

    glyph.addEventListener('mouseenter', () => {
      // 图案切换：随机延迟与时长，不要所有字母同时变换
      const d = rnd(0, 130), t = rnd(480, 760);
      layers.forEach(el => {
        el.style.transitionDelay = d + 'ms';
        el.style.transitionDuration = t + 'ms';
      });
      glyph.classList.add('on');

      // 膨胀：放大 → 回弹过头 → 稳定略大（带回弹的关键帧）
      const dur = rnd(520, 780);
      glyph.animate([
        { transform: 'scale(1) translateY(0)' },
        { transform: 'scale(1.3) translateY(-0.02em)', offset: 0.32 },
        { transform: 'scale(1.08) translateY(0)', offset: 0.62 },
        { transform: 'scale(1.16) translateY(0)' },
      ], { duration: dur, easing: 'ease-out', fill: 'forwards' });

      // 邻字母位移：左右邻居被挤开 + 轻微缩小，二级邻居轻微让位
      const i = glyphs.indexOf(glyph);
      const neighbors = [[i - 1, -1], [i + 1, 1], [i - 2, -1], [i + 2, 1]];
      neighbors.forEach(([j, dir]) => {
        const el = glyphs[j];
        if (!el) return;
        const level = Math.abs(j - i);
        const dist = (level === 1 ? rnd(10, 14) : rnd(4, 6)) * dir;
        el.style.transition = `transform ${rnd(480, 720)}ms ${ELASTIC}`;
        el.style.transform = `translateX(${dist}px) scale(${level === 1 ? 0.95 : 0.98})`;
        displaced.push([el, dir]);
      });
    });

    glyph.addEventListener('mouseleave', () => {
      layers.forEach(el => {
        el.style.transitionDelay = '0ms';
        el.style.transitionDuration = '420ms';
      });
      glyph.classList.remove('on');

      // 回弹：缩小 → 轻微回弹 → 复位
      glyph.animate([
        { transform: 'scale(1.16)' },
        { transform: 'scale(0.94)', offset: 0.4 },
        { transform: 'scale(1.03)', offset: 0.72 },
        { transform: 'scale(1)' },
      ], { duration: rnd(480, 640), easing: 'ease-out', fill: 'forwards' });

      resetNeighbors();
    });
  });
}
