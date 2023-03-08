$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Шунгитовая Баня", "Шунгитовые Купели", "Шунгитовая Комната"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
  
$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><img style="width: 15px;height: 15px;margin-top: 6.6px;margin-left: 6.6px;" src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png"></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});

$(function(){
	$('.banya').click(function(event) {
		$('.lsa20').addClass('active');
	});
});

$(function(){
	$('.banya_close').click(function(event) {
		$('.lsa20').removeClass('active');
	});
});

$(function(){
	$('.baptistery').click(function(event) {
		$('.lsa21').addClass('active');
	});
});

$(function(){
	$('.baptistery_close').click(function(event) {
		$('.lsa21').removeClass('active');
	});
});

$(function(){
	$('.room').click(function(event) {
		$('.lsa22').addClass('active');
	});
});

$(function(){
	$('.room_close').click(function(event) {
		$('.lsa22').removeClass('active');
	});
});