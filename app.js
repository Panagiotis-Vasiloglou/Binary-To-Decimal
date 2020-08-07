// SELECT OUR DOM ELEMENTS

let text = document.querySelector("#text");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const convertBtn = document.querySelector("#convert");
const swapBtn = document.querySelector("#swap");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

input.addEventListener("input", (e) => {
    let value = e.target.value;
    if (text.textContent === "NaN" && value === "") {
        text.style.display = "none";
    }
    text.textContent = parseInt(value, 2);
    if (text.textContent === "NaN") {
        text.textContent = "Invalid input";
    }
    text.style.display = "block";
});
