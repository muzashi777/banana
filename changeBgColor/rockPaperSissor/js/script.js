const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const show = document.querySelector("#show");

rock.addEventListener("click", chooseRock);

paper.addEventListener("click", choosePaper);

scissors.addEventListener("click", chooseScissors);

const listArray = ["rock", "paper", "scissors"];
let humanChoose = "";

function chooseRock() {
  humanChoose = "rock";
  cal(humanChoose);
}

function choosePaper() {
  humanChoose = "paper";
  cal(humanChoose);
}

function chooseScissors() {
  humanChoose = "scissors";
  cal(humanChoose);
}

function cal(humanChoose) {
  let index = Math.floor(Math.random() * 3);
  let computerChoose = listArray[index];
  if (computerChoose === humanChoose) {
    show.innerHTML = "Not Bad, Draw";
    show.classList.toggle("text-warning");
    setTimeout(() => {
      show.textContent = "";
      show.classList.toggle("text-warning");
    }, 1000);
  } else if (
    (humanChoose === "rock" && computerChoose === "scissors") ||
    (humanChoose === "paper" && computerChoose === "rock") ||
    (humanChoose === "scissors" && computerChoose === "paper")
  ) {
    show.innerHTML = "Congretulation, You Win!!";
    show.classList.toggle("text-success");

    setTimeout(() => {
      show.textContent = "";
      show.classList.toggle("text-success");
    }, 1000);
  } else {
    show.innerHTML = "Bad day, You Lose";
    show.classList.toggle("text-danger");
    setTimeout(() => {
      show.textContent = "";
      show.classList.toggle("text-danger");
    }, 1000);
  }
}
