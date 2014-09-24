$(function(){
  //DESKTOP
  $('.gallery-link').click(function(e){
    e.preventDefault();
    var image  = $(this).data('image');
    var target = $(this).data('target');
    if (!$(this).hasClass("active") && $(window).innerWidth() > 769) {
      $('.gallery-link.active').removeClass("active");
      $(this).addClass("active");
      $(target).fadeOut(800, function () {
        $(target).css("background-image", "url('"+image+"')");
        galleryArrows();
        $(target).fadeIn(800);
      }); 
    } else if ($(window).innerWidth() <= 769) {      
      $('.gallery-link.active').removeClass("active");
      $(this).addClass("active");
      $('#modalGallery').modal();
      $('#modalGallery .img-responsive').attr('src', image);
      $(target).css("background-image", "url('"+image+"')");
      galleryArrows();
    }
  });

  $('.gallery-control-right').click(function(e){
    e.preventDefault();
    if ((index+1) != $('.gallery-link').length) {
      var galleryLinks = $('.gallery-link');
      var current       = galleryLinks.filter('.active');
      var index         = current.index('.gallery-link');
      var imageElement = $('.gallery-link')[index+1];
      var target = $(imageElement).data('target');
      var image  = $(imageElement).data('image');
      $('.gallery-link.active').removeClass("active");
      $(imageElement).addClass("active");
      if ($(window).innerWidth() > 769) {
        $(target).fadeOut(800, function () {
          $(target).css("background-image", "url('"+image+"')");
          galleryArrows();
          $(target).fadeIn(800);
        }); 
      } else {
        $('#modalGallery .img-responsive').fadeOut(800, function () {
          $('#modalGallery .img-responsive').attr('src', image);
          $(target).css("background-image", "url('"+image+"')");
          galleryArrows();
          $('#modalGallery .img-responsive').fadeIn(800);
        });        
      }
    }
  });

  $('.gallery-control-left').click(function(e){
    e.preventDefault();
    if (index != 0) {
      var galleryLinks = $('.gallery-link');
      var current       = galleryLinks.filter('.active');
      var index         = current.index('.gallery-link');
      var imageElement = $('.gallery-link')[index-1];
      var target = $(imageElement).data('target');
      var image  = $(imageElement).data('image');
      $('.gallery-link.active').removeClass("active");
      $(imageElement).addClass("active");
      if ($(window).innerWidth() > 769) {
        $(target).fadeOut(800, function () {
          $(target).css("background-image", "url('"+image+"')");
          galleryArrows();
          $(target).fadeIn(800);
        }); 
      } else {
        $('#modalGallery .img-responsive').fadeOut(800, function () {
          $('#modalGallery .img-responsive').attr('src', image);
          $(target).css("background-image", "url('"+image+"')");
          galleryArrows();
          $('#modalGallery .img-responsive').fadeIn(800);
        });        
      }
    }
  });
  $(window).resize(function() {
    if ($(window).innerWidth() > 769) {
      $('#modalGallery').modal('hide');
    }
  });
});


var galleryArrows  = function() {
  var galleryLinks = $('.gallery-link');
  var current      = galleryLinks.filter('.active');
  var index        = current.index('.gallery-link');
  if (index == 0) {
    $('.gallery-control-left').fadeOut(800);
    $('.gallery-control-right').fadeIn(800);
  } else if ((index+1) == $('.gallery-link').length) {
    $('.gallery-control-left').fadeIn(800);
    $('.gallery-control-right').fadeOut(800);
  } else {
    $('.gallery-control-left').fadeIn(800);
    $('.gallery-control-right').show();
  }
}