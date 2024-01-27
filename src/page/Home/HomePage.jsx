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
import ProjectImg from "./components/ProjectImg";

export default function Home({ darkMode, setDarkMode, t }) {
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
      document.body.style.position = "sticky";
      document.body.style.overflow = "auto";
    } else if (modal && !isLarge) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
    }
    return () => {
      document.body.style.position = "relative";
      document.body.style.overflow = "";
    };
  }, [modal, isLarge]);

  return (
    <>
      <motion.div className="flex flex-col gap-10">
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0, transition: { type: "tween", duration: 0.3 } }}
          className="flex justify-around lg:items-center mt-6 lg:mt-0"
        >
          {isLarge ? (
            <FilterPc
              isLarge={isLarge}
              darkMode={darkMode}
              query={query}
              setQuery={setQuery}
            />
          ) : (
            <FilterMobile
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              isLarge={isLarge}
              darkMode={darkMode}
              query={query}
              setQuery={setQuery}
            />
          )}
          <div className=" flex gap-2 h-fit">
            <div className=" ">
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                {darkMode ? <Svg_darkmode /> : <Svg_lightmode />}
              </button>
            </div>
            <div className="">
              <ChangeLng />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100vh" }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "tween", duration: 0.3 },
          }}
          className=""
        >
          <div className="">
            <ProjectImg
              isLarge={isLarge}
              query={query}
              setModal={setModal}
              t={t}
              modal={modal}
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
