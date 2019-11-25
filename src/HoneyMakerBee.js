var HoneyMakerBee = function() {
	Grub.call(this);
	this.age = 10;
	this.job = 'make honey';
	this.color = 'yellow';
	this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
	if(this.honeyPot) {
		this.honeyPot--;
	}
}