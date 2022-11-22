$('.why-choose-about-more').click(function(){
    var x = $(this).text();
    if (x == "View more"){
        $(this).text("View Less");
        $('.view-more-txt-about').slideDown(300);
    }
    else{
        $(this).text("View more")
        $('.view-more-txt-about').slideUp(300);
    }
})

/*---JQuery Part for vision-mission section---*/

// $('.vision-mission-about-btn2').click(function(){
//     $(this).addClass("vision-mission-about-btn1-js");
//     $('.vision-mission-about-btn1').addClass("vision-mission-about-btn2-js")
// })
// $('.vision-mission-about-btn1').click(function(){
//     $(this).addClass("vision-mission-about-btn2-js")
// })

$('.vision-mission-about-btn2').click(function(){
    $('.vision-mission-about-btn1').css({
        backgroundColor: 'transparent',
        border: '2px solid white',
    })
    $(this).css({
        backgroundColor: 'red',
        border: '2px solid red',
    })
    $('.vision-txt-about').fadeOut(0);
    $('.mission-txt-about').fadeIn(500);

})
$('.vision-mission-about-btn1').click(function(){
    $(this).css({
        backgroundColor: 'red',
        border: '2px solid red',
    })
    $('.vision-mission-about-btn2').css({
        backgroundColor: 'transparent',
        border: '2px solid white',
    })
    $('.mission-txt-about').fadeOut(0);
    $('.vision-txt-about').fadeIn(500);
})

/*---JS Part for Team Section---*/

var swiper = new Swiper(".team-about-other", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        }
    }
  });