import { AnimatePresence, motion } from "framer-motion";
import "../style/Svg_css.css";
import Svg_JavaScript from "./Svg_JavaScript";
import Svg_react from "./Svg_react";
import Svg_tailwindcss from "./Svg_tailwindcss";
import Svg_framer from "./Svg_framer";
import Svg_daisyui from "./Svg_daisyui";
import Svg_vscode from "./Svg_vscode";
import Svg_html from "./Svg_html";
import Svg_css from "./Svg_css";
import Svg_scss from "./Svg_scss";
import Svg_git from "./Svg_git";
import Svg_api from "./Svg_api";
import Svg_figma from "./Svg_figma";
import { useState } from "react";

export default function Svg_borderLarge({ darkMode, t }) {
  const [details, setDetails] = useState("JavaScript");
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
        <motion.g stroke={darkMode ? "#fefefe" : "#0d1b2a"}>
          <g id="">
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
          </g>
          <image
            href="assets/fotoprofil-removebg-preview.png"
            width={"65%"}
            height={"65%"}
            y={100}
            x={-150}
          />

            <g id="">
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
                x1="0"
                y1="0"
                x2="-957"
                y2="0"
                transform="translate(960 785)"
                stroke={darkMode ? "#0d1b2a" : "#edf6f9"}
                strokeWidth="100"
              />
              <motion.line
                variants={pathCircleVariants}
                initial="from"
                animate="to"
                x1="-135"
                y1="0"
                x2="530"
                y2="0"
                transform="translate(296 760)"
                fill="none"
                strokeWidth="20"
              />
              <motion.line
                variants={pathCircleVariants}
                initial="from"
                animate="to"
                x1="-135"
                y1="0"
                x2="530"
                y2="0"
                transform="translate(296 800)"
                fill="none"
                strokeWidth="20"
              />
            </g>
          <motion.line
            variants={pathCircleVariants}
            initial="from"  
            id=""
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
        <g fill={darkMode ? "#fefefe" : "#0d1b2a"}>
          <text fontSize={"40"} y={"770"} x={"50"}>
            HP :
          </text>
          <text fontSize={"40"} y={"810"} x={"48"}>
            MP :
          </text>
        </g>
        <foreignObject width={"100%"} height={"100%"}>
          <div className=" flex absolute right-0 w-1/2 top-16 px-12 justify-between">
            <div className=" flex flex-col gap-8  text-3xl">
              <p>{t("Role")}</p>
              <p>{t("Magic")}</p>
              <p>{t("Magic Sequence")}</p>
              <p>{t("Witchcraft Archives")}</p>
              <p>{t("Weapons")}</p>
              <p>{t("Other")}</p>
            </div>
            <div className=" absolute top-96 text-3xl pt-6">
              <p className="">Details</p>
            </div>

            <div className="flex flex-col items-end gap-5">
              <p className=" text-4xl">Front-end Developer</p>
              <div
                onClick={() => setDetails("JavaScript")}
                data-tooltip="JavaScript"
                className=" cursor-pointer w-12 h-12"
              >
                <Svg_JavaScript />
              </div>
              <div className="flex gap-5">
                <div
                  data-tooltip="React JS"
                  onClick={() => setDetails("React")}
                  className=" cursor-pointer w-12 h-12"
                >
                  <Svg_react />
                </div>
                <div
                  data-tooltip="Tailwind"
                  onClick={() => setDetails("Tailwind")}
                  className="cursor-pointer w-12 h-12"
                >
                  <Svg_tailwindcss />
                </div>
              </div>
              <div className="flex gap-5">
                <div
                  data-tooltip="Framer-Motion"
                  onClick={() => setDetails("Framer")}
                  className=" cursor-pointer w-12 h-12"
                >
                  <Svg_framer />
                </div>
                <div
                  data-tooltip="Daisy ui"
                  onClick={() => setDetails("Daisy")}
                  className=" cursor-pointer w-12 h-12"
                >
                  <Svg_daisyui />
                </div>
              </div>
              <div className="flex gap-5">
                <div
                  data-tooltip="Vs Code"
                  onClick={() => setDetails("Vscode")}
                  className=" cursor-pointer w-12 h-12"
                >
                  <Svg_vscode />
                </div>
                <div
                  data-tooltip="Figma"
                  onClick={() => setDetails("Figma")}
                  className=" cursor-pointer w-12 h-12"
                >
                  <Svg_figma />
                </div>
              </div>
              <div className="flex gap-5">
                <div
                  data-tooltip="HTML5"
                  onClick={() => setDetails("Html")}
                  className=" cursor-pointer w-12 h-12"
                >
                  <Svg_html />
                </div>
                <div
                  data-tooltip="CSS3"
                  onClick={() => setDetails("Css")}
                  className=" cursor-pointer w-12 h-12"
                >
                  <Svg_css />
                </div>
                <div
                  data-tooltip="SCSS"
                  onClick={() => setDetails("Scss")}
                  className=" cursor-pointer w-12 h-12"
                >
                  <Svg_scss />
                </div>
                <div
                  data-tooltip="Git"
                  onClick={() => setDetails("Git")}
                  className=" cursor-pointer w-12 h-12"
                >
                  <Svg_git />
                </div>
                <div
                  data-tooltip="Rest API"
                  onClick={() => setDetails("Rest")}
                  className=" cursor-pointer w-12 h-12"
                >
                  <Svg_api />
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-52 text-3xl px-12 right-0 w-1/2 h-1/3">
            {details == "JavaScript" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("JavaScript")}
              </motion.p>
            )}
            {details == "React" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("React")}
              </motion.p>
            )}
            {details == "Tailwind" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("Tailwind")}
              </motion.p>
            )}
            {details == "Framer" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("Framer")}
              </motion.p>
            )}
            {details == "Daisy" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("Daisy")}
              </motion.p>
            )}
            {details == "Vscode" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("Vscode")}
              </motion.p>
            )}
            {details == "Figma" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("Figma")}
              </motion.p>
            )}
            {details == "Html" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("Html")}
              </motion.p>
            )}
            {details == "Css" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("Css")}
              </motion.p>
            )}
            {details == "Scss" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("Scss")}
              </motion.p>
            )}
            {details == "Git" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("Git")}
              </motion.p>
            )}
            {details == "Rest" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "ease", duration: 1 }}
              >
                {t("Rest")}
              </motion.p>
            )}
          </div>
        </foreignObject>
        <motion.text
          fontSize={"48"}
          x={30}
          fill={darkMode ? "#fefefe" : "#0d1b2a"}
          y={100}
        >
          yon adilla muchammad
        </motion.text>
        <motion.text
          fontSize={"80"}
          fill={darkMode ? "#fefefe" : "#0d1b2a"}
          y={130}
          x={650}
        >
          LV : 99
        </motion.text>
      </svg>
    </div>
  );
}
