// scripts.js
const cards = document.querySelectorAll(".memory-card");
//  let hasFlippedCard = false;
//  let firstCard, secondCard;

//   function flipCard() {
//    this.classList.add('flip');

//    if (!hasFlippedCard) {
//      hasFlippedCard = true;
//      firstCard = this;
//    }

function flipCard() {
  this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));
