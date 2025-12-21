// Welcome
const welcomeScreen = document.getElementById("welcome-screen");
const continueButton = document.getElementById("continue");

// Colour Setup
const setupColour = document.getElementById("setup-colour");
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

// Username Setup
const setupUsername = document.getElementById("setup-username");
const usernameInput = document.getElementById("username-input");
const usernameContinueButton = document.getElementById("username-continue");

continueButton.onclick = function() {
    welcomeScreen.style.animation = "fadeOut 1s ease-in-out forwards";
    continueButton.disabled = true;

    welcomeScreen.addEventListener("animationend", () => {
        setupColour.style.display = "flex";
        setupColour.style.animation = "fadeIn 0.5s ease-in-out forwards";
        welcomeScreen.remove();
    }, {once: true});
};

function setTheme(theme) {
    localStorage.setItem("theme", theme);
    setupColour.style.animation = "fadeOut 1s ease-in-out forwards";
    
    setupColour.addEventListener("animationend", () => {
        setupUsername.style.display = "flex";
        setupUsername.style.animation = "fadeIn 0.5s ease-in-out forwards";
        setupColour.remove();
    }, {once: true});
}

darkButton.onclick = function() {
    setTheme("dark");
}

lightButton.onclick = function() {
    setTheme("light");
}

usernameContinueButton.onclick = function() {
    const username = usernameInput.value.trim();
    if (username.length === 0) {
        alert("Please enter a valid username.");
        return;
    }

    localStorage.setItem("username", username);
    setupUsername.style.animation = "fadeOut 1s ease-in-out forwards";

    setupUsername.addEventListener("animationend", () => {
        window.location.href = "./pages/os.html";
    }, {once: true});
}