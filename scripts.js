// Shared functions
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    music.paused ? music.play() : music.pause();
}

function createFloatingHearts() {
    for (let i = 0; i < 10; i++) {  // Creates 3 hearts at a time
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.animationDuration = Math.random() * 10 + 5 + 's';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 8000);
    }
}
setInterval(createFloatingHearts, 200);  // Adjust timing as needed

// Countdown timer
function updateTimer() { /* ... (previous timer code) ... */ }

// Poem generator
function generatePoem() { /* ... (previous poem code) ... */ }

// Growing flower
function growFlower() { /* ... (previous flower code) ... */ }

// Confetti shower
function showerConfetti() { /* ... (previous confetti code) ... */ }

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('timer')) updateTimer();
    if(document.getElementById('poem')) generatePoem();
});