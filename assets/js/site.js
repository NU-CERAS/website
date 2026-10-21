// Navigation is fully visible without JavaScript; enhance it on small screens.
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  if (!toggle || !navigation) return;

  document.documentElement.classList.add('js');
  const mobile = window.matchMedia('(max-width: 600px)');

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    toggle.querySelector('span').textContent = 'Menu';
  };

  const syncViewport = () => {
    toggle.hidden = !mobile.matches;
    closeMenu();
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    toggle.querySelector('span').textContent = open ? 'Close' : 'Menu';
  });

  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });

  mobile.addEventListener('change', syncViewport);
  syncViewport();
})();
