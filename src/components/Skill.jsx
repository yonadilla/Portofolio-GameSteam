import Svg_Border from "../svg/Svg_Border";
import { useState } from "react";
import useMediaQuery from "../Hooks/useMediaQuery";
import Svg_borderLarge from "../svg/Svg_borderLarge";

export default function Skill({ darkMode }) {
  const [detail, setDetail] = useState("");
  const isLarge = useMediaQuery("(min-width: 1280px)");
  return (
    <>
      <div className=" text-sm lg:text-xl ">
        <div className=" pt-10 pb-28  ">
          <div className="">
            {isLarge ? (
              <Svg_borderLarge darkMode={darkMode} />
            ) : (
              <Svg_Border darkMode={darkMode} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
