// confetti.js - Confetti and Sparkle Animation
const confettiCanvas = document.createElement('canvas');
const confettiCtx = confettiCanvas.getContext('2d');
document.body.insertBefore(confettiCanvas, document.body.firstChild);

function resizeConfettiCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}
resizeConfettiCanvas();
window.addEventListener('resize', resizeConfettiCanvas);

confettiCanvas.style.position = 'fixed';
confettiCanvas.style.top = '0';
confettiCanvas.style.left = '0';
confettiCanvas.style.zIndex = '500';
confettiCanvas.style.pointerEvents = 'none';

const confetti = [];
const colors = ['#FFD700', '#FFF', '#FF69B4', '#87CEEB', '#FFB6C1'];

function createConfetti(x, y, count = 50) {
    for (let i = 0; i < count; i++) {
        confetti.push({
            x: x || Math.random() * confettiCanvas.width,
            y: y || 0,
            vx: (Math.random() - 0.5) * 8,
            vy: Math.random() * 8 + 2,
            size: Math.random() * 4 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.1,
            life: 1,
            decay: Math.random() * 0.01 + 0.005
        });
    }
}

function animateConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    
    for (let i = confetti.length - 1; i >= 0; i--) {
        let p = confetti[i];
        
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1; // gravity
        p.rotation += p.rotationSpeed;
        p.life -= p.decay;
        
        if (p.life <= 0) {
            confetti.splice(i, 1);
            continue;
        }
        
        confettiCtx.save();
        confettiCtx.globalAlpha = p.life;
        confettiCtx.fillStyle = p.color;
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate(p.rotation);
        confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        confettiCtx.restore();
    }
    
    if (confetti.length > 0) {
        requestAnimationFrame(animateConfetti);
    }
}

// Trigger confetti on page load
window.addEventListener('load', () => {
    createConfetti(window.innerWidth / 2, -10, 100);
    animateConfetti();
});

// Also trigger on button click
document.addEventListener('DOMContentLoaded', () => {
    const entryBtn = document.querySelector('#entry button');
    if (entryBtn) {
        entryBtn.addEventListener('click', () => {
            createConfetti(window.innerWidth / 2, -10, 80);
            animateConfetti();
        });
    }
});