import React from "react";
import { motion } from "framer-motion";
import "../style/Border.css";
import "../style/tooltip.css";

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
    <div className="">
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
            transform="matrix(1.021165 0 0-1 540-6.035145)"
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
          <image
            href="assets/fotoprofil-removebg-preview.png"
            width={"100%"}
            y={50}
          />
          <g
            fill={darkMode ? "#e0e1dd" : "#0d1b2a"}
            transform="translate(50,1400)"
            fontSize={"40"}
          >
            <text>Role</text>
            <text y={80}>Sihir</text>
            <text y={160}>Rangkaian Sihir</text>
            <text y={240}>Arsip Ilmu Sihir</text>
            <text y={320}>Senjata</text>
            <text y={400}>Lain</text>
          </g>
          <g
            fill={darkMode ? "#e0e1dd" : "#0d1b2a"}
            className=""
            width={"100%"}
            height={"100%"}
            transform="translate(850,1300)"
          >
            <text fontSize={40} x={-250} y={100}>
              Front-End Developer
            </text>
            <image
              href="assets/icons/icons8-javascript (1).svg"
              x={100}
              y={100}
              width={"7%"}
              height={"7%"}
            />
            <image
              href="assets/icons/icons8-react.svg"
              y={180}
              width={"7%"}
              height={"7%"}
            />
            <image
              href="assets/icons/icons8-tailwind-css.svg"
              x={100}
              y={180}
              width={"7%"}
              height={"7%"}
            />
            <image
              href="assets/icons/framer.svg"
              y={260}
              width={"7%"}
              height={"7%"}
            />
            <image
              href="assets/icons/daisyui-logomark.svg"
              x={100}
              y={260}
              width={"7%"}
              height={"7%"}
            />
            <image
              href="assets/icons/icons8-visual-studio.svg"
              x={100}
              y={340}
              width={"7%"}
              height={"7%"}
            />
            <image
              href="assets/icons/cloud-api.svg"
              x={100}
              y={420}
              width={"7%"}
              height={"7%"}
            />
            <image
              href="assets/icons/icons8-git.svg"
              x={0}
              y={420}
              width={"7%"}
              height={"7%"}
            />
            <image
              href="assets/icons/icons8-css3 (1).svg"
              x={-100}
              y={420}
              width={"7%"}
              height={"7%"}
            />
            <image
              href="assets/icons/icons8-html (1).svg"
              x={-200}
              y={420}
              width={"7%"}
              height={"7%"}
            />
          </g>
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
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="-540"
            y1="0"
            x2="540"
            y2="0"
            transform="matrix(0.8 0 0-2 600.904547 1200.448723)"
            fill="none"
            strokeWidth="10"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="-540"
            y1="0"
            x2="540"
            y2="0"
            transform="matrix(0.8 0 0-2 600.904547 1254.448723)"
            fill="none"
            strokeWidth="10"
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
            fontSize={"50"}
            x={30}
            fill={darkMode ? "#e0e1dd" : "#0d1b2a"}
            y={100}
          >
            yon adilla muchammad
          </motion.text>
        </motion.g>
        <motion.text
          variants={pathCircleVariants}
          initial="from"
          animate="to"
          fontSize={"80"}
          fill={darkMode ? "#e0e1dd" : "#0d1b2a"}
          y={130}
          x={800}
        >
          LV : 99
        </motion.text>
        <g fill={darkMode ? "#e0e1dd" : "#0d1b2a"}>
          <text fontSize={"40"} y={"1210"} x={"80"}>
            HP
          </text>
          <text fontSize={"40"} y={"1265"} x={"80"}>
            MP
          </text>
        </g>
      </svg>
    </div>
  );
}
