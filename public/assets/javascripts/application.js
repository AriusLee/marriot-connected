$(document).ready(function() {
  
  $('.gift_pane .claim_button').click(function() {
    $('#request_email').fadeIn();
  });
  
  $('.lightbox_wrapper').click(function() {
    $('.lightbox_wrapper').fadeOut();
  });
  
  $('.claim_box').click(function(e) {
    e.stopPropagation();
  });
  
});