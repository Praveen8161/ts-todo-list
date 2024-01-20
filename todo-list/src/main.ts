import "./style.css";

const input = document.querySelector<HTMLInputElement>("#todo_enter");
const addBtn = document.querySelector(".add") as HTMLButtonElement;
const ulList = document.querySelector<HTMLUListElement>(".todo_list");

addBtn.addEventListener("click", (e): void => {
  e.preventDefault();

  if (!input?.value) return;

  const list = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.type = "checkBox";
  list.textContent = input.value;
  list.appendChild(checkBox);
  ulList?.append(list);
});
