$(document).ready(function(){

  let countDisplayGold = 0;
  $(".plus-minus-gold .add-button").on('click', function() {
    countDisplayGold += +1;
    $(".plus-minus-gold .count-display").text(countDisplayGold);
  }); 
  $(".plus-minus-gold .sub-button").on('click', function() {
    countDisplayGold -= +1;
    countDisplayGold = countDisplayGold < 0 ? 0:countDisplayGold;
    $(".plus-minus-gold .count-display").text(countDisplayGold);
  }); 

  let countDisplaySilver = 0;
  $(".plus-minus-silver .add-button").on('click', function() {
    countDisplaySilver += +1;
    $(".plus-minus-silver .count-display").text(countDisplaySilver);
  }); 
  $(".plus-minus-silver .sub-button").on('click', function() {
    countDisplaySilver -= +1;
    countDisplaySilver = countDisplaySilver < 0 ? 0:countDisplaySilver;
    $(".plus-minus-silver .count-display").text(countDisplaySilver);
  }); 

  $(".add-button").on('click', function() {
    $(".cart-counter").text(countDisplayGold + countDisplaySilver);
  }); 
  $(".sub-button").on('click', function() {
    $(".cart-counter").text(countDisplayGold + countDisplaySilver);
  }); 
});

// Year
$('#year').html(new Date().getFullYear());
