import {useState} from 'react';


function Square({isWinning, value, onSquareClick}) {
    //return <button className="square" onClick={onSquareClick} >{value}</button>;
    // 根据值决定样式类名
    let className = value === "X"
        ? `square square-x ${isWinning ? 'square-winner' : ''}`
        : value === "O"
            ? `square square-o ${isWinning ? 'square-winner' : ''}`
            : `square ${isWinning ? 'square-winner' : ''}`;
    // console.log("Square渲染~");

    return (
        <button className={className} onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Status({isDraw, winner, xIsNext}) {
    // 统一处理状态信息
    const status = winner
        ? `Winner is ${winner}`
        : `${isDraw ? `The game ends with no winner` : `Next player: ${xIsNext ? "X" : "O"}`} `;

    // 根据是否有获胜者添加不同类名
    const statusClass = winner ? "status status-winner" : "status";

    return (
        <div className={statusClass}>
            {status}
        </div>
    );

}

// Game组件
export default function Game() {
    // const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        // setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        // setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;
        let icon;
        if (move > 0) {
            description = 'Go to move #' + move;
            icon = "↩️";
        } else {
            description = 'Go to game start';
            icon = "🏁";
        }
        const isCurrentMove = move === currentMove;
        return (
            // <li key={move}>
            //     <button className="move-button"  onClick={() => jumpTo(move)}>{description}</button>
            // </li>
            <li key={move} className={`move-item ${isCurrentMove ? 'current-move' : ''}`}>
                <button
                    className="move-button"
                    onClick={() => jumpTo(move)}
                    disabled={isCurrentMove}
                >
                    <span className="move-icon">{icon}</span>
                    <span className="move-description">{description}</span>
                    {isCurrentMove && <span className="current-indicator">•</span>}
                </button>
            </li>
        );
    });

    return (
        // <div className="game">
        //     <div className="game-board">
        //         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        //     </div>
        //     <div className="game-info">
        //         <ol>{moves}</ol>
        //     </div>
        // </div>
        <div className="game">
            <div className="game-header">
                <h1 className="game-title">Tic Tac Toe</h1>
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
                </div>
            </div>

            <div className="game-info">
                <h2 className="moves-title">Game History</h2>
                <ol className="moves-list">{moves}</ol>
            </div>
        </div>
    );
}

// Board 组件
function Board({xIsNext, squares, onPlay}) {

    const winnerInfo = calculateWinner(squares);
    const winner = winnerInfo ? winnerInfo.winner : null;
    const winningLine = winnerInfo ? winnerInfo.line : null;
    // 在 Board 组件中计算平局状态
    const isDraw = !winner && squares.every(square => square !== null);
    // 点击 函数
    function handleClick(i) {
        const nextSquares = squares.slice();
        if (nextSquares[i] != null) {
            console.log("当前square已经点击过啦");
            return;
        }
        if (winner) {
            console.log("当前已经有获胜者了");
            return;
        }


        nextSquares[i] = xIsNext ? "X" : "O";

        onPlay(nextSquares);

    }

    return (
        <div className="board-container">
            <Status isDraw={isDraw} winner={winner} xIsNext={xIsNext}/>

            <div className="board-row">
                <Square isWinning={winningLine?.includes(0)} value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square isWinning={winningLine?.includes(1)}  value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square isWinning={winningLine?.includes(2)} value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>

            <div className="board-row">
                <Square isWinning={winningLine?.includes(3)} value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square isWinning={winningLine?.includes(4)} value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square isWinning={winningLine?.includes(5)} value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square isWinning={winningLine?.includes(6)} value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square isWinning={winningLine?.includes(7)} value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square isWinning={winningLine?.includes(8)} value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
    );
}

// 计算获胜者
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (const line of lines) {
        const [a, b, c] = line;
        // 存在获胜者
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

            return {
                winner: squares[a],
                line: line
            };
        }
    }
    return null;
}
