$(document).ready(function(){
   $('.nav__item').click(function(e){
        if ($(window).width() >= '992'){
           if($(this).hasClass("active")){
                $(this).removeClass('active');
                $(this).next(".submenu").slideToggle(500);
                $(".fade").removeClass("active");
            } else {
                if($('.nav__item.active').length > 0){
                    $('.nav__item.active').next(".submenu").slideToggle(500);
                    $('.nav__item.active').removeClass('active'); 
                }
                $(this).addClass('active');
                $(this).next(".submenu").slideToggle(500);
                $(".fade").addClass("active");
            }
            $("*").click(function(event){
               if(!event.target.closest(".nav__item") && !event.target.closest(".submenu__item")){
                    $('.nav__item.active').next(".submenu").slideToggle(500);
                    $('.nav__item.active').removeClass('active');
                    $(".fade").removeClass("active");
               } 
            }); 
        } else {
            $(this).toggleClass("open");
            $(this).next(".submenu").slideToggle(500);
        }
       if($(window).width() < '992'){
            $(".burger__btn").click(function(){
                $("header nav").slideToggle();
                $(this).toggleClass("close");
                $(".fade").toggleClass("active");
            });

    }
        
    }); 
    $(".accordion").click(function(){
        if($(this).hasClass("active")){
            $(this).next(".accordion__subtitle").slideToggle();
            $(this).removeClass("active");   
        } else {
            if($(".accordion.active")){
                $(".accordion.active").next(".accordion__subtitle").slideToggle();
                $(".accordion.active").removeClass("active"); 
            }
            $(this).toggleClass("active");
            $(this).next(".accordion__subtitle").slideToggle();
        }
        
       
    });
    $('form input[name="phone"]').click(function(){
        $(this).setCursorPosition(3);
    }).mask("+7(999) 999-9999");
    
});


var slider = new Swiper(".slider", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    loop:true,
    navigation: {
        nextEl: ".slider--next",
        prevEl: ".slider--prev",
    },
});
var newsSlider = new Swiper(".news__slider", {
    slidesPerView: "auto",
    enabled: true,
    loop: true,
    breakpoints: {
        769: {
            enabled: false,
            loop: false,
          },
        768: {
            enabled: true,
            loop: true,
          },
        
        480: {
            enabled: true,
            loop: true,
          },
        
    },
});

$.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};