function Dot({ onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      style={{ opacity: isActive ? 1 : 0.17 }}
      className="dot"
    ></button>
  );
}

export default Dot;
