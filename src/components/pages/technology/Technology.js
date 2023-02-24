import Heading from "../../Heading";
import firstImg from "../../../assets/technology/image-launch-vehicle-landscape.jpg";

function Technology() {
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
            <div className="btn-container">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <article>
              <h3>the terminology...</h3>
              <h2>launch vehicle</h2>
              <p>
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </article>
            <div className="img-container">
              <img src={firstImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
