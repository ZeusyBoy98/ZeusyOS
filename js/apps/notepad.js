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

const newNoteButton = document.getElementById("newNoteButton");
const deleteNoteButton = document.getElementById("deleteNoteButton");

deleteNoteButton.addEventListener("click", () => {
    deleteNote(currentNoteIndex);
});

let notesContent = document.getElementById("notesContent");
let notesTitle = document.getElementById("notesTitle");

newNoteButton.addEventListener("click", () => {
    newNote();
});

notesTitle.addEventListener("input", () => {
    content[currentNoteIndex].title = notesTitle.value;
    localStorage.setItem("notes", JSON.stringify(content));
});

notesContent.addEventListener("input", () => {
    content[currentNoteIndex].content = notesContent.value;
    localStorage.setItem("notes", JSON.stringify(content));
});

function setNotesContent(index) {
    notesContent = document.getElementById("notesContent");
    notesTitle = document.getElementById("notesTitle");

    currentNoteIndex = index;
    notesTitle.value = content[index].title;
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

    let titleDiv = document.createElement("div");
    let dateDiv = document.createElement("div");

    titleDiv.textContent = note.title;
    dateDiv.textContent = note.date;

    newDiv.append(titleDiv, dateDiv);

    newDiv.addEventListener("click", () => {
        setNotesContent(index);
    });

    notesTitle.addEventListener("input", () => {
        if (currentNoteIndex === index) {
            titleDiv.textContent = notesTitle.value;
        }
    });

    sidebar.appendChild(newDiv);
}


for (let i = 0; i < content.length; i++) {
    addToSideBar(i);
}

function newNote() {
    content.push({
        title: "",
        date: new Date().toLocaleDateString("en-GB"),
        content: ""
    });
    localStorage.setItem("notes", JSON.stringify(content));
    addToSideBar(content.length - 1);
    setNotesContent(content.length - 1);
}

function deleteNote(index) {
    content.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(content));
    
    if (currentNoteIndex >= content.length) {
        currentNoteIndex = content.length - 1;
    }

    const sidebar = document.getElementById("notepadSidebar");
    sidebar.innerHTML = "";
    for (let i = 0; i < content.length; i++) {
        addToSideBar(i);
    }
    if (content.length > 0) {
        setNotesContent(currentNoteIndex);
    } else {
        notesTitle.value = "";
        notesContent.value = "";
    }
}