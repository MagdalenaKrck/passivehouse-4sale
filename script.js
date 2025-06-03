// Slider
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll('.hero img');
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 4000);
}

// Leaflet Map
function initMap() {
  const map = L.map('map').setView([49.3612119, 16.3302675], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);
  L.marker([49.3612119, 16.3302675]).addTo(map);
}

// Language switching
const translations = {
  cz: {
    home: "Domů",
    about: "O domě",
    certification: "Certifikace",
    garden: "Zahrada",
    contact: "Kontakt",
    title: "Moderní Pasivní Dům",
    subtitle: "Energeticky efektivní bydlení v harmonii s přírodou",
    features: [
      { title: "Solární Energie", text: "Fotovoltaické panely pokrývají většinu energetických potřeb domácnosti." },
      { title: "Kontrolované Klima", text: "Rekuperace tepla a řízené větrání zajišťují ideální teplotu po celý rok." },
      { title: "Čistý Vzduch", text: "Filtrace vzduchu zajišťuje zdravé vnitřní prostředí." },
      { title: "Energetická Třída A+", text: "Nejvyšší energetická třída s minimální spotřebou energie." },
      { title: "Nízké Náklady", text: "Úspora až 90% nákladů na vytápění a chlazení." },
      { title: "Smart Home", text: "Inteligentní ovládání všech systémů přes mobilní aplikaci." }
    ]
  },
  en: {
    home: "Home",
    about: "About",
    certification: "Certification",
    garden: "Garden",
    contact: "Contact",
    title: "Modern Passive House",
    subtitle: "Energy-efficient living in harmony with nature",
    features: [
      { title: "Solar Energy", text: "Photovoltaic panels cover most of the household's energy needs." },
      { title: "Controlled Climate", text: "Heat recovery and controlled ventilation ensure ideal temperature all year round." },
      { title: "Clean Air", text: "Air filtration ensures a healthy indoor environment." },
      { title: "Energy Class A+", text: "Highest energy class with minimal energy consumption." },
      { title: "Low Costs", text: "Save up to 90% on heating and cooling costs." },
      { title: "Smart Home", text: "Intelligent control of all systems via mobile app." }
    ]
  },
  de: {
    home: "Startseite",
    about: "Über das Haus",
    certification: "Zertifizierung",
    garden: "Garten",
    contact: "Kontakt",
    title: "Moderner Passivhaus",
    subtitle: "Energieeffizientes Wohnen in Harmonie mit der Natur",
    features: [
      { title: "Solarenergie", text: "Photovoltaikanlagen decken den Großteil des Energiebedarfs des Haushalts ab." },
      { title: "Kontrolliertes Klima", text: "Wärmerückgewinnung und kontrollierte Belüftung sorgen das ganze Jahr über für ideale Temperaturen." },
      { title: "Saubere Luft", text: "Luftfiltration sorgt für ein gesundes Raumklima." },
      { title: "Energieklasse A+", text: "Höchste Energieklasse mit minimalem Energieverbrauch." },
      { title: "Niedrige Kosten", text: "Sparen Sie bis zu 90 % der Heiz- und Kühlkosten." },
      { title: "Smart Home", text: "Intelligente Steuerung aller Systeme per Smartphone-App." }
    ]
  }
};

function setLanguage(lang) {
  // Nav
  document.getElementById('nav-home').textContent = translations[lang].home;
  document.getElementById('nav-about').textContent = translations[lang].about;
  document.getElementById('nav-cert').textContent = translations[lang].certification;
  document.getElementById('nav-garden').textContent = translations[lang].garden;
  document.getElementById('nav-contact').textContent = translations[lang].contact;
  // Hero
  document.getElementById('hero-title').textContent = translations[lang].title;
  document.getElementById('hero-subtitle').textContent = translations[lang].subtitle;
  // Features
  const featureElems = document.querySelectorAll('.feature');
  translations[lang].features.forEach((f, idx) => {
    featureElems[idx].querySelector('h3').textContent = f.title;
    featureElems[idx].querySelector('p').textContent = f.text;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides();
  initMap();
  const select = document.getElementById('lang-switcher');
  select.addEventListener('change', (e) => setLanguage(e.target.value));
  // default language
  setLanguage('cz');
});