$("#moreContentButton").click(function() {
    alert("Klik!");
    
    $('html, body').animate({
        scrollTop: $("#moreContent").offset().top
    }, 2000);
});