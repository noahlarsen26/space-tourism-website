import Heading from "../../Heading";
import firstImg from "../../../assets/technology/image-launch-vehicle-portrait.jpg";
import secondImg from "../../../assets/technology/image-space-capsule-portrait.jpg";
import thirdImg from "../../../assets/technology/image-spaceport-portrait.jpg";
import data from "../../../data.json";
import { useState, useRef } from "react";
import TechButton from "../../buttons/TechButton";

function Technology() {
  const [tech, setTech] = useState(0);
  const imgRef = useRef();

  function setTechHandler1() {
    setTech(0);
    imgRef.current.src = firstImg;
  }
  function setTechHandler2() {
    setTech(1);
    imgRef.current.src = secondImg;
  }
  function setTechHandler3() {
    setTech(2);
    imgRef.current.src = thirdImg;
  }
  // console.log(imgRef.current.style[0]);

  return (
    <div className="bg-4">
      <div className="technology-container">
        <Heading
          className={"tech-heading"}
          number={"03"}
          heading={"space launch 101"}
        />
        <div className="info-container">
          <div className="info">
            <div className="tech-info">
              <div className="btn-container">
                <TechButton
                  onClick={setTechHandler1}
                  number={"1"}
                  isActive={tech === 0}
                />
                <TechButton
                  onClick={setTechHandler2}
                  number={"2"}
                  isActive={tech === 1}
                />
                <TechButton
                  onClick={setTechHandler3}
                  number={"3"}
                  isActive={tech === 2}
                />
              </div>
              <article>
                <h3>the terminology...</h3>
                <h2>{data.technology[tech].name}</h2>
                <p>{data.technology[tech].description}</p>
              </article>
            </div>
            <div className="img-container">
              <img ref={imgRef} src={firstImg} alt="" />
              {/* <div
                style={{
                  backgroundImage: `url(${firstImg})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                ref={imgRef}
                className="img"
              ></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
