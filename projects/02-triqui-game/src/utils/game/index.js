import { POSIBLE_HANDS } from "../../consts";

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
