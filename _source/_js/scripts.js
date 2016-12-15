$(document).ready(function () {

  $('.projects__item').each(function (index, element) {
    if ($(element).attr("href") == "#") {
      element.style.cursor = "default";
      $(element).click(function (event) {
        event.preventDefault();
      });
    }
  });

  $(".js-menu li").hover(
    function () {
      var link = $(this).find("a");
      if (link.data('original-margin') == undefined) {
        link.data('original-margin', link.css("margin-left"));
      }
      link.animate({
        marginLeft: '0',
      }, 250);
    },
    function () {
      var link = $(this).find("a");
      link.animate({
        marginLeft: link.data('original-margin'),
      }, 250);
    }
  );

  function colorHeader(){
    if ($(window).scrollTop() > 300 ){
      $('.header').css("background", "rgba(77,111,133,0.6)");
    } else {
      $('.header').css("background", "transparent");
    }
  }

  colorHeader();

  $(window).scroll(function () {
    colorHeader();
  });

  $(function () {
    $('.header-navigation__item a').click(function (event) {
      event.preventDefault();
      // if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        //target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          // return false;
        }
      // }
    });
  });

});
