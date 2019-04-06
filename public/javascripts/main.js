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


$(document).ready(function () {
    initContactUsForm();
    initMobile();
});

$(document).resize(initMobile);

function initMobile() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
function initContactUsForm() {
    var form = $('#contact-us').find('form');
    form.submit(function (e) {
        e.preventDefault();
        var data = {};
        data.name = form.find('input[name="name"]').val();
        data.number = form.find('input[name="number"]').val();
        data.message = form.find('textarea').val();
        $.ajax('/contact_us', {
            type: "POST",
            data: data,
            success: function () {
                form.find('.blue-textfield').val('');
                alert('Дякую, ми отримали ваше повідомлення')
            }
        })
    });
}
