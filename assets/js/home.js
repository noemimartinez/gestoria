$(function(){
  var active = 1;
  var next = 2;
  var changeBackground = setInterval( function()
  {
    $('.homestories-img-index-'+active).fadeOut(1200, function() {
      $('.homestories-img-index-'+next).fadeIn( 1200);
    });
    active = next;
    next = next == $('.homestories-index-img').length ? 1 : next+1;
  }, 3500);
});