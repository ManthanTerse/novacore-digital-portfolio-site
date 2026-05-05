// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) el.classList.add('active');
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== STATS COUNTER ANIMATION =====
const counters = document.querySelectorAll('[data-count]');
let counted = false;
const animateCounters = () => {
  if (counted) return;
  const statsSection = document.querySelector('.stats');
  if (!statsSection) return;
  const top = statsSection.getBoundingClientRect().top;
  if (top < window.innerHeight - 100) {
    counted = true;
    counters.forEach(el => {
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current + suffix;
      }, 25);
    });
  }
};
window.addEventListener('scroll', animateCounters);

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = '✓ Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}

// ===== PARALLAX ORB MOVEMENT =====
document.addEventListener('mousemove', (e) => {
  const orbs = document.querySelectorAll('.hero-gradient-orb');
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  orbs.forEach((orb, i) => {
    const speed = (i + 1) * 0.5;
    orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});
