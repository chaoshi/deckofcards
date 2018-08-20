const Card = require('./card.js');

const symbols = ['2', '3','4','5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
const Util = {
	/**
	 * get a random number between min and max
	 * @param {number} min 
	 * @param {number} max 
	 * @returns {number}
	 */
	getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

/**
 * Deck class
 */
module.exports = class Deck {

	/**
	 * constructor
	 */
	constructor() {
		this.cards = [];
		this.fill();;
	}

	/**
	 * fill the deck
	 */
	fill () {
		for ( let s = 0; s < suits.length; s++ ) {
			for ( let v = 0; v < symbols.length; v++ ) {
				this.cards.push(new Card(suits[s], symbols[v]));
			}
		}
	}

	/**
	 * shuffle number of cards
	 * @param {number} numOfCards 
	 */
	shuffle (numOfCards = 52) {
        for(let i = 0; i < numOfCards-1; i++) {
            let randomInt = Util.getRandomInt(1, numOfCards-1), card = this.cards[i];
            this.cards[i] = this.cards[randomInt];
            this.cards[randomInt] = card;
        }
	}

	/**
	 * deal a card
	 * @returns {Card} dealt card
	 */
	deal () {
		let dealtCard = null;
		if(this.cards.length>0){
			dealtCard = this.cards.shift();
		}
		return dealtCard;
    }
}