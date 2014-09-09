// All units in meters and seconds (or some combination of the two)
var x;
var y; 
var vx;
var vy;
var ax;
var ay;
var t=0;
var dt=0.1;
var started;

throwUp();//Default action is to throw it up

/*
Returns a string to be passed into the .css({left:"string_here"}) function 
Sets the x-coordinate of the ball
x=0 is considered to be 10 pixels away from the left of the screen (can change if necessary)
*/
function leftCoord(){
	return x + 10+"px";
}

/*
Returns a string to be passed into .css({top:"string_here"})  
Sets the y-coordinate of the ball
x=0 is considered to be 485 pixels away from the top of the screen (can change if necessary)
*/
function topCoord(){
	return 485-y+"px";
}

//sets the ball's location to the position defined by x and y
function moveBall(){
		$('.ball').css({
		left:leftCoord(),
		top :topCoord(),
		});
		$('.ballx').css({left:leftCoord()});
		$('.bally').css({top : topCoord()});
}

//prints all the initial values of the variables into the table
function printInitials(){

	$('#x0').html(x.toFixed(2)+' m');
	$('#y0').html(y.toFixed(2)+' m');
	$('#vx0').html(vx.toFixed(2)+' m/s');
	$('#vy0').html(vy.toFixed(2)+' m/s');
}

//prints all of the final/current values of the vairables in the table
function printFinals(){

	$('#xf').html(x.toFixed(2)+' m');
	$('#yf').html(y.toFixed(2)+' m');
	$('#vxf').html(vx.toFixed(2)+' m/s');
	$('#vyf').html(vy.toFixed(2)+' m/s');
	$('#time').html(t.toFixed(3)+' m/s');
}

//Running this function once moves time forward by an amount of dt
//The position of the ball moves in the appropriate direction 
//The velocity of the ball changes wrt the appropriate accelerations
function move(){
		x += vx*dt;
		y += vy*dt; 

		moveBall();
		printFinals();
		vx+=ax*dt;
		vy+=ay*dt;
		t+=dt;	
}

//sets the initial conditions to throw the ball upwards from the ground
function throwUp(){
	x=0;
	y=0; 
	vx = 40;
	vy = 70;
	ax = 0;
	ay = -9.8;
	t=0;

	moveBall();
	printInitials();
}

//sets the initial conditions to throw the ball horizontally from above the ground
function throwSide(){
	x=0;
	y=200; 
	vx = 80;
	vy = 0;
	ax = 0;
	ay = -9.8;
	t=0;

	moveBall();
	printInitials();
}

//begins moving the ball
function start(){
	started = setInterval(function(){move()},10);
}

//stops the ball from moving
function stop(){
	window.clearInterval(started)
}