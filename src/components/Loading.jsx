import { motion } from "framer-motion";
import useDarkMode from "../Hooks/useDarkMode";
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

export default function Loading() {
    const [darkMode, setDarkMode] = useDarkMode();
    console.log(darkMode);
  return (
    <div className=" flex justify-center items-center h-[100vh] bg-background dark:bg-background_Darkmod">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className=" stroke-black"
        widths={100}
        height={100}
      >
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          fill={"none"}
          stroke={darkMode ? "#e0e1dd" : "#0d1b2a"}
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            fill: {repeat: Infinity, duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </div>
  );
}
