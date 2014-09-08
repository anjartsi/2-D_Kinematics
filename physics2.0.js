// All units in meters and seconds
var x=0;
var y=0; 
var vx = 4;
var vy = 10;
var ax = 0;
var ay = -9.8;
var t=0;
var dt=0.01;
var x0= $('.ball').css('left');
var y0= $('.ball').css('top');
console.log(x0,y0);

function start(){
	for(i=0; i<300;i++){
		x += vx*dt;
		y += vy*dt;
		$('.ball').animate({
			left: "+="+ x*0.5,
			top: "+=" + (-1)*y*0.5},
			dt,"linear"	
		);
		$('.ballx').animate({
			left: "+="+ x*0.5},
			dt,"linear"	
		);
		$('.bally').animate({
	
			top: "+=" + (-1)*y*0.5},
			dt,"linear"	
		);

		vx+=ax*dt;
		vy+=ay*dt;
	}//for loop
	$('#xf').html(x.toPrecision(2)+' m');
	$('#yf').html(y.toPrecision(2)+' m');
	$('#vxf').html(vx.toPrecision(2)+' m');
	$('#vyf').html(vy.toPrecision(2)+' m');
}

function resett(){
	x=0;
	y=0; 
	vx = 4;
	vy = 10;
	ax = 0;
	ay = -9.8;
	t=0;
	dt=0.01;
	$('.ball').css({
		left:'10px',
		top:  '485px'
	});
	$('.ballx').css({left:'10px'});
	$('.bally').css({top:  '485px'});	
}

