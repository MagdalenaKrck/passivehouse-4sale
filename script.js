
// ========== Automatický slider ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // každých 5 sekund
}

// ========== Přepínač jazyků ==========
const langButtons = document.querySelectorAll('.lang-switch button');

langButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = translations[lang][key] || key;
    });
  });
});

// ========== Překlady (ukázka) ==========
const translations = {
  cz: {
    title: "Pasivní dům na prodej",
    feature1: "Solární Energie",
    feature2: "Kontrolované Klima"
  },
  en: {
    title: "Passive House for Sale",
    feature1: "Solar Energy",
    feature2: "Controlled Climate"
  },
  de: {
    title: "Passivhaus zu verkaufen",
    feature1: "Solarenergie",
    feature2: "Kontrolliertes Klima"
  }
};
