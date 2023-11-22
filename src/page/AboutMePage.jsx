import { motion } from "framer-motion";
import { useState } from "react";
import Skill from "../components/Skill";
import AboutMe from "../components/MoreAboutMe";

export default function About({ darkMode, setDarkMode, t }) {
  const [currentPage, setCurrentPage] = useState("Skill");
  let tabs = [
    { id: "Skill", label: "Skill" },
    { id: "About", label: "About" },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { type: "tween", duration: 0.5 },
        }}
        className=""
      >
        <main className="">
          <div className=" flex justify-center relative top-9 gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCurrentPage(tab.label)}
                className={`${
                  currentPage == tab.label ? "" : "hover:text-black/50 dark:hover:text-white/50"
                } relative rounded-xl px-3 py-1.5 font-medium outline-2 transition focus-visible:outline `}
              >
                {currentPage == tab.id && (
                  <motion.div
                    layoutId="active"
                    className=" absolute inset-0  bg-navCurrent dark:bg-navCurrent_Darkmode"
                    style={{ borderRadius: 12 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className=" relative z-20 ">{tab.label}</span>
              </button>
            ))}
          </div>
          <div className=" mt-8">
            {currentPage == "Skill" && (
              <motion.div
              initial={{ opacity: 0, }}
              animate={{ opacity: 1 ,  transition: { type: "tween", duration: 0.5 },}}
              >
                <Skill t={t} darkMode={darkMode} />
              </motion.div>
            )}
            {currentPage == "About" && (
              <motion.div
              initial={{ opacity: 0, }}
              animate={{ opacity: 1 , transition: { type: "tween", duration: 0.5 },}}
              >
                <AboutMe t={t} darkMode={darkMode} />
              </motion.div>
            )}
          </div>
        </main>
      </motion.div>
    </>
  );
}
