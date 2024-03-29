"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const modal = document.getElementById("confirmationModal");
const confirmButton = document.getElementById("confirmButton");
const cancelButton = document.getElementById("cancelButton");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        checkLastMessageDisplayed();
    }
});

function handleYesClick() {
    titleElement.innerHTML = ":3";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");

    // Display the modal
    modal.style.display = "block";
}

confirmButton.addEventListener("click", function () {
    // Redirect to index.html when the user confirms
    window.location.href = 'index2.html';
});

cancelButton.addEventListener("click", function () {
    // Hide the modal when the user cancels
    modal.style.display = "none";
});

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "No",
        "Seryoso ba?",
        "Hala weeeeh baa",
        "Don't do this to me naman oh :(",
        "Aray ang sakit na ha :(",
        "I'm gonna cry naaa...",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(image) {
    catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}

function checkLastMessageDisplayed() {
    if (noCount === MAX_IMAGES) {
        addNoButtonHoverEffect();
    }
}

function addNoButtonHoverEffect() {
    noButton.addEventListener("mouseover", () => {
        const noBtnRect = noButton.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    });
}





