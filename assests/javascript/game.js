var wins = 0;
var loses = 0;
var addNumber = 0;
var yellow = Math.floor((Math.random() * 9) + 1);
var red = Math.floor((Math.random() * 9) + 1);
var blue = Math.floor((Math.random() * 9) + 1);
var green = Math.floor((Math.random() * 9) + 1);
var number = Math.floor((Math.random() * 40) + 20);
var win = ["YOU WIN!!!! Press any button to play again!"]
var lose = ["To bad. Press any button to try again!"]


//run game
function game(x){

	addNumber += x;

	if(addNumber === number){
		wins++
		update();
		restart();
		$(".winMessage").append(win);
	}
	else if(addNumber > number){
		loses++
		update();
		restart();
		$(".loseMessage").append(lose)
	}
	else{
		update();
	}
};

	function update(){
		$(".addNum").empty();
		$(".addNum").append(addNumber);
		$(".total").empty();
		$(".total").append(number);
		$(".winsNum").empty();
		$(".winsNum").append(wins);
		$(".losesNum").empty();
		$(".losesNum").append(loses);
		$(".loseMessage").empty();
		$(".winMessage").empty();
	};

	function restart(){
		addNumber = 0;
		yellow = Math.floor((Math.random() * 9) + 1);
		red = Math.floor((Math.random() * 9) + 1)
		blue = Math.floor((Math.random() * 9) + 1)
		green = Math.floor((Math.random() * 9) + 1)
		number = Math.floor((Math.random() * 40) + 20)
	};

		$(".total").append(number);
		$(".addNum").append(addNumber);
		$(".winsNum").append(wins);
		$(".losesNum").append(loses);


	$(document).ready(function(){

		$("#yellowbtn").on("click", function() {
			game(yellow);
		});

		$("#redbtn").on("click", function() {
			game(red);
		});

		$("#bluebtn").on("click", function() {
			game(blue);
		});

		$("#greenbtn").on("click", function() {
			game(green);
		});
	});