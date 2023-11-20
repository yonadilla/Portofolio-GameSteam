import { AnimatePresence, motion } from "framer-motion";
import { MenuItem } from "./MenuItem";



export const Navigation = ({ isOpen, toggleOpen, darkMode, isLarge }) => {

  const variants = {
    open: {
      height : isLarge ? 1000 : 350,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      height : 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul  variants={variants} className=" fixed z-20 backdrop:bg-slate-700 lg:top-0  lg:left-0 lg:w-1/4 bottom-0 bg-text dark:bg-nav_Darkmode w-full " initial="closed" animate="open" exit="closed">
            <MenuItem darkMode={darkMode} toggleOpen={toggleOpen}  isOpen={isOpen} />
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
