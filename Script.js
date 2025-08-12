// Small interactivity for the dashboard
// - Tabs in patient card
// - Active state for top navigation
// - Demo handler for Add reminder

function selectTab(tabName) {
  document.querySelectorAll('.tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.tab-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === `tab-${tabName}`);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // Tabs
  document.querySelectorAll('.tab').forEach((btn) => {
    btn.addEventListener('click', () => selectTab(btn.dataset.tab));
  });

  // Nav active simulation
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Add reminder action
  const addBtn = document.getElementById('add-reminder');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const title = prompt('Reminder title');
      if (!title) return;
      const agenda = document.querySelector('.agenda');
      if (!agenda) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'agenda-item';
      wrapper.innerHTML = `
        <div class="agenda-icon">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4 5h16v14H4z" opacity=".15"/><path fill="currentColor" d="M7 2h2v3H7V2Zm8 0h2v3h-2V2ZM4 5h16v2H4V5Zm0 4h16v10H4V9Zm3 3h9v2H7v-2Z"/></svg>
        </div>
        <div class="agenda-text">
          <div class="agenda-title">${title}</div>
          <div class="agenda-time">Added just now</div>
        </div>`;
      agenda.prepend(wrapper);
    });
  }
});