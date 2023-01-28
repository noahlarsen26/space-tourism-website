import React from "react";

function Nav(props, ref) {
  return (
    <li
      onMouseLeave={() => ref.current.classList.remove("hover")}
      onMouseOver={() => ref.current.classList.add("hover")}
    >
      <a href="#home"></a>
      <span>{props.number}</span> {props.title}
      <div ref={ref}></div>
    </li>
  );
}
const forwardedRef = React.forwardRef(Nav);

export default forwardedRef;
