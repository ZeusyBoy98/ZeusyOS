const buttons = [
    document.getElementById("homeButton"),
    document.getElementById("metoobButton"),
    document.getElementById("forumButton"),
    document.getElementById("docsButton"),
];

const pages = [
    document.getElementById("landslideHome"),
    document.getElementById("metoob"),
    document.getElementById("forum"),
    document.getElementById("docs"),
];

buttons.forEach((button, i) => {
    button.onclick = () => switchWindow(pages[i]);
});

function switchWindow(activePage) {
    pages.forEach(page => {
        page.style.display = "none";
    });

    activePage.style.display = "flex";
}