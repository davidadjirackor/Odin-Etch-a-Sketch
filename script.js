const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");

function createGrid(size) {
  // Clear previous squares
  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "grey";
    });

    container.appendChild(square);
  }
}

// Ask for new grid size
resizeBtn.addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (max 100):");

  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(newSize);
});

// Initialize default grid
createGrid(16);
