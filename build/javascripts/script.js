(function() {
  $(function() {
    return $('#menu-bar a').click(function() {
      if ($('.menu-bar-items').is(':visible')) {
        return $('.menu-bar-items').slideUp();
      } else {
        return $('.menu-bar-items').slideDown();
      }
    });
  });

}).call(this);
