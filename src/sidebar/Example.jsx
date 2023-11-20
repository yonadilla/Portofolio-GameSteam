import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import useMediaQuery from "../Hooks/useMediaQuery";

export const Example = ({ isOpen, darkMode, toggleOpen }) => {
  const isLarge = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      >
        <div
          className={isOpen ? " h-full absolute top-0 z-20 w-full lg:w-full" : ""}
          
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
