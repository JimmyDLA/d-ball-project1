document.addEventListener("DOMContentLoaded", function(){
console.log("JS is running");

let $ball = $(".ball");
let $container = $(".container");
let $plate = $(".plate");
let bHeight= parseInt($(".bricks").css("height"))
let bWidth = parseInt($(".bricks").css("width"));
let box = $(".boxes");
// let brick11 = document.querySelector("#11");
let xDif = 110;
let yDif = 277;
let dx = 1;
let dy = -1;

let brickArr=[
  {},{},{},{},{},
  {},{},{},{},{},
  {},{},{},{},{}
];

let parent = $(".boxes");
// let child = document.getElementById("p1");
// parent.removeChild(child);

for (let i = 0; i <= 14; i++) {
  brickArr[i].id = $("#" + i)[0];
  brickArr[i].bY1 = $("#" + i)[0].offsetTop-11;
  brickArr[i].bY2 = brickArr[i].bY1 + 50;
  brickArr[i].bX1 = $("#" + i)[0].offsetLeft-11;
  brickArr[i].bX2 = brickArr[i].bX1 + 110;
}

let brickRow = 3;
let brickColumn = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

// for (var c = 0; c < brickColumn; c++) {
//   bricks[c] = [];
//   for (var r = 0; r < brickRow; r++) {
//     bricks[c][r] = { x : 0 , y : 0 }
//   }
// }

function flipY(){
  dy= -dy;
};
function flipX(){
  dx= -dx;
};



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
          // debugger;
          brickArr[i].id.style.opacity ="0";
          brickArr.splice(i,1);
          console.log(brickArr[0]);
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
          // debugger;
          brickArr[i].id.style.opacity ="0";
          brickArr.splice(i,1);
          console.log(brickArr[0]);
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

  if(brickArr[0] === undefined){
    alert("YOU WON!");
    docuent.location.reload();
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
