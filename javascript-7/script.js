"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");

const openModal = (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
}
btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

/*

///////////////////////////////

//* Selecting Elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

//* Creating and Inserting Elements
// .insertAdjacentHTML()

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and performance.";
message.innerHTML = `We use cookies for improved functionality and performance. <button class="btn btn--close-cookie">&times;</button>`;

// header.prepend(message);
header.append(message);

// header.before(message);
// header.after(message);

//* Delete elements

document.querySelector(".btn--close-cookie").addEventListener("click", () => {
    message.parentElement.removeChild(message);
});

//* Styles

message.style.backgroundColor = "#37383d";
message.style.width = "104%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
    Number.parseFloat(getComputedStyle(message).height) + 50 + "px";

// document.documentElement.style.setProperty("--color-primary", "pink");

//* Attributes
const logo = document.querySelector(".nav__logo");

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

console.log(logo.demo);
console.log(logo.getAttribute("demo"));
logo.setAttribute("example", "example-value");

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("a", "b", "c");
logo.classList.remove("c");
logo.classList.toggle("z");
console.log(logo.classList.contains("y"));

*/

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
    const s1coords = section1.getBoundingClientRect();
    console.log("section1", s1coords);

    console.log("button", e.target.getBoundingClientRect());

    console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

    console.log(
        "Height/width viewport",
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    // Scrolling
    // window.scrollTo(
    //     s1coords.left + window.pageXOffset,
    //     s1coords.top + window.pageYOffset
    // );

    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: "smooth",
    // });

    section1.scrollIntoView({ behavior: "smooth" });
});

// Events

const h1 = document.querySelector("h1");

function alertH1(e) {
    console.log("addEventListener: You are reading the heading");
    // h1.removeEventListener("mouseenter", alertH1);
}

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => {
    h1.removeEventListener("mouseenter", alertH1);
}, 3000);

// h1.onmouseenter = function (e) {
//     console.log("onmouseeneter: You are reading the heading");
// };

// rgb(0-255,0-255,0-255)
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
    `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
    console.log("LINK", e.target, e.currentTarget);

    // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener(
    "click",
    function (e) {
        this.style.backgroundColor = randomColor();
        console.log("CONTAINER", e.target, e.currentTarget);
    },
    true
);

document.querySelector(".nav").addEventListener(
    "click",
    function (e) {
        this.style.backgroundColor = randomColor();
        console.log("NAV", e.target, e.currentTarget);
    },
    true
);
