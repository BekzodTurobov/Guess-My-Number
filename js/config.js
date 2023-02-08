"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const checkNumber = function () {
  const enteredNumber = numInputEl.value;

  // Whe there is no input
  if (!enteredNumber) {
    messageEl.textContent = "⛔️ No number!";
  }

  if (playing && enteredNumber) {
    // When player wins
    if (+enteredNumber === secretNumber) {
      messageEl.textContent = "🎉 Correct number!";
      document.body.style.backgroundColor = "#60b347";
      questionMarkEl.style.width = "25rem";
      score++;
      scoreEl.textContent = score;
      playing = false;

      // Define the highscore
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
      }
    }

    // When guess is wrong
    if (+enteredNumber !== secretNumber) {
      messageEl.textContent =
        enteredNumber > secretNumber ? "📈 Too high!" : "📉 Too low!";
      score--;
      scoreEl.textContent = score;
    }

    // When score is less then 1
    if (score < 1) {
      score = 0;
      scoreEl.textContent = score;
      messageEl.textContent = "🤯 You lose!";
      playing = false;
    }

    questionMarkEl.textContent = enteredNumber;
    numInputEl.value = "";
  }
};

// console.log(secretNumber);

const enterBtn = function (e) {
  if (e.key === "Enter") {
    checkNumber();
  }
};

const resetGame = function () {
  score = 20;
  playing = true;
  scoreEl.textContent = score;

  questionMarkEl.textContent = "?";
  messageEl.textContent = "Start guessing...";
  document.body.style.backgroundColor = "#222";
  questionMarkEl.style.width = "15rem";

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  numInputEl.value = "";
  // console.log(secretNumber);
};
