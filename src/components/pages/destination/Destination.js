import data from "../../../data.json";
import Planet from "./planets/Planet";
import moonImg from "../../../assets/destination/image-moon.png";
import marsImg from "../../../assets/destination/image-mars.png";
import europaImg from "../../../assets/destination/image-europa.png";
import titanImg from "../../../assets/destination/image-titan.png";
import { useState, useRef } from "react";
import Heading from "../../Heading";

function Destination() {
  const [planet, setPlanet] = useState(0);
  const imgRef = useRef();

  const [moonActive, moonIsActive] = useState(true);
  const [marsActive, marsIsActive] = useState(false);
  const [europaActive, europaIsActive] = useState(false);
  const [titanActive, titanIsActive] = useState(false);

  function setMoonHandler() {
    setPlanet(0);
    moonIsActive(true);
    marsIsActive(false);
    europaIsActive(false);
    titanIsActive(false);
    imgRef.current.src = moonImg;
  }
  function setMarsHandler() {
    setPlanet(1);
    marsIsActive(true);
    moonIsActive(false);
    europaIsActive(false);
    titanIsActive(false);
    imgRef.current.src = marsImg;
  }
  function setEuropaHandler() {
    setPlanet(2);
    europaIsActive(true);
    moonIsActive(false);
    marsIsActive(false);
    titanIsActive(false);
    imgRef.current.src = europaImg;
  }
  function setTitanHandler() {
    setPlanet(3);
    titanIsActive(true);
    moonIsActive(false);
    marsIsActive(false);
    europaIsActive(false);
    imgRef.current.src = titanImg;
  }

  return (
    <div className="bg-2">
      <div className="main-container">
        {/* <div className="pick-destination">
          <h1>
            <span>01</span> pick your destination
          </h1> */}
        <Heading
          className={"pick-destination"}
          number={"01"}
          heading={"pick your destination"}
        />
        {/* </div> */}
        <div className="destination-container">
          <div className="planet-desc-container">
            <div className="planet-container">
              <img
                className="planet"
                ref={imgRef}
                src={moonImg}
                alt="planet-picture"
              />
            </div>
            <div className="planet-info">
              <ul>
                <li onClick={setMoonHandler}>
                  <button>moon</button>
                  <div
                    id="planet-underline"
                    className={moonActive ? "active" : ""}
                  ></div>
                </li>
                <li onClick={setMarsHandler}>
                  <button>mars</button>
                  <div
                    id="planet-underline"
                    className={marsActive ? "active" : ""}
                  ></div>
                </li>
                <li onClick={setEuropaHandler}>
                  <button>europa</button>
                  <div
                    id="planet-underline"
                    className={europaActive ? "active" : ""}
                  ></div>
                </li>
                <li onClick={setTitanHandler}>
                  <button>titan</button>
                  <div
                    id="planet-underline"
                    className={titanActive ? "active" : ""}
                  ></div>
                </li>
              </ul>
              <Planet
                name={data.destinations[planet].name}
                description={data.destinations[planet].description}
                distance={data.destinations[planet].distance}
                travel={data.destinations[planet].distance}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
