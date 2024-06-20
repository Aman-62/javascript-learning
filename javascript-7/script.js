"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const nav = document.querySelector(".nav");
const section1 = document.querySelector("#section--1");

//* Modal window
const openModal = (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

//* Button scrolling

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

//* Page navigation

// document.querySelectorAll(".nav__link").forEach(function (el) {
//     el.addEventListener("click", function (e) {
//         e.preventDefault();
//         const id = this.getAttribute("href");
//         // console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(e.target);

    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});

//* Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");

    if (!clicked) return;

    // console.log(clicked);
    tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
    tabContent.forEach((tc) =>
        tc.classList.remove("operations__content--active")
    );

    clicked.classList.add("operations__tab--active");

    // console.log(clicked.dataset.tab);

    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
});

//* Menu fade animation

const handleHover = function (e, opacity) {
    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
            if (el !== link) el.style.opacity = opacity;
        });

        logo.style.opacity = opacity;
    }
};

nav.addEventListener("mouseover", function (e) {
    handleHover(e, 0.5);
});
nav.addEventListener("mouseout", function (e) {
    handleHover(e, 1);
});

//* Sticky navigation

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener("scroll", function () {
    // console.log(window.scrollY);

    if (window.scrollY > initialCoords.top) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

/*
///////////////////////////////
///////////////////////////////
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

h1.onmouseenter = function (e) {
    console.log("onmouseeneter: You are reading the heading");
};

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

const h1 = document.querySelector("h1");
let value = true;
console.log(value);

//* DOM Traversing

const h1 = document.querySelector("h1");

// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "blue";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = `var(--gradient-secondary)`;
h1.closest("h1").style.background = `var(--gradient-primary)`;

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);



*/
