import { useState } from "react";
import "./App.css";
import Square from "./components/Square";
import { TURNS } from "./consts";
import { checkEndOfGame, checkWinner } from "./utils/game";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [hand, setHand] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const setHandOnBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = hand;
    setBoard(newBoard);

    const newHand = hand === TURNS.X ? TURNS.O : TURNS.X;
    setHand(newHand);

    const hasWinner = checkWinner(newBoard);

    if (hasWinner) setWinner(hasWinner);
    if (checkEndOfGame(newBoard)) setWinner(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setHand(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="board">
      <h1 className="board-title">Triqui Game</h1>
      <section className="grid">
        {board.map((hand, index) => (
          <Square key={index} index={index} onSelect={setHandOnBoard}>
            {hand}
          </Square>
        ))}
      </section>
      <section className="board-footer">
        <Square selected={hand === TURNS.X}>{TURNS.X}</Square>
        <Square selected={hand === TURNS.O}>{TURNS.O}</Square>
      </section>
      <hr />
      {winner !== null && (
        <>
          <strong>{winner ? `Has ganado ${winner}` : "Empate"}</strong>
          <br />
          <button onClick={resetGame} type="button">
            Volver a empezar
          </button>
        </>
      )}
    </main>
  );
}

export default App;
