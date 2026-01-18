/* Memory Light Tree (offline, pure HTML/CSS/JS)
   - Primary photo path: assets/today/
   - Fallback path: photos/today/
   Put your 39 images in either folder (same filenames).
   Optional music file: assets/music/memory.mp3
*/

(() => {
  'use strict';

  const PHOTO_FILES = [
    '1768493896769.jpg',
    '1768493903135.jpg',
    '1768493908986.jpg',
    '1768494168228.jpg',
    '1768494168326.jpg',
    '1768494168652.jpg',
    '1768494168772.jpg',
    '1768494168916.jpg',
    '1768494169011.jpg',
    '1768494169331.jpg',
    '1768494169411.jpg',
    '1768494581678.jpg',
    'amulya_mg.19-20251231-0003.jpg',
    'amulya_mg.19-20251231-0009.jpg',
    'amulya_mg.19-20251231-0011.jpg',
    'amulya_mg.19-20251231-0022.jpg',
    'amulya_mg_frame.jpeg',
    'amulya_mg_frame_0_02_15f.jpeg',
    'amulya_mg_frame_0_02_15f7.jpeg',
    'aulya_mg_frame_0_15_0f.jpeg',
    'frame_0_00_0f(1) (1).jpeg',
    'frame_0_00_0f(1) (2).jpeg',
    'frame_0_00_0f(1).jpeg',
    'frame_0_00_0f.jpeg',
    'frame_0_00_15f.jpeg',
    'frame_0_01_11f.jpeg',
    'frame_0_01_21f.jpeg',
    'frame_0_01_9f.jpeg',
    'frame_0_02_3f.jpeg',
    'frame_0_07_0f(1).jpeg',
    'frame_0_08_12f.jpeg',
    'frame_0_09_0f(1).jpeg',
    'frame_0_10_0f(1).jpeg',
    'frame_0_11_11f.jpeg',
    'frame_0_12_0f(1) (1).jpeg',
    'frame_0_12_0f(1).jpeg',
    'frame_0_13_0f(1).jpeg',
    'frame_0_14_4f.jpeg',
    'frame_0_16_17f.jpeg'
  ];

  const BASE_PATHS = ['assets/today', 'photos/today'];

  const CAPTIONS = [
    'Your smile changed my day',
    'A moment I will never forget',
    'This memory lives in my heart',
    'You made this day special'
  ];

  const els = {
    stars: document.getElementById('stars'),
    orbsLayer: document.getElementById('orbsLayer'),
    music: document.getElementById('bgMusic'),
    musicToggle: document.getElementById('musicToggle'),
    musicLabel: document.getElementById('musicLabel'),
    modal: document.getElementById('modal'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalClose: document.getElementById('modalClose'),
    modalImg: document.getElementById('modalImg'),
    modalCaption: document.getElementById('modalCaption')
  };

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function encodePath(path) {
    // Keeps slashes but safely encodes spaces/parentheses/etc.
    return encodeURI(path);
  }

  function imageLoads(src) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  }

  async function resolveBasePath() {
    const testFile = PHOTO_FILES[0];
    for (const base of BASE_PATHS) {
      const src = encodePath(`${base}/${testFile}`);
      // eslint-disable-next-line no-await-in-loop
      const ok = await imageLoads(src);
      if (ok) return base;
    }
    return BASE_PATHS[0];
  }

  function buildStars() {
    if (!els.stars) return;

    const count = 140;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'star';

      const r = Math.random();
      if (r > 0.92) s.classList.add('big');
      if (r < 0.25) s.classList.add('dim');

      const x = rand(0, 100);
      const y = rand(0, 100);
      s.style.left = `${x}%`;
      s.style.top = `${y}%`;
      s.style.animationDelay = `${rand(0, 5).toFixed(2)}s`;
      s.style.animationDuration = `${rand(3.2, 6.5).toFixed(2)}s`;
      s.style.setProperty('--o', String(rand(0.45, 0.95)));

      frag.appendChild(s);
    }

    els.stars.innerHTML = '';
    els.stars.appendChild(frag);
  }

  function branchAnchors() {
    // Coordinates in percentages within the orbs layer.
    // Tuned to sit along the SVG branch canopy area.
    return [
      { x: 30, y: 56 }, { x: 34, y: 52 }, { x: 38, y: 49 }, { x: 42, y: 46 },
      { x: 48, y: 45 }, { x: 54, y: 46 }, { x: 60, y: 49 }, { x: 66, y: 52 },
      { x: 72, y: 55 }, { x: 76, y: 58 },

      { x: 28, y: 62 }, { x: 34, y: 60 }, { x: 40, y: 58 }, { x: 46, y: 56 },
      { x: 52, y: 56 }, { x: 58, y: 57 }, { x: 64, y: 60 }, { x: 70, y: 62 },

      { x: 36, y: 66 }, { x: 44, y: 66 }, { x: 52, y: 66 }, { x: 60, y: 66 },

      { x: 40, y: 71 }, { x: 50, y: 72 }, { x: 60, y: 71 },

      // A few higher points for variety
      { x: 36, y: 44 }, { x: 44, y: 42 }, { x: 52, y: 42 }, { x: 60, y: 43 }, { x: 68, y: 45 }
    ];
  }

  function computeOrbSizePx() {
    // Mirror CSS clamp(66px, 8.2vw, 104px)
    const vw = window.innerWidth / 100;
    return Math.max(66, Math.min(104, 8.2 * vw));
  }

  function placeOrbsRandomly(orbElements) {
    const layer = els.orbsLayer;
    if (!layer) return;

    const rect = layer.getBoundingClientRect();
    const anchors = branchAnchors();

    const placed = [];
    const baseSize = computeOrbSizePx();
    const minDist = baseSize * 0.85;

    for (const orb of orbElements) {
      let placedPos = null;

      for (let attempt = 0; attempt < 36; attempt++) {
        const a = pick(anchors);
        const jitterX = rand(-5.5, 5.5);
        const jitterY = rand(-4.5, 4.5);

        const xPct = a.x + jitterX;
        const yPct = a.y + jitterY;

        const x = (xPct / 100) * rect.width;
        const y = (yPct / 100) * rect.height;

        const ok = placed.every(p => {
          const dx = p.x - x;
          const dy = p.y - y;
          return Math.hypot(dx, dy) > minDist;
        });

        if (ok) {
          placedPos = { x, y };
          placed.push(placedPos);
          break;
        }
      }

      if (!placedPos) {
        // Give up collision-avoidance; still place it somewhere reasonable.
        const a = pick(anchors);
        placedPos = {
          x: (a.x / 100) * rect.width,
          y: (a.y / 100) * rect.height
        };
      }

      // Position centered via CSS transforms
      orb.style.left = `${placedPos.x}px`;
      orb.style.top = `${placedPos.y}px`;

      // Float timing variety (keeps it feeling alive)
      orb.style.animationDelay = `${rand(0, 3.2).toFixed(2)}s`;
      orb.style.animationDuration = `${rand(5.6, 8.2).toFixed(2)}s`;

      // Slight size variety
      const scale = rand(0.94, 1.06);
      orb.style.setProperty('--orbScale', String(scale));
    }
  }

  function openModal(src) {
    els.modalImg.src = src;
    els.modalCaption.textContent = pick(CAPTIONS);
    els.modal.classList.remove('hidden');

    // Basic focus management
    els.modalClose.focus();
  }

  function closeModal() {
    els.modal.classList.add('hidden');
    els.modalImg.removeAttribute('src');
  }

  function wireModal() {
    els.modalClose.addEventListener('click', closeModal);
    els.modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !els.modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  function wireMusic() {
    const music = els.music;
    const btn = els.musicToggle;

    const setLabel = (playing) => {
      btn.setAttribute('aria-pressed', String(playing));
      els.musicLabel.textContent = playing ? 'Music playing' : 'Tap to play music';
    };

    const attemptPlay = async () => {
      if (!music) return false;
      try {
        await music.play();
        setLabel(true);
        return true;
      } catch {
        setLabel(false);
        return false;
      }
    };

    btn.addEventListener('click', async () => {
      if (!music) return;
      if (!music.src && !music.querySelector('source')?.getAttribute('src')) return;

      if (music.paused) {
        await attemptPlay();
      } else {
        music.pause();
        setLabel(false);
      }
    });

    // Try to start music on first user gesture (browser autoplay policies).
    const firstGesture = async () => {
      document.removeEventListener('pointerdown', firstGesture);
      await attemptPlay();
    };
    document.addEventListener('pointerdown', firstGesture, { once: true });

    // If audio file is missing, keep the button but clarify.
    music.addEventListener('error', () => {
      els.musicLabel.textContent = 'Add assets/music/memory.mp3';
      btn.setAttribute('aria-pressed', 'false');
    });

    setLabel(false);
  }

  async function buildOrbs() {
    const base = await resolveBasePath();

    const frag = document.createDocumentFragment();
    const orbEls = [];

    PHOTO_FILES.forEach((filename, idx) => {
      const orb = document.createElement('button');
      orb.type = 'button';
      orb.className = 'orb';
      orb.setAttribute('aria-label', `Open memory ${idx + 1}`);

      const img = document.createElement('img');
      img.loading = 'lazy';

      const src = encodePath(`${base}/${filename}`);
      img.src = src;
      img.alt = `Memory ${idx + 1}`;

      orb.appendChild(img);

      orb.addEventListener('click', () => openModal(src));
      orb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(src);
        }
      });

      frag.appendChild(orb);
      orbEls.push(orb);
    });

    els.orbsLayer.innerHTML = '';
    els.orbsLayer.appendChild(frag);

    // Position after paint/layout
    requestAnimationFrame(() => placeOrbsRandomly(orbEls));

    // Reflow positions on resize (debounced)
    let t = null;
    window.addEventListener('resize', () => {
      window.clearTimeout(t);
      t = window.setTimeout(() => placeOrbsRandomly(orbEls), 120);
    });
  }

  function addOrbScaleSupport() {
    // Small enhancement: allow per-orb scale without breaking translate centering.
    // Implemented via a dynamic stylesheet to avoid inline keyframe duplication.
    const style = document.createElement('style');
    style.textContent = `.orb{transform:translate(-50%,-50%) scale(var(--orbScale,1));}`;
    document.head.appendChild(style);
  }

  async function init() {
    buildStars();
    addOrbScaleSupport();
    wireModal();
    wireMusic();
    await buildOrbs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
