// Set up the HTML 5 canvas.
let canvas = document.getElementById("gameBoard");
let ctx = canvas.getContext("2d");

// Get the board size from the user.

// Draw the board.
ctx.fillStyle = "lightgrey";
let board_width = canvas.width - 20;
let board_height = canvas.height - 20;
ctx.fillRect(10, 10, board_width, board_height);

// Prompt the user for the piece color.

// Draw the pieces.

// Initial moves.

// Game loop.
