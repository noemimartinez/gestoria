$(function(){
  $('#pressImage, #pressImageModal').click(function(e){
    e.preventDefault();
    if ($(this).attr('src') == '/assets/img/press/nytimes.jpeg' ) {
      window.location = 'http://www.nytimes.com/2014/05/29/garden/global-decor-in-brooklyn-heights.html?module=Search&mabReward=relbias%3As%2C%7B%222%22%3A%22RI%3A18%22%7D';
    }
  });
  //DESKTOP
  $('.press-link').click(function(e){
    e.preventDefault();
    var image  = $(this).data('image');
    var target = $(this).data('target');
    if (!$(this).hasClass("active") && $(window).innerWidth() > 769) {
      $('.press-link.active').removeClass("active");
      $(this).addClass("active");
      $(target).fadeOut(800, function () {
        $(target).attr('src', image);
        pressArrows();
        $(target).fadeIn(800);
      }); 
    } else if ($(window).innerWidth() <= 769) {      
      $('.press-link.active').removeClass("active");
      $(this).addClass("active");
      $('#modalPress').modal();
      $('#modalPress .img-responsive').attr('src', image);
      $(target).attr('src', image);
      pressArrows();
    }
  });

  $('.press-control-right').click(function(e){
    e.preventDefault();
    if ((index+1) != $('.press-link').length) {
      var pressLinks = $('.press-link');
      var current       = pressLinks.filter('.active');
      var index         = current.index('.press-link');
      var imageElement = $('.press-link')[index+1];
      var target = $(imageElement).data('target');
      var image  = $(imageElement).data('image');
      $('.press-link.active').removeClass("active");
      $(imageElement).addClass("active");
      if ($(window).innerWidth() > 769) {
        $(target).fadeOut(800, function () {
          $(target).attr('src', image);
          pressArrows();
          $(target).fadeIn(800);
        }); 
      } else {
        $('#modalPress .img-responsive').fadeOut(800, function () {
          $('#modalPress .img-responsive').attr('src', image);
          $(target).attr('src', image);
          pressArrows();
          $('#modalPress .img-responsive').fadeIn(800);
        });        
      }
    }
  });

  $('.press-control-left').click(function(e){
    e.preventDefault();
    if (index != 0) {
      var pressLinks = $('.press-link');
      var current       = pressLinks.filter('.active');
      var index         = current.index('.press-link');
      var imageElement = $('.press-link')[index-1];
      var target = $(imageElement).data('target');
      var image  = $(imageElement).data('image');
      $('.press-link.active').removeClass("active");
      $(imageElement).addClass("active");
      if ($(window).innerWidth() > 769) {
        $(target).fadeOut(800, function () {
          $(target).attr('src', image);
          pressArrows();
          $(target).fadeIn(800);
        }); 
      } else {
        $('#modalPress .img-responsive').fadeOut(800, function () {
          $('#modalPress .img-responsive').attr('src', image);
          $(target).attr('src', image);
          pressArrows();
          $('#modalPress .img-responsive').fadeIn(800);
        });        
      }
    }
  });
  $(window).resize(function() {
    if ($(window).innerWidth() > 769) {
      $('#modalPress').modal('hide');
    }
  });
});


var pressArrows  = function() {
  var pressLinks = $('.press-link');
  var current      = pressLinks.filter('.active');
  var index        = current.index('.press-link');
  if (index == 0) {
    $('.press-control-left').fadeOut(800);
    $('.press-control-right').fadeIn(800);
  } else if ((index+1) == $('.press-link').length) {
    $('.press-control-left').fadeIn(800);
    $('.press-control-right').fadeOut(800);
  } else {
    $('.press-control-left').fadeIn(800);
    $('.press-control-right').show();
  }
}