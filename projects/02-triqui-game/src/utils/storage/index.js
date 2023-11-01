export const saveBoard = ({ board, hand }) => {
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("hand", hand);
};

export const cleanBoard = () => {
  window.localStorage.removeItem();
  window.localStorage.removeItem();
};
