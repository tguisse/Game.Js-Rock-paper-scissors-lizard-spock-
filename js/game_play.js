// Initialize the game

var game = new Game();


// Create function that will "roll" the users. Using a loop will make it easier.
var roll = function(){
	for(var a = 1;a<3;a++){
		var hn = Math.floor(Math.random() * 5);
		var hnd = "";
		if (hn === 1){
			hnd =  "rock";
		} else if (hn === 2){
			hnd = "scissors";
		} else if (hn === 3){
			hnd = "paper";
		} else if (hn === 4){
			hnd = "spock";
		} else {
			hnd = "lizard";			
		};
		$('#player'+a+'Choice').removeClass();
		$('#player'+a+'Choice').addClass(hnd);
	};
	
};

// Fade in the body of the document using jQuery effects
$('#mainBody').slideDown(2000);

// Set the name of the game
$('#gameName').html('Tidiani Guisse');

// Bind to the button in the middle of the screen so that it plays the game when clicked
$('#gameController').click(function(){
	// Add 2 new players if there are none already. Use a loop to make it easy.
	if(game.players.length < 1){
		for(var q = 1; q<3; q++){
			do {
				var a = prompt('Please enter the Players names ' );
			} while (!a || a.length<3);
			game.addPlayer(a);
			$('#player' + q +'Name').html(a);
		}
	}
	
	// Start rolling. Use the "setInterval" function to accomplish this.
	var r = setInterval(function(){ roll(); }, 250);
	$('#gameController').prop('disabled', true);
	
	
	// Set the "game status" and "game controller" text to "rolling" and 'vs"
	$('#gameController').html('vs');
	$('#gameStatus').html('rolling...');
	
	
	
	// Set a countdown timer for 3 seconds to run this code. Use the "setTimeout" function to do this.
	setTimeout(function(){ 
		
		// Stop the roll. Use "clearInterval" to do it.
		clearInterval(r);
		$('#gameController').prop('disabled', false);
		
		
		// Set the hand of each player and find out who won. Look at the "class" attribute of each player's hand to get the needed value.
		game.players[0].hand = $('#player1Choice').attr('class');
		game.players[1].hand = $('#player2Choice').attr('class');
		
		// Set the "game status" and "game controller" to "Player X Won!" and "Play Again".
		var w = game.getWinner();
		if(w === false){
			$('#gameStatus').html("It's a tie!");
		} else {
			$('#gameStatus').html(game.players[(w)-1].name + ' Won!');
		}
		$('#gameController').html('Play Again');
		
		// Update the "wins, losses, and rate" numbers on the screen. The "player" objects will have this information. Do it in a loop.
		var p1 = game.players[0];
		var p2 = game.players[1];
		$('#player1Wins').html(p1.wins);
		$('#player1Losses').html(p1.losses);
		$('#player1WinRate').html(p1.rate);
		$('#player2Wins').html(p2.wins);
		$('#player2Losses').html(p2.losses);
		$('#player2WinRate').html(p2.rate);
	
	}, 3000);	
		
});
		
		
		

		
		
	
	
	