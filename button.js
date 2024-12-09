// nav-bar-sift
let right = document.querySelector("#right");
let left = document.querySelector("#left");
let navbar = document.querySelector(".navbar");

right.addEventListener("click", () => {
    right.style.display = "none";
    left.style.display = "block";
    navbar.style.width = "15rem";
})
left.addEventListener("click", () => {
    left.style.display = "none";
    right.style.display = "block";
    navbar.style.width = "0px";

})