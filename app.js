document.addEventListener("DOMContentLoaded", function(){
console.log("JS is running");

let $ball = $(".ball");
let $container = $(".container");
let $plate = $(".plate");
let bHeight= parseInt($(".bricks").css("height"))
let bWidth = parseInt($(".bricks").css("width"));
let totalBrick = $("#totalBrick")[0];
let totalScore = $("#totalScore")[0];
let dx = 1;
let dy = -1;


//WHERE ALL BRICKS COORDINATES WILL LIVE
let brickArr=[
  {},{},{},{},{},
  {},{},{},{},{},
  {},{},{},{},{}
];
console.log(totalScore, totalBrick, brickArr.length);

totalBrick.innerHTML = brickArr.length;
totalScore.innerHTML = 0;

//FOR LOOP TO CREATE EACH BRICK'S INFO AND COORDINATES
for (let i = 0; i < brickArr.length; i++) {
  brickArr[i].id = $("#" + i)[0];
  brickArr[i].bY1 = $("#" + i)[0].offsetTop;
  brickArr[i].bY2 = brickArr[i].bY1 + 50;
  brickArr[i].bX1 = $("#" + i)[0].offsetLeft;
  brickArr[i].bX2 = brickArr[i].bX1 + 110;
}

// HELPER FUNCTIONS TO FLIP BALL DIRECTION
function flipY(){
  dy= -dy;
};
function flipX(){
  dx= -dx;
};


//event listeners for left and right keys
$("body").on("keydown", pressing);
$("body").on("keyup", pressing);
$("body").on("mousemove", pressing);

function pressing(e){
  let plateX = parseInt($plate.css("left"));
  let mouseX = e.clientX;

  if (mouseX > 0 && mouseX < 681){
    lefty = mouseX + "px";
    $plate.css("left", lefty);
  }
}

let score = 0;
//this function will make the ball move
function moveBall(){
  let ballY = parseInt($ball.css("top"));
  let ballX = parseInt($ball.css("left"));
  let plateX = parseInt($plate.css("left"));

  // THIS FUNCITON FLIPS THE X-AXIS OF THE BALL AND TARGETS THE BRICK IT HITS
  function helperX(){
    for (let i = 0; i < brickArr.length; i++) {
      if ((ballX === brickArr[i].bX1) || (ballX === brickArr[i].bX2)) {
        if((ballY > brickArr[i].bY1) && (ballY < brickArr[i].bY2)){
          brickArr[i].id.style.opacity ="0";
          brickArr.[i].bX1= 0;
          brickArr.[i].bX2= 0;
          brickArr.[i].bY1= 0;
          brickArr.[i].bY1= 0;
          score = score + 150;
          totalBrick.innerHTML = brickArr.length;
          totalScore.innerHTML = score;
          console.log(brickArr);
          console.log("ballx= ", ballX, "ballY= ", ballY);
          console.log("flipX");
          flipX();
        }
      }
    }
  };

  // THIS FUNCITON FLIPS THE Y-AXIS OF THE BALL AND TARGETS THE BRICK IT HITS
  function helperY(){
    for (let i = 0; i < brickArr.length; i++) {
      if ((ballY === brickArr[i].bY1) || (ballY === brickArr[i].bY2)) {
        if((ballX > brickArr[i].bX1) && (ballX < brickArr[i].bX2)){
          brickArr[i].id.style.opacity ="0";
          brickArr.[i].bX1= 0;
          brickArr.[i].bX2= 0;
          brickArr.[i].bY1= 0;
          brickArr.[i].bY1= 0;
          score = score + 150;
          totalBrick.innerHTML = brickArr.length;
          totalScore.innerHTML = score;
          console.log(brickArr);
          console.log("flipY");
          flipY();
        }
      }
    }
  };

  //if condition to flip the direction of the ball when it hits the side walls
  if (ballX < 2 || ballX > parseInt($container.css("width"))-15){
    flipX()
  }

  //if condition to flip the direction of the ball when it hits the side walls
  if (ballY < 10){
    flipY()
  }

  //if condition to flip the direction of the ball when it hits the paddle
  if(ballY > parseInt($container.css("height"))- 30){
    if((ballX > plateX) && (ballX < plateX + 120) ){
      console.log(ballX, plateX);
      flipY()
    }
  }

  // if condition to let you know you gameover
  if(ballY > parseInt($container.css("height"))-20){
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

  //if condition to let you know you won after all bricks are done
  if(brickArr[0] === undefined){
    alert("YOU WON!");
    document.location.reload();
  }


  currentPx = ballX + dx + "px";
  currentPy = ballY + dy + "px";
  $ball.css("left", currentPx );
  $ball.css("top", currentPy);
};

//levels---> Easy:10ms/ Med:5ms/ Hard: 1ms
setInterval(moveBall, 5);
});
