$(document).on("click", "#moreContentButton", function() {
    $('html, body').animate({
        scrollTop: $("#content").offset().top
    }, 1200);
});