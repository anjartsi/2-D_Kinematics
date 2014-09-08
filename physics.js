var dt = 10//millisecond value of time increment
var x ;
var y ;
var vx;
var vy;
var ax;
var ay;
var t;

$(document).ready(function(){
	x_o = $('#pos_x').val();
	y_o = $('#pos_y').val();
	vx_o = $('#vel_x').val();
	vy_o = $('#vel_y').val();
	ax_o = $('#acc_x').val();
	ay_o = $('#acc_y').val();	
	t_o = $('#time').val();

})
	
function startOver(){

	 $('.ball').css({
		top: 485+'px',
		left: 10 +'px'
	});
	$('.ballx').css({
		top: 485+'px',
		left: 10 +'px'
	});
	$('.bally').css({
		top:  485+'px',
		left: 10 +'px'
	});
}

function getReady(){
	x = parseInt($('#pos_x').val());
	y = parseInt($('#pos_y').val());
	vx =parseInt( $('#vel_x').val());
	vy =parseInt( $('#vel_y').val());
	ax =parseInt( $('#acc_x').val());
	ay =parseInt( $('#acc_y').val());	
	t = parseInt($('#time').val())	;
	$('.ball').css({
		top: "+=" + y +'px',
		left:"+=" + x + 'px'
	});
	$('.ballx').css({
		top: "+=" + y +'px',
		left:"+=" + x + 'px'

	});
	$('.bally').css({
		top: "+=" + y +'px',
		left:"+=" + x + 'px'
	});

}


function start(){
	getReady();
	var totalTime = t*100
	for(i=0;i<totalTime;i++){
		x+= vx*dt/1000;
		y+= vy*dt/1000;
		$('.ball').animate({
			left:'+='+ x ,
			top :'-='+ y },
			dt, function() {
		});
		$('.ballx').animate({
			left:'+='+ x },
			dt, function() {
		});
		$('.bally').animate({
			top :'-='+ y },
			dt, function() {
		});
		vx+=ax*dt/1000;
		vy+=ay*dt/1000;
		
		// if(y<0){
		// 	t=i/100;
		// 	i=totalTime
		// };

	}//for loop

	setTimeout(answers(),totalTime);
}//function doIt()

function answers(){
	$('#apos_x').html(x.toFixed(2) + " m")  ;		
	$('#apos_y').html(y.toFixed(2) + " m")  ;		
	$('#avel_x').html(vx.toFixed(2) + " m/s")  ;		
	$('#avel_y').html(vy.toFixed(2) + " m/s")  ;		
	$('#aacc_x').html(ax.toFixed(2) + " m/s<sup>2</sup>")  ;		
	$('#aacc_y').html(ay.toFixed(2) + " m/s<sup>2</sup>")  ;	
	$('#at').html(t.toFixed(2) + " s")  ;		
}
