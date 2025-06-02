
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider img");
  let current = 0;

  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }, 4000);

  const languageSwitcher = document.getElementById("languageSwitcher");
  const headline = document.getElementById("headline");
  const subheadline = document.getElementById("subheadline");

  const translations = {
    cs: ["Moderní Pasivní Dům", "Energeticky efektivní bydlení v harmonii s přírodou"],
    en: ["Modern Passive House", "Energy-efficient living in harmony with nature"],
    de: ["Modernes Passivhaus", "Energieeffizientes Wohnen im Einklang mit der Natur"],
  };

  languageSwitcher.addEventListener("change", (e) => {
    const lang = e.target.value;
    headline.textContent = translations[lang][0];
    subheadline.textContent = translations[lang][1];
  });
});
