let score = 20;
let highScore = 0;
let playing = true;

const againBtnEl = document.querySelector(".again-btn");
const checkBtnEl = document.querySelector(".check-btn");
const numInputEl = document.querySelector(".num-input");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".high-score");
const questionMarkEl = document.querySelector(".question-mark");

// ////////////

checkBtnEl.addEventListener("click", checkNumber);
document.addEventListener("keydown", enterBtn);
againBtnEl.addEventListener("click", resetGame);
