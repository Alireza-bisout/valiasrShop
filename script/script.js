var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    centeredSlides:true,//设定为true时，active slide会居中，而不是默认状态下的居左。
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });