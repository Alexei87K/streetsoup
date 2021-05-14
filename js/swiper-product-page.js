const slider = document.querySelector('.slider-main');
const sliderNav = document.querySelector('.slider-nav');

let mySwiperNav = new Swiper(sliderNav, {
	slidesPerView: 5,
	spaceBetween: 10,
	// loopedSlides: 5,
	// freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	// loop: true,
	direction: 'vertical',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

let mySwiper = new Swiper(slider, {
	spaceBetween: 10,
	// loop: true,
	// loopedSlides: 5,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: mySwiperNav,
	}
})



var swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,
	slidesPerView: 4,
	// freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 10,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	thumbs: {
	  swiper: swiper,
	},
  });