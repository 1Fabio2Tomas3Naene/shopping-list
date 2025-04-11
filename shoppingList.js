const input = document.querySelector("#input");
const buttonAdd = document.querySelector("#buttonAdd");
const ul = document.querySelector(".list");

buttonAdd.addEventListener("click", function () {
    let inputValue = input.value;
    inputValue = "";

    const span = document.createElement("span");
    const li = document.createElement("li");
    const buttonDalete = document.createElement("button");

    li.textContent = input.value;
    buttonDalete.textContent = "Delete";
    input.value = "";

    ul.appendChild(span);
    span.appendChild(li);
    span.appendChild(buttonDalete);

    buttonDalete.addEventListener("click", () => {
        ul.removeChild(span);
    });

    input.focus();
});