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
// coordinates that will be adding or subtraction
var dx = 2;
var dy = -2;
function flipY(){
  dy= -dy;
};
function flipX(){
  dx= -dx;
};

function helperX(){
  for (var i = 0; i < brickArr.length; i++) {
    // console.log(brickArr[i]);
    for (var n = 0; n < 5; n++) {
      // console.log(brickArr[i][n]);
      if (ballX = brickArr[i][n] || brickArr[i][n] && brickArr[i][n] < ballY < brickArr[i][n]){
        // flipX();
        flipY();
      }
    }
  }
}

function helperY(){
  for (var i = 0; i < brickArr.length; i++) {
    // console.log(brickArr[i]);
    for (var n = 0; n < 5; n++) {
      // console.log(brickArr[i][n]);
      if(ballY = brickArr[i][n] || brickArr[i][n] && brickArr[i][n] < ballX < brickArr[i][n]){
        // flipY();
        flipX();
      }
    }
  }
}

// my for loop to make the bricks w/ jQuery
// for (var i = 1; i <= 15; i++) {
//  var $newDiv = $("<div class = bricks id =" +i+ ">" +i+ "</div>");
//  $(".boxes").append($newDiv);
//  }
 // for (var n = 0; n < 15; n ++){
 //   brickArr[n]= {
 //     bNum: parseInt($("#"+(1+n)).text()),
 //     bX2: bWidth * bNum,
 //     bX1: bX2 - bWidth,
 //     bY2: bHeight * bNum,
 //     bY1: bY2 - bHeight,
 //
 //   }
 // }
 // brickArr.push($("#"+i))
 // console.log($("#"+ i));
 // console.log(brickArr[3][3])
 // console.log("bx2 is "+bX2)
 // console.log("bX1 is "+ bX1)
 // console.log("bY2 is "+bY2)
 // console.log("bY1 is "+bY1)


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

    if(275 < ballY && ballY < 450){
      helperX();
      helperY();
    }
  console.log("ball x = " + ballX + " y = " + ballY);
  currentPx = ballX + dx + "px";
  currentPy = ballY + dy + "px";
  $ball.css("left", currentPx );
  $ball.css("top", currentPy);
};

// helperY();
// helperX();
// currentLocation = parseInt($ball.css("top"));
// $ball.css("top", currentLocation ++);

//levels---> Easy:10ms/ Med:5ms/ Hard: 1ms
setInterval(moveBall, 10);






});
