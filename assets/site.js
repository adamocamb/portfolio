const currentPath = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.site-nav a').forEach((link) => {
  const linkPath = link.getAttribute('href').split('#')[0].split('/').pop() || 'index.html';
  if (linkPath === currentPath) {
    link.setAttribute('aria-current', 'page');
  }
});
