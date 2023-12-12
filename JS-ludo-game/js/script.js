console.log('JavaScript is loaded!');



let elDiceOne = document.getElementById('dice');
let elComeOut = document.getElementById('roll');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2'), result = document.querySelector('#result');
let activePlayer = document.querySelector('.player.active');
// console.log(activePlayer)

elComeOut.onclick = function () { rollDice(); };
// elComeOut.addEventListener('click', () => rollDice());

function rollDice(e) {

    // let players = document.querySelectorAll('.player');

    // console.log(diceOne);



    // activePlayer.classList.remove('active');
    var player1Score, player2Score, diceOne, dicetwo;
    if (player1.classList.contains('active')) {
        diceOne = Math.floor((Math.random() * 6) + 1);
        for (var i = 1; i <= 6; i++) {
            elDiceOne.classList.remove('show-' + i);
            if (diceOne === i) {
                elDiceOne.classList.add('show-' + i);
            }
        }
        player1Score = diceOne;
        console.log(player1Score);
        setTimeout(() => {
            player1.querySelector('.score').innerHTML = player1Score;
        }, 1500)

    } else if (player2.classList.contains('active')) {
        dicetwo = Math.floor((Math.random() * 6) + 1);
        for (var i = 1; i <= 6; i++) {
            elDiceOne.classList.remove('show-' + i);
            if (dicetwo === i) {
                elDiceOne.classList.add('show-' + i);
            }
        }
        player2Score = dicetwo;
        console.log(player2Score);

        setTimeout(() => {
            player2.querySelector('.score').innerHTML = player2Score;
        }, 1500)

        setTimeout(() => {
            if (player1Score > player2Score) {
                console.log('Player 1 won!');
                result.innerText = 'Player 1 won!';
            } else if (player1Score < player2Score) {
                console.log('Player 2 won!');
                result.innerText = 'Player 2 won!';
            } else {
                console.log('Draw!');
                result.innerText = 'Draw!';
            }
        }, 2000)
    } else {
        // The element does not have the class 'active'.
    }
    console.log(`Player 1: ${player1Score} and Player 2: ${player2Score}`)

    setTimeout(() => {
        player1.classList.toggle('active');
        player2.classList.toggle('active');
    }, 1750)


    // activePlayer.querySelector('.score').innerHTML = diceOne + diceOne;
    e.preventDefault();

    setTimeout(rollDice(), 1000);
}