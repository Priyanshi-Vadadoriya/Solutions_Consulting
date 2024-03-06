
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    //   autoplay: {
    //     delay:3000,
    //   },
      breakpoints: {
        280:{
          slidesPerView: 1,
          spaceBetween:10
        },
        320:{
            slidesPerView: 1,
            spaceBetween:10
        },
        480:{
            slidesPerView: 1,
            spaceBetween:10    
        },
        768:{
            slidesPerView: 1,
            spaceBetween:20    
        },
        992:{
            slidesPerView: 2,
            spaceBetween:30    
        },
        1200:{
          slidesPerView: 3,
          spaceBetween:30    
      },
      }
  });
