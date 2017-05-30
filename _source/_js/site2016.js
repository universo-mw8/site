var imgs = [
  " build/img/members/gif/MW8_GIF_WALDO.gif ",
  " build/img/members/team/AndreGuerreiro.jpg ",
  " build/img/members/team/RonaldoChiossi.jpg ",
  " build/img/members/gif/MW8_GIF_DETHE.gif ",
  " build/img/members/gif/MW8_GIF_JULIA.gif",
  " build/img/members/gif/MW8_GIF_RITA.gif",
  " build/img/members/gif/MW8_GIF_DENISE.gif",
  " build/img/members/gif/MW8_GIF_BRUNA.gif",
  " build/img/members/gif/MW8_GIF_JACI.gif",
  " build/img/members/gif/MW8_GIF_TASILA.gif",
  " build/img/members/team/Nayara.jpg",
  " build/img/members/team/Ana.jpg",
  " build/img/members/gif/MW8_GIF_VALTER.gif",
  " build/img/members/gif/MW8_GIF_IRVIN.gif",
  " build/img/members/gif/MW8_GIF_EDVALDO.gif",
  " build/img/members/team/IuryTaillan.jpg",
  " build/img/members/gif/MW8_GIF_FILIPE.gif",
  " build/img/members/gif/MW8_GIF_MARCEL.gif",
  " build/img/members/gif/MW8_GIF_PABLO.gif",
  " build/img/members/gif/MW8_GIF_CAIO.gif",
  " build/img/members/gif/MW8_GIF_MARCUS.gif",
  " build/img/members/gif/MW8_GIF_MOHAMED.gif",
  " build/img/members/gif/MW8_GIF_LUAN.gif",
  " build/img/members/gif/MW8_GIF_JAILSON.gif",
  " build/img/members/gif/MW8_GIF_ELVIS.gif",
  " build/img/members/gif/MW8_GIF_CLEITON.gif",
  " build/img/members/gif/MW8_GIF_AFONSO.gif",
  " build/img/members/gif/MW8_GIF_HENRIQUE.gif",
  " build/img/members/gif/MW8_GIF_LUKAS.gif",
  " build/img/members/gif/MW8_GIF_MICAE.gif",
  " build/img/members/team/JoaoCarlos.jpg",
  " build/img/members/team/Thor.jpg",
  " build/img/members/team/Loki.jpg"
];
//preload
for (img in imgs){
  var image  = new Image();
  image.src = imgs[img];
}

$(document).ready(function () {

  var typewriter = $(".js-typewriter-element");
  typewriter.typed({
    strings: ["comunicação", "pizza", "tecnologia criativa",
              "café", "inovação", "consultoria criativa", "happy hour"],
    startDelay: 100,
    typeSpeed: 100,
    loop: true,
    backSpeed: 30,
    backDelay: 2000,
    showCursor: true,
    cursorChar: "_"
  });

  //"dgdg", "pizza", "tecnologia criativa","café", "música", "inovação", "hambúrguer", "desafios", "happy hour ;)"]


  var owl = $('#js-partners-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 0,
    nav: true
  });

  $(".js-portfolio-prev").click(function (e) {
    e.preventDefault();
    owl.trigger('prev.owl.carousel');
  });

  $(".js-portfolio-next").click(function (e) {
    e.preventDefault();
    owl.trigger('next.owl.carousel');
  });

  var ptPage = $('html[lang=pt]');


  // Hamburger mobile menu
  //---------------------------------------------------------------
  var $btnMenu = $('.js-toggle-menu');
  var $navbar = $('.js-navbar');
  var $menuItem = $('.header-navigation__item');

  $btnMenu.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('toggle--close');
    $navbar.toggleClass('header-navigation--is-open');
  });

  $menuItem.on('click', function (e) {
    e.preventDefault();
    $btnMenu.toggleClass('toggle--close');
    $navbar.removeClass('header-navigation--is-open');
  });
});
