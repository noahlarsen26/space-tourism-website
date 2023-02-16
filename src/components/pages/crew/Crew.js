import crewImg from "../../../assets/crew/image-douglas-hurley.png";

function Crew() {
  return (
    <div className="bg-3">
      <div className="crew">
        <div className="heading-container">
          <h1>
            <span>02</span>meet your crew
          </h1>
        </div>
        <div className="crew-container">
          <div className="crew-member-info">
            <h3>commander</h3>
            <h2>douglas hurley</h2>
            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
            <div className="dots">
              <button className="dot"></button>
              <button className="dot"></button>
              <button className="dot"></button>
              <button className="dot"></button>
            </div>
          </div>
          <div className="img-container">
            <img src={crewImg} alt="crew-member-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
