$(document).ready(function(){

  let countDisplayGold = 0;
  $(".add-to-cart-gold .add-button").on('click', function() {
    countDisplayGold += +1;
    $(".add-to-cart-gold .count-display").text(countDisplayGold);
  }); 
  $(".add-to-cart-gold .sub-button").on('click', function() {
    countDisplayGold -= +1;
    countDisplayGold = countDisplayGold < 0 ? 0:countDisplayGold;
    $(".add-to-cart-gold .count-display").text(countDisplayGold);
  }); 

  let countDisplaySilver = 0;
  $(".add-to-cart-silver .add-button").on('click', function() {
    countDisplaySilver += +1;
    $(".add-to-cart-silver .count-display").text(countDisplaySilver);
  }); 
  $(".add-to-cart-silver .sub-button").on('click', function() {
    countDisplaySilver -= +1;
    countDisplaySilver = countDisplaySilver < 0 ? 0:countDisplaySilver;
    $(".add-to-cart-silver .count-display").text(countDisplaySilver);
  }); 

  $(".add-to-cart-silver .add-to-cart-button").on('click', function() {
    $(".cart-counter").text(countDisplayGold + countDisplaySilver);
  }); 
  $(".add-to-cart-gold .add-to-cart-button").on('click', function() {
    $(".cart-counter").text(countDisplayGold + countDisplaySilver);
  }); 
});

// Year
$('#year').html(new Date().getFullYear());
