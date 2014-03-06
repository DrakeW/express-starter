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

  });

  $('#p2').click(function() {
  	context.strokeRect(100,10,30,30);
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

  $('#p6').click(function() {
  	context.strokeStyle = 'green';
  	context.strokeRect(250,300,60,80);
  })

  $('#p7').click(function() {
  	context.beginPath();
  	context.arc(150,200,46,0,2*Math.PI);
  	context.fillStyle = 'red';
  	context.fill();
  	context.closePath();
  	context.stroke();
  });

  $('#p8').click(function() {
  	context.strokeStyle = 'blue';
  	context.fillStyle = 'yellow';
  	context.strokeRect(100,10,30,30);
  	context.fillRect(100,10,30,30);
  });

  $('#p9').click(function() {
  	var x = 20;
  	var y = 20;
  	for (var i = 0; i < 5; i++) {
  		context.strokeStyle = 'blue';
  		context.fillStyle = 'yellow';
  		context.strokeRect(x,y,50,50);
  		context.fillRect(x,y,50,50);
  		x += 50;
  	}
  });

  $('#p10').click(function() {
  	var x = 0;
  	var y = 80;
  	for (var i = 0; i < 100; i++) {
  		context.strokeStyle = 'blue';
  		context.fillStyle = 'yellow';
  		context.strokeRect(x,y,5,5);
  		context.fillRect(x,y,5,5);
  		x += 5;
  	}
  });

  $('#p11').click(function() {
  	var x = 0;
  	var y = 0;
  	for (var i = 0; i < 10000; i++) {
  		context.strokeStyle = 'blue';
  		context.fillStyle = 'yellow';
  		context.strokeRect(x,y,5,5);
  		context.fillRect(x,y,5,5);
  		x += 5;
  		if (x > 495) {
  			x = 0;
  			y += 5;
  		}
  		console.log(""+x+", "+y+"i is"+i);		
  	}
  });

  $('#p12').click(function() {
  	var radius = 30;
  	for (var i = 0; i < 20; i++) {
  		context.beginPath();
  		context.arc(150,200,radius,0,2*Math.PI);
  		context.closePath();
  		context.stroke();
  		radius += 10;
  	}  	
  });
















});
