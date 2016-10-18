$(document).ready(function () {

  var typewriter = $(".js-typewriter-element");
  typewriter.typed({
    strings: ["comunicação", "pizza", "tecnologia criativa",
              "café", "música", "inovação", "hambúrguer", "desafios", "happy hour ;)"],
    startDelay: 100,
    typeSpeed: 100,
    loop: true,
    backSpeed: 30,
    backDelay: 2000,
    showCursor: true,
    cursorChar: "_"
  });



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
  // Slider of testimonials
  //---------------------------------------------------------------
  // $('.bxslider').bxSlider({
  //   mode: 'fade',
  //   pager: false,
  //   nextSelector: '.slider-testimonial__next',
  //   prevSelector: '.slider-testimonial__prev',
  //   nextText: 'Próximo',
  //   prevText: 'Anterior',
  //   adaptiveHeight: true,
  //   responsive: true
  // });

  // Phone number mask
  //---------------------------------------------------------------
  // ptPage.find("#Field16").mask("(99) 9999?9-9999");
  // ptPage.find("#Field16").on("blur", function () {
  //   var last = $(this).val().substr($(this).val().indexOf("-") + 1);

  //   if (last.length == 3) {
  //     var move = $(this).val().substr($(this).val().indexOf("-") - 1, 1);
  //     var lastfour = move + last;

  //     var first = $(this).val().substr(0, 9);

  //     $(this).val(first + '-' + lastfour);
  //   }

  //   $("#Field16").valid();

  // });

  // Form Wufoo validated with jquery
  //---------------------------------------------------------------
  // $(".js-register-form").validate({

  //   //debug: true,

  //   // Define as regras
  //   rules: {

  //     Field43: {
  //       //name
  //       required: true,
  //       minlength: 2
  //     },

  //     Field44: {
  //       // sobrenome
  //       required: true,
  //       minlength: 2
  //     },

  //     Field41: {
  //       // projeto e empresa
  //       required: true,
  //       minlength: 2
  //     },

  //     Field3: {
  //       // email
  //       required: true,
  //       email: true
  //     },

  //     Field16: {
  //       // telefone
  //       //number: true,
  //       required: true,
  //       minlength: 14,
  //       maxlength: 15
  //     },

  //     Field52: {
  //       // skype
  //       required: false,
  //       minlength: 2
  //     },

  //     Field48: {
  //       // descriçao do projeto
  //       required: true,
  //       minlength: 2
  //     }

  //   },

  //   // Define as mensagens de erro para cada regra
  //   messages: {

  //     Field43: {
  //       //name
  //       required: "Por favor, preencha com seu nome.",
  //       minlength: jQuery.validator.format("Este campo deve conter, no mínimo, {0} caracteres"),
  //     },

  //     Field44: {
  //       // sobrenome
  //       required: "Por favor, preencha com seu sobrenome.",
  //       minlength: jQuery.validator.format("Este campo deve conter, no mínimo, {0} caracteres"),
  //     },

  //     Field41: {
  //       // projeto e empresa
  //       required: "Por favor, preencha com o nome do projeto.",
  //       minlength: jQuery.validator.format("Este campo deve conter, no mínimo, {0} caracteres"),
  //     },

  //     Field3: {
  //       // email
  //       required: "Por favor, preencha com um e-mail válido.",
  //       email: "Por favor, preencha com um e-mail válido.",
  //       minlength: jQuery.validator.format("Este campo deve conter, no mínimo, {0} caracteres"),
  //     },

  //     Field16: {
  //       // telefone
  //       required: "Por favor, preencha com um telefone válido.",
  //       minlength: jQuery.validator.format("Este campo deve conter, no mínimo, {0} caracteres"),
  //       number: "Por favor, preencha com um telefone válido.",
  //     },

  //     Field52: {
  //       // skype
  //       required: "Por favor, preencha com seu nome.",
  //       minlength: jQuery.validator.format("Este campo deve conter, no mínimo, {0} caracteres"),
  //     },

  //     Field48: {
  //       // descriçao do projeto
  //       required: "Por favor, descreva brevemente seu projeto.",
  //       minlength: jQuery.validator.format("Este campo deve conter, no mínimo, {0} caracteres"),
  //     }

  // Hamburger mobile menu
  //---------------------------------------------------------------
  var $btnMenu = $('.js-toggle-menu');
  var $navbar = $('.js-navbar');
  var $menuItem = $('.header-navigation__item');

  $btnMenu.on('click', function (e) {
    e.preventDefault();
    $btnMenu.toggleClass('toggle--close');
    $navbar.toggleClass('header-navigation--is-open');
  });
  $menuItem.on('click', function (e) {
    $navbar.removeClass('header-navigation--is-open');
    $btnMenu.toggleClass('toggle--close');
  });


  // Hash links
  //---------------------------------------------------------------
  // $('a.hash').click(function (event) {
  //   event.preventDefault();
  //   if (history.pushState) {
  //     history.pushState(null, null, $(this).attr('href'));
  //   }
  //   return false;
  // });

  // $('.portfolio__grid').mixItUp();

  // var portfolio = {

  //   init : function(){
  //     var self = this;
  //     self.filters();

  //   },

  //   filters : function(){

  //     var $filters = $('.js-portfolio-filter');
  //     var $items = $('.portfolio__item');
  //     var active = $('.filter-visible').data('filter');
  //     // console.log($filters);
  //     // console.log($items);
  //     // console.log(active);

  //     // $('.portfolio__item').hide();
  //     // $('.portfolio__item').data('category', active).show();

  //     $filters.on('click', function(event){
  //       event.preventDefault();
  //       $('.portfolio__item').hide();
  //       var $this = $(this);
  //       $($this).addClass('filter-visible');
  //       var cat = $this.data('filter');
  //       console.log(cat);
  //       // var $items = $('.portfolio__item');
  //       //var active = $filters.find('.filter-visible').data('filter');
  //       // $items.hide();
        
  //       $('.portfolio__item').find('[data-category="'+cat+'"]').show();
  //     });

  //   }


  // }

  // portfolio.init();


});
