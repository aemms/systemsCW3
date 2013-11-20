(function ($) {

	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var upKey = false;
	var downKey = false;
	var leftKey = false;
	var rightKey = false;
	var dy = 5;
	var dx = 5;
	var x = 400;
	var y = 200;
	var WIDTH = 800;
	var HEIGHT = 600;

	function makeTriangle(x, y) {
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x + 10, y + 20);
		ctx.lineTo(x - 10, y + 20);
		ctx.closePath();
		ctx.fill();
	}

	function clearCanvas() {
		ctx.clearRect(0, 0, WIDTH, HEIGHT);
	}

	function loop() {
		clearCanvas();
		draw();
	}

	function draw() {
		if(rightKey){
			x += 2;
		} else if(leftKey){
			x -= 2;
		} else if(upKey) {
			y -= 2;
		} else if(downKey) {
			y += 2;
		}
	  ctx.fillStyle = "#ff0000";
	  makeTriangle(x , y);
	}

	function isKeyDown(event) {
		switch (event.keyCode) {
			
			case 38: //Up arrow
				upKey = true;
				break;

			case 40: //Down
				downKey = true;
				break;

			case 37: //left
				leftKey = true;
				break;

			case 39: //right
				rightKey = true;
				break;
		}
	}

	function isKeyUp(event) {
		switch(event.keyCode){
			case 38: //up
				upKey = false;
			break;

			case 40://down
				downKey = false;
			break;

			case 37://left
				leftKey = false;
			break;

			case 39://right
				rightKey = false;
			break;
		}
	}

	function init() {
		window.addEventListener('keydown',isKeyDown,true);
		window.addEventListener('keyup',isKeyUp,true);
		setInterval(loop, 1);
	}

	init();

})(jQuery);