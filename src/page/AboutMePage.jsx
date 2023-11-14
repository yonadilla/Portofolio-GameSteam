import { useState } from "react";
import Skill from "../components/Skill";
import { motion } from "framer-motion";
import MoreAboutMe from "../components/MoreAboutMe";

export default function AboutmePage({ darkMode }) {
  const [curentPage, setCurentPage] = useState(0);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=""
      >
        <nav className="mt-10 lg:mt-0 lg:h-full">
          <ul className="list-none flex justify-center gap-3 lg:pt-9">
            <li
              onClick={() => setCurentPage(0)}
              className={
                curentPage == 0
                  ? "bg-navCurrent dark:bg-navCurrent_Darkmode px-2 cursor-pointer py-1 rounded-lg text-white"
                  : "bg-nav px-2 cursor-pointer dark:bg-nav_Darkmode py-1 rounded-lg text-black"
              }
            >
              Skill
            </li>
            <li
              onClick={() => setCurentPage(1)}
              className={
                curentPage == 1
                  ? "bg-navCurrent dark:bg-navCurrent_Darkmode px-2 cursor-pointer py-1 rounded-lg text-white"
                  : "bg-nav px-2 cursor-pointer dark:bg-nav_Darkmode py-1 rounded-lg text-black"
              }
            >
              AboutMe
            </li>
          </ul>
        </nav>
        {curentPage == 0 && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{opacity: 1}}
            className=""
          >
            <Skill darkMode={darkMode} />
          </motion.div>
        )}
        {curentPage == 1 && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{opacity: 1}}
          >
            <MoreAboutMe darkMode={darkMode} />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
