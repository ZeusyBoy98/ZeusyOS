const usage = document.getElementById('usage');
const timeDisplay = document.getElementById('timeDisplay');
let num = 0;

setInterval(() => {
    let currentTime = new Date().toLocaleString(); 
    timeDisplay.innerHTML = currentTime;
}, 1000);

setInterval(() => {
    num = Math.floor(Math.random() * 100);
    usage.textContent = `${num != 69 ? num : "nice"}% CPU Usage`;
}, 1000);
