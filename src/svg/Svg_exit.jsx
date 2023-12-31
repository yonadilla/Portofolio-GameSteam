import React from "react";

export default function Svg_exit({darkMode}) {
  return (
    <div>
      <svg
        width={"25px"}
        height={"25px"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        id="exit"
      >
        <g fill={darkMode ? "#e0e1dd" : "#0d1b2a"}>
          <path
            d="M43.453 50.953H20.547a7.508 7.508 0 0 1-7.5-7.5V20.547a7.508 7.508 0 0 1 7.5-7.5h22.906a7.508 7.508 0 0 1 7.5 7.5v22.906a7.508 7.508 0 0 1-7.5 7.5ZM20.547 16.047a4.505 4.505 0 0 0-4.5 4.5v22.906a4.505 4.505 0 0 0 4.5 4.5h22.906a4.505 4.505 0 0 0 4.5-4.5V20.547a4.505 4.505 0 0 0-4.5-4.5Z"
          ></path>
          <path
            d="M39.071 40.571a1.495 1.495 0 0 1-1.06-.44L23.868 25.99a1.5 1.5 0 0 1 2.121-2.12L40.132 38.01a1.5 1.5 0 0 1-1.06 2.56Z"
          ></path>
          <path
            d="M24.929 40.571a1.5 1.5 0 0 1-1.06-2.56L38.01 23.868a1.5 1.5 0 0 1 2.12 2.121L25.99 40.132a1.495 1.495 0 0 1-1.06.44Z"
          ></path>
        </g>
      </svg>
    </div>
  );
}
