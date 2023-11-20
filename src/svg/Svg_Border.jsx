import React from "react";
import { motion } from "framer-motion";
import "../style/Border.css";
import "../style/tooltip.css";
import Svg_JavaScript from "./Svg_JavaScript";
import Svg_react from "./Svg_react";
import Svg_tailwindcss from "./Svg_tailwindcss";
import Svg_framer from "./Svg_framer";
import Svg_daisyui from "./Svg_daisyui";
import Svg_vscode from "./Svg_vscode";
import Svg_figma from "./Svg_figma";
import Svg_html from "./Svg_html";
import Svg_css from "./Svg_css";
import Svg_scss from "./Svg_scss";
import Svg_git from "./Svg_git";
import Svg_api from "./Svg_api";

export default function Svg_Border({ darkMode, t }) {
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
            y1="-969.998958"
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
            x1="-555.904547"
            y1="0"
            x2="545.904547"
            y2="0"
            transform="matrix(1 0 0-1 545.904547 1925.997918)"
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
            y1="-960.998959"
            x2="0"
            y2="955.99896"
            transform="matrix(-1 0 0 1.008766 1089.809094 962.998595)"
            fill="none"
            strokeWidth="3"
          />
          <image
            href="assets/fotoprofil-removebg-preview.png"
            width={"100%"}
            y={50}
          />
          <foreignObject width={"100%"} height={"100%"}>
            <div className=" flex absolute bottom-2 w-full px-8 justify-between">
              <div className=" flex flex-col gap-16  text-5xl">
                <p>{t("Role")}</p>
                <p>{t("Magic")}</p>
                <p>{t("Magic Sequence")}</p>
                <p>{t("Witchcraft Archives")}</p>
                <p>{t("Weapons")}</p>
                <p>{t("Other")}</p>
              </div>
              <div className="flex flex-col items-end gap-8">
                <p className=" text-5xl">Front-end Developer</p>
                <div data-tooltip="JavaScript" className=" w-20 h-20">
                  <Svg_JavaScript />
                </div>
                <div className="flex gap-5">
                  <div data-tooltip="React JS" className=" w-20 h-20">
                    <Svg_react />
                  </div>
                  <div data-tooltip="Tailwind" className=" w-20 h-20">
                    <Svg_tailwindcss />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div data-tooltip="Framer-Motion" className=" w-20 h-20">
                    <Svg_framer />
                  </div>
                  <div data-tooltip="Daisy ui" className=" w-20 h-20">
                    <Svg_daisyui />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div data-tooltip="Vs Code" className=" w-20 h-20">
                    <Svg_vscode />
                  </div>
                  <div data-tooltip="Figma" className=" w-20 h-20">
                    <Svg_figma />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div data-tooltip="HTML5" className=" w-20 h-20">
                    <Svg_html />
                  </div>
                  <div data-tooltip="CSS3" className=" w-20 h-20">
                    <Svg_css />
                  </div>
                  <div data-tooltip="SCSS" className=" w-20 h-20">
                    <Svg_scss />
                  </div>
                  <div data-tooltip="Git" className=" w-20 h-20">
                    <Svg_git />
                  </div>
                  <div data-tooltip="Rest API" className=" w-20 h-20">
                    <Svg_api />
                  </div>
                </div>
              </div>
            </div>
          </foreignObject>
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="-545"
            y1="0"
            x2="535"
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
