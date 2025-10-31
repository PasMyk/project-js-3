import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

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

const ball = document.querySelector(".football-object");
const field = document.querySelector(".game__field");

let isDragging = false;
let shiftX, shiftY;

ball.addEventListener("mousedown", onMouseDown);

function onMouseDown(event) {
  isDragging = true;
  ball.style.cursor = "grabbing";

  shiftX = event.clientX - ball.getBoundingClientRect().left;
  shiftY = event.clientY - ball.getBoundingClientRect().top;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}

function onMouseMove(event) {
  if (!isDragging) return;

  const fieldRect = field.getBoundingClientRect();

  let newLeft = event.clientX - fieldRect.left - shiftX;
  let newTop = event.clientY - fieldRect.top - shiftY;

  const rightEdge = field.clientWidth - ball.offsetWidth;
  const bottomEdge = field.clientHeight - ball.offsetHeight;

  if (newLeft < 0) newLeft = 0;
  if (newTop < 0) newTop = 0;
  if (newLeft > rightEdge) newLeft = rightEdge;
  if (newTop > bottomEdge) newTop = bottomEdge;

  ball.style.left = newLeft + "px";
  ball.style.top = newTop + "px";
}

function onMouseUp() {
  isDragging = false;
  ball.style.cursor = "grab";
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

ball.ondragstart = () => false;

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

// scientists

const scientistBorn = Array.from(document.querySelectorAll(".scientists-dob"));
const scientistName = Array.from(document.querySelectorAll(".scientists-name"));
const listScientists = Array.from(
  document.querySelectorAll(".scientists__item")
);
const getButtonsScientists = document.querySelector(".scientists__actions");
const getLastButtonSci = document.querySelector('[data-sci="btn9"]');

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
      const longestLived = scientists.reduce((acc, elem) => {
        const accAge = acc.dead - acc.born;
        const elemAge = elem.dead - elem.born;

        if (elemAge > accAge) {
          return elem;
        } else {
          return acc;
        }
      }, scientists[0]);

      let sciCheckingMax = scientistName.forEach((elem) => {
        if (elem.textContent.includes(longestLived.name)) {
          const parentScientist = elem.closest(".scientists__item");
          parentScientist.classList.add("btnResultSci");
        }
      });

      const minlongestLived = scientists.reduce((acc, elem) => {
        const accAge = acc.dead - acc.born;
        const elemAge = elem.dead - elem.born;

        if (elemAge < accAge) {
          return elem;
        } else {
          return acc;
        }
      }, scientists[0]);

      let sciCheckingMin = scientistName.forEach((elem) => {
        if (elem.textContent.includes(minlongestLived.name)) {
          const parentScientist = elem.closest(".scientists__item");
          parentScientist.classList.add("btnResultSci");
        }
      });
    }

    if (e.target.dataset.sci === "btn6") {
      const findFromLiSurname = scientistName.forEach((elem) => {
        if (elem.textContent.includes("C")) {
          const parentScientist = elem.closest(".scientists__item");
          parentScientist.classList.add("btnResultSci");
        }
      });
    }

    if (e.target.dataset.sci === "btn9") {
      const sameInitials = scientists.filter((scientist) => {
        const firstLetterName = scientist.name[0].toLowerCase();
        const firstLetterSurname = scientist.surname[0].toLowerCase();
        return firstLetterName === firstLetterSurname;
      });

      sameInitials.forEach((scientist) => {
        const element = document.querySelector(
          `[data-block="block${scientist.id}"]`
        );
        if (element) {
          element.classList.add("btnResultSci");
        }
      });
    }

    if (e.target.dataset.sci === "btn7") {
      const findName = scientistName.map((elem) => {
        if (elem.textContent[0] === "A") {
          const parentScientist = elem.closest(".scientists__item");
          parentScientist.classList.add("btnNegativeResultSci");
        }
      });
    }

    if (e.target.dataset.sci === "btn4") {
      const sortLateSci = scientists.sort((a, b) => a.born - b.born);
      const latestScientist = sortLateSci[sortLateSci.length - 1];
      let resultLatestSci = scientistName.forEach((elem) => {
        if (elem.textContent.includes(latestScientist.name)) {
          const parentScientist = elem.closest(".scientists__item");
          parentScientist.classList.add("btnResultSci");
        }
      });
    }

    if (e.target.dataset.sci === "btn2") {
      const sortByFirstLetter = scientists.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      listScientists.forEach((card) => {
        card.style.backgroundColor = "";
      });

      sortByFirstLetter.forEach((sci, index) => {
        const percent = index / (sortByFirstLetter.length - 1);

        const r = Math.round(255 * percent);
        const g = Math.round(255 * (1 - percent));
        const color = `rgba(${r}, ${g}, 0, 0.32)`;

        const card = listScientists.find((el) =>
          el.querySelector(".scientists-name").textContent.includes(sci.surname)
        );

        if (card) card.style.backgroundColor = color;
      });

      console.log(sortByFirstLetter);
    }

    if (e.target.dataset.sci === "btn3") {
      const sortAge = scientists.sort((a, b) => {
        const ageA = a.dead - a.born;
        const ageB = b.dead - b.born;
        return ageB - ageA;
      });

      listScientists.forEach((card) => {
        card.style.backgroundColor = "";
      });

      // Покрасим по возрасту (дольше жившие — зеленее)
      sortAge.forEach((sci, index) => {
        const percent = index / (sortAge.length - 1);
        const r = Math.round(255 * percent);
        const g = Math.round(255 * (1 - percent));
        const color = `rgba(${r}, ${g}, 0, 0.3)`;

        const card = listScientists.find((el) =>
          el.querySelector(".scientists-name").textContent.includes(sci.surname)
        );

        if (card) card.style.backgroundColor = color;
      });

      console.log(sortAge);
    }

    console.log(e.target.dataset.sci);
  });
});

console.log(listScientists.dataset);

function bornNineteenth(scientist) {
  scientist.forEach((elem) => {
    const parentScientist = elem.closest(".scientists__item");
    parentScientist.classList.add("btnResultSci");
  });
}

function removeBg() {
  listScientists.forEach((elem) => {
    elem.classList.remove("btnResultSci", "btnNegativeResultSci");
  });
}

function removeScientist(deleteColour) {
  deleteColour.forEach((elem) => {
    const parentScientist = elem.closest(".scientists__item");
    parentScientist.classList.add("btnNegativeResultSci");
  });
}

// swiper

new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// header-dropdown

const dropdownArr = document.querySelector(".dropdown-arrow");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownArr.addEventListener("click", (e) => {
  dropdownMenu.classList.toggle("show");
});

// modal-window

const modalWindowNew = document.querySelector(".hero");
const modalBtnClose = document.querySelector(".hero__btnClose");

window.addEventListener("load", () => {
  modalWindowNew.style.display = "block";
  modalWindowNew.classList.add("animationEndModal");
});

modalBtnClose.addEventListener("click", (e) => {
  modalWindowNew.style.display = "none";
});
