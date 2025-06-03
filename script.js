
// Slider
let idx=0;
const slides=document.querySelector('.slider');
const imgs=document.querySelectorAll('.slider img');
function show(i){idx=(i+imgs.length)%imgs.length;slides.style.transform=`translateX(-${idx*100}%)`;}
document.querySelector('.next').onclick=()=>show(idx+1);
document.querySelector('.prev').onclick=()=>show(idx-1);
setInterval(()=>show(idx+1),5000);

// Leaflet map
function initMap(){
  const map=L.map('map').setView([49.3612119,16.3302675],13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap'}).addTo(map);
  L.marker([49.3612119,16.3302675]).addTo(map);
}
window.onload=initMap;
