const butt = document.getElementById("sketchResetButton");

    function getRandomRGB() {
        const r = Math.floor(Math.random() * 256); // Random value for red (0-255)
        const g = Math.floor(Math.random() * 256); // Random value for green (0-255)
        const b = Math.floor(Math.random() * 256); // Random value for blue (0-255)
        return `rgb(${r}, ${g}, ${b})`; // Return as a string in RGB format
    }

    function createGrid(squares) {
        const container = document.getElementById("container");
        container.innerHTML = '';
        container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;

        for (let i = 0; i < squares * squares; i++) {
            const div = document.createElement("div");
            div.classList.add("item");
            container.appendChild(div);

            div.addEventListener("mouseover", function change() {
            div.style.backgroundColor = getRandomRGB();
            })
        }
    }

    butt.addEventListener("click", function popup() {
        squares = prompt("How many squares should the grid be?");
        if (squares < 101 && squares > 0) {
            createGrid(squares);
        }
        else {prompt("Number out of range, try again.")}
    })