document.addEventListener("DOMContentLoaded", function(){
console.log("JS is running");

var $ball = $(".ball");
var $container = $(".container");
var $plate = $(".plate");
var bNum;
var bHeight= parseInt($(".bricks").css("height"))
var bWidth = parseInt($(".bricks").css("width"));
var xDif = 110;
var yDif = 277;
var dx = 2;
var dy = -2;
function flipY(){
  dy= -dy;
};
function flipX(){
  dx= -dx;
};
var brickArr=[
  ["b1",bX2 = (bWidth * 1) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 1) + yDif, bY1 = (bY2 - bHeight)],
  ["b2",bX2 = (bWidth * 2) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 2) + yDif, bY1 = (bY2 - bHeight)],
  ["b3",bX2 = (bWidth * 3) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 3) + yDif, bY1 = (bY2 - bHeight)],
  ["b4",bX2 = (bWidth * 4) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 4) + yDif, bY1 = (bY2 - bHeight)],
  ["b5",bX2 = (bWidth * 5) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 5) + yDif, bY1 = (bY2 - bHeight)],
  ["b6",bX2 = (bWidth * 1) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 1) + yDif, bY1 = (bY2 - bHeight)],
  ["b7",bX2 = (bWidth * 2) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 2) + yDif, bY1 = (bY2 - bHeight)],
  ["b8",bX2 = (bWidth * 3) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 3) + yDif, bY1 = (bY2 - bHeight)],
  ["b9",bX2 = (bWidth * 4) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 4) + yDif, bY1 = (bY2 - bHeight)],
  ["b10",bX2 = (bWidth * 5) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 5) + yDif, bY1 = (bY2 - bHeight)],
  ["b11",bX2 = (bWidth * 1) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 1) + yDif, bY1 = (bY2 - bHeight)],
  ["b12",bX2 = (bWidth * 2) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 2) + yDif, bY1 = (bY2 - bHeight)],
  ["b13",bX2 = (bWidth * 3) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 3) + yDif, bY1 = (bY2 - bHeight)],
  ["b14",bX2 = (bWidth * 4) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 4) + yDif, bY1 = (bY2 - bHeight)],
  ["b15",bX2 = (bWidth * 5) + xDif, bX1 = (bX2 - bWidth), bY2 = (bHeight * 5) + yDif, bY1 = (bY2 - bHeight)],
];
// // coordinates that will be adding or subtraction


//event listeners for left and right keys
$("body").on("keydown", pressing);
function pressing(e){
  var plateX = parseInt($plate.css("left"));
  if (e.keyCode === 39 && plateX > 691){
    $plate.css("left", "690px");
    console.log("stop at " + $plate.css("left"));
  }
  if (e.keyCode === 37 && plateX < 11){
      $plate.css("left", "10px");
  }
  if (e.keyCode === 37 && plateX > 11){
    lefty = plateX - 40 + "px";
    $plate.css("left", lefty)
    console.log("left = "+ lefty);
  }
  if (e.keyCode === 39 && plateX < 690){
    righty = plateX + 40 + "px";
    $plate.css("left", righty);
    console.log("right = " + righty);
  }
}

//this function will make the ball move every 8ms
function moveBall(){
  var ballY = parseInt($ball.css("top"));
  var ballX = parseInt($ball.css("left"));
  var plateX = parseInt($plate.css("left"));

  function helperX(){
    for (var i = 0; i < brickArr.length; i++) {
      // console.log(brickArr[i]);
      for (var n = 1; n < 5; n++) {
        // console.log("helperX ==> "+ brickArr[i][n]);
        if (ballX > brickArr[i][n] && ballX < brickArr[i][n]){
          if(brickArr[i][n] < ballY && ballY < brickArr[i][n]){
            flipX();
          }
        }
      }
    }
  };

  function helperY(){
    for (var i = 0; i < brickArr.length; i++) {
      // console.log(brickArr[i]);
      for (var n = 1; n < 5; n++) {
        // console.log("helperY => " + brickArr[i][n]);
        if (ballY > brickArr[i][n] && ballY < brickArr[i][n]){
          if(brickArr[i][n] < ballX && ballX < brickArr[i][n]){
          flipY();
          }
        }
      }
    }
  };

  //if condition to flip the direction of the ball
  if (ballX < 10 || ballX > parseInt($container.css("width"))-5){
      flipX()
  }
  if (ballY < 10){
      flipY()
  }
  if(ballY > parseInt($container.css("height"))- 25){
      if((ballX > plateX) && (ballX < plateX + 120) ){
        console.log(ballX, plateX);
        flipY()
        }
      }
  if(ballY > parseInt($container.css("height"))-10){
      console.log("plate x = " +plateX);
      alert("GAME OVER!");
      document.location.reload();
    }

  if (105 < ballX && ballX< 670) {
    if(275 < ballY && ballY < 450){
      helperX();
      helperY();
    }
  }

  // if(275 < ballY && ballY < 450){
  //   if (105 < ballX && ballX< 670) {
  //     console.log("DOOOOOOOOOO");
  //     helperY();
  //     }
  //   }

  console.log("ball x = " + ballX + " y = " + ballY);
  currentPx = ballX + dx + "px";
  currentPy = ballY + dy + "px";
  $ball.css("left", currentPx );
  $ball.css("top", currentPy);
};

//levels---> Easy:10ms/ Med:5ms/ Hard: 1ms
setInterval(moveBall, 8);
});
