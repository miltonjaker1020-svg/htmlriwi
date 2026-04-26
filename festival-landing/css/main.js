
// 1. MENÚ HAMBURGUESA (mobile)
// ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');
const navLinks  = document.querySelectorAll('.nav-link');

/**
 * toggleMenu – abre o cierra el nav en mobile.
 * Cambia: aria-expanded, clase .active en el botón,
 * clase .open en el nav, y bloquea el scroll del body.
 */
function toggleMenu(force) {
  const isOpen = typeof force === 'boolean' ? force : !nav.classList.contains('open');
  hamburger.classList.toggle('active', isOpen);
  nav.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

hamburger.addEventListener('click', () => toggleMenu());

// Cerrar al hacer click en un link
navLinks.forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});



// ─────────────────────────────────────────────
// 2. HEADER – efecto scroll
// ─────────────────────────────────────────────
const header = document.getElementById('header');

/**
 * Añade la clase .scrolled al header cuando
 * el usuario baja más de 60px. Eso activa el
 * fondo glassmorphism definido en CSS.
 */
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });


// ─────────────────────────────────────────────
// 3. REVEAL ON SCROLL – Intersection Observer
// ─────────────────────────────────────────────
/**
 * IntersectionObserver observa todos los elementos
 * con clase .reveal. Cuando el 15% del elemento
 * entra al viewport, le agrega .visible (que activa
 * la animación CSS de fade + slide-up).
 */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // Solo anima una vez
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});


// ─────────────────────────────────────────────
// 4. PARTÍCULAS DECORATIVAS DEL HERO
// ─────────────────────────────────────────────
const particlesContainer = document.getElementById('particles');

/**
 * createParticle – crea una pequeña partícula
 * circular con posición, tamaño, color y velocidad
 * aleatorios. Se usa como decoración del hero.
 */
function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  const size    = Math.random() * 4 + 2;       // 2px – 6px
  const left    = Math.random() * 100;          // posición X aleatoria
  const delay   = Math.random() * 6;            // delay de animación
  const duration= Math.random() * 8 + 6;       // duración 6s – 14s

  // Colores del tema: gold, amber, rose, teal
  const colors  = ['#f5c242', '#ff8c42', '#e84393', '#2dd4bf', '#ffffff'];
  const color   = colors[Math.floor(Math.random() * colors.length)];

  particle.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${left}%;
    bottom: -10px;
    background: ${color};
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
    box-shadow: 0 0 ${size * 2}px ${color};
  `;

  particlesContainer.appendChild(particle);

  // Eliminar la partícula cuando termina para no llenar el DOM
  setTimeout(() => particle.remove(), (duration + delay) * 1000);
}

// Crear partículas continuamente
setInterval(createParticle, 500);
// Llenar la pantalla al inicio con partículas escalonadas
for (let i = 0; i < 20; i++) setTimeout(createParticle, i * 150);






const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.stat-num').forEach(el => {
  counterObserver.observe(el);
});





// Estructura de datos de la galería
const galleryData = [
  { emoji: '🍜', label: 'Cocina del Mundo',          bg: '#1a0a2e' },
  { emoji: '🔥', label: 'Show de Fuego',              bg: '#2d1b00' },
  { emoji: '🎸', label: 'Música en Vivo',             bg: '#0a1f1a' },
  { emoji: '🍰', label: 'Zona de Postres',            bg: '#1f0a0a' },
  { emoji: '🍹', label: 'Cócteles Artesanales',       bg: '#0d0a2e' },
  { emoji: '🌮', label: 'Street Food',                bg: '#1a1a0a' },
];




// ─────────────────────────────────────────────
// 8. BOTÓN VOLVER ARRIBA
// ─────────────────────────────────────────────
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



