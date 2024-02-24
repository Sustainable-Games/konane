// Set up the HTML 5 canvas.
let canvas = document.getElementById("gameBoard");
let ctx = canvas.getContext("2d");

// Get the board size from the user.
let boardSize = 4;

// Draw the board.
function drawBoard(size) {
  ctx.fillStyle = "lightgrey";
  let boardWidth = canvas.width - 20;
  let boardHeight = canvas.height - 20;
  ctx.fillRect(10, 10, boardWidth, boardHeight);
  let cellSize = boardWidth / size;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      ctx.beginPath();
      const x = cellSize / 2 + i * cellSize + 10;
      const y = cellSize / 2 + j * cellSize + 10;
      const radius = cellSize / 2 - cellSize / 5;
      const startAngle = 0;
      const endAngle = 2 * Math.PI;
      ctx.arc(x, y, radius, startAngle, endAngle);
      ctx.stroke();
    }
  }  
}

// Initialize the board state.
let boardState = [];
let pieceColor = 0;
for (let i = 0; i < boardSize; i++) {
  boardState[i] = [];
  for (let j = 0; j < boardSize; j++) {
    boardState[i][j] = pieceColor;
    pieceColor = (pieceColor + 1) % 2;
  }
  pieceColor = (pieceColor + 1) % 2;
}
console.table(boardState);

// Prompt the user for the piece color.

// Draw the pieces.
function drawPieces(size, state) {
  let boardWidth = canvas.width - 20;
  let cellSize = boardWidth / size;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      ctx.beginPath();
      const x = cellSize / 2 + i * cellSize + 10;
      const y = cellSize / 2 + j * cellSize + 10;
      const radius = cellSize / 2 - cellSize / 4;
      const startAngle = 0;
      const endAngle = 2 * Math.PI;
      ctx.arc(x, y, radius, startAngle, endAngle);
      if (state[i][j] === 0) {
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke();
      } else {
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
      }
    }
  }  
}

// Detect click or touch.
function getEventPosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  selectPiece(x, y);
}

function selectPiece(eventX, eventY) {
  console.log("x: " + eventX, "y: " + eventY);
}

// Initial moves.
drawBoard(boardSize);
drawPieces(boardSize, boardState);

// Game loop.


// Add event listeners.
canvas.addEventListener("mousedown", function(e) {
  getEventPosition(canvas, e);
});
