$(document).ready(function(){
	//Variables
	var canvas = $('#myCanvas')[0];
	var ctx = canvas.getContext('2d');
	var w = $('#myCanvas').width();
	var h = $('#myCanvas').height();
	var cw = 8;
	var d = 'right';
	var food;
	var score;
	var color = 'green';
	var speed = 100;

	var snake_array;

	//Game Initializer
	function init(){
		d = "right";
		createSnake();
		createFood();
		score = 0;

		if(typeof game_loop != 'undefined') clearInterval(game_loop);
		game_loop = setInterval(paint,speed);
	}
	init();

	//Create Snake
	function createSnake () {
		var length = 5;
		snake_array = [];
		for (var i=length-1; i>=0; i--) {
			snake_array.push({x: i, y: 0});
		};
	}

	//Create Food
	function createFood() {
		food = {
			x: Math.round(Math.random()*(w-cw)/cw),
			y: Math.round(Math.random()*(h-cw)/cw),
		};
	}

	//Paint Snake
	function paint(){
		//Paint The Canvas
		ctx.fillStyle = 'black';
		ctx.fillRect(0,0,w,h);
		ctx.strokeStyle = 'white';
		ctx.strokeRect(0,0,w,h);

		var nx = snake_array[0].x;
		var ny = snake_array[0].y;

		if(d == 'right') nx++;
		else if(d == 'left') nx--;
		else if(d == 'up') ny--;
		else if(d == 'down') ny--;

		if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || checkCollision(nx,ny,snake_array)){
			init();

			return;
		}
		if(nx == food.x && ny == food.y){
			var tail = {x: nx, y: ny};
			score++;

			createFood();
		}else{
			var tail = snake_array.pop();
			tail.x = nx; tail.y = ny;
		}
		snake_array.unshift(tail);

		for(var i=0; i<snake_array.length; i++){
			var c = snake_array[i];
			paintCell(c.x,c.y);
		}

		paintCell(food.x,food.y);

		//checkScore(score);
	}

	//Paint cw
	function paintCell(x,y){
		ctx.fillStyle = color;
		ctx.fillRect(x*cw,y*cw,cw,cw);
		ctx.strokeStyle = 'white';
		ctx.strokeRect(x*cw,y*cw,cw,cw);
	}

	//Check Collissions
	function checkCollision(x,y,array){
		for(var i=0; i<array.length; i++){
			if(array[i.x == x && array[i].y == y])
				return true;
		}
		return false;
	}

});




