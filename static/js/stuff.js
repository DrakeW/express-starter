alert('SO MANY PROJECTS!!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  // WRITE CODE HERE
  alert("HELLO WORLLLD");
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  //WRITE CODE HERE
  $('#houdini_text').hide();

});

$('#reappear').click(function() {
  //WRITE CODE HERE
  $('#houdini_text').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
// WRITE CODE HERE
$('#call_me_pink').click(function() {
	$('#tickled_text').css('color','pink');
});


// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
$('#greet_me').click(function() {
	alert("Hey, " + $('#my_name').val());
});
