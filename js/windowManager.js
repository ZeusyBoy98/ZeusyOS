dragElement(document.getElementById("test"));
dragElement(document.getElementById("usernameChanger"));

const testClose = document.getElementById("testClose");
const testOpen = document.getElementById("testOpen");

const usernameChangerClose = document.getElementById("usernameChangerClose");
const usernameChangerOpen = document.getElementById("userText");

usernameChangerClose.addEventListener("click", function() {
    closeWindow(document.getElementById("usernameChanger"));
})

usernameChangerOpen.addEventListener("click", function() {
    openWindow(document.getElementById("usernameChanger"));
})

testClose.addEventListener("click", function() {
    closeWindow(document.getElementById("test"));
})

testOpen.addEventListener("click", function() {
    openWindow(document.getElementById("test"));
})

function dragElement(element) {
    var initialX = 0, initialY = 0, currentX = 0, currentY = 0;

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
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
}