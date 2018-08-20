const Card = require('../src/card.js');
const chai = require('chai'), expect = chai.expect;

describe('Card Class', () => {
  let card;
  beforeEach(function() {
    card = new Card();
  });

  describe('constructor()', function() {
    it('Should generate a Ace of Spades', () => {
      let card = new Card('Spades', 'A');
      expect(card).to.eql({
          name: 'A of Spades',
          suit: 'Spades',
          value: 14
      });
    });

    describe('compare()', function() {
        it('Should compare two cards', () => {
            let card1 = new Card('Spades', 'A');
            let card2 = new Card('Diamonds', 'A');
            let card3 = new Card('Hearts', '2');
            expect(card1.compare(card2)).to.equal(0);
            expect(card1.compare(card3)).to.equal(12);
        });
    });
  });
});