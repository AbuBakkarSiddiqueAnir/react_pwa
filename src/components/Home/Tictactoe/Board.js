import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  const renderSquares = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          onClick(i);
        }}
      />
    );
  };

  return (
    <div >
      <div className="board-row text-3xl">
        {renderSquares(0)}
        {renderSquares(1)}
        {renderSquares(2)}
      </div>
      <div className="board-row">
        {renderSquares(3)}
        {renderSquares(4)}
        {renderSquares(5)}
      </div>
      <div className="board-row">
        {renderSquares(6)}
        {renderSquares(7)}
        {renderSquares(8)}
      </div>
    </div>
  );
};

export default Board;
