$(document).ready(function() {

  $(".next").click(goNext);
  $(".prev").click(goPrev);

  $(document).keydown( function() {
    if (event.which == 39) {
      goNext() ;
    } else if ( event.which == 37) {
      goPrev() ;
    };
  });

  $('i.fas').click(function() {
      var index = $(this).index();
      index = index + 1;
      console.log($(this).index()); // posizione dell'elemento (i) nel div.nav ---> 0,1,2...
      var imageToShow = $('img:nth-child(' + index + ')');

      removeActive();
      $(this).addClass("active");
      imageToShow.addClass("active"); });

});




// FUNZIONI
function removeActive() {
  var currentImg= $("img.active");
  var currentIcon= $("i.active");
  currentImg.removeClass("active");
  currentIcon.removeClass("active");
}


function goNext() {
  var currentImg= $("img.active");
  var nextImg = $("img.active").next();

  var currentIcon= $("i.active");
  var nextIcon = $("i.active").next();

  currentImg.removeClass("active");
  currentIcon.removeClass("active");

  if (currentImg.hasClass("last")) {
    $("img.first").addClass("active");
    $("i.first").addClass("active");
  } else
    nextImg.addClass("active");
    nextIcon.addClass("active");
}

function goPrev() {
  var currentImg= $("img.active");
  var prevImg = $("img.active").prev();

  var currentIcon= $("i.active");
  var prevIcon = $("i.active").prev();

  currentImg.removeClass("active");
  currentIcon.removeClass("active")

  if (currentImg.hasClass("first")) {
    $("img.last").addClass("active");
    $("i.last").addClass("active");
  } else
    prevImg.addClass("active");
    prevIcon.addClass("active");
}
