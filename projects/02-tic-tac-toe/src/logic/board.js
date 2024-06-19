import { WINNER_COMBOS } from "../constans";

export const checkWinner = (boardCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardCheck[a] &&
      boardCheck[a] === boardCheck[b] &&
      boardCheck[a] === boardCheck[c]
    ) {
      return boardCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((cell) => cell !== null); //si todas las casillas estan ocupada
};
