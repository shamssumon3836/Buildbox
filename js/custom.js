














$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});







 $(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
          });
  });
