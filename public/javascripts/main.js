$('header ul li').click(function (el) {
    $('html, body').animate({
        scrollTop: $($(el.target).attr('href')).offset().top
    }, 1500);
});
$('.contact-link').click(function (el) {
    $('html, body').animate({
        scrollTop: $($(el.target).attr('href')).offset().top
    }, 1500);
});
