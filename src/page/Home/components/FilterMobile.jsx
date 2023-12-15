import { stagger, useAnimate } from "framer-motion";
import React, { useEffect } from "react";
import useUpdateEffect from "../../../Hooks/useUpdateEffect";

export default function FilterMobile({
  isLarge,
  setIsOpen,
  isOpen,
  query,
  darkMode,
  setQuery,
  filterRef,
  volume
}) {
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
  function useMenuAnimation() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

      animate(
        "ul",
        {
          clipPath: isOpen
            ? "inset(0% 0% 0% 0% round 10px)"
            : "inset(10% 50% 90% 50% round 10px)",
          borderColor: darkMode ? "#ffff" : "#000",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "10px",
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.5,
        }
      );

      animate(
        "li",
        isOpen
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
        {
          duration: 0.2,
          delay: isOpen ? staggerMenuItems : 0,
        }
      );
    }, [isOpen]);

    return scope;
  }
 const scope = useMenuAnimation(isOpen);

 function handleFilter(query) {
    setQuery(query);
    setIsOpen(false);
  }

  useUpdateEffect(() => {
    const soundTab = new Audio("/src/sound/deck_ui_tab_transition_01.wav")
    soundTab.play()
    soundTab.volume = volume
  },[isOpen])
  return (
    <div>
      <nav className=" " ref={scope}>
        <div className=" flex ">
          {!isLarge && (
            <div ref={filterRef}>
              <button
                className=" border-solid border-black flex rounded-lg justify-between px-2 items-center border w-32 text-black dark:text-white  dark:border-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {query}
                <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                  <svg width="15" height="15" viewBox="0 0 20 20">
                    <path
                      d="M0 7 L 20 7 L 10 16"
                      fill={darkMode ? "#fff" : "#000"}
                    />
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>
        <ul
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
          className={" translate-y-5 p-3 w-48 z-10 bg-white dark:bg-black "}
        >
          <div className=" ">
            <li onClick={() => handleFilter("All")}>All </li>
            <li onClick={() => handleFilter("ReactJS")}>React js</li>
            <li onClick={() => handleFilter("JavaScript")}>JavaScript</li>
            <li onClick={() => handleFilter("Others")}>Others</li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
