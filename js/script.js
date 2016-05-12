$('#nav-collapsed a, .navbar-brand, #header-scroll-button').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $(".navbar-header").height()
    }, 500);

    $('#nav-collapsed').animate({
       height : 0
    }, 200);
    
    $('#nav-collapsed').promise().done(function(){
        $('#nav-collapsed').removeClass('collapse').removeClass('in').addClass('collapse').attr('aria-expanded',false);
        $('.navbar-toggle').addClass('collapsed').attr('aria-expanded',false);
    });
    
     });

$("#header-scroll-button").click(function () {
    var scroll_btn = this;
    $(scroll_btn).addClass('rotated');
    setTimeout(function () {
        $(scroll_btn).removeClass('rotated');
    }, 500);
});
