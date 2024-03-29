import { stagger, useAnimate } from "framer-motion";
import React, { useEffect } from "react";
export default function FilterMobile({
  isLarge,
  setIsOpen,
  isOpen,
  query,
  darkMode,
  setQuery,
  filterRef,
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

  let tabs = [
    { id: "All", label: "All" },
    { id: "JavaScript", label: "JavaScript" },
    { id: "TypeScript", label: "TypeScript" },
    { id: "Node", label: "Node" },
    { id: "Springboot", label: "Java" },
    { id: "Others", label: "Others" },
  ];
  
  let label ;

  if (query == "Springboot") {
    label = "Java"
  } else {
    label = query
  }
  return (
    <div>
      <nav className=" w-fit" ref={scope}>
        <div className=" flex">
          {!isLarge && (
            <div ref={filterRef}>
              <button
                className=" border-solid border-black flex rounded-lg justify-between px-2 items-center border w-32 text-black dark:text-white  dark:border-white"
                onClick={() => {setIsOpen(!isOpen) }}
              >
                {label}
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
          className={" translate-y-5 p-3 w-32 z-10 bg-white dark:bg-black "}
        >
            {tabs.map((tab, index) => (
              <li
              key={index}
              onClick={() => handleFilter(tab.id)}
              >
                {tab.label}
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
