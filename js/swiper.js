var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints:{
        1100:{
            //slidesPerView: 3,
            slidesPerView: 'auto',
            spaceBetween: 51,
            freeMode: true,
        }
    }
});