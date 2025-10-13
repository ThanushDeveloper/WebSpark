(function () {
  const header = document.getElementById('site-header');
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.getElementById('primary-navigation');
  const yearEl = document.getElementById('year');
  const rotatorEl = document.querySelector('.rotator');

  // Update footer year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Rotating hero word
  if (rotatorEl) {
    try {
      const wordsAttr = rotatorEl.getAttribute('data-words');
      const words = wordsAttr ? JSON.parse(wordsAttr) : [];
      let index = 0;
      const rotate = () => {
        index = (index + 1) % words.length;
        rotatorEl.textContent = words[index];
      };
      if (words.length > 1) setInterval(rotate, 1800);
    } catch (_) {
      /* ignore */
    }
  }

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click (mobile)
    navMenu.addEventListener('click', (e) => {
      const target = e.target;
      if (target instanceof HTMLElement && target.tagName === 'A' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scrolling for hash links
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.matches('a[href^="#"]')) {
      const href = target.getAttribute('href');
      if (!href) return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const headerOffset = header ? header.offsetHeight + 8 : 0;
      const rect = el.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
    }
  });

  // Scrollspy: highlight active nav link
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav__list a[href^="#"]'));
  const sectionById = new Map(sections.map((s) => [s.id, s]));
  const linkById = new Map(
    navLinks.map((a) => [a.getAttribute('href')?.replace('#', ''), a])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = entry.target.id;
        const link = linkById.get(id);
        if (!link) continue;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.removeAttribute('aria-current'));
          link.setAttribute('aria-current', 'page');
        }
      }
    },
    { rootMargin: '-50% 0px -40% 0px', threshold: 0.01 }
  );

  sections.forEach((s) => observer.observe(s));

  // Reveal on scroll (progressive enhancement)
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }
})();
