$(function() { // DOMContentLoaded
  $(".page-head__button").on("click", function() {  //event listener
    $("html, body").animate({
      scrollTop: $(".container__offers").offset().top //dopisujac -300 bedzie do klasy odjac 300px
    }, 2000);
  })

  $(".text-container__button").on("click", function() {
    $("html,body").animate({
      scrollTop: $(".contact-container").offset().top
    }, 2000);
  })

  $("a[href='#Contact']").on("click", function() {
    $("html,body").animate({
      scrollTop: $(".container__contact").offset().top
    }, 2000);
  });
})

$(function() { // DOMContentLoaded
  $(".button").on("click", function() {  //event listener
    $("html, body").animate({
      scrollTop: $(".container__contact").offset().top //dopisujac -300 bedzie do klasy odjac 300px
    }, 2000);
  })
