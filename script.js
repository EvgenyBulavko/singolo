
const menu = document.querySelector('.menu')
const image = document.getElementById('photo_container');

const scrollLeft1 = document.getElementById('scroll_left1');
const scrollLeft = document.getElementById('scroll_left');

const scrollRight1 = document.getElementById('scroll_right1');
const scrollRight = document.getElementById('scroll_right');
const menuProfile = document.getElementById('menu_point');
let shet = 1;


// HEADER
menu.addEventListener('click', (event) => {
  let menuElement = event.target.closest('.nav-item');
  if (!menuElement) return;
  menu.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('red'));
  menuElement.classList.add('red');
})
//Scroll HEADER
document.addEventListener('scroll',onScroll);

function onScroll(event)
{
  const curPos = window.scrollY;
document.querySelectorAll('main > div').forEach((el)=>{
console.log(el.getAttribute('id'));
//debugger;
el.getAttribute('id');

});
}




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

//Slider
let counter = 0;

scrollLeft.addEventListener('click', (event) => {

  ScrollClick();

});

scrollRight.addEventListener('click', (event) => {

  ScrollClick();

});

scrollLeft1.addEventListener('click', (event) => {

  ScrollClickTwo();

});
scrollRight1.addEventListener('click', (event) => {

  ScrollClickTwo();

});


function ScrollClick() {
  let interval = setInterval(function () {
    document.querySelectorAll('.scroll').forEach((scroll) => {

      if (scroll.style.left === '-1020px') {
        clearInterval(interval);
        return;
      }
      counter -= 10;
      scroll.style.left = `${counter}px`;
    })
  }, 1);
};

function ScrollClickTwo() {
  let interval = setInterval(function () {
    document.querySelectorAll('.scroll').forEach((scroll) => {

      if (scroll.style.left === '0px') {
        clearInterval(interval);
        return;
      }
      counter += 10;
      scroll.style.left = `${counter}px`;
    })
  }, 1);

}

//phone off
const HorizontalScreen = document.getElementById('iphone-horizontal');
const VerticalScreen = document.getElementById('iphone_vertical');

VerticalScreen.addEventListener('click', (event) => {

  if(VerticalScreen.style.zIndex == '0'){ VerticalScreen.style.zIndex = 2;}
  else VerticalScreen.style.zIndex = 0;
  
});


HorizontalScreen.addEventListener('click', (event) => {
  
  if(HorizontalScreen.style.zIndex == '0' ){ HorizontalScreen.style.zIndex = 2;}
  else HorizontalScreen.style.zIndex = 0;
  
});

//FORM
const submit = document.getElementById('submit_form');
const nameForm = document.getElementById('name_form');
const emailForm = document.getElementById('email_form');
const subjectForm = document.getElementById('subject_form');
const describeForm = document.getElementById('describe_form');
const subjectGlass= document.getElementById('subject_glass');
const describeGlass = document.getElementById('describe_glass');
const Message = document.getElementById('glass_message')
const OK = document.getElementById('but_OK');


submit.addEventListener('click', () => {
  
  if (!(nameForm.reportValidity() && emailForm.reportValidity())) return;

  Message.classList.remove('black_fon');
  if (subjectForm.value){
     subjectGlass.textContent = `Subject: ${subjectForm.value}` ;
  }
  if (describeForm.value){
    describeGlass.textContent = `Description: ${describeForm.value}` ;
  } 
  if (!subjectForm.value){
    subjectGlass.textContent = 'No subject' ;
 }
 if (!describeForm.value){
   describeGlass.textContent = 'No Description' ;
 } 
 document.getElementById('end_form').reset();
 

})

OK.addEventListener('click', () => {
  Message.classList.add('black_fon');
})