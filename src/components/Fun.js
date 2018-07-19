import $ from 'jquery';

$( () => {

  const $statNav = $('.static-nav');
  const $blackout = $('.blackout');

  $(window).on("scroll", function() {
      if($(window).scrollTop() > 20) {
        $('.navit').removeClass('static-nav').addClass('scroll-nav');
        $('.showimg').css('display', 'none');
        $('.scrollimg').css('display', 'flex');
        $blackout.css('background', 'none');

      } else if($(window).scrollTop() < 20) {
        $('.navit').removeClass('scroll-nav').addClass('static-nav');
        $('.showimg').css('display', 'flex');
        $('.scrollimg').css('display', 'none');
        $blackout.css('background', 'black');
      };

    });

}); // ENDS ONLOAD
