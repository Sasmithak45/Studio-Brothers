let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        document.querySelector(`.cell:nth-child(${index + 1})`).textContent = currentPlayer;
        
        if (checkWinner()) {
            document.getElementById('status').textContent = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (gameBoard.every(cell => cell !== '')) {
            document.getElementById('status').textContent = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `Current Player: ${currentPlayer}`;
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.getElementById('status').textContent = 'Current Player: X';

    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
}

// Initial setup
document.getElementById('status').textContent = 'Current Player: X';
