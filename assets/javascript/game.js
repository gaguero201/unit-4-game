$(document).ready(function() {


	var wins = 0;
	var losses = 0;
	
	$("#winCount").html(wins);
	$("#lossCount").html(losses);


	initialUserScore = 0;
	$("#userScore").html(initialUserScore);

	
	var targetNumChooser = function () {
		return Math.floor(Math.random()*(120-19+1)+19);
	};


	var targetNum = targetNumChooser();

	$("#targetNum").html(targetNum);

	
	var crystalNum1= 10;
	var crystalNum2 = 5;
	var crystalNum3 = 8;
	var crystalNum4 = 1;

	
	$("#crystal1").on("click", function() {

		
		initialUserScore += crystalNum1;
		$("#userScore").html(initialUserScore);

	
		if (initialUserScore === targetNum) {
			
			initialUserScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNum = targetNumChooser();
			$("#targetNum").html(targetNum);
			alert("YOU WIN, congratulations!!");
		}

	
		if (initialUserScore > targetNum) {
			initialUserScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNum = targetNumChooser();
			$("#targetNum").html(targetNum);
			alert("YOU LOSE, try again!");
		}

	});

	

	$("#crystal2").on("click", function() {

		initialUserScore += crystalNum2;
		$("#userScore").html(initialUserScore);

		if (initialUserScore === targetNum) {
			initialUserScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNum = targetNumChooser();
			$("#targetNum").html(targetNum);
			alert("YOU WIN, congratulations!!");
		}

		if (initialUserScore > targetNum) {
			initialUserScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNum = targetNumChooser();
			$("#targetNum").html(targetNum);
			alert("YOU LOSE, try again!");
		}

	});

	$("#crystal3").on("click", function() {

		initialUserScore += crystalNum3;
		$("#userScore").html(initialUserScore);

		if (initialUserScore === targetNum) {
			initialUserScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNum = targetNumChooser();
			$("#targetNum").html(targetNum);
			alert("YOU WIN, congratulations!!");
		}

		if (initialUserScore > targetNum) {
			initialUserScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNum = targetNumChooser();
			$("#targetNum").html(targetNum);
			alert("YOU LOSE, try again!");
		}

	});

	$("#crystal4").on("click", function() {

		initialUserScore += crystalNum4;
		$("#userScore").html(initialUserScore);

		if (initialUserScore === targetNum) {
			initialUserScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNum = targetNumChooser();
			$("#targetNum").html(targetNum);
			alert("YOU WIN, congratulations!!");
		}
		
		if (initialUserScore > targetNum) {
			initialUserScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNum = targetNumChooser();
			$("#targetNum").html(targetNum);
			alert("YOU LOSE, try again!");
		}

		});

	});
