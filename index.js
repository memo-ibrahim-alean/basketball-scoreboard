let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScoreP = document.getElementById("home-score");
let guestScoreP = document.getElementById("guest-score");

let homeCount = 0;
let guestCount = 0;
function homeIncrementByOne() {
  homeCount += 1;
  homeScoreEl.textContent = homeCount;
  checkWinner();
}

function homeIncrementByTwo() {
  homeCount += 2;
  homeScoreEl.textContent = homeCount;
  checkWinner();
}

function homeIncrementByThree() {
  homeCount += 3;
  homeScoreEl.textContent = homeCount;
  checkWinner();
}

function guestIncrementByOne() {
  guestCount += 1;
  guestScoreEl.textContent = guestCount;
  checkWinner();
}

function guestIncrementByTwo() {
  guestCount += 2;
  guestScoreEl.textContent = guestCount;
  checkWinner();
}

function guestIncrementByThree() {
  guestCount += 3;
  guestScoreEl.textContent = guestCount;
  checkWinner();
}

function newGame() {
  homeCount = 0;
  guestCount = 0;
  guestScoreEl.textContent = 0;
  homeScoreEl.textContent = 0;
  guestScoreP.style.border = null;
  homeScoreP.style.border = null;
}

function checkWinner() {
  if (homeCount > guestCount) {
    guestScoreP.style.border = null;
    homeScoreP.style.border = "1px solid green";
  } else if (homeCount < guestCount) {
    homeScoreP.style.border = null;
    guestScoreP.style.border = "1px solid green";
  }
}
