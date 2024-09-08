const button = document.getElementById("Button");
const H1 = document.getElementById("H1");


let number = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;
H1.textContent = `${number}`;

button.addEventListener("click", () => {
    number += 1;
    H1.textContent = `${number}`;
    localStorage.setItem("counter", number);
});
