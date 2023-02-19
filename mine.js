function init() {
  var carousel = $(".carousel"),
    currdeg = 0,
    currTop = -1150,
    img = 1,
    hammertime = new Hammer(document.querySelector(".carousel"));

  hammertime.on("swiperight", function (e) {
    currdeg += 60;
    currTop -= 400;
    img--;
    if (img < 1) {
      img = 5;
    }
    if (currTop < -1150) {
      currTop = 850;
    }
    let imge = "q" + img + ".png";
    carousel.css({
      "-webkit-transform": "rotateY(" + currdeg + "deg)",
      "-moz-transform": "rotateY(" + currdeg + "deg)",
      "-o-transform": "rotateY(" + currdeg + "deg)",
      transform: "rotateY(" + currdeg + "deg)",
      top: +currTop + "px",
    });
    $("#myImg").attr("src", imge);
  });

  hammertime.on("swipeleft", function (e) {
    currdeg -= 60;
    currTop += 400;
    img++;
    if (img > 5) {
      img = 1;
    }
    if (currTop > 850) {
      currTop = -1150;
    }
    let imge = "q" + img + ".png";
    carousel.css({
      "-webkit-transform": "rotateY(" + currdeg + "deg)",
      "-moz-transform": "rotateY(" + currdeg + "deg)",
      "-o-transform": "rotateY(" + currdeg + "deg)",
      transform: "rotateY(" + currdeg + "deg)",
      top: +currTop + "px",
    });
    $("#myImg").attr("src", imge);
  });
}
