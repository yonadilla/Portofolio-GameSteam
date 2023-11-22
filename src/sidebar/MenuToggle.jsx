import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ isOpen, darkMode, toggleOpen }) => {
  return (
    <button
      onClick={() => toggleOpen()}
      className=" outline-none border-none bg-text select-none cursor-pointer fixed lg:absolute bottom-12 right-[44%] z-50 px-3 py-2 lg:top-5 lg:left-10 lg:w-14 lg:h-14 lg:rounded-e-3xl dark:bg-nav_Darkmode"
    >
      <svg width="23"  height="23" viewBox="0 0 23 23">
        <Path
        stroke={darkMode ? "#ffffff" : "#000000"}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
        stroke={darkMode ? "#ffffff" : "#000000"}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
        stroke={darkMode ? "#ffffff" : "#000000"}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
