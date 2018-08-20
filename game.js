const Deck = require('./src/deck.js');
const Player = require('./src/player.js');

console.log('create deck...');
let deck = new Deck();
console.log('player 1 Tom...');
let p1 = new Player('Tom');
console.log('player 2 Jerry...');
let p2 = new Player('Jerry');

console.log('deck is shuffled...');
deck.shuffle();

console.log('deck is dealt...');
while(deck.cards.length>=2){
    p1.collectCard(deck.deal());
    p2.collectCard(deck.deal());
}

console.log(p1.pile);
console.log(p2.pile);

while(p1.cardCount()>0 && p2.cardCount()>0){
    let c1 = p1.playCard(), c2 = p2.playCard(), compare = c1.compare(c2);
    console.log(c1);
    console.log(c2);

    if(compare>0){
        console.log(`${p1.name} wins this hand`);
        p1.collectCards([c1, c2]);
    }
    else if (compare === 0){
        console.log('War');
    }
    else{
        console.log(`${p2.name} wins this hand`);
        p2.collectCards([c2, c1]);
    }
}

console.log(`${p1.name}'s pile`);
console.log(p1.pile);
console.log(`${p2.name}'s pile`);
console.log(p2.pile);

if(p1.cardCount() === 0){
    console.log(`${p2.name} WINS!`);
}
else{
    console.log(`${p1.name} WINS!`);
}