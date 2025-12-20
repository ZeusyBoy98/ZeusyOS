const welcomeScreen = document.querySelector(".welcome-screen");
const setupColour = document.querySelector(".setup-colour");
const continueButton = document.getElementById("continue");

continueButton.onclick = function() {
    welcomeScreen.style.animation = "fadeOut 2s ease-in-out forwards";
    continueButton.disabled = true;

    welcomeScreen.addEventListener("animationend", () => {
        setupColour.style.display = "flex";
        setupColour.style.animation = "fadeIn 1s ease-in-out forwards";
        welcomeScreen.remove();
    }, {once: true});
};