import moon from "../../assets/destination/image-moon.png";

function Destination() {
  return (
    <div className="bg-2">
      <div className="main-container">
        <div className="pick-destination">
          <h1>
            <span>01</span> pick your destination
          </h1>
        </div>
        <div className="destination-container">
          <div className="planet-container">
            <img className="planet" src={moon} alt="moon-picture" />
          </div>
          <div className="planet-desc-container">
            <ul>
              <li>
                <button>moon</button>
              </li>
              <li>
                <button>mars</button>
              </li>
              <li>
                <button>europa</button>
              </li>
              <li>
                <button>titan</button>
              </li>
            </ul>
            <div className="planet-name">
              <h2>moon</h2>
            </div>
            <div className="planet-description">
              <p>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
            </div>
            <div className="line-container">
              <div></div>
            </div>
            <div className="facts-container">
              <div className="distance-container">
                <h3>avg. distance</h3>
                <h4>384,400 km</h4>
              </div>
              <div className="travel-time-container">
                <h3>est. travel time</h3>
                <h4>3 days</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
