let firstCard = 10
let secondCard = 7
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Card: "
    for (let index = 0; index < cards.length; index++) {
        cardEl.textContent+=cards[index] + " "

        
    }

    sumEl.textContent = "Sum:" + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "you've got blackjack"
        hasBlackJack = true
    }else 
        message = "you're out of the game"
        isAlive = false 
    messageEl.textContent = message
}

function newCard(){
    let card = 8
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}

alert(navigator.userAgent)
    



