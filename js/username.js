const userText = document.getElementById("userText");
const saveUsernameButton = document.getElementById("saveUsernameButton");
const usernameInput = document.getElementById("usernameInput");

updateUsernameDisplay();

saveUsernameButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem("username", username);
        usernameInput.value = "";
        updateUsernameDisplay();
    }
});

function updateUsernameDisplay() {
    localStorage.getItem("username") ? userText.textContent = `User: ${localStorage.getItem("username")}` : userText.textContent = "User: User";
}
