import useMediaQuery from "../../../Hooks/useMediaQuery";
import Svg_JavaScript from "../../../svg/Svg_JavaScript";
import Svg_html from "../../../svg/Svg_html";
import Svg_css from "../../../svg/Svg_css";
import Svg_scss from "../../../svg/Svg_scss";
import Svg_tailwindcss from "../../../svg/Svg_tailwindcss";
import Svg_java from "../../../svg/Svg_java";
import Svg_nodejs from "../../../svg/Svg_nodejs";
import Svg_typescript from "../../../svg/Svg_typescript";
import Svg_react from "../../../svg/Svg_react";
import Svg_express from "../../../svg/Svg_express";
import Svg_nextjs from "../../../svg/Svg_nextjs";
import Svg_springboot from "../../../svg/Svg_springboot";
import Svg_postgre from "../../../svg/Svg_postgre";
import Svg_prisma from "../../../svg/Svg_prisma";
import Svg_framer from "../../../svg/Svg_framer";
import Svg_daisyui from "../../../svg/Svg_daisyui";
import SvgGithub from "../../../svg/SvgGithub";
import SvgGmail from "../../../svg/SvgGmail";
import SvgInstagram from "../../../svg/SvgInstagram";
import SvgLinkIdn from "../../../svg/SvgLinkIdn";
import "../../../style/tooltip.css"

export default function Skill({ darkMode, t }) {
  const isLarge = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <div className="text-sm lg:text-xl  pt-5">
        <h2 className=" text-2xl font-bold">SKILL</h2>
        <div className="">
          <p className="py-4 font-bold">Front end</p>
          <div className=" flex gap-3">
            <div
            data-tooltip="HTML"
            className=" w-14 h-14">
              <Svg_html />
            </div>
            <div
            data-tooltip="CSS"
            className=" w-14 h-14">
              <Svg_css />
            </div>
            <div
            data-tooltip="SCSS"
             className=" w-14 h-14">
              <Svg_scss />
            </div>
            <div
            data-tooltip="Tailwind"
            className=" w-14 h-14">
              <Svg_tailwindcss />
            </div>
            <div
            data-tooltip="JavaScript"
            className=" w-14 h-14">
              <Svg_JavaScript />
            </div>
            <div
            data-tooltip="TypeScript"
            className=" w-14 h-14">
              <Svg_typescript />
            </div>
          </div>
        </div>
        <div className="">
          <p className="py-4 font-bold">Back end</p>
          <div className=" flex gap-3">
            <div
            data-tooltip="Java"
            className=" w-14 h-14">
              <Svg_java />
            </div>
            <div
            data-tooltip="NodeJS"
            className=" w-14 h-14">
              <Svg_nodejs />
            </div>
          </div>
        </div>
        <div className=" ">
          <p className="py-4 font-bold">Framework</p>
          <div className=" flex gap-3">
            <div
            data-tooltip="React.Js"
            className=" w-14 h-14">
              <Svg_react />
            </div>
            <div
            data-tooltip="Express.Js"
            className=" w-14 h-14">
              <Svg_express darkMode={darkMode} />
            </div>
            <div
            data-tooltip="Next.Js"
            className=" w-14 h-14">
              <Svg_nextjs />
            </div>
            <div 
            data-tooltip="Spring Boot"
            className=" w-14 h-14">
              <Svg_springboot />
            </div>
          </div>
        </div>
        <div className=" ">
          <p className="py-4 font-bold">Database</p>
          <div className=" flex gap-3">
            <div 
            data-tooltip="Postgresql"
            className=" w-14 h-14">
              <Svg_postgre />
            </div>
            <div 
            data-tooltip="Prisma db"
            className=" w-14 h-14">
              <Svg_prisma />
            </div>
          </div>
        </div>
        <div className=" ">
          <p className="py-4 font-bold">Library</p>
          <div className=" flex gap-3">
            <div 
            data-tooltip="Framer motion"
            className=" w-14 h-14">
              <Svg_framer />
            </div>
            <div 
            data-tooltip="Daisy-ui"
            className=" w-14 h-14">
              <Svg_daisyui />
            </div>
            <div 
            data-tooltip="shadcn ui"
            className=" w-14 h-14">
              <img src="shadcn.png" alt="" srcSet="" className=" rounded-md" />
            </div>
          </div>
        </div>
        <div className="pt-10">
          <p>{t("contacme")}</p>
          <p className=" font-bold text-2xl pt-5">{t("Contact")}</p>
          <div className=" flex w-auto lg:w-1/2 lg:h-1/2 z-0">
            <div>
              <a
                href="mailto:yonadi322@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgGmail darkMode={darkMode} t={t} />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/mousetri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgInstagram darkMode={darkMode} />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/yonadilla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgGithub darkMode={darkMode} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/yon-adilla-muchammad-37035b175/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgLinkIdn darkMode={darkMode} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
