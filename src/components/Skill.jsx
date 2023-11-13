import Svg_javascript from "../svg/Svg_javascript";
import Svg_java from "../svg/Svg_java";
import Svg_react from "../svg/Svg_react";
import Svg_springboot from "../svg/Svg_springboot";
import Svg_tailwindcss from "../svg/Svg_tailwindcss";
import Svg_framer from "../svg/Svg_framer";
import Svg_daisyui from "../svg/Svg_daisyui";
import Svg_vscode from "../svg/Svg_vscode";
import Svg_intellej from "../svg/Svg_intellej";
import Svg_postgresql from "../svg/Svg_postgresql";
import Svg_git from "../svg/Svg_git";
import Svg_restapi from "../svg/Svg_restapi";
import Svg_html from "../svg/Svg_html";
import Svg_css from "../svg/Svg_css";
import Svg_sass from "../svg/Svg_sass";
import { motion } from "framer-motion";
import "../style/tooltip.css";
import Svg_Border from "../svg/Svg_Border";
import { useState } from "react";
import useMediaQuery from "../Hooks/useMediaQuery";
import Svg_borderLarge from "../svg/Svg_borderLarge";

export default function Skill({ darkMode }) {
  const [detail, setDetail] = useState("");
  const isLarge = useMediaQuery("(min-width: 1280px)");
  return (
    <>
      <div className=" text-sm lg:text-xl">
        <div className=" relative top-20 h-auto px-[1px]">
          <img
            src={
              darkMode
                ? "assets/foto baru.png"
                : "assets/fotoprofil-removebg-preview.png"
            }
            alt=""
            className=" px-1 lg:relative lg:left-20"
          />
          <div className=" h-11 bg-background dark:bg-background_Darkmod relative px-5 py-2 bottom-9 mx-1 lg:h-12 lg:px-10 lg:bottom-12 lg:w-1/2">
            <div className="flex justify-start gap-3 items-center">
              <p className=" w-10">HP</p>
              <div className=" w-full h-2 flex pl-3">
                <motion.div
                  animate={{ width: `100%` }}
                  transition={{ duration: 1 }}
                  className="dark:bg-text_Darkmode bg-background_Darkmod"
                />
              </div>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <p className="w-10">MP</p>
              <div className=" w-full h-2 flex pl-3">
                <motion.div
                  animate={{ width: `100%` }}
                  transition={{ duration: 1 }}
                  className="dark:bg-text_Darkmode bg-background_Darkmod"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" relative h-0 bottom-[50vh] lg:bottom-[60vh]">
          <div className="">
            {isLarge ? (
              <Svg_borderLarge darkMode={darkMode} />
            ) : (
              <Svg_Border darkMode={darkMode} />
            )}
          </div>
          <div className=" relative bottom-52 flex flex-col w-screen z-0 gap-1 px-5 lg:w-1/2 lg:gap-5 lg:left-1/2 lg:bottom-[85vh]">
            <div className="flex  items-center justify-between lg:px-8">
              <p>Role</p>
              <div className="flex gap-1">web developer</div>
            </div>
            <div className="flex items-center justify-between lg:px-8">
              <p>Sihir</p>
              <div className="flex gap-1">
                <div
                  onClick={() => setDetail("JavaScript")}
                  data-tooltip="JavaScript"
                >
                  <Svg_javascript />
                </div>
                <div onClick={() => setDetail("Java")} data-tooltip="Java">
                  <Svg_java />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between lg:px-8">
              <p>Rangkaian sihir</p>
              <div className="flex gap-1">
                <div data-tooltip="React">
                  <Svg_react />
                </div>
                <div data-tooltip="SpringBoot">
                  <Svg_springboot />
                </div>
                <div data-tooltip="Tailwind">
                  <Svg_tailwindcss />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between lg:px-8">
              <p>Arsip Ilmu Sihir</p>
              <div className="flex gap-1">
                <div data-tooltip="Framer motion">
                  <Svg_framer />
                </div>
                <div data-tooltip="daisyUi">
                  <Svg_daisyui />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between lg:px-8">
              <p>Buku Catatan Ajaib</p>
              <div className="flex gap-1">
                <div data-tooltip="Postgre">
                  <Svg_postgresql />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between lg:px-8">
              <p>Senjata</p>
              <div className="flex gap-1">
                <div data-tooltip="Intellij IDEA">
                  <Svg_intellej />
                </div>
                <div data-tooltip="vsCode">
                  <Svg_vscode />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between lg:px-8">
              <p>Lain</p>
              <div className="flex gap-1">
                <div data-tooltip="HTML5">
                  <Svg_html />
                </div>
                <div data-tooltip="CSS3">
                  <Svg_css />
                </div>
                <div data-tooltip="Sass">
                  <Svg_sass />
                </div>
                <div data-tooltip="Git">
                  <Svg_git />
                </div>
                <div data-tooltip="RestAPI">
                  <Svg_restapi />
                </div>
              </div>
            </div>
            {isLarge && (
              <div className=" text-base">
                <p>Trivia</p>
                {detail == "JavaScript" && (
                  <p>
                    Sihir JavaScript (JS) menghidupkan dunia pemrograman dengan
                    kekuatan untuk menciptakan website yang tak hanya statis,
                    melainkan juga interaktif dan dinamis. Dengan sihirnya,
                    konten berdansa di depan layar, berubah dan bergerak tanpa
                    memerlukan ritual mereload halaman.
                  </p>
                )}
                {detail == "Java" && (
                  <p>
                    Sihir Java, sebuah bahasa pemrograman berorientasi objek,
                    menjelma menjadi kekuatan ajaib yang merajai dunia
                    pemrograman. Bahasa pemrograman ini memiliki kemampuan untuk
                    menyelimuti miliaran perangkat, termasuk komputer notebook,
                    perangkat seluler, konsol game, dan bahkan perangkat medis.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
