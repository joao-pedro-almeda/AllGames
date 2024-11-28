const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');


toggleButton.addEventListener('click', () => {
  if (sidebar.style.width === '250px') {
    sidebar.style.width = '0';
    mainContent.style.marginLeft = '0';
  } else {
    sidebar.style.width = '250px';
    mainContent.style.marginLeft = '250px';
  }
});

const carousel = document.querySelector('.carousel');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;


function goToNextSlide() {

  currentIndex = (currentIndex + 1) % totalSlides; 
  
  
  carousel.style.transform = `translateX(-${currentIndex * 100 / totalSlides}%)`; 
}


setInterval(goToNextSlide, 5000); 

