$(document).ready(function(){
  $("#menuOpen").click(function(){
    $(".menuBlock").toggle();
  });
  $(".footerMenuTitle").click(function(){
    if ($(this).children(".footerMenuRow").css("display") != "none"){
      $(this).parent().find(".footerMenuSect").toggle();
      footerHeight();
    }
    footerHeight();
  });
  $(".catalogOpenButton").click(function(){
    $(".catalogLeftMenu").toggle();
  });
  $(".catalogFiltrOpen").click(function(){
    $(".catalogFiltr").toggle();
  });
  $(document).on('click', '.subOpen', function () {
    $(this).find(".rowAll").addClass("rowClose");
    $(this).removeClass("subOpen").addClass("subClose");
  });
  $(document).on('click', '.subClose', function () {
    $(this).find(".rowAll").removeClass("rowClose");
    $(this).removeClass("subClose").addClass("subOpen");
  });
  $('[name=ext]').change(function() {
    if ($('[name=ext]').is(':checked')) {
      $('.ext').slideDown(300);
    }
    else {
      $('.ext').slideUp(300);
    }
  });

});
function footerHeight(){
  var footerH=$("#footer>.container").height();  
  $("#footer").css("height", footerH);
  $("body").css("margin-bottom", footerH);
}