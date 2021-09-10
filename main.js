function Game(){

};
function Player(id, name, deck){
    this.id = id;
    this.name = name;
    this.deck = deck;
};
        let values = ['A', 'Q', '7', '9', '5', '6', '3', '8', '4', 'J', '10', '2', 'K'];
        let suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
        let cards = [];
        let deck = []
        let player1deck = [];
        let player2deck = []; 


function setMasterdeck(){
        for (let i = 0; i < suits.length; i++){
            for (let j = 0; j < values.length; j++){
            const suit = suits[i];
            const value = values[j];
            let card = new Card(value, suit)
            cards.push(card);
            }
            }
        }


function Deck(cardInventory){
        this.cards = cardInventory;
        this.cardCount =cardInventory.length; 
};

let deck1 = new Deck(player1deck);
console.log(deck1);
let deck2 = new Deck(player2deck);


function Card(value, suit){
    this.value = value;
    this.suit = suit;
};

console.log(deck1);
console.log(deck2);



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(cards);
console.log(cards);
console.log(cards.slice(26));


 player1deck = cards.slice(26);
 player2deck = cards.slice(0,26);
console.log(player1deck);
console.log(player2deck); 


let player1 = new Player(1, 'Isaac', player1deck);
let player2 = new Player(2, 'Caleb', player2deck);
console.log(player1);
console.log(player2);
