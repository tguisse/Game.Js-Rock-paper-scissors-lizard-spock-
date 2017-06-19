ar Player = function(a) {
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