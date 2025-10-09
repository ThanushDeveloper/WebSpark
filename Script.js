// Portfolio interactions and effects
(function () {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  const header = $('#header');
  const navMenu = $('#navMenu');
  const navToggle = $('#navToggle');
  const themeToggle = $('#themeToggle');
  const yearEl = $('#year');

  // Year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header shadow
  const onScrollHeader = () => {
    if (window.scrollY > 6) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }
  $$('.nav__link').forEach((link) => link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));

  // Active nav link on scroll
  const sections = $$('main section[id]');
  const navLinks = $$('.nav__link');
  const activateLink = () => {
    const y = window.scrollY + 120;
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      const bottom = top + rect.height;
      const id = sec.getAttribute('id');
      const link = $(`.nav__link[href="#${id}"]`);
      if (!link) return;
      if (y >= top && y < bottom) {
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  };
  activateLink();
  window.addEventListener('scroll', activateLink, { passive: true });

  // Theme toggle with localStorage
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) root.setAttribute('data-theme', storedTheme);
  themeToggle?.addEventListener('click', () => {
    const newTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Reveal-on-scroll animations
  const revealEls = $$('.reveal-up');
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) e.target.classList.add('is-visible');
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));

  // Counters animation
  const counters = $$('.counter');
  const animateCounter = (el) => {
    const target = Number(el.dataset.target || '0');
    const duration = 1200; // ms
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      el.textContent = Math.round(p * target).toString();
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const countersIO = new IntersectionObserver((entries, ob) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { animateCounter(e.target); ob.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => countersIO.observe(c));

  // Skills bars width animation
  $$('.bar__fill').forEach((bar) => {
    const w = bar.getAttribute('data-width');
    const ob = new IntersectionObserver((entries, o) => {
      entries.forEach((en) => { if (en.isIntersecting) { bar.style.width = w + '%'; o.unobserve(bar); } });
    }, { threshold: 0.5 });
    ob.observe(bar);
  });

  // Typing effect
  const typedEl = $('.typed');
  if (typedEl) {
    const items = JSON.parse(typedEl.getAttribute('data-rotate') || '[]');
    let i = 0, j = 0, deleting = false;
    const tick = () => {
      const word = items[i % items.length] || '';
      if (!deleting) {
        j++;
        typedEl.textContent = word.slice(0, j);
        if (j === word.length) { deleting = true; setTimeout(tick, 1400); return; }
      } else {
        j--;
        typedEl.textContent = word.slice(0, j);
        if (j === 0) { deleting = false; i++; }
      }
      setTimeout(tick, deleting ? 35 : 48);
    };
    tick();
  }

  // Testimonials slider
  const track = $('#testimonialTrack');
  const prevBtn = $('#prevTestimonial');
  const nextBtn = $('#nextTestimonial');
  let slideIndex = 0;
  const moveSlider = () => {
    const width = track?.children[0]?.getBoundingClientRect().width || 0;
    track.style.transform = `translateX(calc(${-slideIndex} * (${width}px + 16px)))`;
  };
  const slideCount = track ? track.children.length : 0;
  prevBtn?.addEventListener('click', () => { slideIndex = (slideIndex - 1 + slideCount) % slideCount; moveSlider(); });
  nextBtn?.addEventListener('click', () => { slideIndex = (slideIndex + 1) % slideCount; moveSlider(); });
  window.addEventListener('resize', moveSlider);

  // Portfolio filter
  const filterBtns = $$('.filter__btn');
  const items = $$('#portfolioGrid .portfolio__item');
  filterBtns.forEach((btn) => btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    items.forEach((it) => {
      const show = cat === 'all' || it.dataset.cat === cat;
      it.style.display = show ? '' : 'none';
    });
  }));

  // Lightbox
  const lightbox = $('#lightbox');
  const lightboxImg = $('#lightboxImage');
  const lightboxClose = $('#lightboxClose');
  const lightboxPrev = $('#lightboxPrev');
  const lightboxNext = $('#lightboxNext');
  const gallery = items; // reuse
  let currentIdx = 0;

  const openLightbox = (idx) => {
    const img = gallery[idx].querySelector('img');
    lightboxImg.src = img.src;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    currentIdx = idx;
  };
  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  const showPrev = () => openLightbox((currentIdx - 1 + gallery.length) % gallery.length);
  const showNext = () => openLightbox((currentIdx + 1) % gallery.length);

  $$('#portfolioGrid [data-lightbox]').forEach((btn, idx) => btn.addEventListener('click', () => openLightbox(idx)));
  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', showPrev);
  lightboxNext?.addEventListener('click', showNext);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Back to top smooth scroll
  $('#backToTop')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Contact form validation (client-side only)
  const form = $('#contactForm');
  const formStatus = $('#formStatus');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.email || !data.message) {
      formStatus.textContent = 'Please complete required fields.';
      formStatus.style.color = 'var(--danger)';
      return;
    }
    formStatus.textContent = 'Sending…';
    formStatus.style.color = 'var(--muted)';
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 900));
    formStatus.textContent = 'Thanks! I will reply within 24 hours.';
    formStatus.style.color = 'var(--success)';
    form.reset();
  });
})();
