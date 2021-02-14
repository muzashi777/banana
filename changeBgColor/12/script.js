const form = document.querySelector("#form");
const itemList = document.querySelector(".item-list");
const addlist = document.querySelector("#addlist");
const clearList = document.querySelector("#clear-list");

let todoLists = [];

form.addEventListener("submit", showValue);

function showValue() {
  let income = addlist.value;

  if (income === "") {
    addlist.classList.toggle("border-danger");
    addlist.classList.toggle("text-danger");

    addlist.value = "Please Enter Values";
    setTimeout(() => {
      addlist.classList.toggle("border-danger");
      addlist.classList.toggle("text-danger");
      addlist.value = "";
    }, 1000);
  } else {
    todoLists.push(income);
    recieve();
  }
}

clearList.addEventListener("click", clear);

function recieve() {
  itemList.innerHTML = "";
  todoLists.forEach((item) => {
    itemList.insertAdjacentHTML(
      "beforeend",
      `<div class="item my-3">
          <h5 class="item-name text-capitalize">${item}</h5>
          <div class="item-icons">
            <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
            <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
            <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
          </div>
        </div>`
    );

    handleItem(item);
  });
  addlist.value = "";
}

const handleItem = (itemName) => {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    if (item.querySelector(".item-name").innerHTML === itemName) {
      //completed
      item.querySelector(".complete-item").addEventListener("click", () => {
        item.querySelector(".item-name").classList.toggle("completed");
      });

      //edit
      item.querySelector(".edit-item").addEventListener("click", () => {
        addlist.value = itemName;
        itemList.removeChild(item);

        todoLists = todoLists.filter((item) => {
          return item !== itemName;
        });
      });
      //delete
      item.querySelector(".delete-item").addEventListener("click", () => {
        itemList.removeChild(item);

        todoLists = todoLists.filter((item) => {
          return item !== itemName;
        });
      });
    }
  });
};

function clear() {
  todoLists = [];
  itemList.textContent = "";
}
