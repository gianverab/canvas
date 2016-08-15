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

			ctx.clearRect(0,0,box.width,box.height);
			ctx.fillStyle = 'green';
			ctx.fillRect(posX,0,60,50);
		},50);
	}

	window.onload = initCanvas;

})();
