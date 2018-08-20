/**
 * Pile class
 */
module.exports = class Pile {
    /**
     * constructor
     */
    constructor() {
        this.cards = [];
    }

    /**
     * add one card to the pile
     * @param {Card} card 
     */
    addCard(card){
        this.cards.push(card);
    }

    /**
     * add a bunch of cards to the pile
     * @param {Cards[]} cards 
     */
    addCards(cards){
        this.cards = this.cards.concat(cards);
    }

    /**
     * play next card
     * @returns {Card} next played card
     */
    nextCard(){
        let cards = this.cards, length = cards.length;
        let playedCard = null;
        if(length>0){
            playedCard = cards.shift();
        }
        return playedCard;
    }

    /**
     * card size in the pile
     * @returns {number} card size
     */
    size(){
        return this.cards.length;
    }
}