$(document).ready(function(){
    // Header scrolling effect
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('nav-show');
        } else {
            $('header').removeClass('nav-show');
        }
    });

    // Hamburger menu functionality
    $('.hamburger').click(function(){
        $('.nav-bar').toggleClass('nav-active');
        $(this).toggleClass('toggle');

        // Animate links
        $('.nav-bar li').each(function(index){
            if ($(this).css('animation')) {
                $(this).css('animation', '');
            } else {
                $(this).css('animation', `navLinkFade 0.5s ease forwards ${(index / 7) + 0.3}s`);
            }
        });
    });
});
