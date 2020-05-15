


var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

var imagesArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

document.querySelector("div .img1").setAttribute("src", imagesArray[randomNumber1]);
document.querySelector("div .img2").setAttribute("src", imagesArray[randomNumber2]);

winner(randomNumber1, randomNumber2);

function winner(r1, r2) {

    if (r1 > r2) {

        document.querySelector("h1").textContent = "Player 1 wins";

    } else if (r1 === r2) {

        document.querySelector("h1").textContent = "Draw";

    } else {

        document.querySelector("h1").textContent = "Player 2 wins";

    }

}



