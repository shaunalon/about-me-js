const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

body.classList.add('light-mode');
themeIcon.textContent = '🌙';
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeIcon.textContent = '🌙';
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.header');
  const leftSide = document.querySelector('.left-side');
  const rightSide = document.querySelector('.right-side');
  const footer = document.querySelector('.footer');

  header.classList.add('fade-in');
  leftSide.classList.add('fade-in');
  rightSide.classList.add('fade-in');
  footer.classList.add('fade-in');

  setTimeout(() => {
    header.classList.add('visible');
    leftSide.classList.add('visible');
    rightSide.classList.add('visible');
    footer.classList.add('visible');
  }, 100);

});