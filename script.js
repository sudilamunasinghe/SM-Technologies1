const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 5000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 5000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

/*---JQuery Part for Responsive Navigation Bar---*/

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

/*---JQuery Part for Mission & Vision in Home Page---*/

$('.mission-slide').click(function(){
	$('.mission').fadeIn(300);
	$('.vision').fadeOut(0);
	$('.vision-btn').css({
		backgroundColor: 'transparent',
	})
	$('.mission-btn').css({
		backgroundColor: 'rgb(0, 255, 85)',
	})
})
$('.vision-slide').click(function(){
	$('.mission').fadeOut(0);
	$('.vision').fadeIn(300);
	$('.vision-btn').css({
		backgroundColor: 'rgb(0, 255, 85)',
	})
	$('.mission-btn').css({
		backgroundColor: 'transparent',
	})
})

/*--JQuery Part for FAQ Category---*/

$('.q1').click(function(){
	$('.question-p1').slideToggle(300);
	$('.q1-icon').toggleClass("q1-icon-animate");
})
$('.q2').click(function(){
	$('.question-p2').slideToggle(300);
	$('.q2-icon').toggleClass("q2-icon-animate");
})
$('.q3').click(function(){
	$('.question-p3').slideToggle(300);
	$('.q3-icon').toggleClass("q3-icon-animate");
})
$('.q4').click(function(){
	$('.question-p4').slideToggle(300);
	$('.q4-icon').toggleClass("q4-icon-animate");
})

/*---JS Part for Testimonials Section---*/

var swiper = new Swiper(".mySwiper", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });

/*---JS Part for Daily Posts Section---*/

var swiper = new Swiper(".mySwiper", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
});

/*---JQuery Part for why-choose-about-more button in why-choose-about---*/

$('.why-choose-about-more').click(function(){
	$('.view-more-txt-about').slideToggle(300)
})