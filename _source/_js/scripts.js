$(document).ready(function(){

  $('.projects__item').each(function(index, element) {
      if($(element).attr("href") == "#") {
        element.style.cursor = "default";
        $(element).click(function(event){
          event.preventDefault();
        });
      }
  });


  $("a[rel^='external']").each(function() { $(this).attr("target","_blank"); });

  $('nav, .call-to-action').localScroll({
    duration: 1000,
    axis: 'y'
  });

  $(".fancybox").fancybox({
    'width'           : 650,
    'height'          : 488,
    'scrolling'       : 'no',
    'autoScale'       : false,
    'transitionIn'    : 'none',
    'transitionOut'   : 'none',
    'type'            : 'iframe',
    'overlayColor'    : "#000000",
    'overlayOpacity'  : 0.6
  });

  $(".js-menu li").hover(
    function(){
      var link = $(this).find("a");
      if (link.data('original-margin') == undefined) {
        link.data('original-margin', link.css("margin-left"));
      }
      link.animate({
           marginLeft: '0',
      }, 250);
    },
    function(){
      var link = $(this).find("a");
      link.animate({
          marginLeft: link.data('original-margin'),
      }, 250);
    }
  );
  $("#testimonials .slider-container").jCarouselLite({
    btnNext: "#testimonial-next",
    btnPrev: "#testimonial-previous",
    visible: 1,
    speed: 1000,
    beforeStart: function(e){
      $(e).animate({opacity:0});
      // We need both to be updated because the user can go either left or right.
      $(e).prev().css({opacity: 100})
      $(e).next().css({opacity: 100})
    }
  });

  var $c = $('#developed-projects-slider ul');
  while ($c.children('div').length) {
    $c.children('div:lt(15)').wrapAll('<li>');
  }

  $("#developed-projects-slider ul div:nth-child(5)").addClass("last")
  $("#developed-projects-slider ul div:nth-child(10)").addClass("last")
  $("#developed-projects-slider ul div:nth-child(15)").addClass("last")

  $("#projects-slider-navigation a").click(function(){
    $("#projects-slider-navigation a").removeClass("selected");
    $(this).addClass("selected");
  });

  $("#developed-projects-slider div").jCarouselLite({
      btnNext: "#slider-next",
      btnPrev: "#slider-previous",
      visible: 1,
      btnGo: ["#projects-slider-navigation .1", "#projects-slider-navigation .2", "#projects-slider-navigation .3"]
  });
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.header').css("background", "rgba(55,50,50,0.8)");
    }
    else{
        $('.header').css("background", "rgba(0,0,0,0.0)");
    }
});
