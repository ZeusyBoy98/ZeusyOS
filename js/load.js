const userText = document.getElementById("userText");

localStorage.getItem("username") ? userText.textContent = `User: ${localStorage.getItem("username")}` : userText.textContent = "User: User";