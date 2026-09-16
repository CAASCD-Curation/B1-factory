// 详情面板（单件作品）+ 相关作品弹层（一组作品）

export function initPanel() {
  const panel = document.getElementById('panel');
  const mask = document.getElementById('panel-mask');
  const media = document.getElementById('panel-media');
  const tags = document.getElementById('panel-tags');
  const title = document.getElementById('panel-title');
  const subquote = document.getElementById('panel-subquote');
  const content = document.getElementById('panel-content');
  const note = document.getElementById('panel-note');

  const api = {
    onClose: null,
    open(item) {
      media.className = 'panel-media';
      if (item.img) {
        media.innerHTML = `<img class="pm-img" src="${item.img}" alt="" />`;
      } else if (item.excerpt) {
        media.classList.add('excerpt-on');
        media.innerHTML = `<div class="quote"></div>`;
        media.querySelector('.quote').textContent = item.excerpt;
      } else {
        media.classList.add('excerpt-on');
        media.innerHTML = `<div class="quote red"></div>`;
        media.querySelector('.quote').textContent =
          item.content.replace(/\n/g, ' ').slice(0, 180);
      }
      tags.innerHTML =
        `<span class="ptag">${item.src}</span>` +
        (item.year ? `<span class="ptag">${item.year}</span>` : '') +
        `<span class="ptag">${item.media}</span>`;
      title.textContent = item.title;
      if (item.img && item.excerpt) {
        subquote.textContent = item.excerpt;
        subquote.classList.add('show');
      } else {
        subquote.textContent = '';
        subquote.classList.remove('show');
      }
      content.textContent = item.content;
      note.textContent = item.note ? '出处 / 备注：' + item.note : '';
      panel.classList.add('open');
      mask.classList.add('show');
    },
    close() {
      panel.classList.remove('open');
      mask.classList.remove('show');
    },
  };
  // 关闭：先关面板本身，再通知 onClose 钩子（如总览场景恢复卡片状态）
  const closeAll = () => { api.close(); if (api.onClose) api.onClose(); };
  document.getElementById('panel-close').addEventListener('click', closeAll);
  mask.addEventListener('click', closeAll);
  return api;
}

/* ---------- 轴测图中键旋转 ---------- */
function bindHeroRotate(img) {
  if (!img) return;
  let rx = 0, ry = 0, mid = null;
  img.addEventListener('pointerdown', e => {
    if (e.button !== 1) return;
    e.preventDefault();
    e.stopPropagation();
    mid = { x: e.clientX, y: e.clientY, rx, ry };
    img.setPointerCapture(e.pointerId);
    img.style.cursor = 'grabbing';
  });
  img.addEventListener('pointermove', e => {
    if (!mid || !(e.buttons & 4)) return;
    ry = mid.ry + (e.clientX - mid.x) * 0.35;
    rx = Math.max(-70, Math.min(70, mid.rx - (e.clientY - mid.y) * 0.25));
    img.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  const end = () => { mid = null; img.style.cursor = 'grab'; };
  img.addEventListener('pointerup', e => { if (e.button === 1) end(); });
  img.addEventListener('pointercancel', end);
  img.addEventListener('auxclick', e => { if (e.button === 1) e.preventDefault(); });
}

/* ---------- 相关作品弹层：title + 一组作品卡片 ---------- */
export function initWorksPop(panel) {
  const pop = document.getElementById('works-pop');
  const grid = document.getElementById('wp-grid');

  const api = {
    isOpen: () => pop.classList.contains('open'),
    open({ num = '', title = '', sub = '', desc = '', items = [], hero = '', heroFallback = '' }) {
      document.getElementById('wp-num').textContent = num;
      document.getElementById('wp-title').textContent = title;
      document.getElementById('wp-sub').textContent = sub;
      document.getElementById('wp-desc').textContent = desc;
      // 头部轴测图（点击结构后出现：轴测图 + 周边散布作品）
      // 原图比例展示，按住鼠标中键可旋转查看
      const heroBox = document.getElementById('wp-hero');
      if (hero) {
        heroBox.innerHTML = `<div class="wp-hero-box"><img src="${hero}" alt="" draggable="false"
            onerror="this.onerror=null;this.src='${heroFallback}';this.onerror=function(){this.closest('#wp-hero').classList.remove('show')}" /></div>
          <p class="wp-hero-hint">按住鼠标中键拖动 · 旋转轴测图</p>`;
        heroBox.classList.add('show');
        bindHeroRotate(heroBox.querySelector('img'));
      } else {
        heroBox.innerHTML = '';
        heroBox.classList.remove('show');
      }
      grid.innerHTML = '';
      items.forEach(it => {
        const card = document.createElement('div');
        card.className = 'bcard';
        card.innerHTML =
          (it.img ? `<div class="bc-img"><img src="${it.img}" loading="lazy" alt="" /></div>` : '') +
          `<div class="bc-title"></div>
           <div class="bc-foot"><span>${it.year || '——'}</span><span>${it.src}</span></div>`;
        card.querySelector('.bc-title').textContent = it.title;
        card.addEventListener('click', () => {
          panel.open(it);
          document.getElementById('panel').scrollTop = 0;
        });
        grid.appendChild(card);
      });
      pop.classList.add('open');
    },
    close() { pop.classList.remove('open'); },
  };
  document.getElementById('wp-close').addEventListener('click', () => api.close());
  // 点击弹层空白（蒙版）退出
  pop.addEventListener('click', e => { if (e.target === pop) api.close(); });
  return api;
}
