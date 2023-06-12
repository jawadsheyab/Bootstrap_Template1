/*global $, document, window*/

$(document).ready(function () {
    
    'use strict';
    
    //Trigger ToolTip
    $('[data-toggle="tooltip"]').tooltip();
    
    // Nice Scroll
    $("body").niceScroll({
        cursorcolor: "#444",
        cursorwidth: "10px",
        cursorborder: "1px solid #444",
        cursorborderradius: "0",
        mobile: false
        
    });
    
    
    $('.carousel').carousel({
        interval: 4000
    });
    
    
    // ========================= Show Color Option Div When Click On The Gear ================
    
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });
    
    
    
    // ========================= Change Theme Color On Click ================================
    
    var colorLi = $(".color-option ul li"),
        scrollButton = $("#scroll-top"); // Caching The Scroll Top Element
    
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#dcd422");
    
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        //console.log($(this).attr("data-value"));
    });
    
    //Smooth Scroll To Div
    function goToByScroll(id) {
        $('html,body').animate({
            scrollTop: $(id).offset().top
        }, 'slow');
    }
    
    // Click On Brand To Scroll To Top
    $('.navbar-brand').on('click', function () {
        $('.navbar .nav li a').each(function () {
            $(this).removeClass('active');
        });
        
        goToByScroll('#myslide');
        return false;
    });

    
    // Show Scroll To Top Button
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= $('.about').offset().top - 60) {
            scrollButton.fadeIn();
        } else {
            scrollButton.fadeOut();
        }
    });
    
    // Click On Scroll To Top Button
    scrollButton.click(function () {
        $('.navbar .nav li a').each(function () {
            $(this).removeClass('active');
        });
        goToByScroll('#myslide');
        return false;
    });
    
});


//=============================== Loading Screen ============================================

$(window).on("load", function () {
    'use strict';
    
    // Loading Elements
    $(".loading-overlay .spinner").fadeOut(2200, function () {
        
        // $("body").css("overflow", "auto"); // Show The Scroll
        // $('html, body').css({ 'overflow': 'hidden', 'height': '100%' })
        
        // $('body').css({'overflow':'auto', 'height':'auto', 'position':'relative'});
        
        $(this).parent().fadeOut(1000, function () {
            
            $(this).remove(); // Remove From DOM Tree
        });
    });
});
