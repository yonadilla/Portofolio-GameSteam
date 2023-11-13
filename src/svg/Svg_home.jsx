import React from "react";

export default function Svg_home({darkMode}) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 512 512"
        viewBox="0 0 512 512"
        width="25px"
        height="25px"
        id="project"
      >
        <path
        fill={darkMode ? "#e0e1dd" : "#0d1b2a"}
          d="M452,120V0H60v60H0v392h60v60h392v-60h60V120H452z M60,422H30V150h30V422z M60,120H30V90h30V120z M422,482h-68.787
			L422,413.213V482z M332,460.787V392h68.787L332,460.787z M422,362H302v120H90V30h332V362z M482,422h-30V150h30V422z"
        ></path>
        <g fill={darkMode ? "#e0e1dd" : "#0d1b2a"}>
        <rect width="212" height="30" x="150" y="181"></rect>
        <rect width="212" height="30" x="150" y="241"></rect>
        <rect width="212" height="30" x="150" y="121"></rect>
        </g>
      </svg>
    </div>
  );
}
