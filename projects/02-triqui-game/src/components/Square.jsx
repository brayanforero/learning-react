function Square({ children, index, onSelect, selected, playerClassName }) {
  const handleClick = () => {
    onSelect(index);
  };

  const squareCss = selected ? "square is-selected" : "square";

  return (
    <div onClick={handleClick} role="button" className={squareCss}>
      <span className={playerClassName}>{children}</span>
    </div>
  );
}

export default Square;
