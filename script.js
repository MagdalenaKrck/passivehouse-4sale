
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 4000);

// jazykový přepínač
document.getElementById("languageSwitcher").addEventListener("change", function() {
  const lang = this.value;
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const btn = document.getElementById("learnMore");

  if (lang === "en") {
    title.textContent = "Modern Passive House";
    subtitle.textContent = "Energy-efficient living in harmony with nature";
    btn.textContent = "Learn more";
  } else if (lang === "de") {
    title.textContent = "Modernes Passivhaus";
    subtitle.textContent = "Energieeffizientes Wohnen im Einklang mit der Natur";
    btn.textContent = "Mehr erfahren";
  } else {
    title.textContent = "Moderní Pasivní Dům";
    subtitle.textContent = "Energeticky efektivní bydlení v harmonii s přírodou";
    btn.textContent = "Zjistit více";
  }
});
