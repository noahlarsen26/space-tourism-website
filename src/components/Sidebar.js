import { CustomLink } from "./Navbar/Navbar";

function Sidebar({ onClick }) {
  return (
    <aside>
      <nav className="side-nav">
        <div className="close-side">
          <button onClick={onClick}>x</button>
        </div>
        <ul>
          <CustomLink title={"Home"} number={"00"} to="/" />
          <CustomLink title={"Destination"} number={"01"} to="Destination" />
          <CustomLink title={"Crew"} number={"02"} to="/Crew" />
          <CustomLink title={"Technology"} number={"03"} to="/Technology" />
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
