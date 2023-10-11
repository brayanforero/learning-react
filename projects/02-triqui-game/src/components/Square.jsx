function Square({ children, index, onSelect, selected }) {
  const handleClick = () => {
    onSelect(index);
  };

  const squareCss = selected ? "square is-selected" : "square";

  return (
    <div onClick={handleClick} role="button" className={squareCss}>
      {children}
    </div>
  );
}

export default Square;
