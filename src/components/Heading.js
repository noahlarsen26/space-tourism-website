function Heading({ className, number, heading }) {
  return (
    <div className={className}>
      <h1>
        <span>{number}</span> {heading}
      </h1>
    </div>
  );
}

export default Heading;
