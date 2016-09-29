$(document).ready(function() {
  $("#steps-menu a").click(function(event) {
    // Replaces main content
    event.preventDefault();

    var step = $(this).attr("href");
    var stepWrap = $(this).closest("#steps");
    var stepMenu = $(this).closest("#steps-menu");
    var stepClass = step.charAt(6);

    $(this).parent().addClass("is-active");
    $(this).parent().siblings().removeClass("is-active");
    $(stepWrap).find(".step-content").not(step).css("display", "none");
    $(stepWrap).find(step).fadeToggle();

    // Rotates the wheel
    $(stepMenu).removeClass();
    $(stepMenu).addClass("step-" + stepClass);
  });

  $(".read-more").click(function(event) {
    // Replaces main content
    event.preventDefault();

    var step = $(this).attr("href");
    var stepWrap = $(this).closest("#steps");
    var stepMenu = $(stepWrap).find("#steps-menu");
    var stepClass = step.charAt(6);

    $(stepWrap).find(".step-content").not(step).css("display", "none");
    $(stepWrap).find(step).fadeToggle();

    // Set and rotates the wheel
    $(stepMenu).find("li:nth-child("+stepClass+")").addClass("is-active");
    $(stepMenu).find("li:nth-child("+stepClass+")").siblings().removeClass("is-active");
    $(stepMenu).removeClass();
    $(stepMenu).addClass("step-" + stepClass);
  });
});
