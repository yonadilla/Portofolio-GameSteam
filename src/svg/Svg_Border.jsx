import React from "react";
import { motion } from "framer-motion";
import Svg_css from "../svg/Svg_css";

export default function Svg_Border({ darkMode }) {
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
    <div>
      <svg
        id="edhc34FRk8r1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1080 1920"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <motion.g
          stroke={darkMode ? "#e0e1dd" : "#0d1b2a"}
          transform="matrix(.964633 0 0 0.985137 19.271639 14.313055)"
        >
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="0"
            y1="-962.998958"
            x2="0"
            y2="962.998959"
            transform="translate(-9.8091 962.998959)"
            fill="none"
            strokeWidth="3"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="-544.904547"
            y1="0"
            x2="544.904547"
            y2="0"
            transform="matrix(1 0 0-1 544.904547 1925.997918)"
            fill="none"
            strokeWidth="3"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="540"
            y1="0"
            x2="-540"
            y2="0"
            transform="matrix(1.018165 0 0-1 540-6.035145)"
            fill="none"
            strokeWidth="3"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="0"
            y1="-962.998959"
            x2="0"
            y2="962.99896"
            transform="matrix(-1 0 0 1.008766 1089.809094 962.998595)"
            fill="none"
            strokeWidth="3"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="-540"
            y1="0"
            x2="540"
            y2="0"
            transform="matrix(1.018165 0 0-1 544.904547 1294.448723)"
            fill="none"
            strokeWidth="3"
          />
          <motion.path
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            d="M0,195.004285l703.037781-2.368421L840.406162,0.000001"
            transform="matrix(1.023344 0 0 1.086586-9.80922-8.44232)"
            fill={darkMode ? "#0d1b2a" : "#edf6f9"}
            strokeWidth="3.84"
          />
          <motion.text
          variants={pathCircleVariants}
          initial="from"
          animate="to"
          fontSize={"50"} x={30}  fill={darkMode ? "#e0e1dd" : "#0d1b2a"} y={100}>
            yon adilla muchammad
          </motion.text>
        </motion.g>
          <motion.text
          variants={pathCircleVariants}
          initial="from"
          animate="to"
          fontSize={"80"} fill={darkMode ? "#e0e1dd" : "#0d1b2a"} y={130} x={800}>LV : 99</motion.text>
      </svg>
    </div>
  );
}
