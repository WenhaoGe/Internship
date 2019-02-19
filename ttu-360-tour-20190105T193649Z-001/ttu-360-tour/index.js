$('.lg-hotspot-button').click(function(){
  var buttonId = $(this).attr('id');
  var iframeSrc = $(this).attr('data-src')
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
    $('#360-tour').removeAttr('src').attr('src',iframeSrc);
})

$('#close-btn').click(function(){
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
  $('#360-tour').removeAttr('src');
});


// what do you want to accomplish in this file
// can you explain to me line by line