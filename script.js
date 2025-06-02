
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const images = 6;
  for (let i = 1; i <= images; i++) {
    const img = document.createElement("img");
    img.src = `img/hero${i}.jpg`;
    img.alt = `Pohled ${i}`;
    slider.appendChild(img);
  }

  // Slider automatický
  let current = 0;
  const imgs = slider.querySelectorAll("img");
  imgs.forEach((img, i) => img.style.display = i === 0 ? "block" : "none");

  setInterval(() => {
    imgs[current].style.display = "none";
    current = (current + 1) % imgs.length;
    imgs[current].style.display = "block";
  }, 3000);

  // Jazykový přepínač
  const languages = {
    cz: {
      featuresTitle: "Klíčové vlastnosti",
      features: [
        ["Solární Energie", "Fotovoltaické panely pokrývají většinu energetických potřeb domácnosti."],
        ["Kontrolované Klima", "Rekuperace tepla a řízené větrání zajišťují ideální teplotu po celý rok."],
        ["Čistý Vzduch", "Systém filtrace vzduchu zajišťuje zdravé vnitřní prostředí."],
        ["Energetická Třída A+", "Nejvyšší energetická třída s minimální spotřebou energie."],
        ["Nízké Provozní Náklady", "Úspora až 90 % nákladů na vytápění a chlazení."],
        ["Smart Home", "Inteligentní ovládání všech systémů přes mobilní aplikaci."]
      ]
    },
    en: {
      featuresTitle: "Key Features",
      features: [
        ["Solar Energy", "Photovoltaic panels cover most of the household's energy needs."],
        ["Controlled Climate", "Heat recovery and ventilation ensure ideal temperature year-round."],
        ["Clean Air", "Air filtration system ensures a healthy indoor environment."],
        ["Energy Class A+", "Highest energy rating with minimal consumption."],
        ["Low Operating Costs", "Up to 90% savings on heating and cooling."],
        ["Smart Home", "Control systems via mobile app."]
      ]
    },
    de: {
      featuresTitle: "Hauptmerkmale",
      features: [
        ["Solarenergie", "Photovoltaikanlagen decken den Großteil des Energiebedarfs ab."],
        ["Geregeltes Klima", "Wärmerückgewinnung sorgt für ideale Temperaturen."],
        ["Saubere Luft", "Luftfiltersystem garantiert gesundes Raumklima."],
        ["Energieklasse A+", "Höchste Energieklasse mit minimalem Verbrauch."],
        ["Niedrige Betriebskosten", "Bis zu 90% Einsparung bei Heizung und Kühlung."],
        ["Smart Home", "Intelligente Steuerung aller Systeme per App."]
      ]
    }
  };

  const langSelect = document.getElementById("languageSwitcher");
  const featuresList = document.getElementById("featuresList");
  const featuresTitle = document.getElementById("featuresTitle");

  function updateLanguage(lang) {
    const data = languages[lang];
    featuresTitle.textContent = data.featuresTitle;
    featuresList.innerHTML = "";
    data.features.forEach(([title, desc]) => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
      featuresList.appendChild(div);
    });
  }

  langSelect.addEventListener("change", e => updateLanguage(e.target.value));
  updateLanguage("cz");
});
