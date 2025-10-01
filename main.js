const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 120;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5
  });
}
const whatsappBtn = document.querySelector('.btn-whatsapp');

whatsappBtn.addEventListener('mouseenter', () => {
  whatsappBtn.style.boxShadow = '0 0 30px #25D366, 0 0 60px #25D366';
});
whatsappBtn.addEventListener('mouseleave', () => {
  whatsappBtn.style.boxShadow = '0 0 5px #25D366, 0 0 15px #25D366';
});

const profilePic = document.querySelector('.profile-pic');

profilePic.addEventListener('mouseenter', () => {
  profilePic.style.boxShadow = '0 0 50px #00fff7, 0 0 100px #00fff7';
});
profilePic.addEventListener('mouseleave', () => {
  profilePic.style.boxShadow = '0 0 20px #00fff7, 0 0 40px #00fff7';
});

function animate() {
  ctx.fillStyle = '#0d0d0d';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#00fff7';
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
