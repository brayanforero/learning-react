import { POSIBLE_HANDS, TURNS } from "../../consts";

export const checkWinner = (boardToCheck) => {
  for (let line of POSIBLE_HANDS) {
    const [a, b, c] = line;

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndOfGame = (boardToCheck) => {
  return boardToCheck.every((s) => s !== null);
};

export const setPlayerClassName = (player) => {
  return player === TURNS.X ? "player-1" : "player-2";
};
