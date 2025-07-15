function scrollToContact() {
  showSection('contact');
}

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

function showSection(id) {
  const sections = document.querySelectorAll('#sections-container .section');
  sections.forEach((section) => {
    section.classList.remove('fullscreen-section');
    section.style.display = 'none';
  });

  const selected = document.getElementById(id);
  selected.style.display = 'block';
  selected.classList.add('fullscreen-section');

  document.querySelector('header').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
  document.getElementById('menu').classList.add('hidden');
}

function showAllSections() {
  const sections = document.querySelectorAll('#sections-container .section');
  sections.forEach((section) => {
    section.style.display = 'block';
    section.classList.remove('fullscreen-section');
  });

  document.querySelector('header').style.display = 'block';
  document.querySelector('footer').style.display = 'block';
}

function updateProgress() {
  const fields = [
    document.getElementById('name'),
    document.getElementById('location'),
    document.getElementById('email'),
    document.getElementById('phone'),
    document.getElementById('message'),
  ];

  let filledCount = 0;
  fields.forEach((field) => {
    if (field.value.trim() !== '') filledCount++;
  });

  const total = fields.length;
  const percent = (filledCount / total) * 100;

  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = `${percent}%`;

  if (percent === 100) {
    progressBar.style.backgroundColor = '#50fa7b';
  } else if (percent === 0) {
    progressBar.style.backgroundColor = '#ff5555';
  } else {
    const green = Math.floor((percent / 100) * 120) + 50;
    const red = 255 - green;
    progressBar.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
  }
}
