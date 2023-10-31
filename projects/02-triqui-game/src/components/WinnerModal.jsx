import { setPlayerClassName } from "../utils/game";

function WinnerModal({ winner, onReset }) {
  if (winner == null) return;

  const winnerClassName = setPlayerClassName(winner);
  const winnerText = winner ? winner : "Empate";
  return (
    <div className="winnerModal">
      <div className="winnerModal-body">
        <strong className={winnerClassName}>{winnerText}</strong>
        <br />
        <button onClick={onReset} type="button">
          Volver a empezar
        </button>
      </div>
    </div>
  );
}

export default WinnerModal;
