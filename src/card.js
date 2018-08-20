/**
 * Card class
 */
module.exports = class Card {
    /**
     * constructor
     * @param {string} suit 
     * @param {string} symbol 
     */
    constructor(suit, symbol) {
        this.name = symbol + ' of ' + suit;
        this.suit = suit;

        if(symbol === 'J'){
            this.value = 11;
        }
        else if(symbol === 'Q'){
            this.value = 12;
        }
        else if(symbol === 'K'){
            this.value = 13;
        }
        else if(symbol === 'A'){
            this.value = 14;
        }
        else{
            this.value = parseInt(symbol, 10)
        }
    }

    /**
     * 
     * @param {Card} other 
     * @returns {number} difference in value
     */
    compare(other){
        return this.value - other.value;
    }
}