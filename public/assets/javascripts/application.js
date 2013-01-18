$(document).ready(function() {
  
  $('.gift_pane .claim_button').click(function() {
    $('.lightbox_wrapper').fadeIn();
  });
  
  $('.lightbox_wrapper').click(function() {
    $('.lightbox_wrapper').fadeOut();
  });
  
  $('.claim_box').click(function(e) {
    e.stopPropagation();
  });
  
});