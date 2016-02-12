$('a').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $(".navbar-header").height()
    }, 500);
});

$("#header-scroll-button").click(function () {
    var scroll_btn = this;
    $(scroll_btn).addClass('rotated');
    setTimeout(function () {
        $(scroll_btn).removeClass('rotated');
    }, 500);
});
