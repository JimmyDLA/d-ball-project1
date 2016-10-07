document.addEventListener("DOMContentLoaded", function(){
console.log("JS is running");

var $ball = $(".ball");
var $container = $(".container");
var $plate = $(".plate");
// coordinates that will be adding or subtraction
var dx = 2;
var dy = -2;
//event listeners for left and right keys
$("body").on("keydown", pressing);
// $("body").on("keyup", notPressing);
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
    console.log(lefty);
  }
  if (e.keyCode === 39 && plateX < 690){
    righty = plateX + 40 + "px";
    $plate.css("left", righty);
    console.log('right is' + righty);
    // console.log($container.css("width"))
  }
}


//this function will make the ball move every 8ms
function moveBall(){
  var currentY = parseInt($ball.css("top"));
  var currentX = parseInt($ball.css("left"));
  var plateX = parseInt($plate.css("left"));
  //if condition to flip the direction of the ball
  if (currentX < 10 || currentX > parseInt($container.css("width"))-5){
    dx = -dx;
  }
  if (currentY < 10){
    dy = -dy;

  }if(currentY > parseInt($container.css("height"))- 15){
      if((currentX > plateX) && (currentX < plateX + 123) ){
        console.log(currentX, plateX);
      dy = -dy;
      }else{

      console.log("game over!");
      alert("GAME OVER!");
      document.location.reload();
      }
    }

  currentPx = currentX + dx + "px";
  currentPy = currentY + dy + "px";
  $ball.css("left", currentPx );
  $ball.css("top", currentPy);

  //we need if statments to bounce off the walls
  // console.log(currentX, currentY);
};

// currentLocation = parseInt($ball.css("top"));
// $ball.css("top", currentLocation ++);

//levels---> Easy:10ms/ Med:5ms/ Hard: 1ms
setInterval(moveBall, 10);






});
