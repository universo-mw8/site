$(document).ready(function(){$(".projects__item").each(function(e,i){"#"==$(i).attr("href")&&(i.style.cursor="default",$(i).click(function(e){e.preventDefault()}))}),$("a[rel^='external']").each(function(){$(this).attr("target","_blank")}),$("nav, .call-to-action").localScroll({duration:1e3,axis:"y"}),$(".fancybox").fancybox({width:650,height:488,scrolling:"no",autoScale:!1,transitionIn:"none",transitionOut:"none",type:"iframe",overlayColor:"#000000",overlayOpacity:.6}),$(".js-menu li").hover(function(){var e=$(this).find("a");void 0==e.data("original-margin")&&e.data("original-margin",e.css("margin-left")),e.animate({marginLeft:"0"},250)},function(){var e=$(this).find("a");e.animate({marginLeft:e.data("original-margin")},250)}),$("#testimonials .slider-container").jCarouselLite({btnNext:"#testimonial-next",btnPrev:"#testimonial-previous",visible:1,speed:1e3,beforeStart:function(e){$(e).animate({opacity:0}),$(e).prev().css({opacity:100}),$(e).next().css({opacity:100})}});for(var e=$("#developed-projects-slider ul");e.children("div").length;)e.children("div:lt(15)").wrapAll("<li>");$("#developed-projects-slider ul div:nth-child(5)").addClass("last"),$("#developed-projects-slider ul div:nth-child(10)").addClass("last"),$("#developed-projects-slider ul div:nth-child(15)").addClass("last"),$("#projects-slider-navigation a").click(function(){$("#projects-slider-navigation a").removeClass("selected"),$(this).addClass("selected")}),$("#developed-projects-slider div").jCarouselLite({btnNext:"#slider-next",btnPrev:"#slider-previous",visible:1,btnGo:["#projects-slider-navigation .1","#projects-slider-navigation .2","#projects-slider-navigation .3"]})}),$(window).scroll(function(){$(window).scrollTop()>100?$(".header").css("background","rgba(55,50,50,0.8)"):$(".header").css("background","rgba(0,0,0,0.0)")});