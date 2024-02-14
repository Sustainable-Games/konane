// Set up the HTML 5 canvas.
let canvas = document.getElementById("gameBoard");
let ctx = canvas.getContext("2d");

// Get the board size from the user.
let boardSize = 6;

// Draw the board.
ctx.fillStyle = "lightgrey";
let boardWidth = canvas.width - 20;
let boardHeight = canvas.height - 20;
ctx.fillRect(10, 10, boardWidth, boardHeight);
let cellSize = boardWidth / boardSize;
for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    ctx.beginPath();
    const x = cellSize / 2 + i * cellSize + 10;
    const y = cellSize / 2 + j * cellSize + 10;
    const radius = cellSize / 2 - 20;
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.stroke();
  }
}

// Initialize the board state.

// Prompt the user for the piece color.

// Draw the pieces.

// Initial moves.

// Game loop.
