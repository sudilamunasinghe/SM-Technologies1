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