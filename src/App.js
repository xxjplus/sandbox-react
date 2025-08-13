import {useState} from 'react';


function Square({value, onSquareClick}) {
  //return <button className="square" onClick={onSquareClick} >{value}</button>;
  // 根据值决定样式类名
  const className = value === "X" 
  ? "square square-x" 
  : value === "O" 
    ? "square square-o" 
    : "square";
    console.log("Square渲染~");

return (
  <button className={className} onClick={onSquareClick}>
    {value}
  </button>
);
}

function Status({winner, xIsNext}) {
  // 统一处理状态信息
  const status = winner 
    ? `Winner is ${winner}` 
    : `Next player: ${xIsNext ? "X" : "O"}`;
  
  // 根据是否有获胜者添加不同类名
  const statusClass = winner ? "status status-winner" : "status";
  
  return (
    <div className={statusClass}>
      {status}
    </div>
  );
  
}


export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  // let status;
  // if(winner) {
  //   status = "Winner is " + winner;
  // } else {
  //   status = "Next player: " + (xIsNext ? "X" : "O");
  // }

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

    setXIsNext(!xIsNext);
    setSquares(nextSquares);
    // this.Square.button.className = xIsNext ? "squareX" : "squareO";
    
  }

  return (
    <>
      <Status winner={winner} xIsNext ={xIsNext}/>

      <div className="board-row">
        <Square value ={squares[0]} onSquareClick = {() => handleClick(0)} />
        <Square value ={squares[1]} onSquareClick = {() => handleClick(1)} />
        <Square value ={squares[2]} onSquareClick = {() => handleClick(2)} />
      </div>
      
      <div className="board-row">
        <Square value ={squares[3]} onSquareClick = {() => handleClick(3)} />
        <Square value ={squares[4]} onSquareClick = {() => handleClick(4)} />
        <Square value ={squares[5]} onSquareClick = {() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value ={squares[6]} onSquareClick = {() => handleClick(6)} />
        <Square value ={squares[7]} onSquareClick = {() => handleClick(7)} />
        <Square value ={squares[8]} onSquareClick = {() => handleClick(8)} />
      </div>
    </>
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
