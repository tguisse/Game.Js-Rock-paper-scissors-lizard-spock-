var Player = function(a) {
	this.name = a;
	this.hand = "";
	this.wins = 0;
	this.losses = 0;
	this.played = 0;
	this.rate = 0;
	this.win = function() {
		this.wins++;
		this.played++;
		this.rate = (this.wins/this.played).toFixed(2);
	};
	this.lose = function() {
		this.losses++;
		this.played++;
		this.rate = (this.wins/this.played).toFixed(2);
	}
	
}




var Game = function() {
	this.running = false;
	this.name = "";
	this.players = [];
	this.matrix = {
		'rock': {'scissors':true, 'lizard':true},
		'scissors': {'lizard':true ,'paper':true},
		'paper': {'rock':true, 'spock':true},
		'lizard': {'spock':true, 'paper':true},
		'spock': {'scissors':true, 'rock':true}
	};
	this.addPlayer = function (p_name){
		var p = new Player(p_name);
		this.players.push(p);
		return p_name;
	};
	this.getPlayer = function (number) {
		return this.players[number-1];
	};
	this.setHand = function(p_number,p_hand) {
		this.players[p_number-1].hand = p_hand;
	};
	
	this.getWinner = function(){
		var p1 = this.players[0];
		var p2 = this.players[1];
		var p1h = p1.hand;
		var p2h = p2.hand;
		
		if (p1.hand===p2.hand) {
			p1.played++;
			p1.rate = (p1.wins/p1.played).toFixed(2);
			p2.played++;
			p2.rate = (p2.wins/p2.played).toFixed(2);
			return false;
		} else if(p2h in this.matrix[p1h]){
			p1.win();
			p2.lose();
			return 1;
		} else {
			p2.win();
			p1.lose();
			return 2;
		}		
	}
	
}



