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
const labelInp = document.querySelector(".max-number-label-group");

let arr = {
  num1: 0,
  num2: 0,
  num3: 0,
};

labelInp.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");

  switch (e.target.dataset.num) {
    case "num1":
      arr = { ...arr, num1: Number(e.target.value) };
      break;
    case "num2":
      arr = { ...arr, num2: Number(e.target.value) };
      break;
    case "num3":
      arr = { ...arr, num3: Number(e.target.value) };
      break;
  }

  let { num1, num2, num3 } = arr;
  console.log(arr);

  getMaxNumResult.textContent = Math.max(num1, num2, num3);
});

// team

// const getWorkersTeam = Array.from(document.querySelectorAll(".team__names"));
// const getWorkersTitleTeam = Array.from(
//   document.querySelectorAll(".team__work")
// );
// const getBtnTeam = Array.from(
//   document.querySelectorAll(".team__slider-button")
// );
// const getWorkersPhotoTeam = Array.from(
//   document.querySelectorAll(".team__photo")
// );
// const getArrowsTeam = Array.from(document.querySelectorAll(".team-arrows"));
// let imagesIndexTeam = 0;

// getBtnTeam.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     if (element.classList.contains("active")) {
//     }
//   });
//   console.log(element.classList.contains("active"));
// });

// scientists

const scientistBorn = Array.from(document.querySelectorAll(".scientists-dob"));
const scientistName = Array.from(document.querySelectorAll(".scientists-name"));
const listScientists = Array.from(
  document.querySelectorAll(".scientists__item")
);
const getButtonsScientists = document.querySelector(".scientists__actions");

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

getButtonsScientists.childNodes.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    removeBg();
    if (e.target.dataset.sci === "btn5") {
      listScientists[0].classList.add("btnResultSci");
    }

    if (e.target.dataset.sci === "btn1") {
      const data = scientistBorn.filter(
        (item) => Number.parseInt(item.textContent) > 1800
      );
      bornNineteenth(data);
    }

    if (e.target.dataset.sci === "btn8") {
      let dobFilter = scientists.map((elem) => {
        return elem.dead - elem.born;
      });

      let sortScientists = dobFilter.filter((elem) => {
        if (elem === 90) {
        }
      });
      console.log(sortScientists);

      const maxAge = Math.max(...dobFilter);
      const minAge = Math.min(...dobFilter);
      console.log(maxAge, minAge);
    }
    // console.log(e.target.dataset.sci);
    if (e.target.dataset.sci === "btn7") {
      const sortbyFirstLetter = scientists.filter(
        (word) => word.name[0] === "A"
      );

      removeBg(sortbyFirstLetter);
    }
  });
});

function bornNineteenth(scientist) {
  scientist.forEach((elem) => {
    const parentScientist = elem.closest(".scientists__item");
    parentScientist.classList.add("btnResultSci");
    console.log(parentScientist);
  });
  console.log(scientist);
}

function removeBg() {
  listScientists.forEach((elem) => {
    elem.classList.remove("btnResultSci");
  });
}

function removeScientist(sortbyFirstLetter) {
  sortbyFirstLetter.forEach((elem) => {
    elem.classList.add("btnNegativeResultSci");
  });
}
