import React from "react";
import Dot from "../../buttons/Dot";
import { useState, useRef } from "react";
import firstImg from "../../../assets/crew/image-douglas-hurley.png";
import secondImg from "../../../assets/crew/image-mark-shuttleworth.png";
import thirdImg from "../../../assets/crew/image-victor-glover.png";
import fourthImg from "../../../assets/crew/image-anousheh-ansari.png";
import data from "../../../data.json";

function CrewInfo() {
  const imgRef = useRef();
  const [crew, setCrew] = useState(0);

  function setFirstCrewHandler() {
    setCrew(0);
    imgRef.current.src = firstImg;
  }
  function setSecondCrewHandler() {
    setCrew(1);
    imgRef.current.src = secondImg;
  }
  function setThirdCrewHandler() {
    setCrew(2);
    imgRef.current.src = thirdImg;
  }
  function setFourthCrewHandler() {
    setCrew(3);
    imgRef.current.src = fourthImg;
  }

  return (
    <div className="crew-container">
      <div className="crew-member-info">
        <h3>{data.crew[crew].role}</h3>
        <h2>{data.crew[crew].name}</h2>
        <p>{data.crew[crew].bio}</p>
        <div className="dots">
          <Dot onClick={setFirstCrewHandler} isActive={crew === 0} />
          <Dot onClick={setSecondCrewHandler} isActive={crew === 1} />
          <Dot onClick={setThirdCrewHandler} isActive={crew === 2} />
          <Dot onClick={setFourthCrewHandler} isActive={crew === 3} />
        </div>
      </div>
      <div className="img-container">
        <img ref={imgRef} src={firstImg} alt="crew-member-image" />
      </div>
    </div>
  );
}
export default CrewInfo;
