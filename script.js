// Scroll-based width expand/contract
let lastScroll = window.scrollY;
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const goingUp = scrollTop < lastScroll;

  sections.forEach(section => {
    section.classList.remove('expand', 'contract');
    section.classList.add(goingUp ? 'expand' : 'contract');
  });

  lastScroll = scrollTop;

  // Highlight nav link on scroll
  let currentSection = 'home';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollTop >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});
