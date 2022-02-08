$(".add").on('click', function() {
  if ($(this).html() == 'Added') {
    $(this).html('Add to cart');
  } else {
    $(this).html('Added');
  }
})


