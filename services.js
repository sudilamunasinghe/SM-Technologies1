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