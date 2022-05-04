function generateRandom() {
  return Math.floor(Math.random() * 6) + 1;
}
function refresh() {
  var player1 = generateRandom();
  var player2 = generateRandom();

  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "images/dice" + player1 + ".png");
  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "images/dice" + player2 + ".png");

  if (player1 > player2)
    document.querySelector("h1").textContent = "Player 1 wins !";
  else if (player1 < player2)
    document.querySelector("h1").textContent = "Player 2 wins !";
  else document.querySelector("h1").textContent = "Better luck next times !";
}
