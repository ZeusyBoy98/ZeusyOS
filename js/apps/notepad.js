let content = JSON.parse(localStorage.getItem("notes")) || [
    {
        title: "Intro",
        date: "23/12/2025",
        content: "The notepad is an intriguing place, where ideas are born and plans are made, a place that truly expresses human creativity. Use it wisely."
    },
    {
        title: "Testing",
        date: "23/12/2025",
        content: "This is a test note to demonstrate the functionality of the notepad application. You can add more notes and switch between them using the sidebar."
    }
];

let currentNoteIndex = 0;

let notesContent = document.getElementById("notesContent");

notesContent.addEventListener("input", () => {
    content[currentNoteIndex].content = notesContent.value;
    localStorage.setItem("notes", JSON.stringify(content));
});

function setNotesContent(index) {
    notesContent = document.getElementById("notesContent");

    currentNoteIndex = index;
    notesContent.value = content[index].content;
}

setNotesContent(0);

function addToSideBar(index) {
    let sidebar = document.getElementById("notepadSidebar");

    let note = content[index];

    let newDiv = document.createElement("div");

    newDiv.classList.add("neu");
    newDiv.style.fontSize = "1vw";
    newDiv.style.padding = "0.5vw";
    newDiv.style.cursor = "pointer";
    newDiv.innerHTML = `
        <div>${note.title}</div>
        <div>${note.date}</div>
    `;

    newDiv.addEventListener("click", () => {
        setNotesContent(index);
    });

    sidebar.appendChild(newDiv);
}

for (let i = 0; i < content.length; i++) {
    addToSideBar(i);
}