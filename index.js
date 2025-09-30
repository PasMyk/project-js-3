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

const getItemsRps = Array.from(document.querySelectorAll(".rps-button"));
const buttonComputerRps = document.querySelector("#game-rps-computer-show");
const ComputerScoreRps = document.querySelector("#game-rps-computer-score");
const UserScoreRps = document.querySelector("#game-rps-user-score");
const resultTextRps = document.querySelector("#result-rps");

let itemsRps = ["rock", "scissors", "paper"];
let computerScore = 0;
let userScore = 0;

getItemsRps.forEach((element) => {
  element.addEventListener("click", (event) => {
    const userChoice = event.target.dataset.choice;
    const compChoice = computerChoice(itemsRps); // зберігаємо вибір комп’ютера

    buttonComputerRps.textContent = `Варіант комп’ютера: ${compChoice}`;

    if (userChoice === compChoice) {
      resultTextRps.textContent = "Нiчия!";
      resultTextRps.classList.remove("game__result-incorrect");
      resultTextRps.classList.add("game__result");
    } else if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "rock")
    ) {
      resultTextRps.textContent = "Ви виграли раунд!";
      resultTextRps.classList.remove("game__result-incorrect");
      resultTextRps.classList.add("game__result");
      userScore++;
      UserScoreRps.textContent = `Ви - ${userScore}`;
    } else {
      resultTextRps.textContent = "Комп’ютер виграв раунд!";
      resultTextRps.classList.add("game__result-incorrect");
      resultTextRps.classList.remove("game__result");
      computerScore++;
      ComputerScoreRps.textContent = `Комп’ютер - ${computerScore}`;
    }
  });
});

function computerChoice(choice) {
  return choice[Math.floor(Math.random() * choice.length)];
}
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

const calcOp = Array.from(document.querySelectorAll(".calc__op"));
let symb = "";

calcOp.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    symb = e.target.textContent;
  });
});

resultCalcButton.addEventListener("click", () => {
  const firstNumbers = enterFirNumCalc.value;
  const secondNumbers = enterSecNumCalc.value;

  switch (symb) {
    case plusCalc.textContent:
      resultCalc.textContent = Number(firstNumbers) + Number(secondNumbers);
      break;
    case minusCalc.textContent:
      resultCalc.textContent = Number(firstNumbers) - Number(secondNumbers);
      break;
    case multiplyCalc.textContent:
      resultCalc.textContent = Number(firstNumbers) * Number(secondNumbers);
      break;
    case divideCalc.textContent:
      resultCalc.textContent = Number(firstNumbers) / Number(secondNumbers);
      break;
    default:
      resultCalc.textContent = "Оберіть дію";
      break;
  }
});

// time calculator

const getInputCalcTime = document.querySelector(".time-calculator__input");
const getButtonCalcTime = document.querySelector(".game__timeCalc-button");
const getResultCalcTime = document.querySelector(".game__result-CalcTime");

function calcTime(minutes) {
  const days = Math.floor(minutes / 1440);
  const hours = Math.floor((minutes % 1400) / 60);
  const remainingMinutes = minutes & 60;

  return (getResultCalcTime.textContent = `${days}дн. ${hours}:${remainingMinutes}`);
}

getButtonCalcTime.addEventListener("click", (e) => {
  calcTime(getInputCalcTime.value.trim());
});

console.log(calcTime(getInputCalcTime.value));

// football

const getFootballBall = document.querySelector(".football-object");
const getFootballField = document.querySelector(".game__field");

getFootballField.addEventListener("mousemove", (e) => {
  let pos = e.offsetX;
});

// biggest number

const getMaxNumResult = document.querySelector(".game__maxNumResult");
const labelInp = document.querySelector(".game__input-group");

let arr = {
  num1: 0,
  num2: 0,
  num3: 0,
};

labelInp.addEventListener("input", (e) => {
  switch (e.target.dataset.num) {
    case "num1":
      arr = { ...arr, num1: e.target.value };
      break;
    case "num2":
      arr = { ...arr, num2: e.target.value };
      break;
    case "num3":
      arr = { ...arr, num3: e.target.value };
      break;
  }
  let { num1, num2, num3 } = arr;
  console.log(arr);

  getMaxNumResult.textContent = Math.max(num1, num2, num3);
});
