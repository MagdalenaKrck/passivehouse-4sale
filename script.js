
let currentIndex = 0;
const slider = document.getElementById("slider");
const slides = slider.getElementsByTagName("img");

function showSlide(index) {
  const offset = -index * 100;
  slider.style.transform = "translateX(" + offset + "%)";
}

document.querySelector(".prev").onclick = () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
};
document.querySelector(".next").onclick = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
};

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 4000);
