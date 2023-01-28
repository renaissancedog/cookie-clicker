// Get the clicker button and score elements
const clicker = document.getElementById("clicker");
const score = document.getElementById("score");

// Set the initial score to 0
let currentScore = 0;

// Update the score when the button is clicked
clicker.addEventListener("click", function() {
  currentScore += 1;
  score.innerHTML = currentScore;
});
