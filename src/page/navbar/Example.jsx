import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import useMediaQuery from "../../Hooks/useMediaQuery";
import useUpdateEffect from "../../Hooks/useUpdateEffect";

export const Example = ({ isOpen, darkMode, toggleOpen, volume }) => {
  const isLarge = useMediaQuery("(min-width: 1024px)");

  useUpdateEffect(() => {
    const soundNavigation = new Audio ("/src/sound/deck_ui_navigation.wav")
    soundNavigation.play ()
    soundNavigation.volume = volume
  },[isOpen])
  return (
    <>
      <motion.nav className=" flex justify-center" initial={false} animate={isOpen ? "open" : "closed"}>
        <div className={isOpen ? " h-full absolute top-0 z-20 w-full " : ""} />
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
