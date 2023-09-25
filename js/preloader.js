
$(window).on('load', function() {


    $("#preloader").animate({
        'opacity': '1'
    }, 2500, function() {
        setTimeout(function() {
            $("#preloader").css("visibility", "hidden").$('#preloader').slideUp();
        }, 2000);
    });
});