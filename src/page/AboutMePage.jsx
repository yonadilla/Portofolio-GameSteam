import { useState } from "react";
import Skill from "../components/Skill";
import { AnimatePresence, motion } from "framer-motion";
import MoreAboutMe from "../components/MoreAboutMe";

export default function AboutmePage({ darkMode }) {
  const [curentPage, setCurentPage] = useState(0);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 1000, transition: { type: "spring", duration: 2 } }}
          exit={{y:0}}
          className=" fixed z-50 top-0 bottom-0 left-0 right-0 w-full h-full bg-text dark:bg-background_Darkmod"
        />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <nav className="mt-20 lg:mt-0 ">
            <ul className="list-none flex justify-center gap-3 lg:pt-9">
              <li
                onClick={() => setCurentPage(0)}
                className={
                  curentPage == 0
                    ? "bg-navCurrent dark:bg-navCurrent_Darkmode px-2 py-1 rounded-lg text-white"
                    : "bg-nav px-2 dark:bg-nav_Darkmode py-1 rounded-lg text-black"
                }
              >
                Skill
              </li>
              <li
                onClick={() => setCurentPage(1)}
                className={
                  curentPage == 1
                    ? "bg-navCurrent dark:bg-navCurrent_Darkmode px-2 py-1 rounded-lg text-white"
                    : "bg-nav px-2 dark:bg-nav_Darkmode py-1 rounded-lg text-black"
                }
              >
                AboutMe
              </li>
            </ul>
          </nav>
          {curentPage == 0 && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className=""
            >
              <Skill darkMode={darkMode} />
            </motion.div>
          )}
          {curentPage == 1 && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <MoreAboutMe darkMode={darkMode} />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
