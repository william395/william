$(document).ready(function(){
	var circle = function(cx,cy,r,context){
	context.moveTo(cx+r,cy);
	context.arc(cx,cy,r,0,Math.PI*2.0,0);
	};
	var canvas1=document.getElementById('circle1');
	var context1 = canvas1.getContext('2d');	

	var canvas2=document.getElementById('circle2');
	var context2 = canvas2.getContext('2d');

	context1.shadowOffsetX = 9.0;
	context1.shadowOffsetY = 9.0;
	context1.shadowColor = "rgba(50%,50%,50%,0.75)";
	context1.shadowBlur = 6.0;
	context1.beginPath();
	context1.fillStyle = "yellow";
	circle(60,60,60,context1);
	context1.fill();	
	context1.closePath();

	context2.shadowOffsetX = 9.0;
	context2.shadowOffsetY = 9.0;
	context2.shadowColor = "rgba(50%,50%,50%,0.75)";
	context2.shadowBlur = 6.0;
	context2.beginPath();
	context2.fillStyle = "red";
	circle(60,60,60,context2);
	context2.fill();
});

