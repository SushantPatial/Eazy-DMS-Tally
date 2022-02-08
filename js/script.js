$('body').bind('mousewheel', function() {
  if ($('body').scrollTop() > 130) {
    $(".navbar").addClass("nav-scroll");
    $('.navbar-logo img').attr('src','images/logo.png');
  } else {
    $(".navbar").removeClass("nav-scroll");
    $('.navbar-logo img').attr('src','images/logo-white.png');
  }
});
$('body').bind('touchmove', function() {
  if ($('body').scrollTop() > 130) {
    $(".navbar").addClass("nav-scroll");
    $('.navbar-logo img').attr('src','images/logo.png');
  } else {
    $(".navbar").removeClass("nav-scroll");
    $('.navbar-logo img').attr('src','images/logo-white.png');
  }
});


setInterval(function() {
  if ($('body').scrollTop() > 130) {
    $(".navbar").addClass("nav-scroll");
    $('.navbar-logo img').attr('src','images/logo.png');
  } else {
    $(".navbar").removeClass("nav-scroll");
    $('.navbar-logo img').attr('src','images/logo-white.png');
  }
}, 300)


$('.navbar ul li:nth-child(1) a').on('click', function() {
  $.smoothScroll({
    scrollElement: $('body'),
    scrollTarget: '#home'
  });
  return false;
});
$('.navbar ul li:nth-child(2) a').on('click', function() {
  $.smoothScroll({
    scrollElement: $('body'),
    scrollTarget: '#about'
  });
  return false;
});
$('.navbar ul li:nth-child(3) a').on('click', function() {
  $.smoothScroll({
    scrollElement: $('body'),
    scrollTarget: '#pricing'
  });
  return false;
});
