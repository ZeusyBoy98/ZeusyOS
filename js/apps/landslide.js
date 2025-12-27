const searchBar = document.getElementById("landslideSearchBar");

const pages = [
    {
        button: document.getElementById("homeButton"),
        page: document.getElementById("landslideHome"),
        label: "lctp://landslide.rocks"
    },
    {
        button: document.getElementById("metoobButton"),
        page: document.getElementById("metoob"),
        label: "lctp://metoob.com"
    },
    {
        button: document.getElementById("forumButton"),
        page: document.getElementById("forum"),
        label: "lctp://blueit.com"
    },
    {
        button: document.getElementById("docsButton"),
        page: document.getElementById("docs"),
        label: "about:landslidedocs"
    }
];

pages.forEach(({ button, page, label }) => {
    button.onclick = () => switchWindow(page, label);
});

function switchWindow(activePage, label) {
    pages.forEach(({ page }) => {
        page.style.display = "none";
    });

    activePage.style.display = "flex";
    searchBar.textContent = label;
}
