import * as React from 'react';

function Board() {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [nextValue, setNextValue] = React.useState('X');
    const [winner, setWinner] = React.useState(null);

    function selectSquare(square) {
        if (squares[square] || winner) {
            return;
        }

        const newSquares = [...squares];
        newSquares[square] = nextValue;
        setSquares(newSquares);

        const newWinner = calculateWinner(newSquares);
        if (newWinner) {
            setWinner(newWinner);
        } else {
            setNextValue(calculateNextValue(newSquares));
        }
    }

    function restart() {
        setSquares(Array(9).fill(null));
        setNextValue('X');
        setWinner(null);
    }

    function renderSquare(i) {
        return (
            <button
                className="square border border-gray-300 hover:bg-blue-100 p-4 text-4xl font-bold"
                onClick={() => selectSquare(i)}
            >
                {squares[i]}
            </button>
        );
    }

    return (
        <div className="w-64 mx-auto mt-8">
            <div className="text-center font-bold text-2xl mb-4">Tic Tac Toe</div>
            <div className="text-center mb-4">STATUS: {calculateStatus(winner, squares, nextValue)}</div>
            <div className="grid grid-cols-3 gap-2">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={restart}
            >
                Restart
            </button>
        </div>
    );
}

function Game() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <Board />
            </div>
        </div>
    );
}

function calculateStatus(winner, squares, nextValue) {
    return winner
        ? `Winner: ${winner}`
        : squares.every(Boolean)
            ? `Scratch: Cat's game`
            : `Next player: ${nextValue}`;
}

function calculateNextValue(squares) {
    return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function App() {
    return <Game />;
}

export default App;
