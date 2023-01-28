import { useRef, useEffect } from "react";
import Nav from "./Nav";

function Navbar() {
  const homeUnderlineRef = useRef();
  const destinationUnderlineRef = useRef();
  const crewUnderlineRef = useRef();
  const technologyUnderlineRef = useRef();

  useEffect(() => {
    homeUnderlineRef.current.classList.add("active");
  });

  return (
    <nav>
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
          <Nav ref={homeUnderlineRef} number={"00"} title={"home"} />
          <Nav
            ref={destinationUnderlineRef}
            number={"01"}
            title={"destination"}
          />
          <Nav ref={crewUnderlineRef} number={"02"} title={"crew"} />
          <Nav
            ref={technologyUnderlineRef}
            number={"03"}
            title={"technology"}
          />
          <div></div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
