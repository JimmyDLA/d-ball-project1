document.addEventListener("DOMContentLoaded", function(){
console.log("JS is running");

let $ball = $(".ball");
let $container = $(".container");
let $plate = $(".plate");
let bHeight= parseInt($(".bricks").css("height"))
let bWidth = parseInt($(".bricks").css("width"));
let xDif = 110;
let yDif = 277;
let dx = 2;
let dy = -2;
let bX2;
function flipY(){
  dy= -dy;
};
function flipX(){
  dx= -dx;
};
let brickArr=[
  {
    bX2 : (bWidth * 1) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 1) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
  {
    bX2 : (bWidth * 2) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 2) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
  {
    bX2 : (bWidth * 3) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 3) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
  {
    bX2 : (bWidth * 4) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 4) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
{
    bX2 : (bWidth * 5) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 5) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
{
    bX2 : (bWidth * 1) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 1) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
{
    bX2 : (bWidth * 2) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 2) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
{
    bX2 : (bWidth * 3) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 3) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
{
    bX2 : (bWidth * 4) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 4) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
  {
    bX2 : (bWidth * 5) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 5) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
  {
    bX2 : (bWidth * 1) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 1) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
  {
    bX2 : (bWidth * 2) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 2) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
  {
    bX2 : (bWidth * 3) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 3) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
  {
    bX2 : (bWidth * 4) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 4) + yDif,
    bY1 : (this.bY2 - bHeight)
  },
  {
    bX2 : (bWidth * 5) + xDif,
    bX1 : (this.bX2 - bWidth),
    bY2 : (bHeight * 5) + yDif,
    bY1 : (this.bY2 - bHeight)
  }
];
// // coordinates that will be adding or subtraction


//event listeners for left and right keys
$("body").on("keydown", pressing);
function pressing(e){
  let plateX = parseInt($plate.css("left"));
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
  let ballY = parseInt($ball.css("top"));
  let ballX = parseInt($ball.css("left"));
  let plateX = parseInt($plate.css("left"));

  function helperX(){
    for (let i = 0; i < brickArr.length; i++) {
      console.log("helperX ");
        //orig: (ballX===bx1)&&(ballY>bY1)&&(ballY<bY2)
        if ((ballX === brickArr[i].bX1) || (ballX === brickArr[i].bX2)) {
          if((ballY > brickArr[i].bY1) && (ballY < brickArr[i].bY2)){
            flipX();
        }
      }
    }
  };

  function helperY(){
    for (let i = 0; i < brickArr.length; i++) {
      console.log("helperY");
        if ((ballY === brickArr[i].bX1) || (ballY === brickArr[i].bX2)) {
          if((ballX >brickArr[i].bX1) && (ballX < brickArr[i].bX2)){
          flipY();
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

  if (105 < ballX && ballX < 670) {
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
setInterval(moveBall, 20);
});
