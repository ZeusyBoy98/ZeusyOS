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
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
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