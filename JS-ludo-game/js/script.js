console.log('JavaScript is loaded!');

let elDiceOne = document.getElementById('dice'), elComeOut = document.getElementById('roll'),
    activePlayer = document.querySelector('.player.active'), counter = 0;
const player1 = document.querySelector('#player1'), player2 = document.querySelector('#player2'),
    result = document.querySelector('#result');


let player1Score = 0, player2Score = 0, diceOne, dicetwo;
// console.log(activePlayer)

elComeOut.onclick = function () { rollDice(elComeOut); };

function rollDice(e) {

    // let players = document.querySelectorAll('.player');
    diceOne = Math.floor((Math.random() * 6) + 1);
    for (let i = 1; i <= 6; i++) {
        elDiceOne.classList.remove('show-' + i);
        if (diceOne === i) {
            elDiceOne.classList.add('show-' + i);
        }
    }

    if (player1.classList.contains('active')) {

        player1Score += diceOne;
        console.log(player1Score);

        setTimeout(() => {
            player1.querySelector('.score').innerHTML = player1Score;
        }, 1000)
    } else if (player2.classList.contains('active')) {

        player2Score += diceOne;
        console.log(player2Score);

        setTimeout(() => {
            player2.querySelector('.score').innerHTML = player2Score;
        }, 1000)


    } else {
        // The element does not have the class 'active'.
    }
    console.log(`Player 1: ${player1Score} and Player 2: ${player2Score}`)

    setTimeout(() => {
        player1.classList.toggle('active');
        player2.classList.toggle('active');

    }, 1500);

    // activePlayer.querySelector('.score').innerHTML = diceOne + diceOne;
    setTimeout(() => {
        // gameResult()
        refreshGame();
    }, 1500)


    counter++;
    console.log(counter)
    e.preventDefault();

    setTimeout(rollDice(), 1000);

}

const gameResult = () => {
    if (player2Score != 0) {
        if (counter === 5) {
            result.classList.add('active');

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

            // refreshGame();
            setTimeout(() => {
                location.reload(true);
            }, 2000)
        }

    }
}
const refreshGame = async () => {
    await gameResult()
}