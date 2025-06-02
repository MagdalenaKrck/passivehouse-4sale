
let index = 0;
const images = document.querySelectorAll('.slider img');
const headline = document.getElementById('headline');
const subtext = document.getElementById('subtext');
const texts = [
  ["Přírodní prostředí", "Klidná lokalita s výhledem na les"],
  ["Čistý design", "Minimalismus a světlo v interiéru"],
  ["Energetická úspornost", "Pasivní standard a nízké náklady"]
];

function showSlide(i) {
  index = (i + images.length) % images.length;
  document.querySelector('.slider').style.transform = 'translateX(' + (-index * 100) + 'vw)';
  headline.textContent = texts[index % texts.length][0];
  subtext.textContent = texts[index % texts.length][1];
}

document.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));

function bounce(el) {
  el.style.transform = "scale(1.15)";
  setTimeout(() => { el.style.transform = "scale(1)"; }, 150);
}
