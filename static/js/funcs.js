$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    // Write square drawing code here
    context.strokeStyle = color;
    context.strokeRect(x,y,sideLen,sideLen);
    // Delete the alerts when done
  };

  var drawCircle = function(x, y, radius, color) {
    // Write circle drawing code here
    context.beginPath();
    context.arc(x,y,radius,0,2*Math.PI);
    context.strokeStyle = color;
    context.closePath();
    context.stroke();
    // Delete the alerct when done
  };

  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //
  $('#p5').click(function() {
    drawCircle(250,350,50,'blue');
    drawSquare(200,300,100,'red');
    drawCircle(300,350,50,'green');
    drawCircle(200,350,50,'green');
    drawCircle(250,400,50,'green');
    drawCircle(250,300,50,'green');
  })


});
