import PlanetHeading from "../destination/planetData/PlanetHeading";
import PlanetTime from "../destination/planetData/PlanetTime";
import PlanetDistance from "../destination/planetData/PlanetDistance";
import PlanetDescription from "../destination/planetData/PlanetDescription";

function Planet(props) {
  return (
    <>
      <div className="planet-name">
        <PlanetHeading heading={props.name} />
      </div>
      <div className="planet-description">
        <PlanetDescription description={props.description} />
      </div>
      <div className="line-container">
        <div></div>
      </div>
      <div className="facts-container">
        <div className="distance-container">
          <h3>avg. distance</h3>
          <PlanetDistance distance={props.distance} />
        </div>
        <div className="travel-time-container">
          <h3>est. travel time</h3>
          <PlanetTime time={props.travel} />
        </div>
      </div>
    </>
  );
}

export default Planet;
