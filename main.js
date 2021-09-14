let values = ['14', '12', '7', '9', '5', '6', '3', '8', '4', '11', '10', '2', '13'];
let suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
let cards = [];
let deck = [];
let deck1 = [];
let deck2 = []; 
let player1name = "";
let player2name = "";

setUpMasterDeck();

let player1deck = new Deck(deck1);
let player2deck = new Deck(deck2);

let player1 = new Player({name: player1name, cardCount: player1deck.cards.length, deck: player1deck});
let player2 = new Player({name: player2name, cardCount: player2deck.cards.length, deck: player2deck});

// DOM

let draw = document.querySelector('.draw');
let newGame = document.querySelector('.new_game');
let player1names = document.querySelector('.player1');
let player2names = document.querySelector('.player2');

/// Constructors 

function Player({cardCount = 0, name = `Player`, deck}){
    this.cardCount = cardCount;
    this.name = name;
    this.deck = deck;
};

function Deck(cards){
    this.cards = cards;
};


function Card(value, suit){
    this.value = value;
    this.suit = suit;
};

function Game(){

    this.player1 = new Player({name: player1name, cardCount: player1deck.cards.length, deck: player1deck});
    this.player2 = new Player({name: player2name, cardCount: player2deck.cards.length, deck: player2deck});
    
};

console.log(deck1);
console.log(deck2);



function setUpMasterDeck() {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            const suit = suits[i];
            const value = values[j];
            deck.push({value, suit});
            deck = shuffleArray(deck)
            deck1 = deck.slice(26);
            deck2 = deck.slice(0,26);
        }
    }
}

function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
   
    

//draw action
  


function drawCard(){

         
    let topCard1 = player1.deck.cards[0];
    let topCard2 = player2.deck.cards[0];
    console.log(topCard1);
    console.log(topCard2);
    if(parseInt(topCard1.value) > parseInt(topCard2.value)) {
        player1.deck.cards.shift()
        player1.deck.cards.push(topCard1, topCard2)
        player2.deck.cards.shift()
        // update card count inside if statement
        console.log('Player 1 wins')

    } else if(parseInt(topCard2.value) > parseInt(topCard1.value)) {
        player2.deck.cards.shift()
        player2.deck.cards.push(topCard1, topCard2)
        player1.deck.cards.shift()
        console.log('Player 2 wins')

    } else if(parseInt(topCard1.value) === parseInt(topCard2.value)){
        // get first 3 cards
        let p1FourthCard = player1.deck.cards[3]
        let p2FourthCard = player2.deck.cards[3]
        
        console.log({p1FourthCard})
        console.log({p2FourthCard})
        
        if(parseInt(p1FourthCard.value) > parseInt(p2FourthCard.value)) {
            player1.deck.cards.shift()
            player1.deck.cards.push(topCard1, topCard2, p1FourthCard, p2FourthCard)
            player2.deck.cards.shift()
            const winningCards = player2.deck.cards.slice(1,3);
            console.log({winningCards})
            player1.deck.cards.push(...winningCards)
            console.log({player1})
            console.log('player 1 wins the war')
        } else if (parseInt(p2FourthCard.value) > parseInt(p1FourthCard.value)) {
            player2.deck.cards.shift()
            player2.deck.cards.push(topCard1, topCard2, p1FourthCard, p2FourthCard)
            player2.deck.cards.shift()
            const winningCards = player1.deck.cards.slice(1,3);
            console.log({winningCards})
            console.log({player2})
            player2.deck.cards.push(...winningCards)
            console.log({player2})
            console.log('player2 wins the war')
        }
    }
}

// winning if statement
// card count -- why that's not working
// if card count == 0 end game

draw.addEventListener('click', function(){
    drawCard();
})
newGame.addEventListener('click', function(){
    Game();
})

player1name = prompt(`Player One Name`);
player2name = prompt(`Player Two Name`);