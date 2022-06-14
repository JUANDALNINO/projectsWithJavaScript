let cssH3 = document.querySelector("h3");
let colorOne = document.querySelector(".colorOne");
let colorTwo = document.querySelector(".colorTwo");
let body = document.getElementById("gradient");

colorOne.addEventListener("input", changeGradient);
colorTwo.addEventListener("input", changeGradient);

function changeGradient() {
    body.style.background = "linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ")";

    css.textContent = body.style.background + ";";
};