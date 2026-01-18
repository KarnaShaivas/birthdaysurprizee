/* ============================================
   MEMORIES WORLD
   Portal and Star Gallery System
   ============================================ */

// Today's photo filenames (local)
const todayPhotoFiles = [
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

// Degree photo filenames (local)
const degreePhotoFiles = [
    '1768495446415.jpg',
    '1768495462148.jpg',
    '1768495482067.jpg',
    '1768730799116.jpg',
    '1768731193379.jpg',
    '1768731193524.jpg',
    '1768731193577.jpg',
    '1768731193725.jpg',
    '1768731193775.jpg',
    '1768731193829.jpg',
    '1768731193925.jpg',
    '1768731193981.jpg',
    '1768731194049.jpg',
    '1768731194163.jpg',
    '1768731194223.jpg',
    '1768731194268.jpg',
    '1768731194303.jpg',
    '1768731194366.jpg',
    '1768731194455.jpg',
    '1768731194545.jpg',
    '1768731194686.jpg',
    '1768731194765.jpg',
    '1768731194883.jpg',
    '1768731194981.jpg',
    '1768731195081.jpg',
    '1768731195178.jpg',
    '1768731195310.jpg',
    '1768731195395.jpg',
    '1768731195533.jpg',
    '1768731195707.jpg',
    '1768731195847.jpg',
    '1768731195891.jpg',
    '56789.jpeg',
    'amulya_ame_0_04_0f.jpeg',
    'amulya_g_frame_0_00_0f.jpeg',
    'amulya_mg_fra2_0f.jpeg',
    'amulya_mg_fram0_08_0f.jpeg',
    'amulya_mg_frame_0_3_3f.jpeg',
    'frame_0_00_0f.jpeg',
    'frame_0_02_10f.jpeg',
    'frame_0_02_16f.jpeg',
    'frame_0_03_16f.jpeg',
    'frame_0_03_2f.jpeg',
    'frame_0_04_11f.jpeg',
    'frame_0_04_13f.jpeg',
    'frame_0_09_10f.jpeg',
    'frame_0_12_16f.jpeg',
    'frame_0_13_20f.jpeg'
];

// People photo filenames (local)
const peoplePhotoFiles = [
    '1768732144867.jpg',
    '1768732145048.jpg',
    '1768732145164.jpg',
    'amulya_mg.19-20251231-0007.jpg',
    'amulya_mg.19-20251231-0008.jpg',
    'amulya_mg.19-20251231-0014.jpg',
    'amulya_mg.19-20251231-0016.jpg',
    'amulya_mg.19-20251231-0017.jpg',
    'amulya_mg.19-20251231-0021.jpg',
    'frame_0_11_0f.jpeg'
];

// PUC photo filenames (local)
const pucPhotoFiles = [
    '1768735214316.jpg',
    '1768735214407.jpg',
    '1768735214612.jpg',
    '1768735214737.jpg',
    '1768735214781.jpg',
    '1768735214877.jpg',
    '1768735214916.jpg',
    '1768735214982.jpg',
    'amulya_mg.19-20251231-0005.jpg',
    'amulya_mg.19-20251231-0006.jpg',
    'amulya_mg.19-20251231-0015.jpg',
    'amulya_mg_frame_0_00_0f1.jpeg',
    'amulya_mg_frame_0_00_0f12.jpeg',
    'amulya_mg_frame_0_00_0f2.jpeg',
    'frame_0_00_13f.jpeg',
    'IMG_20260118_162918.jpg',
    'IMG_20260118_162940.jpg',
    'IMG_20260118_163221.jpg',
    'IMG_20260118_163238.jpg',
    'IMG_20260118_163631.jpg',
    'IMG_20260118_163750.jpg'
];

// Unique captions for each Today's photo (index-aligned with todayPhotoFiles)
const todayPhotoMessages = [
    'A Cinderella kind of glow today ✨',
    'This smile deserves its own fairytale 🌙',
    'Soft moments, loud memories 💖',
    'The day felt brighter because you existed ☀️',
    'Your vibe: calm magic 🪄',
    'A tiny frame, a huge feeling 💝',
    'If memories had perfume, this one would be sweet 🌸',
    'You don’t try to shine… you just do ⭐',
    'A photo that feels like a warm hug 🤍',
    'The kind of moment you replay when life gets noisy 🎧',
    'This one is pure “main character” energy 👑',
    'A gentle reminder: you are loved, always 🌷',
    'Some photos sparkle… this one glows ✨',
    'A little happiness captured perfectly 📸',
    'Your laugh here is my favorite sound 😌',
    'The sweetest kind of “today” 🌟',
    'If there was a glass slipper… it would fit this moment 👠',
    'This smile could fix bad days instantly 💫',
    'A memory I’d protect like a secret treasure 🗝️',
    'Soft light, softer heart 💛',
    'You made ordinary look beautiful 🌼',
    'This is what peace looks like 🕊️',
    'A small moment… but it stayed big in my mind 💭',
    'The universe was kind when it made you 🌌',
    'This frame is proof that you are magic 🪄',
    'A memory that feels like an evening breeze 🌬️',
    'Your eyes here… pure sparkle ✨',
    'The kind of smile that makes people believe in good things 💗',
    'If happiness had a picture, it would look like this 😊',
    'A little star on earth ⭐',
    'This one belongs in a “forever” album 📖',
    'A fairytale pause button ⏸️✨',
    'The day quietly became special here 💝',
    'A moment that says “I’m proud of you” 🌸',
    'You look unstoppable and gentle at once 💪🌷',
    'This memory is a soft promise: better days ahead 🌈',
    'A picture that whispers: keep smiling, dear 😌',
    'Today’s you… is breathtaking, sister 💖'
];

// Captions for degree photos (concise and proud)
const degreePhotoMessages = degreePhotoFiles.map(() => 'A proud moment from your degree days 🎓✨');

// Captions for people photos (keeps it warm and simple)
const peoplePhotoMessages = peoplePhotoFiles.map((_, i) => `A face, a bond, a forever feeling 💞 (#${i + 1})`);

const rotatingCaptions = [
    "Your smile changed my day",
    "A moment I will never forget",
    "This memory lives in my heart",
    "You made this day special"
];

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// Memory Data Structure
// Using placeholder images for demo - replace with your actual photos
const memoriesData = {
    puc: {
        title: "🎒 PUC Memories",
        memories: [
            {
                id: 1,
                image: "https://picsum.photos/400/300?random=1",
                message: "Those innocent college days... when life was simple and beautiful 💫"
            },
            {
                id: 2,
                image: "https://picsum.photos/400/300?random=2",
                message: "Every laugh we shared became a forever memory 😊"
            },
            {
                id: 3,
                image: "https://picsum.photos/400/300?random=3",
                message: "The beginning of a beautiful journey 🌟"
            },
            {
                id: 4,
                image: "https://picsum.photos/400/300?random=4",
                message: "Friends who became family 💖"
            },
            {
                id: 5,
                image: "https://picsum.photos/400/300?random=5",
                message: "Those carefree moments we'll never forget 🌸"
            }
        ]
    },
    degree: {
        title: "🎓 Degree Life",
        memories: [
            {
                id: 1,
                image: "https://picsum.photos/400/300?random=6",
                message: "Growing stronger with every challenge 💪"
            },
            {
                id: 2,
                image: "https://picsum.photos/400/300?random=7",
                message: "New friends, new memories, same beautiful soul 🌺"
            },
            {
                id: 3,
                image: "https://picsum.photos/400/300?random=8",
                message: "Learning life's most important lessons 📚"
            },
            {
                id: 4,
                image: "https://picsum.photos/400/300?random=9",
                message: "Every step forward was a step toward your dreams ✨"
            },
            {
                id: 5,
                image: "https://picsum.photos/400/300?random=10",
                message: "The journey that shaped who you are today 🦋"
            }
        ]
    },
    people: {
        title: "👨‍👩‍👧‍👦 People You Loved",
        memories: []
    },
    today: {
        title: "🌟 Today's You",
        memories: []
    }
};

// Fill Today portal with the local 39 photos so they work offline.
memoriesData.today.memories = todayPhotoFiles.map((filename, index) => ({
    id: index + 1,
    image: `assets/today/${filename}`,
    fallbackImage: `photos/today/${filename}`,
    message: todayPhotoMessages[index] || `A beautiful memory #${index + 1} 💖`
}));

// Populate Degree portal with local photos
memoriesData.degree.memories = degreePhotoFiles.map((filename, index) => ({
    id: index + 1,
    image: `assets/degree/${filename}`,
    fallbackImage: `photos/degree/${filename}`,
    message: degreePhotoMessages[index] || `Degree memory #${index + 1} 🎓`
}));

// Populate People portal with local photos
memoriesData.people.memories = peoplePhotoFiles.map((filename, index) => ({
    id: index + 1,
    image: `assets/people/${filename}`,
    fallbackImage: `photos/people/${filename}`,
    message: peoplePhotoMessages[index] || `People memory #${index + 1} 💞`
}));

// Populate PUC portal with local photos
memoriesData.puc.memories = pucPhotoFiles.map((filename, index) => ({
    id: index + 1,
    image: `assets/puc/${filename}`,
    fallbackImage: `photos/puc/${filename}`,
    message: `A sweet PUC memory 💫`
}));

const emptyPortalMessages = {
    puc: 'Add photos into assets/puc to unlock this sky ✨',
    degree: 'Add photos into assets/degree to unlock these memories ✨',
    people: 'Add photos into assets/people or photos/people to unlock these faces ✨'
};

function createMemoryCard(portalId, memory, index) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'star photo-star portal-photo';
    card.dataset.memoryId = memory.id;
    card.dataset.portalId = portalId;

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = `${portalId} photo ${index + 1}`;
    img.src = encodeURI(memory.image);
    img.addEventListener('error', () => {
        if (memory.fallbackImage) img.src = encodeURI(memory.fallbackImage);
    }, { once: true });
    img.addEventListener('load', () => {
        memory._resolvedSrc = img.currentSrc || img.src;
    });
    card.appendChild(img);

    // Open the classic modal with the full photo and caption
    card.addEventListener('click', (e) => {
        e.stopPropagation();
        openMemory(portalId, memory);
    });

    return card;
}

// Create Banyan Tree Photo Card for Today's portal
function createBanyanPhotoCard(memory, index) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'star photo-star banyan-photo';
    card.dataset.memoryId = memory.id;
    card.dataset.portalId = 'today';
    card.dataset.index = index;

    // Inner container for 3D effect
    const inner = document.createElement('div');
    inner.className = 'banyan-photo-inner';

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = `Today's moment ${index + 1}`;
    img.src = encodeURI(memory.image);
    img.addEventListener('error', () => {
        if (memory.fallbackImage) img.src = encodeURI(memory.fallbackImage);
    }, { once: true });
    img.addEventListener('load', () => {
        memory._resolvedSrc = img.currentSrc || img.src;
    });
    inner.appendChild(img);

    // Caption below photo
    const caption = document.createElement('div');
    caption.className = 'banyan-caption';
    const captionText = document.createElement('div');
    captionText.className = 'banyan-caption-text';
    // Truncate caption for card display
    const fullCaption = memory.message || pickRandom(rotatingCaptions);
    captionText.textContent = fullCaption.length > 30 ? fullCaption.substring(0, 28) + '...' : fullCaption;
    caption.appendChild(captionText);
    inner.appendChild(caption);

    card.appendChild(inner);

    // Open filmstrip modal on click
    card.addEventListener('click', (e) => {
        e.stopPropagation();
        openFilmstripModal(memory, index);
    });

    return card;
}

// Open Filmstrip Modal for Today's photos
function openFilmstripModal(memory, index) {
    // Create or get filmstrip modal (no CTA button here)
    let modal = document.getElementById('filmstrip-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'filmstrip-modal';
        modal.className = 'modal filmstrip-modal hidden';
        
        modal.innerHTML = `
            <div class="modal-content">
                <div class="filmstrip-frame">
                    <button class="filmstrip-close">&times;</button>
                    <div class="filmstrip-photo-container">
                        <img class="filmstrip-photo" src="" alt="Memory">
                    </div>
                    <div class="filmstrip-caption">
                        <p class="filmstrip-caption-text"></p>
                    </div>
                    <div class="filmstrip-decor">
                        <span>🌿</span>
                        <span>💖</span>
                        <span>✨</span>
                        <span>💖</span>
                        <span>🌿</span>
                    </div>
                    <div class="filmstrip-number"></div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close handlers
        const closeBtn = modal.querySelector('.filmstrip-close');
        closeBtn.addEventListener('click', () => closeFilmstripModal());
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeFilmstripModal();
        });
    }
    
    // Update modal content
    const photo = modal.querySelector('.filmstrip-photo');
    const caption = modal.querySelector('.filmstrip-caption-text');
    const number = modal.querySelector('.filmstrip-number');
    photo.src = encodeURI(memory._resolvedSrc || memory.image);
    photo.alt = memory.message || 'Beautiful memory';
    caption.textContent = memory.message || pickRandom(rotatingCaptions);
    number.textContent = `FRAME ${String(index + 1).padStart(3, '0')}`;
    
    // Mark as viewed
    if (!portalProgress.today.viewedStars.includes(memory.id)) {
        portalProgress.today.viewedStars.push(memory.id);
        
        const star = document.querySelector(`.star[data-memory-id="${memory.id}"][data-portal-id="today"]`);
        if (star) {
            star.classList.add('viewed');
        }
        
        const allViewed = memoriesData.today.memories.every(m => 
            portalProgress.today.viewedStars.includes(m.id)
        );
        
        if (allViewed) {
            portalProgress.today.completed = true;
        }
    }
    
    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('active');
}

function closeFilmstripModal() {
    const modal = document.getElementById('filmstrip-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}

let currentPortalId = null;
let constellationNavWired = false;

function wireConstellationNav() {
    if (constellationNavWired) return;
    constellationNavWired = true;

    const nextBtn = document.getElementById('next-portal');
    if (!nextBtn) return;

    nextBtn.addEventListener('click', () => {
        if (!currentPortalId) return;
        const idx = portalOrder.indexOf(currentPortalId);
        if (idx === -1) return;

        if (idx >= portalOrder.length - 1) {
            backToPortals();
            return;
        }

        openConstellation(portalOrder[idx + 1]);
    });
}

// Track progress (no locking; everything is always open)
let portalProgress = {
    puc: { completed: false, viewedStars: [] },
    degree: { completed: false, viewedStars: [] },
    people: { completed: false, viewedStars: [] },
    today: { completed: false, viewedStars: [] }
};

const portalOrder = ['puc', 'degree', 'people', 'today'];

// Initialize Memories System
function initMemoriesSystem() {
    attachPortalListeners();
    wireConstellationNav();
}

// Attach click listeners to portals
function attachPortalListeners() {
    // Attach listeners to portal cards
    document.querySelectorAll('[data-portal]').forEach(portal => {
        portal.addEventListener('click', () => {
            const portalId = portal.dataset.portal;
            openConstellation(portalId);
        });
    });
}

// Open constellation (star gallery) for a portal
function openConstellation(portalId) {
    currentPortalId = portalId;
    const data = memoriesData[portalId];
    const progress = portalProgress[portalId];
    
    // Update title
    document.getElementById('constellation-title').textContent = data.title;
    
    // Generate stars
    const container = document.getElementById('stars-container');
    const constellationWorld = document.querySelector('.constellation-world');
    container.innerHTML = '';
    container.classList.add('row-grid');
    container.classList.toggle('today-grid', portalId === 'today');
    if (constellationWorld) {
        constellationWorld.classList.toggle('today-theme', portalId === 'today');
    }

    const nextBtn = document.getElementById('next-portal');
    if (nextBtn) {
        const idx = portalOrder.indexOf(portalId);
        if (idx >= 0 && idx < portalOrder.length - 1) {
            const nextId = portalOrder[idx + 1];
            nextBtn.textContent = `Next →`;
            nextBtn.style.display = '';
            nextBtn.setAttribute('aria-label', `Next section: ${memoriesData[nextId].title}`);
        } else {
            nextBtn.textContent = 'Back →';
            nextBtn.style.display = '';
            nextBtn.setAttribute('aria-label', 'Back to portals');
        }
    }

    const hint = document.getElementById('constellation-hint');
    if (hint) {
        if (!data.memories.length) {
            hint.textContent = emptyPortalMessages[portalId] || '✨ Add photos to unlock this portal ✨';
        } else {
            hint.textContent = '✨ Touch a glowing card to open a memory ✨';
        }
    }
    
    if (!data.memories.length) {
        const empty = document.createElement('div');
        empty.className = 'portal-empty';
        empty.textContent = emptyPortalMessages[portalId] || 'No photos yet.';
        container.appendChild(empty);
    } else {
        renderRowLayout(container, portalId, data.memories, progress);
    }
    
    // Show constellation screen
    showScreen('screen-constellation');
}

function renderRowLayout(container, portalId, memories, progress) {
    const rowPattern = [1, 3, 5];
    let index = 0;
    let rowIndex = 0;

    while (index < memories.length) {
        const rowSize = rowPattern[rowIndex] || 5;
        const row = document.createElement('div');
        row.className = 'today-row';

        for (let i = 0; i < rowSize && index < memories.length; i += 1) {
            const memory = memories[index];
            const card = createMemoryCard(portalId, memory, index);

            if (progress.viewedStars.includes(memory.id)) {
                card.classList.add('viewed');
            }

            card.style.animationDelay = `${Math.random() * 2}s`;
            row.appendChild(card);
            index += 1;
        }

        container.appendChild(row);
        rowIndex += 1;
    }
}

// Open a memory (photo + message)
function openMemory(portalId, memory) {
    const modal = document.getElementById('photo-modal');
    const photo = document.getElementById('modal-photo');
    const message = document.getElementById('modal-message');
    
    const caption = memory.message || pickRandom(rotatingCaptions);

    photo.src = encodeURI(memory._resolvedSrc || memory.image);
    photo.onerror = () => {
        if (memory.fallbackImage) {
            photo.src = encodeURI(memory.fallbackImage);
        }
    };
    photo.alt = caption;
    message.textContent = caption;

    
    // Mark as viewed
    if (!portalProgress[portalId].viewedStars.includes(memory.id)) {
        portalProgress[portalId].viewedStars.push(memory.id);
        
        // Update star appearance
        const star = document.querySelector(`.star[data-memory-id="${memory.id}"][data-portal-id="${portalId}"]`);
        if (star) {
            star.classList.add('viewed');
        }
        
        // Check if all stars in portal are viewed
        const allViewed = memoriesData[portalId].memories.every(m => 
            portalProgress[portalId].viewedStars.includes(m.id)
        );
        
        if (allViewed) {
            portalProgress[portalId].completed = true;
        }
    }
    
    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('active');
    
    // Close modal handler
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        modal.classList.remove('active');
        setTimeout(() => modal.classList.add('hidden'), 300);
    };
    
    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    };
}

// Back to portals from constellation
function backToPortals() {
    showScreen('screen-memories');
    
    // Check if all portals completed
    const allCompleted = portalOrder.every(id => portalProgress[id].completed);
    if (allCompleted) {
        setTimeout(() => {
            showGoodbye();
        }, 500);
    }
}

// Show goodbye screen after all memories
function showGoodbye() {
    showScreen('screen-goodbye');
    
    const text = `🌷 🌸 🌺 🌻 🌼

I hope you enjoyed traveling through your beautiful memories... 💭

Always keep smiling like this, okay? 😊

I pray that every single coming day of your life... 🙏

Is soft, kind, and absolutely beautiful. 🌼

You know what, Ammu Kutti? 💭

You were not born with me...

But you are my sister in every way that truly matters. 💕

Some bonds...

Are stronger than blood. 💖

And once I promise something...

No matter how hard it becomes, I stand by it. Always. 💪

Thank you so much for your precious time, sister.

Have the most beautiful day ever! 💖`;

    const typewriter = new Typewriter(document.getElementById('goodbye-text'), {
        speed: 35,
        onComplete: () => {
            document.getElementById('goodbye-buttons').classList.remove('hidden');
        }
    });
    
    typewriter.type(text);
}

// Helper function to show screen (defined in app.js but used here too)
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Export for use
window.memoriesData = memoriesData;
window.portalProgress = portalProgress;
window.initMemoriesSystem = initMemoriesSystem;
window.backToPortals = backToPortals;
window.openConstellation = openConstellation;
