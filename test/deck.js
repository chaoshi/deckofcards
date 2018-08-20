const Deck = require('../src/deck.js');
const chai = require('chai'), expect = chai.expect;

describe('Deck Class', () => {
  let deck;
  beforeEach(function() {
    deck = new Deck();
  });

  describe('constructor()', function() {
    it('Should generate a deck', () => {
      expect(deck.cards).to.have.lengthOf(52);
    });
  });

  describe('fill()', function() {
    it('Should fill a deck', () => {
      expect(deck.cards).to.have.lengthOf(52);
    });
  });

  describe('shuffle()', function() {
    it('Should shuffle a deck', () => {
      let newDeck = new Deck();
      expect(deck.cards).to.eql(newDeck.cards);
      deck.shuffle();
      expect(deck.cards).to.not.eql(newDeck.cards);
    });
  });

  describe('deal()', function() {
    it('Should deal a card', () => {
      deck.shuffle();
      let firstCard = deck.cards[0];
      let card = deck.deal();
      expect(deck.cards).to.have.lengthOf(51);
      expect(card).to.eql(firstCard);
    });
  });
});