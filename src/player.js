const Pile = require('./pile.js');
/**
 * Player class
 */
module.exports = class Player {
    /**
     * constructor
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
        this.pile = new Pile();
    }

    /**
     * collect one card
     * @param {Card} card 
     */
    collectCard(card) {
        this.pile.addCard(card);
    }

    /**
     * collect a bunch of cards
     * @param {Cards[]} cards 
     */
    collectCards(cards){
        this.pile.addCards(cards);
    }

    /**
     * play card
     * @returns {Card} played card
     */
    playCard(){
        return this.pile.nextCard();
    }

    /**
     * card count in player's pile
     * @returns {number} card count
     */
    cardCount(){
        return this.pile.size();
    }
}