$('.go').click(function() {
    $('.announcement').toggle();
});

$('.red-circle').mouseenter(function() {
     $('.blue-square').fadeOut();
});

$('.red-circle').mouseleave(function() {
     $('.blue-square').fadeIn();
});
$('.to').click(function() {
  $('p').toggle();
});
$('#on').click(function(e) {
    $('#square').addClass('rounded');
});

$('#off').click(function(e) {
    $('#square').removeClass('rounded');
});