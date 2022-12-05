// Code your solutions in this file
let writeCards = (cardNames, cardMessage) => {
    let thankYouMessages = [];
    for(let i = 0; i < cardNames.length; i++) {
       thankYouMessages.push(`Thank you, ${cardNames[i]}, for the wonderful ${cardMessage} gift!`);
    }
    return thankYouMessages;
 }
 
 // log each number when counting down starting from the number provided to zero
 let countDown = (i) => {
    while (i >= 0) {
       console.log(i);
       i--
    }
 }  