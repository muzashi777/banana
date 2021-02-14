const cost = document.querySelector("#cost");
const people = document.querySelector("#people");
const variable = document.querySelector("#variable");
const form = document.querySelector("#form");
const total = document.querySelector("#total");

form.addEventListener("submit", calculate);

function calculate() {
  let tc = new tipCalculation();
  tc.validation();
  tc.showValue();
  tc.deleteValue();
}

function tipCalculation() {
  this.feedback = true;

  this.validation = () => {
    if (
      cost.value === "" ||
      cost.value <= 0 ||
      people.value === "" ||
      people.value <= 0
    ) {
      alert("Values must higher than 0");
      this.feedback = false;
    }
  };

  this.showValue = () => {
    if (this.feedback) {
      const perPerson =
        (Number(cost.value) / Number(people.value)) * variable.value;
      const allPay = Number(cost.value) * variable.value;

      const p = document.createElement("p");
      const text = document.createTextNode(`Each person pay: ${perPerson}`);
      p.appendChild(text);
      total.appendChild(p);
      cost.value = 0;
      people.value = 0;
    }
  };

  this.deleteValue = () => {
    if (this.feedback) {
      setTimeout(() => {
        const del = document.querySelector("p");
        del.remove();
      }, 2500);
    }
  };
}
