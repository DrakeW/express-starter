$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var balls = [];
  var b0 = {
    xCoor:10,
    yCoor:10,
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
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    for (var i = 0; i<3; i++) {
      context.beginPath();
      context.arc(balls[i].xCoor, balls[i].yCoor, balls[i].radius ,0,2*Math.PI);
      context.fillStyle = 'blue';
      context.fill();
      context.closePath();
      context.stroke();
    } 
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
