$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //
  $('#p1').click(function() {
  	context.strokeRect(1,1,30,40);
  	context.strokeStyle = 'pink';
  });

  $('#p2').click(function() {
  	context.strokeRect(100,10,30,30);
  	context.strokeStyle = 'pink';
  });

  $('#p3').click(function() {
  	context.beginPath();
  	context.arc(200,300,80,0,Math.PI);
  	context.closePath();
  	context.stroke();
  });

  $('#p4').click(function() {
  	context.beginPath();
  	context.arc(300,400,80,0,2*Math.PI);
  	context.closePath();
  	context.stroke();
  });

  $('#p5').click(function() {
  	context.beginPath();
  	context.moveTo(100,50);
  	context.lineTo(200,400);
  	context.closePath();
  	context.stroke();
  });





});
