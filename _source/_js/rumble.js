$(function(){
  $("a[rel^='external']").each(function() { $(this).attr("target","_blank"); });
  
  $(document).scroll(function() {
    if (window.pageYOffset > 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
});
