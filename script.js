
const menu = document.querySelector('.menu')
//const portfolioGallery = document.getElementById('portfolio-gallery');
//const portfolioImages = portfolioGallery.querySelectorAll('.portfolio-img');
//const portfolioTags = document.getElementById('portfolio-tags');

// HEADER
menu.addEventListener('click', (event) => {
  let menuElement = event.target.closest('.nav-item');
  if (!menuElement) return;
  menu.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('red'));
  menuElement.classList.add('red');
})

