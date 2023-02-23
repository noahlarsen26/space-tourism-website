import Heading from "../../Heading";
import CrewInfo from "./CrewInfo";

function Crew() {
  return (
    <div className="bg-3">
      <div className="crew">
        <Heading
          className={"heading-container"}
          number={"02"}
          heading={"meet your crew"}
        />
        <CrewInfo />
      </div>
    </div>
  );
}

export default Crew;
