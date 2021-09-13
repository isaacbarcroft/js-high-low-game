let values = ['14A', '12Q', '7', '9', '5', '6', '3', '8', '4', '11J', '10', '2', '13K'];
let suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
let cards = [];
let deck = []
let deck1 = [];
let deck2 = []; 
let draw = document.querySelector('.draw');
let newGame = document.querySelector('.new_game');


function setUpMasterDeck () {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            const suit = suits[i];
            const value = values[j];
            cards.push(new Card(value, suit))
        }
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function Game(){
    
   
setUpMasterDeck()
shuffleArray(cards);


    deck1 = cards.slice(26);
    deck2 = cards.slice(0,26);
   

    let player1deck = new Deck(deck1);
    let player2deck = new Deck(deck2);

    let player1 = new Player(1, 'Isaac', player1deck);
    let player2 = new Player(2, 'Caleb', player2deck);
   
    //draw action
    //array[index]
    let topCard1 = player1.deck.cards[0]
    let topCard2 = player2.deck.cards[0]


    
    if(parseInt(topCard1.value) > parseInt(topCard2.value)) {
        player1deck.cards.shift()
        player1deck.cards.push(topCard1, topCard2)
        player2deck.cards.shift()
        

    } else if(parseInt(topCard2.value) > parseInt(topCard1.value)) {
        player2deck.cards.shift()
        player2deck.cards.push(topCard1, topCard2)

    } else if(parseInt(topCard1.value) === parseInt(topCard2.value)){
        // get first 3 cards
        let loserDeck;
        let p1FourthCard = player1deck.cards[3]
        let p2FourthCard = player2deck.cards[3]
        
        
        if(parseInt(p1FourthCard.value) > parseInt(p2FourthCard.value)) {
            loserDeck = player2deck.cards;
        } else if (parseInt(p2FourthCard.value) > parseInt(p1FourthCard.value)) {
            loserDeck = player1deck.cards;
        
    }
        // play the 4th card
        //same logic as above
        let threeCards = loserDeck.splice(0, 3)
        console.log({threeCards})
    }
};
function Player(id, name, deck){
    this.id = id;
    this.name = name;
    this.deck = deck;
};

function Deck(cardInventory){
    this.cards = cardInventory;
    this.cardCount = cardInventory.length;
};

function Card(value, suit){
    this.value = value;
    this.suit = suit;
};

// console.log(cards);
// console.log(cards.slice(26));

draw.addEventListener('click', function(){
Game();
})
newGame.addEventListener('click', function(){
    Game();
})

Game()