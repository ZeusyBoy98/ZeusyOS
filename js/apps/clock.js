// Dom Elements
const timerScreen = document.getElementById("timerScreen");
const stopwatchScreen = document.getElementById("stopwatchScreen");
const timerScreenButton = document.getElementById("timerScreenButton");
const stopwatchScreenButton = document.getElementById("stopwatchScreenButton");

const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");
const addToTimer = document.getElementById("addToTimer");
const timerDisplay = document.getElementById("time");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

const stopwatchTime = document.getElementById("stopwatchTime");
const stopwatchStartButton = document.getElementById("stopwatchStartButton");
const stopwatchResetButton = document.getElementById("stopwatchResetButton");

// Screen switching logic
timerScreenButton.onclick = () => {
    stopwatchScreen.style.display = "none";
    timerScreen.style.display = "flex";
}

stopwatchScreenButton.onclick = () => {
    stopwatchScreen.style.display = "flex";
    timerScreen.style.display = "none";
}

// Timer Screen
let isRunning = false;
let interval;
let minutes = 24;
let seconds = 59;
let resetMinutes = 24;
let resetSeconds = 59;

addToTimer.onclick = () => newTimer();

function newTimer() {
    if (parseInt(secondsInput.value) < 60) {
        minutes = resetMinutes = parseInt(minutesInput.value) || 0;
        seconds = resetSeconds = parseInt(secondsInput.value) || 0;
        updateTimer();
    } else {
        return;
    }
}

function updateTimer() {
    timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

startButton.onclick = () => {
    if (!isRunning) {
        isRunning = true;
        startButton.textContent = "Stop";
        timerDisplay.style.border = "1px solid lightgray"
        
        interval = setInterval(() => {
            if (seconds > 0 || minutes > 0) {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        isRunning = false;
                        startButton.textContent = "Start";
                        return;
                    }
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateTimer();
            } else {
                clearInterval(interval);
                isRunning = false;
                startButton.textContent = "Start";
            }
        }, 1000);
    } else {
        clearInterval(interval);
        isRunning = false;
        startButton.textContent = "Start";
        timerDisplay.style.border = "2px solid red";
    }
};

resetButton.onclick = () => {
    clearInterval(interval);
    isRunning = false;

    minutes = resetMinutes;
    seconds = resetSeconds;

    updateTimer();
    startButton.textContent = "Start"
    timerDisplay.style.border = "solid 2px #000"
}

updateTimer();

// Stopwatch Screen
let timer;
let isStopwatchRunning = false;
let startTime;
let elapsed = 0;

function updateStopwatch() {
    elapsed = Date.now() - startTime;
    const stopwatchSeconds = Math.floor((elapsed / 1000) % 60);
    const stopwatchMinutes = Math.floor((elapsed / (1000 * 60)) % 60);
    stopwatchTime.innerHTML = `${pad(stopwatchMinutes)}:${pad(stopwatchSeconds < 10 ? '0' + stopwatchSeconds : stopwatchSeconds)}`;
}

stopwatchStartButton.onclick = () => {
    if (!isStopwatchRunning) {
        isStopwatchRunning = true;
        startTime = Date.now() - elapsed;
        timer = setInterval(updateStopwatch, 1000);
        stopwatchStartButton.textContent = "Stop";
    } else {
        isStopwatchRunning = false;
        clearInterval(timer);
        elapsed = Date.now() - startTime;
        stopwatchStartButton.textContent = "Start";
    }
}

stopwatchResetButton.onclick = () => {
    isStopwatchRunning = false;
    clearInterval(timer);
    elapsed = 0;
    stopwatchTime.textContent = '00:00';
    stopwatchStartButton.textContent = "Start";
}

function pad(number) {
    return number.toString().padStart(2, '0');
}