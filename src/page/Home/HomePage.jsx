import { useEffect, useRef, useState } from "react";
import "../../style/DropDown.css";
import { motion } from "framer-motion";
import useClickOutside from "../../Hooks/useClickOutside";
import Svg_darkmode from "../../svg/Svg_darkmode";
import Svg_lightmode from "../../svg/Svg_lightmode";
import useMediaQuery from "../../Hooks/useMediaQuery";
import ChangeLng from "../../components/ChangeLng";
import FilterPc from "./components/FilterPc";
import FilterMobile from "./components/FilterMobile";
import Volume from "./components/Volume";
import ProjectImg from "./components/ProjectImg"
import { Howl } from "howler";

export default function Home({ darkMode, setDarkMode, t, volume, setVolume }) {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef();
  const [query, setQuery] = useState("All");
  const [modal, setModal] = useState(null);
  useClickOutside(filterRef, () => {
    if (isOpen);
    setIsOpen(false);
  });

  const isLarge = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (modal && isLarge) {
      document.body.style.position = "fixed";
      document.body.style.overflow = "scroll-y";
    } else if (modal && !isLarge) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
    }
    return () => {
      document.body.style.position = "relative";
      document.body.style.overflow = "";
    };
  }, [modal, isLarge]);

  var soundOpen = new Howl({
    src: ["/assets/sound/confirmation_negative.wav"],
    volume : volume,
    preload : true
  });

  var soundClose = new Howl({
    src: ["/assets/sound/confirmation_positive.wav"],
    volume : volume,
    preload : true
  });
  return (
    <>
      <motion.div className="flex flex-col gap-10">
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0, transition: { type: "tween", duration: 0.5 } }}
          exit={{ y: "-100vh", transition: { type: "tween", duration: 0.5 } }}
          className="flex justify-around lg:items-center mt-6 lg:mt-0"
        >
          {isLarge ? (
            <div>
              <FilterPc
                volume={volume}
                isLarge={isLarge}
                query={query}
                setQuery={setQuery}
                darkMode={darkMode}
              />
            </div>
          ) : (
            <div className="">
              <FilterMobile
                volume={volume}
                isLarge={isLarge}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                query={query}
                filterRef={filterRef}
                darkMode={darkMode}
                setQuery={setQuery}
              />
            </div>
          )}
          <div className=" flex gap-2 h-fit">
            <div className=" ">
              <button onClick={() => {setDarkMode(!darkMode), darkMode ? soundOpen.play() : soundClose.play()}}>
                {darkMode ? <Svg_darkmode /> : <Svg_lightmode />}
              </button>
            </div>
            <div className="">
              <ChangeLng volume={volume} />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100vh" }}
          animate={{
            opacity: 1,
            y: 0  ,
            transition: { type: "tween", duration: 0.5 },
          }}
          exit={{ y : isLarge ? "100vh" : 0, x : isLarge ? 0: "100vw" }}
          className=""
        >
          <div className="">
            <ProjectImg volume={volume} isLarge={isLarge} query={query} setModal={setModal} t={t} modal={modal} />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
