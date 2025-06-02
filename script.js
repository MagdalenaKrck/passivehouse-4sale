document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider img");
  let current = 0;
  function showSlide(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }
  showSlide(current);
  setInterval(() => {
    current = (current + 1) % images.length;
    showSlide(current);
  }, 3000);
});