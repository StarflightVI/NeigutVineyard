// Shared site script: nav toggle, hide current page link, set year
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle (if present)
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav') || document.querySelector('.main-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // Hide the nav link that points to the current page
  // Determine current filename (treat root and index.html as index)
  let current = (location.pathname.split('/').pop() || 'index.html');
  if (!current || current === '') current = 'index.html';

  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const target = href.split('/').pop() || 'index.html';
    // Treat both '' and 'index.html' as home
    const targetNorm = (target === '' ? 'index.html' : target);
    const currentNorm = (current === '' ? 'index.html' : current);
    if (targetNorm === currentNorm) {
      a.style.display = 'none';
      a.setAttribute('aria-hidden', 'true');
    }
  });

  // Set any year spans if present
  document.querySelectorAll('#year, #year2, #year3').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
