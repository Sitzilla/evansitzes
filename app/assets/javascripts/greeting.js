$(document).ready(function(){
  $(".first").on("click", function() {
  	$(this).parent("div").children(".holding-left").fadeToggle();
  	$(this).parent("div").toggleClass("pic-row");
  });
 	 	
  $(".second").on("click", function() {
  	$(this).parent("div").children(".holding-right").fadeToggle();
		$(this).parent("div").toggleClass("pic-row");
  });

  $(".third").on("click", function() {
  	$(this).parent("div").children(".holding-left").fadeToggle();
  	$(this).parent("div").toggleClass("pic-row");
  });

  $(".fourth").on("click", function() {
  	$(this).parent("div").children(".holding-right").fadeToggle();
  	$(this).parent("div").toggleClass("pic-row");
  });

  $(".fifth").on("click", function() {
    $(this).parent("div").children(".holding-right").fadeToggle();
    $(this).parent("div").toggleClass("pic-row");
  });

  $(".sixth").on("click", function() {
    $(this).parent("div").children(".holding-left").fadeToggle();
    $(this).parent("div").toggleClass("pic-row");
  });
});
