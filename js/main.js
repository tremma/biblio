/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

// burger
const burger = document.querySelector('.burger');

if(burger){
  burger.addEventListener('click', function(){
    this.classList.toggle('burger--active');
  })
}
// ==========================================================================================

// popup

const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelectorAll('.popup-open-btn');
const popupCloseBtn = document.querySelectorAll('.popup-close');

  // open
  popupOpenBtn.forEach(function(popupBtn){
    popupBtn.addEventListener('click', function(e){
      e.preventDefault();
      popup.classList.toggle('popup-open');
    })
  })

    // close
    popupCloseBtn.forEach(function(closeBtn){
      closeBtn.addEventListener('click', function(e){
        
        popup.classList.remove('popup-open');
      })
    })
  
// ===========================================================================

// accordion

const accordionItems = document.querySelectorAll('.accordion__item');
		
if(accordionItems.length > 0){
  
  for(let i=0; i < accordionItems.length; i++){
    accordionItems[i].addEventListener('click', function(){
      
      this.classList.toggle('active')
    })
  }
}
	
// main-slider

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  speed:800,
  autoplay:{
    delay:4000
  },
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

var swiper = new Swiper('.books-slider', {
  spaceBetween: 0,
  grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
  loop: true,
  speed:800,
  autoplay:{
    delay:3000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var teamSwiper = new Swiper('.team__slider', {
  slidesPerView: '4', 
  loop: true,
  spaceBetween: 40,
  // centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



