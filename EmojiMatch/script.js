//Desiree Boudreaux 12/6/2025

//Emoji Memory Match
console.log("Welcome to Emoji Memory Match");


// Emoji Card Faces
const emojis = ["🤩", "😎", "🤣", "😵", "💩", "👽", "🙈", "🦖", "🍕", "🍟", "🍒", "🍉", "🍓", "😹", "🦄", "🥸"];

//Deck
let deck= []; //emoji cards
let flippedCards = [];  //2 clicked cards 
let score = 0; //matches equal to points

const boardEl = document.getElementById("gameBoard");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
const resetButton = document.getElementById("resetButton");

//Shuffle deck using Math.random
function shuffle(array) {
    return array.sort(() => Math.random() -0.5);
}

//Create the board, make pairs, shuffle and create card elements
function createGameBoard() {
    deck = shuffle([...emojis, ...emojis]); //make pairs
    boardEl.textContent = ""; // clear board
    score = 0;
    scoreEl.textContent = "Score: " + score;
    messageEl.textContent = "Click 2 cards to find a match.";

//Create the emoji cards
deck.forEach((emoji) => {
    const card = document.createElement("div");
    card.classList.add("card", "hidden");
    card.textContent = emoji;
    card.addEventListener("click", flipCard);
    boardEl.appendChild(card);
});
}

//Flip a card
function flipCard(event) {
  const card = event.target; // clicked card

if (!card.classList.contains("hidden") || flippedCards.length === 2)
    return;

card.classList.remove("hidden");
flippedCards.push(card);

//Checking the 2 cards faced
if (flippedCards.length === 2) {
    setTimeout(checkMatch, 700);
}
}

//Check for matches
function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.textContent === card2.textContent) {
        score++;
        console.log("Congrats! You've got a match!");
    } else {
        card1.classList.add("hidden");
        card2.classList.add("hidden");
        console.log("Sorry! No Matches Found.");
    }
    flippedCards = [];
  scoreEl.textContent = "Score: " + score;

  if (score === emojis.length) {
    console.log("Congrats! You've won Emoji Match!");
  }
}

// Reset button
resetButton.addEventListener("click", createGameBoard);

// Start game
createGameBoard();
