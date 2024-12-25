const boxContainer = document.querySelector(".box-container");
const userInput = document.querySelector("#userInputGridSize");
const returnUserInput = document.querySelector("#gridSize");
const inputError = document.querySelector("#error");

function createGrid(gridSize) {
    boxContainer.innerHTML = ''; // Clear existing grid
    const totalBoxes = gridSize * gridSize;

    for (let i = 0; i < totalBoxes; i++) {
        const div = document.createElement('div');
        div.classList.add('small-box');
        boxContainer.append(div);

        // Add hover effect
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "blue"; // Change to any color you like
        });

        boxContainer.append(div);
    }

    // Update box size dynamically
    const boxSize = 100 / gridSize; // Percentage size
    document.querySelectorAll('.small-box').forEach((box) => {
        box.style.width = `${boxSize}%`;
        box.style.height = `${boxSize}%`;
    });
}
createGrid(16)
returnUserInput.addEventListener("click", function () {
    createGrid(userInput.value)
})