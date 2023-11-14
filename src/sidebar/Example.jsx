import { useRef, } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "./use-demension";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import useMediaQuery from "../Hooks/useMediaQuery";

export const Example = ({ isOpen, darkMode, toggleOpen }) => {
  const isLarge = useMediaQuery("(min-width: 1280px)");
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  

  const sidebarLarge = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      >
        <motion.div
        variants={sidebarLarge}
          className=" absolute top-48 w-full bg-text dark:bg-nav_Darkmode lg:w-1/4"
          
        />
        <MenuToggle
          darkMode={darkMode}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
        />
        <Navigation
        isLarge={isLarge}
          darkMode={darkMode}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
        />
      </motion.nav>
    </>
  );
};
