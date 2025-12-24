const keys = [];
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let biggestIndex = 1;

/* ----------DOM Elements---------- */
const topBar = document.getElementById("top");
const test = document.getElementById("test");
const konami = document.getElementById("konami");
const usernameChanger = document.getElementById("usernameChanger");
const notepad = document.getElementById("notepad")
const weather = document.getElementById("weather")
const clock = document.getElementById("clock")

/* --------Window Management-------- */
initializeWindow(test);
initializeWindow(konami);
initializeWindow(usernameChanger);
initializeWindow(notepad);
initializeWindow(weather);
initializeWindow(clock);

/* ------------Functions------------ */
function initializeWindow(element) {
    dragElement(element);

    const closeBtn = document.getElementById(element.id + "Close");
    if (closeBtn) closeBtn.addEventListener("click", () => closeWindow(element));

    const openBtn = document.getElementById(element.id + "Open");
    if (openBtn) openBtn.addEventListener("click", () => openWindow(element));

    addWindowTapHandling(element);
};

function addWindowTapHandling(element) {
    element.addEventListener("mousedown", () => {
        handleWindowTap(element);
    });
}

function handleWindowTap(element) {
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
}

function dragElement(element) {
    var initialX = 0, initialY = 0, currentX = 0, currentY = 0;

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();

        const rect = element.getBoundingClientRect();
        const computed = window.getComputedStyle(element);
        if (computed.transform && computed.transform !== 'none') {
            element.style.left = rect.left + "px";
            element.style.top = rect.top + "px";
            element.style.transform = 'none';
        }

        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
    }

    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;

        // Not my code, works to keep window in bounds
        element.style.top = Math.min(Math.max(0, element.offsetTop - currentY), Math.max(0, window.innerHeight - element.offsetHeight)) + "px";
        element.style.left = Math.min(Math.max(0, element.offsetLeft - currentX), Math.max(0, window.innerWidth - element.offsetWidth)) + "px";
    }

    function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function closeWindow(element) {
    element.style.display = "none";
}

function openWindow(element) {
    element.style.display = "flex";
    handleWindowTap(element);
}

function keysDetector(e) {
    keys.push(e.key);

    if (keys.length > secretCode.length) {
        keys.shift();
    }

    if (JSON.stringify(keys) === JSON.stringify(secretCode)) {
        konami.style.display = "flex";
    }
}

window.addEventListener('keyup', keysDetector);