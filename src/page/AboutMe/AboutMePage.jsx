import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Skill from "./components/Skill";
import AboutMe from "./components/MoreAboutMe";
import useSound from "use-sound";
import useUpdateEffect from "../../Hooks/useUpdateEffect";
import { Howl } from "howler";

export default function About({ darkMode, setDarkMode, t, volume }) {
  const [currentPage, setCurrentPage] = useState("Skill");
  let tabs = [
    { id: "Skill", label: "Skill" },
    { id: "About", label: "About" },
  ];

  useUpdateEffect(() => {
    var sound = new Howl({
      src: ["/assets/sound/deck_ui_tab_transition_01.wav"],
      volume : volume,
      preload : true
    });
    sound.play();
    },[currentPage])
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { type: "tween", duration: 0.5 },
        }}
        className=""
      >
        <main className="">
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0, transition: { type: "tween", duration: 0.3 } }}
            exit={{ y: "-100vh" }}
            className=" w-[50%] mx-auto lg:left-[40%] dark:bg-[#FF53cd] dark:shadow-neon-pink rounded-xl lg:w-fit p-1 bg-black  gap-8"
          >
            <div className=" dark:bg-background_Darkmod bg-background rounded-lg p-1 flex justify-around">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setCurrentPage(tab.label)
                  }}
                  className={`${
                    currentPage == tab.label
                      ? ""
                      : "hover:text-black/50 dark:hover:text-white/50"
                  } relative rounded-xl px-3 py-1.5 font-medium outline-2 transition focus-visible:outline `}
                >
                  {currentPage == tab.id && (
                    <motion.div
                      layoutId="active"
                      className=" absolute inset-0 bg-navCurrent rounded-xl dark:bg-[#2dd9fe] dark:shadow-neon-blue"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className=" relative z-20 ">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0, transition: { type: "tween", duration: 0.3 } }}
            exit={{ y: "100vh", transition: { type: "spring", duration: 0.2 } }}
            className=" mt-8"
          >
            {currentPage == "Skill" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { type: "tween", duration: 0.5 },
                }}
              >
                <Skill t={t} darkMode={darkMode} />
              </motion.div>
            )}
            {currentPage == "About" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { type: "tween", duration: 0.5 },
                }}
              >
                <AboutMe t={t} darkMode={darkMode} />
              </motion.div>
            )}
          </motion.div>
        </main>
      </motion.div>
    </>
  );
}
