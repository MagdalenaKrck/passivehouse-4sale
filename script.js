let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

document.getElementById('langSwitch').addEventListener('change', (e) => {
  const lang = e.target.value;
  // Simple language switch demo
  alert('Přepnutí jazyka: ' + lang + ' (zatím demo)');
});
