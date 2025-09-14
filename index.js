// Year o Birth

let getYearOfBirth = document.querySelector("#game-yob");
let buttonYob = document.querySelector("#button-yob");
let resultYob = document.querySelector("#result-yob");
const getLeapYear = (year) =>
  year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

buttonYob.addEventListener("click", (event) => {
  if (getLeapYear(getYearOfBirth.value) === true) {
    resultYob.textContent = "Ви народилися у високосний рік!";
    resultYob.classList.replace("game__result-incorrect", "game__result");
  } else {
    resultYob.textContent = "Ви народилися не у високосний рік!";
    resultYob.classList.replace("game__result", "game__result-incorrect");
  }
  if (getYearOfBirth.value === "") {
    resultYob.textContent = "";
  }
});

// Guess Number

const GuessNumber = document.querySelector("#game-gtn");
const buttonGtn = document.querySelector("#button-gtn");
const resultGtn = document.querySelector("#result-gtn");
const resultNumGtn = document.querySelector("#result-gtn-number");

let computerNum = Math.floor(Math.random() * 10 + 1);

buttonGtn.addEventListener("click", (event) => {
  if (Number(GuessNumber.value) === computerNum) {
    resultGtn.textContent = "Вітаю, ви вгадали число!";
    resultNumGtn.textContent = `${computerNum}`;
    resultGtn.classList.replace("game__result-incorrect", "game__result");
    resultNumGtn.classList.replace("game__result-incorrect", "game__result");
  } else {
    resultGtn.textContent = "Ви програли, комп’ютер загадав:";
    resultNumGtn.textContent = `${computerNum}`;
    resultGtn.classList.replace("game__result", "game__result-incorrect");
    resultNumGtn.classList.replace("game__result", "game__result-incorrect");
  }
  if (GuessNumber.value === "") {
    resultGtn.textContent = "";
    resultNumGtn.textContent = "";
  }
});

console.log(computerNum);

// Rock-Paper-Scissors

const getStoreRps = document.querySelector("#game-stone-icon");
const getScissorsRps = document.querySelector("#game-scissors-icon");
const getPaperRps = document.querySelector("#game-paper-icon");
const buttonComputerRps = document.querySelector("#game-rps-computer-show");
const ComputerScoreRps = document.querySelector("#game-rps-computer-score");
const UserScoreRps = document.querySelector("#game-rps-user-score");

// calculator

const enterFirNumCalc = document.querySelector("#game-calc-enter-first-number");
const plusCalc = document.querySelector("#game-calc-plus");
const minusCalc = document.querySelector("#game-calc-minus");
const multiplyCalc = document.querySelector("#game-calc-multiply");
const divideCalc = document.querySelector("#game-calc-divide");
const enterSecNumCalc = document.querySelector(
  "#game-calc-enter-second-number"
);
const resultCalcButton = document.querySelector("#game-calc-result-button");
const resultCalc = document.querySelector("#game-result-calc");

let firstNumbers = [];
let secondNumbers = [];
let multiplesSymbols = [];

let multiples = [];
multiples.push(plusCalc, minusCalc, multiplyCalc, divideCalc);

firstMovement = enterFirNumCalc.addEventListener("input", (event) => {
  firstNumbers.push(enterFirNumCalc.value);
  if (firstNumbers.length > 1 || enterFirNumCalc.value === "") {
    firstNumbers.shift();
  }
  console.log(firstNumbers);
});

multiples.forEach((choiceMultiple) => {
  choiceMultiple.addEventListener("click", (event) => {
    multiplesSymbols.push(event.target);
    if (multiplesSymbols.length > 1) {
      alert("Button where deleted, press button again to get new value");
      multiplesSymbols = [];
    }
    console.log(multiplesSymbols);
  });
});

ThirdMovement = enterSecNumCalc.addEventListener("input", (event) => {
  secondNumbers.push(enterSecNumCalc.value);
  if (secondNumbers.length > 1 || enterSecNumCalc.value === "") {
    secondNumbers.shift();
  }
  console.log(secondNumbers);
});

resultCalcButton.addEventListener("click", (event) => {
  switch (multiples) {
    case plusCalc:
      resultCalc.textContent =
        Number(firstNumbers[0]) + Number(secondNumbers[0]);
      break;
    case minusCalc:
      resultCalc.textContent =
        Number(firstNumbers[0]) - Number(secondNumbers[0]);
      break;
    case multiplyCalc:
      resultCalc.textContent =
        Number(firstNumbers[0]) * Number(secondNumbers[0]);
      break;
    case divideCalc:
      resultCalc.textContent =
        Number(firstNumbers[0]) / Number(secondNumbers[0]);
      break;

    default:
      break;
  }
  console.log(resultCalc.textContent);
});
