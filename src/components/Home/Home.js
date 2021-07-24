import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import Board from "./Tictactoe/Board";
import CalculateWinner from "./Tictactoe/Helper/CalculateWinner";

const Home = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);

  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const history_C_1 = history.slice(0, stepNumber + 1);
    const current = history[history_C_1.length - 1];
    const squares = current.squares.slice();
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(
      history.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
    history.splice(step + 1, 8);
  };

  const history_C_2 = history;
  const current = history_C_2[stepNumber];
  const winner = CalculateWinner(current.squares);
  console.log(history);
  const moves = history.map((step, move) => {
    const desc = move ? `Fot to move # ${move}` : `Go to game start`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) status = `Winner: ` + winner;
  else status = "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div className="grid justify-center">
      <span className="text-3xl">
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={(i) => handleClick(i)} />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Home;
