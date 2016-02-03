new WOW().init();


$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $(".navbar-header").height()
    }, 500);
    return false;
});

$("#header-scroll-button").click(function () {
    var scroll_btn = this;
    $(scroll_btn).addClass('rotated');
    setTimeout(function () {
        $(scroll_btn).removeClass('rotated');
    }, 500);
});

$('#gallery img').hover(function(){
    $('#gallery img').not($(this)).css({
       '-webkit-filter' : 'grayscale(80%)',
       'filter' : 'grayscale(80%)'
    });
},
function(){
    $('#gallery img').not($(this)).css({
       '-webkit-filter' : 'grayscale(0%)',
       'filter' : 'grayscale(0%)'
    });
});


