import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar({ onClick }) {
  return (
    <nav className="nav">
      <svg
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
      >
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <div className="underline"></div>
      <div className="navbar-container">
        <ul className="navbar">
          <CustomLink title={"Home"} number={"00"} to="/" />
          <CustomLink title={"Destination"} number={"01"} to="Destination" />
          <CustomLink title={"Crew"} number={"02"} to="/Crew" />
          <CustomLink title={"Technology"} number={"03"} to="/Technology" />
        </ul>
      </div>
      <button onClick={onClick} className="hamburger-btn">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
}

export default Navbar;

export function CustomLink({ to, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <li>
      <Link to={to}>
        <span>{props.number}</span> {props.title}
      </Link>
      <div id="nav-underline" className={isActive ? "active" : ""}></div>
    </li>
  );
}
