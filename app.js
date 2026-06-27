(() => {
  /* Navigation mobile */
  const nav = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');

  if (nav && toggle) {
    const closeMenu = () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('.navbar-items a')) closeMenu();
    });
  }

  /* Footer year  */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* Homepage name reveal */
  const name = document.querySelector('.name');

  if (name) {
    let revealed = false;

    const revealName = () => {
      if (revealed) return;
      revealed = true;
      name.classList.add('revealed');
    };

    name.addEventListener('mouseenter', revealName);
    name.addEventListener('click', revealName);
    name.addEventListener('focusin', revealName);
  }
})();