/* ============================================
   AMMU BIRTHDAY SURPRISE - MAIN APP
   Interactive Story Flow Controller
   ============================================ */

// Application State
let appState = {
    userName: '',
    currentScreen: 'screen-welcome',
    musicPlaying: false
};

// Simple navigation history
let navHistory = [];
let isNavigatingBack = false;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initFireflies();
    initLetterFeature();
    initNavBack();
    initBackgroundMusic();
    initEndVideoSound();
    startExperience();
});

// ============================================
// FIREFLIES ANIMATION
// ============================================
function initFireflies() {
    const container = document.getElementById('fireflies');
    const fireflyCount = 50; // More sparkles for Cinderella theme
    
    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = `${Math.random() * 100}%`;
        firefly.style.top = `${Math.random() * 100}%`;
        firefly.style.animationDelay = `${Math.random() * 8}s`;
        firefly.style.animationDuration = `${6 + Math.random() * 4}s`;
        
        // Add random sparkle colors (gold, pink, blue)
        const colors = ['#ffd700', '#ffd4e5', '#b8d4ff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        firefly.style.background = `radial-gradient(circle, #fff 0%, ${color} 40%, transparent 100%)`;
        
        container.appendChild(firefly);
    }
    
    // Add floating sparkles
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #ffd700 0%, transparent 100%);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: sparkle-twinkle ${3 + Math.random() * 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
        `;
        container.appendChild(sparkle);
    }
}

function initNavBack() {
    const backBtn = document.getElementById('navBack');
    if (!backBtn) return;

    backBtn.addEventListener('click', () => {
        if (!navHistory.length) return;
        const prev = navHistory.pop();
        isNavigatingBack = true;
        showScreen(prev);
        isNavigatingBack = false;
    });
}

// ============================================
// SECRET LETTER FEATURE
// ============================================
function initLetterFeature() {
    const letterIcon = document.getElementById('letterIcon');
    const letterModal = document.getElementById('letter-modal');
    const closeLetter = letterModal.querySelector('.close-letter');
    const submitPassword = document.getElementById('submitPassword');
    const passwordInput = document.getElementById('letterPassword');
    const passwordError = document.getElementById('password-error');
    const passwordSection = document.getElementById('password-section');
    const letterContent = document.getElementById('letter-content');
    const letterIntroText = document.getElementById('letter-intro-text');
    const letterBackBtn = document.getElementById('letter-back');
    
    // Open letter modal
    letterIcon.addEventListener('click', () => {
        letterModal.classList.remove('hidden');
        letterModal.classList.add('active');
        // Reset state
        passwordSection.classList.remove('hidden');
        letterContent.classList.add('hidden');
        passwordInput.value = '';
        passwordError.classList.add('hidden');

        if (letterIntroText) {
            const typewriter = new Typewriter(letterIntroText, {
                speed: 35
            });
            typewriter.type('Hmm... a secret letter? 👀💌\nBe curious... but be gentle 😌✨');
        }
    });
    
    // Close letter modal
    closeLetter.addEventListener('click', () => {
        letterModal.classList.remove('active');
        setTimeout(() => letterModal.classList.add('hidden'), 300);
    });
    
    // Close on background click
    letterModal.addEventListener('click', (e) => {
        if (e.target === letterModal) {
            letterModal.classList.remove('active');
            setTimeout(() => letterModal.classList.add('hidden'), 300);
        }
    });
    
    // Password submission
    submitPassword.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });
    
    function checkPassword() {
        const password = passwordInput.value.trim();
        
        if (password === '1901') {
            passwordError.classList.add('hidden');
            passwordSection.classList.add('hidden');
            letterContent.classList.remove('hidden');
            
            // Add celebration effect
            createCelebrationEffect();
        } else {
            passwordError.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();
            
            // Shake animation
            passwordInput.style.animation = 'wiggle 0.5s ease-in-out';
            setTimeout(() => {
                passwordInput.style.animation = '';
            }, 500);
        }
    }

    if (letterBackBtn) {
        letterBackBtn.addEventListener('click', () => {
            letterContent.classList.add('hidden');
            passwordSection.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();
        });
    }
}

// ============================================
// BACKGROUND MUSIC
// ============================================
function initBackgroundMusic() {
    const music = document.getElementById('bgMusic');
    const toggleBtn = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    
    if (!music || !toggleBtn) return;
    
    let musicStarted = false;
    let userInteracted = false;
    
    music.volume = 0.15;
    toggleBtn.style.display = 'block';
    if (musicIcon) musicIcon.textContent = '🔇';
    
    const startMusic = async () => {
        if (musicStarted || !userInteracted) return;
        try {
            await music.play();
            musicStarted = true;
            toggleBtn.style.display = 'block';
            if (musicIcon) musicIcon.textContent = '🎵';
        } catch (err) {
            console.log('Music autoplay prevented');
        }
    };
    
    const fadeInMusic = () => {
        if (!musicStarted) return;
        music.volume = 0;
        const fadeInterval = setInterval(() => {
            if (music.volume < 0.15) {
                music.volume = Math.min(music.volume + 0.01, 0.15);
            } else {
                clearInterval(fadeInterval);
            }
        }, 100);
    };
    
    const handleFirstInteraction = async () => {
        if (userInteracted) return;
        userInteracted = true;
        document.removeEventListener('touchstart', handleFirstInteraction);
        document.removeEventListener('click', handleFirstInteraction);
        await startMusic();
        fadeInMusic();
    };
    
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    document.addEventListener('click', handleFirstInteraction, { once: true });
    
    toggleBtn.addEventListener('click', async () => {
        userInteracted = true;
        if (music.paused) {
            try {
                await music.play();
                musicStarted = true;
                if (musicIcon) musicIcon.textContent = '🎵';
            } catch (err) {
                if (musicIcon) musicIcon.textContent = '🔇';
            }
        } else {
            music.pause();
            if (musicIcon) musicIcon.textContent = '🔇';
        }
    });
    
    music.addEventListener('error', () => {
        toggleBtn.style.display = 'none';
    });
}

// ============================================
// END SCREEN VIDEO SOUND
// ============================================
function initEndVideoSound() {
    const video = document.querySelector('#screen-end .end-video');
    const muteBtn = document.querySelector('#screen-end .end-video-mute');
    const audio = document.getElementById('endAudio');

    if (!video || !muteBtn) return;

    if (audio) {
        audio.volume = 1.0;
        audio.loop = video.loop;
        audio.muted = video.muted;
        audio.playbackRate = video.playbackRate;
    }

    const updateIcon = () => {
        muteBtn.textContent = video.muted ? '🔇' : '🔊';
        muteBtn.setAttribute('aria-pressed', video.muted ? 'false' : 'true');
    };

    updateIcon();

    muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        if (audio) audio.muted = video.muted;
        updateIcon();
    });

    if (audio) {
        const syncAudioTime = () => {
            const drift = Math.abs(audio.currentTime - video.currentTime);
            if (drift > 0.3) {
                audio.currentTime = video.currentTime;
            }
        };

        video.addEventListener('play', async () => {
            audio.muted = video.muted;
            audio.playbackRate = video.playbackRate;
            try {
                await audio.play();
            } catch (err) {
                // Ignore autoplay restrictions
            }
        });

        video.addEventListener('pause', () => {
            audio.pause();
        });

        video.addEventListener('seeking', () => {
            audio.currentTime = video.currentTime;
        });

        video.addEventListener('timeupdate', syncAudioTime);

        video.addEventListener('ratechange', () => {
            audio.playbackRate = video.playbackRate;
        });

        video.addEventListener('ended', () => {
            audio.pause();
            audio.currentTime = 0;
        });
    }
}

// Celebration effect for letter unlock
function createCelebrationEffect() {
    const colors = ['#ff6b9d', '#f8b500', '#38ef7d', '#667eea', '#f5576c'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -10px;
                border-radius: 50%;
                z-index: 3000;
                pointer-events: none;
                animation: fall ${2 + Math.random() * 2}s linear forwards;
            `;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
    
    // Add falling animation
    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// SCREEN NAVIGATION
// ============================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');

    const backBtn = document.getElementById('navBack');
    if (backBtn) {
        const shouldShow = screenId !== 'screen-welcome';
        backBtn.classList.toggle('hidden', !shouldShow);
    }

    if (!isNavigatingBack && appState.currentScreen && appState.currentScreen !== screenId) {
        navHistory.push(appState.currentScreen);
        if (navHistory.length > 30) navHistory.shift();
    }
    appState.currentScreen = screenId;
}

// ============================================
// STORY FLOW
// ============================================
function startExperience() {
    showScreen('screen-welcome');
    
    const welcomeText = `Hello dear... 🌸

Who are you? 🤔

For you... 💖

Just curious... 🦋

How should I address you, dear? ✨`;

    const typewriter = new Typewriter(document.getElementById('welcome-text'), {
        speed: 40,
        delay: 800,
        onComplete: () => {
            document.getElementById('name-input-section').classList.remove('hidden');
            document.getElementById('nameInput').focus();
        }
    });
    
    typewriter.type(welcomeText);
    
    // Name submission
    document.getElementById('submitName').addEventListener('click', submitName);
    document.getElementById('nameInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitName();
    });
}

function submitName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    
    if (!name) {
        nameInput.style.animation = 'wiggle 0.5s ease-in-out';
        setTimeout(() => nameInput.style.animation = '', 500);
        return;
    }
    
    const allowed = isAllowedName(name);
    if (!allowed) {
        showNotAllowedScreen(name);
        return;
    }

    appState.userName = name;
    showRecognitionScreen();
}

function normalizeName(raw) {
    return (raw || '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z\s]/g, '')
        .replace(/\s+/g, ' ');
}

function isAllowedName(raw) {
    const normalized = normalizeName(raw);
    if (!normalized) return false;

    // Accept exact name or first word match (e.g., "Amulya" or "Amulya R")
    const firstWord = normalized.split(' ')[0];
    return firstWord === 'ammu' || firstWord === 'amulya';
}

function resetToWelcome() {
    showScreen('screen-welcome');

    const nameInputSection = document.getElementById('name-input-section');
    const nameInput = document.getElementById('nameInput');
    const welcomeTextEl = document.getElementById('welcome-text');

    // Keep it simple on retry: show prompt immediately and focus input.
    welcomeTextEl.textContent = 'Hello dear...\nWho are you?';
    nameInputSection.classList.remove('hidden');
    nameInput.value = '';
    nameInput.focus();
}

function showNotAllowedScreen(typedName) {
    showScreen('screen-not-allowed');

    const buttons = document.getElementById('not-allowed-buttons');
    buttons.classList.add('hidden');

    const text = `Awh! How cute your name is... 🥰

But I'm really really sorry... 😔

This door is a little Special… ✨

It doesn't open for everyone... 💫

It only opens for a rare Soul... 💌

If you're the one that someone special is waiting for... 💖

You already know what name to whisper... 😉

If not…

It will gently guide you back home... 🌷`;

    const typewriter = new Typewriter(document.getElementById('not-allowed-text'), {
        speed: 32,
        onComplete: () => {
            buttons.classList.remove('hidden');
        }
    });

    typewriter.type(text);

    const tryAgainBtn = document.getElementById('try-again');
    const goHomeBtn = document.getElementById('go-home');

    // Use once:true so repeated attempts don't stack listeners.
    tryAgainBtn.addEventListener('click', resetToWelcome, { once: true });
    goHomeBtn.addEventListener('click', resetToWelcome, { once: true });
}

function showRecognitionScreen() {
    showScreen('screen-recognition');
    
    const text = `Something special is here… ✨

For you 💖

You are… 🌟

Karna's precious sister… 👑

Beloved and cherished Ammu Kutti…, right?💕

This moment is for you 🌷

Welcome to your fairytale, Dear 🏰✨`;

    const typewriter = new Typewriter(document.getElementById('recognition-text'), {
        speed: 38,
        onComplete: () => {
            document.getElementById('recognition-buttons').classList.remove('hidden');
        }
    });
    
    typewriter.type(text);
    
    // Button handler (only YES is shown)
    document.querySelectorAll('#recognition-buttons .glow-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showGreetingScreen();
        });
    });
}

function showGreetingScreen() {
    showScreen('screen-greeting');
    
    const text = `Before we begin this journey... 🌙

There's something I'd love to ask… 🦋

Can I address you as Ammu Kutti? 💖

It sounds so sweet, doesn't it? 💕🌸`;

    const typewriter = new Typewriter(document.getElementById('greeting-text'), {
        speed: 35,
        onComplete: () => {
            document.getElementById('greeting-buttons').classList.remove('hidden');
        }
    });
    
    typewriter.type(text);
    
    // Single button: continue
    document.querySelectorAll('#greeting-buttons .glow-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showWhyScreen();
        });
    });
}

function showTeaseScreen() {
    showScreen('screen-tease');
    
    // Add wiggle animation to content box
    const contentBox = document.querySelector('#screen-tease .content-box');
    contentBox.classList.add('wiggle');
    
    const text = `Oh really? 😏

I will still call you Ammu Kutti only... 😌

Because Karna has the habit of listening to me... 🤭

You can complain to him... 😜

But I know you won't do that, right? 💖

You never break your brother's trust, right Ammu Kutti? 💞✨`;

    const typewriter = new Typewriter(document.getElementById('tease-text'), {
        speed: 40,
        onComplete: () => {
            document.getElementById('tease-buttons').classList.remove('hidden');
        }
    });
    
    typewriter.type(text);
    
    // Button handler
    document.querySelector('#tease-buttons .glow-btn').addEventListener('click', () => {
        showWhyScreen();
    });
}

function showWhyScreen() {
    showScreen('screen-why');
    
    // More gradual, flirty conversation start
    const text = `You know what, Dear... 💖?

I've been wondering… 🤔

Why did you really come here today, Dear? ✨🌟`;

    const typewriter = new Typewriter(document.getElementById('why-text'), {
        speed: 35,
        onComplete: () => {
            document.getElementById('why-buttons').classList.remove('hidden');
        }
    });
    
    typewriter.type(text);
    
    // Button handlers
    document.querySelectorAll('#why-buttons .glow-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const choice = btn.dataset.choice;
            if (choice === 'surprise') {
                showCaughtScreen('surprise');
            } else {
                showCaughtScreen('you');
            }
        });
    });
}

function showCaughtScreen(reason) {
    showScreen('screen-caught');
    
    let text;
    if (reason === 'surprise') {
        text = `Oh... so you came here just to see your brother's surprise? 😏

Hmm... I was secretly hoping… 💭

Maybe you rushed in to see me first? 🥺

But you disappointed me, dear... 😔

But you know what, I'm still your loyal guard, after all... 💖

I will still walk you to your brother's wishes... 🚶‍♀️

I'm just kidding, dear... 😊

Actually, I too curiously want to see your brother's surprise... 🤭

So, let's go to your brother's wishes... 🎁

Let's go slowly... gently... 🌸

Because that's what your brother would want for you... 💞✨`;
    } else {
        text = `Aww... 'to see you, dear'? 😳💕

You know… 🤔

If I believe that… 💭

I might start smiling like a complete fool right now... 😊

But okay... I'll try not to overact... 🤭

Come... your brother is waiting... 🚶‍♂️

And maybe... just maybe... I'm a little happy you said that... 💖✨`;
    }

    const typewriter = new Typewriter(document.getElementById('caught-text'), {
        speed: 35,
        onComplete: () => {
            document.getElementById('caught-buttons').classList.remove('hidden');
        }
    });
    
    typewriter.type(text);
    
    // Button handler
    document.querySelector('#caught-buttons .glow-btn').addEventListener('click', () => {
        showBrotherScreen();
    });
}

function showBrotherScreen() {
    showScreen('screen-brother');
    
    const text = `Hii Kutti Sister... 👋

How are you? 💕

I hope you are doing really well today... 🌸

By the way... I heard a rumour... 😏

Is today your birthday... 🎂

Or is my Heart just telling a lie? 💭`;

    const typewriter = new Typewriter(document.getElementById('brother-text'), {
        speed: 38,
        onComplete: () => {
            document.getElementById('brother-buttons').classList.remove('hidden');
        }
    });
    
    typewriter.type(text);
    
    // Button handlers
    document.querySelectorAll('#brother-buttons .glow-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const choice = btn.dataset.choice;
            if (choice === 'yes') {
                showBirthdayScreen();
            } else {
                showBirthdayTeaseScreen();
            }
        });
    });
}

function showBirthdayTeaseScreen() {
    showScreen('screen-birthday-tease');
    
    const text = `Oh come on, don't act so smart, dear... 😌

I can see right through you... 👀

You're waiting for my wishes, aren't you? 🎁

I know you too well, Ammu Kutti... 💕

Let me make your day special! 🌟✨`;

    const typewriter = new Typewriter(document.getElementById('birthday-tease-text'), {
        speed: 35,
        onComplete: () => {
            document.getElementById('birthday-tease-buttons').classList.remove('hidden');
        }
    });
    
    typewriter.type(text);
    
    // Button handler
    document.querySelector('#birthday-tease-buttons .glow-btn').addEventListener('click', () => {
        showBirthdayScreen();
    });
}

function showBirthdayScreen() {
    showScreen('screen-birthday');
    
    // Add extra fireflies for celebration
    addCelebrationFireflies();
    
    const text = `🎂 Happiest Birthday, my beautiful sister! 🎂💐

I hope your special day is filled with… ✨

Endless smiles that never fade... 😊

Silent prayers that get answered... 🙏

And dreams that slowly, beautifully turn real... 🌟

You deserve every single bit of happiness in this world... 💕

Lotzzz of love, prosperity, and magical moments just for you! 🌈💖`;

    const typewriter = new Typewriter(document.getElementById('birthday-text'), {
        speed: 32,
        onComplete: () => {
            document.getElementById('birthday-buttons').classList.remove('hidden');
        }
    });
    
    typewriter.type(text);
    
    // Button handler
    document.querySelector('#birthday-buttons .glow-btn').addEventListener('click', () => {
        showTimeTravelScreen();
    });
}

function addCelebrationFireflies() {
    const container = document.getElementById('fireflies');
    const colors = ['#ff6b9d', '#f8b500', '#38ef7d', '#667eea'];
    
    for (let i = 0; i < 20; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly celebration-firefly';
        firefly.style.left = `${Math.random() * 100}%`;
        firefly.style.top = `${Math.random() * 100}%`;
        firefly.style.background = `radial-gradient(circle, #fff 0%, ${colors[Math.floor(Math.random() * colors.length)]} 50%, transparent 100%)`;
        firefly.style.animationDelay = `${Math.random() * 3}s`;
        firefly.style.animationDuration = `${4 + Math.random() * 3}s`;
        container.appendChild(firefly);
    }
}

function showTimeTravelScreen() {
    showScreen('screen-timetravel');
    
    const text = `I can see you're blushing right now... 💕😊

And you know what? 🤔

I want to make you even happier! ✨

Tell me one thing, Ammu Kutti... 💭

Do you believe in gooing beyond the present? 🕰️

Going back to those beautiful memories... 🌟

Reliving the moments that made you smile? 🌙✨`;

    const typewriter = new Typewriter(document.getElementById('timetravel-text'), {
        speed: 35,
        onComplete: () => {
            document.getElementById('timetravel-buttons').classList.remove('hidden');
        }
    });
    
    typewriter.type(text);
    
    // Button handlers
    document.querySelectorAll('#timetravel-buttons .glow-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const choice = btn.dataset.choice;
            showTimeTravelResponse(choice);
        });
    });
}

function showTimeTravelResponse(choice) {
    showScreen('screen-timetravel-response');
    
    let text;
    if (choice === 'yes') {
        text = `Me too... sometimes I do believe! 💭✨

Then tell me, dear sister... 🤔

Are you excited to step outside the present? 🕰️

Let's go on an adventure together… 🚀

To the Memories World... 🌌

It's going to be magical! 🌟💫`;
    } else {
        text = `Sometimes I don't believe either... 💭

But you know what? 🤔

Let's create our own fantasy world instead! 🌸✨

Are you ready for this adventure, sister? 🚀

Let's go to the Memories World... 🌌

It'll be even better than stepping outside the present! 💫🌟`;
    }

    const typewriter = new Typewriter(document.getElementById('timetravel-response-text'), {
        speed: 35,
        onComplete: () => {
            document.getElementById('timetravel-response-buttons').classList.remove('hidden');
        }
    });
    
    typewriter.type(text);
    
    // Button handler
    document.querySelector('#timetravel-response-buttons .glow-btn').addEventListener('click', () => {
        showMemoriesWorld();
    });
}

function showMemoriesWorld() {
    showScreen('screen-memories');
    initMemoriesSystem();
    
    // Back to portals button
    const backBtn = document.getElementById('back-to-portals');
    if (backBtn && !backBtn.dataset.wired) {
        backBtn.dataset.wired = 'true';
        backBtn.addEventListener('click', () => {
            backToPortals();
        });
    }

    const finalNoteBtn = document.getElementById('memories-continue-btn');
    if (finalNoteBtn && !finalNoteBtn.dataset.wired) {
        finalNoteBtn.dataset.wired = 'true';
        finalNoteBtn.addEventListener('click', () => {
            showHeartfeltScreen();
        });
    }
    
    // Let's Dive Deeper button - opens the first portal (PUC Memories)
    const diveBtn = document.getElementById('memories-continue-btn');
    if (diveBtn && !diveBtn.dataset.wired) {
        diveBtn.dataset.wired = 'true';
        diveBtn.addEventListener('click', () => {
            // Simulate clicking the first portal card (PUC Memories)
            const firstPortal = document.getElementById('portal-puc');
            if (firstPortal) {
                firstPortal.click();
            }
        });
    }
}

function showHeartfeltScreen() {
    showScreen('screen-heartfelt');

    const textEl = document.getElementById('heartfelt-text');
    const buttons = document.getElementById('heartfelt-buttons');
    if (!textEl || !buttons) return;

    buttons.classList.add('hidden');

    const text = `🌷 🌸 🌺 🌻 🌼

I hope you enjoyed stepping outside the present... 💭

Through your beautiful memories... 📸✨

Always keep smiling like this, okay? 😊

I pray that every single coming day of your life... 🙏

Is soft, kind, and absolutely beautiful... 🌼

You know what, Ammu Kutti? 💭

You were not born with me... 🌸

But you are my sister in every way that truly matters... 💕

Some bonds... 🔗

Are stronger than blood... 💖

And once I promise something... 🤝

No matter how hard it becomes, I stand by it. Always... 💪

Thank you so much for your precious time, sister... 🙏

Have the most beautiful day ever! 💖✨`;

    const typewriter = new Typewriter(textEl, {
        speed: 34,
        onComplete: () => buttons.classList.remove('hidden')
    });

    typewriter.type(text);

    const continueBtn = document.getElementById('heartfelt-continue');
    if (continueBtn && !continueBtn.dataset.wired) {
        continueBtn.dataset.wired = 'true';
        continueBtn.addEventListener('click', () => {
            showEndScreen();
        });
    }
}

// Goodbye screen handlers
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const goodbyeBtn = document.querySelector('#goodbye-buttons .glow-btn');
        if (goodbyeBtn) {
            goodbyeBtn.addEventListener('click', () => {
                showEndScreen();
            });
        }
    }, 100);
});

function showEndScreen() {
    showScreen('screen-end');
    
    // Restart button
    document.getElementById('restart').addEventListener('click', () => {
        location.reload();
    });
}

// Make showScreen globally available
window.showScreen = showScreen;
window.showHeartfeltScreen = showHeartfeltScreen;
