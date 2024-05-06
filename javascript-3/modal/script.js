"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

function openModal() {
    //console.log(modal.classList);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// document.querySelectorAll(".show-modal")[0].addEventListener("click", handleClick);
// document.querySelectorAll(".show-modal")[1].addEventListener("click", handleClick);
// document.querySelectorAll(".show-modal")[2].addEventListener("click", handleClick);

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    // console.log(e.key);

    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// no hidden class => modal is open
// hidden class => modal is close
