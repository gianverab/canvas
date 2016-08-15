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

		},100);
	}

	window.onload = initCanvas;

})();
