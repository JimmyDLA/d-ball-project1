document.addEventListener("DOMContentLoaded", function(){
console.log("JS is running");

let $ball = $(".ball");
let $container = $(".container");
let $plate = $(".plate");
let bHeight= parseInt($(".bricks").css("height"))
let bWidth = parseInt($(".bricks").css("width"));
let box = $(".boxes");
let brick10 = $("#10");
let xDif = 110;
let yDif = 277;
let dx = 1;
let dy = -1;

let brickRow = 3;
let brickColumn = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bricks = [];
for (var c = 0; c < brickColumn; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRow; r++) {
    bricks[c][r] = { x : 0 , y : 0 }
  }
}

function flipY(){
  dy= -dy;
};
function flipX(){
  dx= -dx;
};


let brickArr=[
  {
    // bX1 : (bWidth * 1) + xDif,
    // bX2 : (this.bX1 - bWidth),
    // bY1 : (bHeight * 1) + yDif,
    // bY2 : (this.bY1 - bHeight)
  },
  {
    // bX2 : (bWidth * 2) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 2) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
  {
    // bX2 : (bWidth * 3) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 3) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
  {
    // bX2 : (bWidth * 4) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 4) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
{
    // bX2 : (bWidth * 5) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 5) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
{
    // bX2 : (bWidth * 1) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 1) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
{
    // bX2 : (bWidth * 2) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 2) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
{
    // bX2 : (bWidth * 3) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 3) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
{
    // bX2 : (bWidth * 4) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 4) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
  {brick10 : {}
    // bX2 : (bWidth * 5) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 5) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
  {
    // bX2 : (bWidth * 1) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 1) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
  {
    // bX2 : (bWidth * 2) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 2) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
  {
    // bX2 : (bWidth * 3) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 3) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
  {
    // bX2 : (bWidth * 4) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 4) + yDif,
    // bY1 : (this.bY2 - bHeight)
  },
  {
    // bX2 : (bWidth * 5) + xDif,
    // bX1 : (this.bX2 - bWidth),
    // bY2 : (bHeight * 5) + yDif,
    // bY1 : (this.bY2 - bHeight)
  }
];


brickArr[0].bX2 = (bWidth * 1) + xDif;
brickArr[0].bX1 = (brickArr[0].bX2 - bWidth);
brickArr[0].bY2 = (bHeight * 1) + yDif;
brickArr[0].bY1 = (brickArr[0].bY2 - bHeight);

brickArr[1].bX2 = (bWidth * 2) + xDif;
brickArr[1].bX1 = (brickArr[1].bX2 - bWidth);
brickArr[1].bY2 = (bHeight * 2) + yDif;
brickArr[1].bY1 = (brickArr[1].bY2 - bHeight);

brickArr[2].bX2 = (bWidth * 3) + xDif;
brickArr[2].bX1 = (brickArr[2].bX2 - bWidth);
brickArr[2].bY2 = (bHeight * 3) + yDif;
brickArr[2].bY1 = (brickArr[2].bY2 - bHeight);

brickArr[3].bX2 = (bWidth * 4) + xDif;
brickArr[3].bX1 = (brickArr[3].bX2 - bWidth);
brickArr[3].bY2 = (bHeight * 1) + yDif;
brickArr[3].bY1 = (brickArr[3].bY2 - bHeight);

brickArr[4].bX2 = (bWidth * 5) + xDif;
brickArr[4].bX1 = (brickArr[4].bX2 - bWidth);
brickArr[4].bY2 = (bHeight * 2) + yDif;
brickArr[4].bY1 = (brickArr[4].bY2 - bHeight);

brickArr[5].bX2 = (bWidth * 1) + xDif;
brickArr[5].bX1 = (brickArr[5].bX2 - bWidth);
brickArr[5].bY2 = (bHeight * 3) + yDif;
brickArr[5].bY1 = (brickArr[5].bY2 - bHeight);

brickArr[6].bX2 = (bWidth * 2) + xDif;
brickArr[6].bX1 = (brickArr[6].bX2 - bWidth);
brickArr[6].bY2 = (bHeight * 1) + yDif;
brickArr[6].bY1 = (brickArr[6].bY2 - bHeight);

brickArr[7].bX2 = (bWidth * 3) + xDif;
brickArr[7].bX1 = (brickArr[7].bX2 - bWidth);
brickArr[7].bY2 = (bHeight * 2) + yDif;
brickArr[7].bY1 = (brickArr[7].bY2 - bHeight);

brickArr[8].bX2 = (bWidth * 4) + xDif;
brickArr[8].bX1 = (brickArr[8].bX2 - bWidth);
brickArr[8].bY2 = (bHeight * 3) + yDif;
brickArr[8].bY1 = (brickArr[8].bY2 - bHeight);

brickArr[9].brick10.bX2 = (bWidth * 5) + xDif;
brickArr[9].brick10.bX1 = (brickArr[9].brick10.bX2 - bWidth);
brickArr[9].brick10.bY2 = (bHeight * 1) + yDif;
brickArr[9].brick10.bY1 = (brickArr[9].bY2 - bHeight);

brickArr[10].bX2 = (bWidth * 1) + xDif;
brickArr[10].bX1 = (brickArr[10].bX2 - bWidth);
brickArr[10].bY2 = (bHeight * 2) + yDif;
brickArr[10].bY1 = (brickArr[10].bY2 - bHeight);

brickArr[11].bX2 = (bWidth * 2) + xDif;
brickArr[11].bX1 = (brickArr[11].bX2 - bWidth);
brickArr[11].bY2 = (bHeight * 3) + yDif;
brickArr[11].bY1 = (brickArr[11].bY2 - bHeight);

brickArr[12].bX2 = (bWidth * 3) + xDif;
brickArr[12].bX1 = (brickArr[12].bX2 - bWidth);
brickArr[12].bY2 = (bHeight * 1) + yDif;
brickArr[12].bY1 = (brickArr[12].bY2 - bHeight);

brickArr[13].bX2 = (bWidth * 4) + xDif;
brickArr[13].bX1 = (brickArr[13].bX2 - bWidth);
brickArr[13].bY2 = (bHeight * 2) + yDif;
brickArr[13].bY1 = (brickArr[13].bY2 - bHeight);

brickArr[14].bX2 = (bWidth * 5) + xDif;
brickArr[14].bX1 = (brickArr[14].bX2 - bWidth);
brickArr[14].bY2 = (bHeight * 3) + yDif;
brickArr[14].bY1 = (brickArr[14].bY2 - bHeight);



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
      // console.log("helperX...bX1==>",brickArr[i]);
      // debugger;
      if ((ballX === brickArr[i].bX1) || (ballX === brickArr[i].bX2)) {
        if((ballY > brickArr[i].bY1) && (ballY < brickArr[i].bY2)){
          console.log("flipX", brickArr[i]);
          console.log("ball x = " + ballX + " y = " + ballY);
          // debugger
          flipX();
        }
      }
    }
  };

  function helperY(){
    for (let i = 0; i < brickArr.length; i++) {
      // console.log("helperY");
      if ((ballY === brickArr[i].bY1) || (ballY === brickArr[i].bY2)) {
        if((ballX > brickArr[i].bX1) && (ballX < brickArr[i].bX2)){
          console.log("flipY", brickArr[i]);
          console.log("ball x = " + ballX + " y = " + ballY);
          // debugger
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


  // console.log("ball x = " + ballX + " y = " + ballY);
  currentPx = ballX + dx + "px";
  currentPy = ballY + dy + "px";
  $ball.css("left", currentPx );
  $ball.css("top", currentPy);
};

//levels---> Easy:10ms/ Med:5ms/ Hard: 1ms
setInterval(moveBall, 5);
});
