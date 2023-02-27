function TechButton({ onClick, number, isActive }) {
  return (
    <button
      style={{
        background: isActive ? "white" : "transparent",
        color: isActive ? "black" : "white",
      }}
      onClick={onClick}
    >
      {number}
    </button>
  );
}

export default TechButton;
