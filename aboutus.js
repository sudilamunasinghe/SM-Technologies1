/*--JS Part for Responsive Navigation Bar-- */

$('#bar').click(function(){
	$('.side-content').css({
		display : 'block',
	})
	$('.sidenav').css({
		transform : 'translateX(0%)',
		transition: '0.5s'
	})
	$('.navbar').css({
		display : 'none'
	})
	$('#close').css({
		display: 'block'
	})
	$('.blur').css({
		transition: '0.5s',
		// filter: 'blur(40px)'
		opacity: '0.3'
	})
	$('body').css({
		// overflowY: 'hidden'
	})
})
$('#close').click(function(){
	
	$('.sidenav').css({
		transform : 'translateX(-100%)',
		transition: '0.5s'
	})
	$('.side-content').css({
		display: 'none'
	})
	$('.navbar').css({
		display: 'block',
		// position: 'absolute',
		// zIndex: '-1'
	})
	$('#close').css({
		display: 'none'
	})
	$('#bar').css({
		display: 'block'
	})
	$('.slider').css({
		filter: 'blur(0px)',
		opacity: '1'
	})
	$('body').css({
		overflowY: 'scroll'
	})
	$('.blur').css({
		transition: '0.5s',
		filter: 'blur(0px)',
		opacity: '1'
	})
})

/*--JS Part for why-choose section---*/

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
    spaceBetween: 25,
    centerSlide: 'true',
    fade: 'true',
    // freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        // clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
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