const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

function openModal() {
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Tabs
document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((t) => t.classList.remove('is-active'));
    document.querySelectorAll('.tab-panel').forEach((p) => {
      p.classList.remove('is-active');
      p.hidden = true;
    });
    tab.classList.add('is-active');
    const panel = document.getElementById('panel-' + tab.dataset.tab);
    panel.classList.add('is-active');
    panel.hidden = false;
  });
});

// Default date/time to now, like the original
const now = new Date();
const pad = (n) => String(n).padStart(2, '0');
document.getElementById('date').value =
  `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
document.getElementById('time').value = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
document.getElementById('date').min = document.getElementById('date').value;

// Form submit: hook up your own booking endpoint here
document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    guests: document.getElementById('guests').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
  };
  console.log('Booking request:', data);
  alert(`Request: ${data.guests} guest(s) on ${data.date} at ${data.time}`);
});
