// confetti.js

// Configuration for canvas dimensions
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
resizeCanvas();

// Window resize handling
window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Confetti settings
const confettiColors = ['#ff0c00', '#00ff0c', '#000cff', '#fc0cff'];
const confettiParticles = [];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confettiParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 2,
            color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            fallSpeed: Math.random() * 3 + 1,
        });
    }
}

// Sparkle settings
const sparkles = [];

function createSparkles() {
    for (let i = 0; i < 50; i++) {
        sparkles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.5,
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let particle of confettiParticles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        particle.y += particle.fallSpeed;
        if (particle.y > canvas.height) {
            particle.y = -10;
        }
    }
}

function drawSparkles() {
    for (let sparkle of sparkles) {
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${sparkle.opacity})`;
        ctx.fill();
        sparkle.y -= 0.5;
        if (sparkle.y < 0) {
            sparkle.y = canvas.height;
        }
    }
}

function animate() {
    drawConfetti();
    drawSparkles();
    requestAnimationFrame(animate);
}

// Initialize animations on page load
window.onload = () => {
    createConfetti();
    createSparkles();
    animate();
};

