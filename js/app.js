(function(){
	var box;
	var ctx;

	function initCanvas(){
		box = document.getElementById('myCanvas');
		ctx = box.getContext('2d');
		initDraw();
	}
	function initDraw(){
		var posX = 0;
		var posY = 0;
		setInterval(function(){
			posX += 1;
			posY += 1;

			ctx.fillStyle = '#1a1a1b';
			ctx.fillRect(0,0,box.width,box.height);

			ctx.fillStyle = '#fff';
			ctx.beginPath();
			ctx.arc(posX,120,18,0,Math.PI*2);
			ctx.fill();

			ctx.fillStyle = '#f22cb3';
			ctx.beginPath();
			ctx.arc(90,(posY-20),24,0,Math.PI*2);
			ctx.fill();

			ctx.fillStyle = '#f27b2c';
			ctx.beginPath();
			ctx.arc(210,(posY+60),12,0,Math.PI*2);
			ctx.fill();
		},20);
	}

	window.onload = initCanvas;

})();
