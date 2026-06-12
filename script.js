// Update this value when the live scheduling page is ready.
// Keeping the current in-page destination makes every demo CTA useful before launch.
const SCHEDULING_URL = '#early-access';

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  siteNav.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

document.querySelectorAll('.schedule-link').forEach((link) => {
  link.setAttribute('href', SCHEDULING_URL);
});

// Analytics integration point: replace or supplement console.info with your
// analytics provider's event call (Google Analytics, Meta Pixel, etc.).
document.querySelectorAll('[data-track]').forEach((element) => {
  element.addEventListener('click', () => {
    console.info('[CTA tracking]', {
      event: element.dataset.track,
      label: element.textContent.trim().replace(/\s+/g, ' '),
      href: element.getAttribute('href')
    });
  });
});

document.getElementById('current-year').textContent = new Date().getFullYear();
