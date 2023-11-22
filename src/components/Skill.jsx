import Svg_Border from "../svg/Svg_Border";
import { useState } from "react";
import useMediaQuery from "../Hooks/useMediaQuery";
import Svg_borderLarge from "../svg/Svg_borderLarge";

export default function Skill({ darkMode, t }) {
  const isLarge = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <div className=" px-6 text-sm lg:text-xl ">
        <div className=" pt-10 pb-28  ">
          <div className="">
            {isLarge ? (
              <Svg_borderLarge darkMode={darkMode} t={t} />
            ) : (
              <Svg_Border t={t} darkMode={darkMode} />
            )}
          </div>
            
        </div>
      </div>
    </>
  );
}
