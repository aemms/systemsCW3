(function ($) {

	var canvas;
	var ctx;
	var dy = 5;
	var dx = 5;
	var x = 400;
	var y = 200;
	var WIDTH = 800;
	var HEIGHT = 600;

	function init() {
		canvas = document.getElementById("myCanvas");
		ctx = canvas.getContext("2d");
		return setInterval(draw, 10);
	}

	function triangle(x, y) {
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x + 10, y + 20);
		ctx.lineTo(x - 10, y + 20);
		ctx.closePath();
		ctx.fill();
	}

	function clear() {
		ctx.clearRect(0, 0, WIDTH, HEIGHT);
	}

	function draw() {
		clear();
		ctx.fillStyle = "#00ff00";
		ctx.strokeStyle = "#ffffff";
	  rect(0,0,WIDTH,HEIGHT);
	  ctx.fillStyle = "#ff0000";
	  triangle(x, y);
	}

	function rect(x,y,WIDTH,HEIGHT) {
	  ctx.beginPath();
	  ctx.rect(x,y,WIDTH,HEIGHT);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	}

	function doKeyDown(event) {
		switch (event.keyCode) {
			
			case 38: //Up arrow
				if(y - dy > 0) {
					y -= dy;
				}
				break;

			case 40: //Down
				if(y + dy < HEIGHT) {
					y += dy;
				}
				break;

			case 37: //left
				if(x - dx > 0){
					x -= dx;
				}
				break;

			case 39: //right
				if(x + dx < WIDTH) {
					x += dx;
				}
				break;
		}
	}

	init();
	window.addEventListener('keydown',doKeyDown,true);
		
		// var canvas = document.getElementById("myCanvas");
		// ctx = canvas.getContext("2d");
		// ctx.fillStyle="#000000";
		// ctx.beginPath();
		// ctx.moveTo(200, 100);
		// ctx.lineTo(220, 120);
		// ctx.lineTo(180, 120);
		// ctx.closePath();
		// ctx.fill();

})(jQuery);