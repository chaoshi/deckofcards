const Player = require('../src/player.js');
const Card = require('../src/card.js');
const chai = require('chai'), expect = chai.expect;

describe('Player Class', () => {
  let player;
  beforeEach(function() {
    player = new Player('Joe');
  });

  describe('constructor()', function() {
    it('Should generate a player named Joe with empty pile', () => {
        expect(player.name).to.equal('Joe');
        expect(player.pile.cards).to.have.lengthOf(0);
    });
  });

  describe('collectCard()', function() {
    it('Should collect a card to the pile', () => {
        let card = new Card('Spades', 'A');
        player.collectCard(card);
        expect(player.pile.cards).to.have.lengthOf(1);
        expect(player.pile.cards[0]).to.eql({
            name: 'A of Spades',
            suit: 'Spades',
            value: 14
        });
    });
  });

  describe('collectCards()', function() {
    it('Should collect a bunch of cards to the pile', () => {
        let card1 = new Card('Spades', 'A');
        let card2 = new Card('Hearts', '2');
        player.collectCards([card1, card2]);
        expect(player.pile.cards).to.have.lengthOf(2);
        expect(player.pile.cards[0]).to.eql({
            name: 'A of Spades',
            suit: 'Spades',
            value: 14
        });
        expect(player.pile.cards[1]).to.eql({
            name: '2 of Hearts',
            suit: 'Hearts',
            value: 2
        });    
    });
  });

  describe('playCard()', function() {
    it('Should play no card when pile is empty', () => {
        expect( player.playCard()).to.be.a('null');
    });

    it('Should play a card from top of pile', () => {
        let card1 = new Card('Spades', 'A');
        let card2 = new Card('Hearts', '2');
        player.collectCards([card1, card2]);
        expect(player.playCard()).to.eql({
            name: 'A of Spades',
            suit: 'Spades',
            value: 14
        });
    });
  });

  describe('playCard()', function() {
    it('Should play no card when pile is empty', () => {
        expect( player.playCard()).to.be.a('null');
    });

    it('Should play a card from top of pile', () => {
        let card1 = new Card('Spades', 'A');
        let card2 = new Card('Hearts', '2');
        player.collectCards([card1, card2]);
        expect(player.playCard()).to.eql({
            name: 'A of Spades',
            suit: 'Spades',
            value: 14
        });
    });
  });

  describe('cardCount()', function() {
    it('Should return the size of pile', () => {
        expect(player.cardCount()).to.equal(0);
        let card = new Card('Spades', 'A');
        player.collectCard(card);
        expect(player.cardCount()).to.equal(1);
        let playedCard = player.playCard();
        expect(player.cardCount()).to.equal(0);
    });
  });
});