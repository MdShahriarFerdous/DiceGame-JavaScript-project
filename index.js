// for left dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImgLeft = "images/" + "dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImgLeft);

// for right dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgRight =  "images/" + "dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImgRight); 

// Conditions

if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🥇Player 1 win"
}
else if (randomNumber1 < randomNumber2) {
     document.querySelector("h1").innerHTML = "🥇Player 2 win"
}
else {
    document.querySelector("h1").innerHTML = "Draw Match 🎉"
}
