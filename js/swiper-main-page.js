let swiperHealth = document.querySelector('.swiper-health');
let swiperReviews = document.querySelector('.reviewsSL');

var swiperTop = new Swiper(swiperHealth, {
    slidesPerView: 1,
    direction: "vertical",
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    }
  });

  var swiperBottom = new Swiper(swiperReviews, {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });