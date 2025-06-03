let currentIndex = 0;
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const total = images.length;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % total;
  updateSlider();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + total) % total;
  updateSlider();
}

document.querySelector('.next').addEventListener('click', showNext);
document.querySelector('.prev').addEventListener('click', showPrev);

// Automatický posun každých 5 sekund
setInterval(showNext, 5000);

// Modal image
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
>>>>>>> d64cb15 (Přidán slider s automatickým posunem a galerií)
