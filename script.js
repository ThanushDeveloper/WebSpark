const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav__toggle');

if (toggle) {
	toggle.addEventListener('click', () => {
		const isOpen = nav.classList.toggle('nav--open');
		toggle.setAttribute('aria-expanded', String(isOpen));
	});
}

// Close menu on outside click or on link click
document.addEventListener('click', (e) => {
	if (!nav.contains(e.target) && nav.classList.contains('nav--open')) {
		nav.classList.remove('nav--open');
		toggle.setAttribute('aria-expanded', 'false');
	}
});

document.querySelectorAll('.nav__link').forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.remove('nav--open');
		toggle.setAttribute('aria-expanded', 'false');
	});
});

