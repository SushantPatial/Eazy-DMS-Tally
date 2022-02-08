$(document).ready(function(){

  var counts = 0;

  $(".add").on('click', function() {
   

    counts += +1;

    $(".cart-counter").animate({
      opacity: 1
    }, 300, function () {
      $(this).text(counts);
    });
  }); 
});

  