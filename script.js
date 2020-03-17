
const menu = document.querySelector('.menu')
const image = document.getElementById('photo_container');
const menuProfile = document.getElementById('menu_point');
let shet = 1;


//const portfolioImages = portfolioGallery.querySelectorAll('.portfolio-img');
//const portfolioTags = document.getElementById('portfolio-tags');

// HEADER
menu.addEventListener('click', (event) => {
  let menuElement = event.target.closest('.nav-item');
  if (!menuElement) return;
  menu.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('red'));
  menuElement.classList.add('red');
})
// PORTFOLIO
image.addEventListener('click', (event) => {
  image.querySelectorAll('img').forEach(el => el.classList.remove('active_img'));
  event.target.classList.add('active_img');
});
menuProfile.addEventListener('click', (event) => {
  menuProfile.querySelectorAll('a').forEach(el => el.classList.remove('menu_active'));
  event.target.classList.add('menu_active');
  shet++
  for (let i = 1; i < 13; i++) {
    document.getElementById(`myImage${i}`).src = `./assets/images/Portfol/${shet}.png`;
    if (shet === 12) { shet = 0; }
    shet++;
  }

});