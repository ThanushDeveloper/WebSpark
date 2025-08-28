// Light/Dark theme sync
const root = document.documentElement;
const themeSwitch = document.getElementById('themeSwitch');
const themeSwitchTop = document.getElementById('themeSwitchTop');
const storedTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', storedTheme);
if (themeSwitch) themeSwitch.checked = storedTheme === 'dark';
if (themeSwitchTop) themeSwitchTop.checked = storedTheme === 'dark';
function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeSwitch) themeSwitch.checked = theme === 'dark';
  if (themeSwitchTop) themeSwitchTop.checked = theme === 'dark';
}
themeSwitch?.addEventListener('change', e => setTheme(e.target.checked ? 'dark' : 'light'));
themeSwitchTop?.addEventListener('change', e => setTheme(e.target.checked ? 'dark' : 'light'));

// Sidebar toggles (mobile)
const sidebar = document.getElementById('sidebar');
document.getElementById('sidebarOpen')?.addEventListener('click', () => sidebar?.classList.add('open'));
document.getElementById('sidebarClose')?.addEventListener('click', () => sidebar?.classList.remove('open'));

// Smooth nav and active state
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href');
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    sidebar?.classList.remove('open');
  });
});

// Dummy Data
const data = {
  upcomingAppointments: [
    { doctor: 'Dr. Smith', date: '2025-09-10', time: '10:30', status: 'Confirmed' },
    { doctor: 'Dr. Chen', date: '2025-09-20', time: '14:00', status: 'Pending' }
  ],
  pastAppointments: [
    { doctor: 'Dr. Patel', date: '2025-05-01', time: '11:00', status: 'Completed' },
    { doctor: 'Dr. Adams', date: '2025-03-12', time: '09:00', status: 'Completed' }
  ],
  latestMedicines: [
    { name: 'Amoxicillin', dosage: '500mg', timing: 'Twice daily' },
    { name: 'Ibuprofen', dosage: '200mg', timing: 'After meals' }
  ],
  prescriptionHistory: [
    { id: 'RX-1042', date: '2025-06-15', doctor: 'Dr. Smith', action: 'Download' },
    { id: 'RX-1033', date: '2025-04-09', doctor: 'Dr. Chen', action: 'Download' }
  ],
  records: [
    { type: 'Vaccination', name: 'Hepatitis B', date: '2018-07-21', notes: 'Complete' },
    { type: 'Diagnosis', name: 'Hypertension', date: '2023-02-10', notes: 'Stable' }
  ],
  pendingPayments: [
    { invoice: 'INV-2009', date: '2025-08-04', amount: '$120', status: 'Due' }
  ],
  pastInvoices: [
    { invoice: 'INV-1888', date: '2025-05-22', amount: '$75', status: 'Paid' },
    { invoice: 'INV-1775', date: '2025-02-14', amount: '$240', status: 'Paid' }
  ],
  notifications: [
    { title: 'Appointment Reminder', body: 'Visit Dr. Smith tomorrow at 10:30.', type: 'info' },
    { title: 'Medicine Reminder', body: 'Take Amoxicillin after breakfast.', type: 'success' },
    { title: 'Lab Result', body: 'New CBC result uploaded.', type: 'warning' }
  ],
  healthTips: [
    'Hydrate regularly and aim for 7–8 hours of sleep.',
    'Walk 30 minutes daily and stretch after sitting long.',
    'Limit sodium to help manage blood pressure.'
  ],
  emergencyContacts: [
    { name: 'Jane Doe', relation: 'Spouse', phone: '+1 202-555-0175' },
    { name: 'City Hospital', relation: 'Hospital', phone: '+1 202-555-0198' }
  ]
};

// Utilities
function createRow(columns) {
  const row = document.createElement('div');
  row.className = 'row';
  columns.forEach(text => {
    const div = document.createElement('div');
    div.textContent = text;
    row.appendChild(div);
  });
  return row;
}
function clearAndFill(container, headerCols, rows) {
  if (!container) return;
  container.innerHTML = '';
  const header = createRow(headerCols);
  header.classList.add('header');
  container.appendChild(header);
  rows.forEach(r => container.appendChild(createRow(r)));
}

// Render appointments
const upcomingEl = document.getElementById('upcomingAppointments');
const pastEl = document.getElementById('pastAppointments');
clearAndFill(
  upcomingEl,
  ['Doctor', 'Date', 'Time', 'Status'],
  data.upcomingAppointments.map(a => [a.doctor, a.date, a.time, a.status])
);
clearAndFill(
  pastEl,
  ['Doctor', 'Date', 'Time', 'Status'],
  data.pastAppointments.map(a => [a.doctor, a.date, a.time, 'Completed'])
);

// Render latest medicines
const latestMedicines = document.getElementById('latestMedicines');
latestMedicines.innerHTML = data.latestMedicines.map(m => `
  <div class="item">
    <div>
      <div><strong>${m.name}</strong></div>
      <div class="meta">${m.dosage} • ${m.timing}</div>
    </div>
    <span class="badge badge--success">Active</span>
  </div>
`).join('');

// Prescription history
const prescriptionHistory = document.getElementById('prescriptionHistory');
clearAndFill(
  prescriptionHistory,
  ['ID', 'Date', 'Doctor', 'Action'],
  data.prescriptionHistory.map(p => [p.id, p.date, p.doctor, p.action])
);

// Records
const medicalRecords = document.getElementById('medicalRecords');
clearAndFill(
  medicalRecords,
  ['Type', 'Name', 'Date', 'Notes'],
  data.records.map(r => [r.type, r.name, r.date, r.notes])
);

// Billing
const pendingPayments = document.getElementById('pendingPayments');
const pastInvoices = document.getElementById('pastInvoices');
clearAndFill(
  pendingPayments,
  ['Invoice', 'Date', 'Amount', 'Status'],
  data.pendingPayments.map(p => [p.invoice, p.date, p.amount, 'Due'])
);
clearAndFill(
  pastInvoices,
  ['Invoice', 'Date', 'Amount', 'Status'],
  data.pastInvoices.map(p => [p.invoice, p.date, p.amount, 'Paid'])
);

// Notifications
const notificationsList = document.getElementById('notificationsList');
notificationsList.innerHTML = data.notifications.map(n => `
  <div class="item">
    <div>
      <div><strong>${n.title}</strong></div>
      <div class="meta">${n.body}</div>
    </div>
    <span class="badge ${n.type === 'success' ? 'badge--success' : n.type === 'warning' ? 'badge--warning' : ''}">${n.type}</span>
  </div>
`).join('');

// Health tips
const healthTips = document.getElementById('healthTips');
healthTips.innerHTML = data.healthTips.map(t => `<li>${t}</li>`).join('');

// Emergency contacts
const emergencyContacts = document.getElementById('emergencyContacts');
clearAndFill(
  emergencyContacts,
  ['Name', 'Relation', 'Phone', ''],
  data.emergencyContacts.map(c => [c.name, c.relation, c.phone, 'Call'])
);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mock actions
document.getElementById('downloadLatestPdfBtn')?.addEventListener('click', () => {
  alert('Downloading latest prescription PDF...');
});
document.getElementById('viewLatestPdfBtn')?.addEventListener('click', () => {
  alert('Opening latest prescription PDF...');
});

// File uploads (mock)
const labUpload = document.getElementById('labUpload');
const uploadedFiles = document.getElementById('uploadedFiles');
labUpload?.addEventListener('change', () => {
  const items = Array.from(labUpload.files || []);
  if (!items.length) return;
  const html = items.map(f => `<div class="item"><span>${f.name}</span><span class="meta">${(f.size/1024).toFixed(1)} KB</span></div>`).join('');
  uploadedFiles.innerHTML = html;
});

// Quick actions
document.getElementById('qaBookAppt')?.addEventListener('click', openModal);
document.getElementById('qaDownloadRx')?.addEventListener('click', () => {
  alert('Downloading last prescription...');
});
document.getElementById('qaUploadReport')?.addEventListener('click', () => {
  document.getElementById('records').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('qaContactDoctor')?.addEventListener('click', () => {
  alert('Opening chat support...');
});

// Logout buttons
document.getElementById('logoutBtn')?.addEventListener('click', () => alert('Logging out...'));
document.getElementById('logoutBtnSidebar')?.addEventListener('click', () => alert('Logging out...'));

// Modal handling for booking
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalCancel = document.getElementById('modalCancel');
const bookBtn = document.getElementById('bookAppointmentBtn');
bookBtn?.addEventListener('click', openModal);
modalBackdrop?.addEventListener('click', closeModal);
modalClose?.addEventListener('click', closeModal);
modalCancel?.addEventListener('click', closeModal);

function openModal() {
  modal?.setAttribute('aria-hidden', 'false');
  modal?.setAttribute('aria-modal', 'true');
}
function closeModal() {
  modal?.setAttribute('aria-hidden', 'true');
  modal?.setAttribute('aria-modal', 'false');
}

// Appointment form (mock)
const apptForm = document.getElementById('appointmentForm');
const modalMessage = document.getElementById('modalMessage');
apptForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const doctor = document.getElementById('apptDoctor').value;
  const date = document.getElementById('apptDate').value;
  const time = document.getElementById('apptTime').value;
  if (!doctor || !date || !time) return;
  modalMessage.hidden = false;
  modalMessage.textContent = `Appointment requested with ${doctor} on ${date} at ${time}.`;
  setTimeout(() => {
    closeModal();
    apptForm.reset();
    modalMessage.hidden = true;
  }, 1200);
});

