const Pile = require('../src/pile.js');
const Card = require('../src/card.js');
const chai = require('chai'), expect = chai.expect;

describe('Pile Class', () => {
  let pile;
  beforeEach(function() {
    pile = new Pile();
  });

  describe('constructor()', function() {
    it('Should generate an empty pile', () => {
        expect(pile.cards).to.have.lengthOf(0);
    });

    describe('addCard()', function() {
        it('Should add a card to the bottom of the pile', () => {
            let card = new Card('Spades', 'A');
            pile.addCard(card);
            expect(pile.cards[0]).to.eql({
                name: 'A of Spades',
                suit: 'Spades',
                value: 14
            });
        });
    });

    describe('addCards()', function() {
        it('Should add a bunch of cards to the bottom of the pile', () => {
            let card1 = new Card('Spades', 'A');
            let card2 = new Card('Hearts', '2');
            pile.addCards([card1, card2]);
            expect(pile.cards).to.have.lengthOf(2);
            expect(pile.cards[0]).to.eql({
                name: 'A of Spades',
                suit: 'Spades',
                value: 14
            });
            expect(pile.cards[1]).to.eql({
                name: '2 of Hearts',
                suit: 'Hearts',
                value: 2
            });
        });
    });

    describe('nextCard()', function() {
        it('Should play no card when there is no card in the pile', () => {
            expect(pile.nextCard()).to.be.a('null');
        });

        it('Should play a card from top of the pile', () => {
            let card = new Card('Spades', 'A');
            pile.addCard(card);
            expect(pile.nextCard()).to.eql({
                name: 'A of Spades',
                suit: 'Spades',
                value: 14
            });        
        });
    });

    describe('size()', function() {
        it('Should return the size of the pile', () => {
            expect(pile.size()).to.equal(0);
            let card = new Card('Spades', 'A');
            pile.addCard(card);
            expect(pile.size()).to.equal(1);
            pile.nextCard();
            expect(pile.size()).to.equal(0);
        });
    });
  });
});