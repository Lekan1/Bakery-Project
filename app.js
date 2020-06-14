$(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
        $('.navbar').addClass('color-change');
    } else {
        $('.navbar').removeClass('color-change');
    }
});
$(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
        $('.navbar-brand').addClass('brand-change');
    } else {
        $('.navbar').removeClass('brand-change');
    }
});
