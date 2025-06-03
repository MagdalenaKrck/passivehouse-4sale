
let index = 0;
const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function showSlide(i) {
  index = (i + images.length) % images.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => showSlide(index + 1));
prev.addEventListener('click', () => showSlide(index - 1));

setInterval(() => showSlide(index + 1), 5000);
