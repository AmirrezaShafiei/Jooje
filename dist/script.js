const story = document.querySelector('#story');
const trigger = document.querySelector('#letterTrigger');
const message = document.querySelector('#loveMessage');
const particleLayer = document.querySelector('#particleLayer');

const particleCharacters = ['♥', '♥', '♥', '●'];
const particleColors = ['#ef6c5e', '#f58a25', '#f49a86', '#ffc45c'];

function releaseParticles() {
  const count = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 16;

  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement('span');
    const isPetal = index % 4 === 3;
    particle.className = 'particle';
    particle.textContent = particleCharacters[index % particleCharacters.length];
    particle.style.setProperty('--x', `${8 + Math.random() * 84}%`);
    particle.style.setProperty('--size', `${isPetal ? 0.45 : 0.75 + Math.random() * 0.9}rem`);
    particle.style.setProperty('--color', particleColors[index % particleColors.length]);
    particle.style.setProperty('--duration', `${3.8 + Math.random() * 2.2}s`);
    particle.style.setProperty('--delay', `${Math.random() * 0.8}s`);
    particle.style.setProperty('--drift', `${-55 + Math.random() * 110}px`);
    particle.style.setProperty('--spin', `${-90 + Math.random() * 180}deg`);
    particleLayer.append(particle);
    particle.addEventListener('animationend', () => particle.remove(), { once: true });
  }
}

function revealLetter() {
  if (story.classList.contains('revealed')) return;

  story.classList.add('revealed');
  trigger.setAttribute('aria-expanded', 'true');
  message.textContent = 'دوستت دارم نارنجوجوی من ❤️';
  releaseParticles();

  window.setTimeout(() => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior });
  }, 680);
}

trigger.addEventListener('click', revealLetter);
