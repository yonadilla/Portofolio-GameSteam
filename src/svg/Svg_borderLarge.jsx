import { motion } from "framer-motion";

export default function Svg_borderLarge({ darkMode }) {
  const pathCircleVariants = {
    from: {
      opacity: 0,
      pathLength: 0,
    },
    to: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className=" mx-4">
      <svg
        id="e2zE5csYOyT1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1920 1080"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <motion.g
          stroke={darkMode ? "#e0e1dd" : "#0d1b2a"}
        >
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="0"
            y1="-300"
            x2="0"
            y2="540"
            transform="translate(0 300)"
            fill="none"
            strokeWidth="3"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="-960"
            y1="0"
            x2="960"
            y2="0"
            transform="translate(960 840)"
            fill="none"
            strokeWidth="3"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="0"
            y1="540"
            x2="0"
            y2="-300"
            transform="translate(1920 300)"
            fill="none"
            strokeWidth="3"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="960"
            y1="0"
            x2="-960"
            y2="0"
            transform="translate(960 0)"
            fill="none"
            strokeWidth="3"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="0"
            y1="-540"
            x2="0"
            y2="540"
            transform="matrix(-1 0 0 0.786748 960 415.15608)"
            fill="none"
            strokeWidth="3"
          />
          <motion.path
          variants={pathCircleVariants}
          initial="from"
          animate="to"
          fill={darkMode ? "#0d1b2a" : "#edf6f9"}
            d="M0,440q560,0,520,0L680,240"
            transform="translate(0-240)"
            strokeWidth="3"
          />
        </motion.g>
        <motion.text
          fontSize={"48"}
          x={30}
          fill={darkMode ? "#e0e1dd" : "#0d1b2a"}
          y={100}
        >
          yon adilla muchammad
        </motion.text>
        <motion.text
          fontSize={"80"}
          fill={darkMode ? "#e0e1dd" : "#0d1b2a"}
          y={130}
          x={650}
        >
          LV : 99
        </motion.text>
      </svg>
    </div>
  );
}
