$(document).on("click", "#moreContentButton", function() {
    $('html, body').animate({
        scrollTop: $("#moreContent").offset().top
    }, 1200);
});