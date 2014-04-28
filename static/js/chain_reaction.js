$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var balls = [];
  var b0 = {
    xCoor:60,
    yCoor:60,
    radius:10,
    vx:5,
    vy:5
  };
  var b1 = {
    xCoor:100,
    yCoor:120,
    radius:15,
    vx:15,
    vy:15
  };
  var b2 = {
    xCoor: 230,
    yCoor: 330,
    radius: 25,
    vx: 20,
    vy: 20
  };
  balls.push(b0);
  balls.push(b1);
  balls.push(b2);
  //alert(balls.length);

  // Run an interation of the game
  var updateGame = function() {
    // PUT STUFF HERE
    for (var j = 0; j<3; j++) {
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
    for (var i = 0; i<3; i++) {
      //console.log("what");
      context.beginPath();
      context.arc(balls[i].xCoor, balls[i].yCoor, balls[i].radius ,0,2*Math.PI);
      context.fillStyle = 'blue';
      context.fill();
      context.closePath();
      context.stroke();
    }
    setTimeout(updateGame, 10);     
  };


  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE

  });

  updateGame();
});
