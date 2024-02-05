var swiper = new Swiper("#hero-carosel", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        // disableOnInteraction: true,
    },
    loop: true,
    speed: 500,
	grabCursor: true,
	effect: 'fade',
	  fadeEffect: {
		crossFade: true,
	  },
});

//agents-swiper
var swiper2 = new Swiper("#agents-swiper", {
	  slidesPerView: 1,
	  slidesPerGroup: 4,
      spaceBetween: 30,
	  grabCursor: true,
	  navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	  },
	  autoplay:{
		delay: 4000,
	  },
	  breakpoints: {
		414: {
		  slidesPerView: 1,
			spaceBetween: 0,
			slidesPerGroup: 1,
		},
		540: {
		  slidesPerView: 2,
			spaceBetween: 10,
			slidesPerGroup: 2,
		},
		620: {
		  slidesPerView: 3,
		  spaceBetween: 15,
		  slidesPerGroup: 3,
		},
		991: {
		  slidesPerView: 3,
		  spaceBetween: 20,
		  slidesPerGroup: 3,
		},
		1024: {
		  slidesPerView: 4,
		  slidesPerGroup: 4,
		  spaceBetween: 20,
		},
	  },
	  loop: true,
});

//partners-swiper
var swiper3 = new Swiper("#partners-swiper",{
  slidesPerView: 2,	
  spaceBetween: 0,
  centeredSlides: false,
  rewind: true,
	loopedSlides: 5,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
	1024: {
      slidesPerView: 5,
	  slidesPerGroup: 5,
    },
	991: {
      slidesPerView: 4,
	  slidesPerGroup: 4,
    }, 
	768: {
      slidesPerView: 3,
	  slidesPerGroup: 3,
    },
	430: {
      slidesPerView: 3,
	  slidesPerGroup: 3,
    },
  },
  loop: true,
});

//customers-swiper
var swiper = new Swiper("#customers-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay:{
        delay: 4000,
    },
    loop: true,
    speed: 500,
	grabCursor: true,
	effect: 'fade',
	  fadeEffect: {
		crossFade: true,
	  },
});

//Detal-page-swiper
var largeSwiper = new Swiper('#detail-carosel', {
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
     // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,                      
    centeredSlides: true,              
    effect: "coverflow",             
    coverflowEffect: {
        rotate: 0,                     
        depth: 250,                     
        stretch: 50,                
        modifier: 1,                   
        scale: 1,                     
        slideShadows: false,        
    },
    // comment the following lines out to see how it should be!
    breakpoints: {
        1366: {
        	slidesPerView: 2
        },
    	800: {
        	slidesPerView: 2
        }
    }
});
