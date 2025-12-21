// Welcome
const welcomeScreen = document.getElementById("welcome-screen");
const continueButton = document.getElementById("continue");

// Username Setup
const setupUsername = document.getElementById("setup-username");
const usernameInput = document.getElementById("username-input");
const usernameContinueButton = document.getElementById("username-continue");

continueButton.onclick = function() {
    welcomeScreen.style.animation = "fadeOut 1s ease-in-out forwards";
    continueButton.disabled = true;

    welcomeScreen.addEventListener("animationend", () => {
        setupUsername.style.display = "flex";
        setupUsername.style.animation = "fadeIn 0.5s ease-in-out forwards";
        welcomeScreen.remove();
    }, {once: true});
};

usernameContinueButton.onclick = function() {
    const username = usernameInput.value.trim();
    if (username.length === 0) {
        alert("Please enter a valid username.");
        return;
    }

    console.log("Username set to:", username);
    localStorage.setItem("username", username);
    setupUsername.style.animation = "fadeOut 1s ease-in-out forwards";

    setupUsername.addEventListener("animationend", () => {
        window.location.href = "./pages/os.html";
    }, {once: true});
}