$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var numBalls = 10;
  var balls = [];
  for (var z = 0; z<numBalls; z++) {
    var ball = {
      xCoor:width*Math.random(),
      yCoor:height*Math.random(),
      radius:15,
      vx:10*Math.random(),
      vy:15*Math.random()
    };
    balls.push(ball);
  }
  //alert(balls.length);

  // Run an interation of the game
  var updateGame = function() {
    // PUT STUFF HERE
    for (var j = 0; j<numBalls; j++) {
      balls[j].xCoor = balls[j].xCoor + balls[j].vx;
      balls[j].yCoor = balls[j].yCoor + balls[j].vy;
      if (balls[j].xCoor > width - 20 )
      {
        balls[j].vx = -balls[j].vx
      }
       if (balls[j].xCoor < 20 )
      {
        balls[j].vx = -balls[j].vx
      }
      if (balls[j].yCoor > height - 20)
      {
        balls[j].vy = -balls[j].vy
      }
      if (balls[j].yCoor < 20)
      {
        balls[j].vy = -balls[j].vy
      }
    }
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    for (var i = 0; i<numBalls; i++) {
      //console.log("what");
      context.beginPath();
      context.arc(balls[i].xCoor, balls[i].yCoor, balls[i].radius ,0,2*Math.PI);
      context.fillStyle = 'blue';
      context.fill();
      context.closePath();
      context.stroke();
    }
    requestAnimationFrame(updateGame);     
  };


  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
    var newball = {
      xCoor:x,
      yCoor:y,
      radius:15,
      vx:10*Math.random(),
      vy:15*Math.random()
    };
    balls.push(newball);
    numBalls++;
  });
  
  updateGame();
});
