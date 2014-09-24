// @codekit-prepend "boostrap/affix.js","boostrap/alert.js","boostrap/button.js","boostrap/carousel.js","boostrap/collapse.js","boostrap/dropdown.js","boostrap/modal.js","boostrap/tooltip.js","boostrap/popover.js","boostrap/scrollspy.js","boostrap/tab.js","boostrap/transition.js",

$(function(){
  //INDEX
  var screenSize = $( window ).height();
  $('.homestories-container').css({
    height : screenSize
  });
  $('.homestories-container').css({
    height : screenSize
  });
  $(window).resize(function() {
    screenSize = $( window ).height();
    $('.homestories-container').css({
      height : screenSize
    });
    if ($('.container-about-scroll').prop('scrollHeight') != $('.container-about-scroll').height()) {
      $('.scroll-arrow').show();
    } else {
      $('.scroll-arrow').hide();
    }
  });
  //INDEX
  $('.go-home-link').click(function(e){
    e.preventDefault();
    $('#indexContainer').fadeOut(1000, function() {
      $('#homestoriesContainer').fadeIn( 1000);
    });
  });
  //HOME
  $('.menu-link').click(function(e){
    e.preventDefault();
    if (!$(this).parent().hasClass('active')) {
      $('.navbar .active').removeClass('active');
      $(this).parent().addClass('active');
      var target = $(this).data('target');

      $('.home-container.active').fadeOut(1000, function() {
        $(target).fadeIn(1000, function() {
          if ($('.container-about-scroll').prop('scrollHeight') != $('.container-about-scroll').height()) {
            $('.scroll-arrow').show();
          }
          $('.home-container.active').removeClass('active');
          $(target).addClass('active');
        });
      });
    }
  });
  $('#logoHomestories').click(function(e){
    e.preventDefault();
    var isMenuSelected = $('.navbar li').hasClass('active');
    if (isMenuSelected) {
      $('.navbar .active').removeClass('active');
      $('.home-container.active').fadeOut(1000, function() {
        $('.homestories-container-home').fadeIn(1000, function() {
          $('.home-container.active').removeClass('active');
          $('.homestories-container-home').addClass('active');
        });
      });
    } else {
      $('#homestoriesContainer').fadeOut(1000, function() {
        $('#indexContainer').fadeIn(1000);
      });
    }
  });
  //INFO
  $('.go-info-link').click(function(e){
    e.preventDefault();
    $('#homestoriesContainer').fadeOut(1000, function() {
      $('.navbar .active').removeClass('active');
      $('.home-container.active').hide();
      $('.homestories-container-home').show();
      $('.home-container.active').removeClass('active');
      $('.homestories-container-home').addClass('active');
      $('#infoContainer').fadeIn( 1000);
    });
  });
  $('.go-home-info-link').click(function(e){
    e.preventDefault();
    $('#infoContainer').fadeOut(1000, function() {
      $('#homestoriesContainer').fadeIn( 1000);
    });
  });
  //SCROLL
  $('.scroll-arrow').click(function(){
    var target     = $(this).data('target');
    var scrollSize = $(target).scrollTop();
    $(target).animate({
          scrollTop:  scrollSize + 50
     });
  });
  $('.container-about-scroll').scroll(function(){
   if ($('.container-about-scroll').scrollTop() >= $('.container-about-scroll').prop('scrollHeight') - $('.container-about-scroll').height()) {
      $('.scroll-arrow').fadeOut(600);
    } else {
      $('.scroll-arrow').fadeIn(600);
    }
  });

});


