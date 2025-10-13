(function () {
  const root = document.getElementById('ep-portfolio');
  if (!root) return;

  const tabs = Array.from(root.querySelectorAll('.ep-tab'));
  const cards = Array.from(root.querySelectorAll('.ep-card'));

  function setActiveTab(tab) {
    tabs.forEach(t => t.classList.toggle('is-active', t === tab));
  }

  function applyFilter(filter) {
    if (filter === 'all') {
      cards.forEach(card => {
        card.style.display = '';
      });
      return;
    }
    cards.forEach(card => {
      const category = card.getAttribute('data-category');
      card.style.display = category === filter ? '' : 'none';
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');
      setActiveTab(tab);
      applyFilter(filter);
    });
  });
})();
