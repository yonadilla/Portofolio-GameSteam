import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Svg_home from "../svg/Svg_home";
import Svg_aboutme from "../svg/Svg_aboutme";
import Svg_exit from "../svg/Svg_exit";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ isOpen, toggleOpen, darkMode }) => {
  return (
    <>
      <div className=" flex flex-col translate-y-10 translate-x-5 lg:translate-x-0 lg:absolute lg:top-52 lg:w-full">
        <Link onClick={() => toggleOpen()} to={"/"}>
          <motion.li
            variants={variants}
            whileTap={{ scale: 0.95 }}
            className="m-0 w-full my-3 list-none flex justify-center items-center cursor-pointer  hover:bg-sidebar dark:hover:bg-navCurrent_Darkmode "
            
          >
            <motion.div className=" h-10 flex items-center gap-10 w-52">
              <Svg_home darkMode={darkMode} />
              <p className="">Project</p>
            </motion.div>
          </motion.li>
        </Link>
        <Link onClick={() => toggleOpen()} to={"/aboutme"}>
          <motion.li
            variants={variants}
            whileTap={{ scale: 0.95 }}
            className="m-0 w-full my-3 list-none flex justify-center items-center cursor-pointer  hover:bg-sidebar dark:hover:bg-navCurrent_Darkmode"
            
          >
            <motion.div className=" h-10 flex items-center gap-10 w-52">
              <Svg_aboutme darkMode={darkMode} />
              About Me
            </motion.div>
          </motion.li>
        </Link>
      </div>
    </>
  );
};
