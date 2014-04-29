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

  var reactions = [];

  // Run an interation of the game
  var updateGame = function() {
    // PUT STUFF HERE
    for (var b = 0; b<balls.length; b++) {
      var collided = false;
      for (var a = 0; a<reactions.length; a++) {
        var xdiff = Math.abs(reactions[a].xCoor - balls[b].xCoor);
        var ydiff = Math.abs(reactions[a].yCoor - balls[b].yCoor);
        var dist = Math.sqrt(xdiff*xdiff + ydiff*ydiff);
        if (dist < reactions[a].radius + balls[b].radius) {
          collided = true;
        }
      }
      if (collided == true) {
        var gReac = {
          xCoor: balls[b].xCoor,
          yCoor: balls[b].yCoor,
          radius: 1
        };
        reactions.push(gReac);
        balls.splice(b, 1);
        b--;
        numBalls--;
      }
    }

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

    for (var x = 0; x<reactions.length; x++) {
      if (reactions[x].radius < 30) {
        reactions[x].radius++;
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
    for (var n = 0; n<reactions.length; n++) {
      context.beginPath();
      context.arc(reactions[n].xCoor, reactions[n].yCoor, reactions[n].radius ,0,2*Math.PI);
      context.fillStyle = reactions[n].color;
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
    var newReaction = {
      xCoor:x,
      yCoor:y,
      radius:1,
      color: "green"
    };
    reactions.push(newReaction);
    //balls.push(newball);
    //numBalls++;
  });

  updateGame();
});
