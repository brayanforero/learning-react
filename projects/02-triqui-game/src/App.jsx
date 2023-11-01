import { useState } from "react";
import "./App.css";
import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";
import { TURNS } from "./consts";
import { checkEndOfGame, checkWinner, setPlayerClassName } from "./utils/game";
import { cleanBoard, saveBoard } from "./utils/storage";

const INITIAL_BOARD = Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(() => {
    const storageBoard = window.localStorage.getItem("board");
    return !storageBoard ? INITIAL_BOARD : JSON.parse(storageBoard);
  });

  const [hand, setHand] = useState(() => {
    const storageHand = window.localStorage.getItem("hand");
    return !storageHand ? TURNS.X : storageHand;
  });

  const [winner, setWinner] = useState(null);

  const setHandOnBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = hand;
    setBoard(newBoard);

    const newHand = hand === TURNS.X ? TURNS.O : TURNS.X;
    setHand(newHand);

    saveBoard({ board: newBoard, hand: newHand });
    const hasWinner = checkWinner(newBoard);

    if (hasWinner) setWinner(hasWinner);
    if (checkEndOfGame(newBoard)) setWinner(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setHand(TURNS.X);
    setWinner(null);
    cleanBoard();
  };

  return (
    <main className="board">
      <h1 className="board-title">Triqui Game</h1>
      <section className="grid">
        {board.map((hand, index) => (
          <Square
            key={index}
            index={index}
            onSelect={setHandOnBoard}
            playerClassName={setPlayerClassName(hand)}
          >
            {hand}
          </Square>
        ))}
      </section>
      <section className="board-footer">
        <Square selected={hand === TURNS.X}>{TURNS.X}</Square>
        <Square selected={hand === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} onReset={resetGame} />
    </main>
  );
}

export default App;
