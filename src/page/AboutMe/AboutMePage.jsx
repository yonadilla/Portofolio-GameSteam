import { motion } from "framer-motion";
import Skill from "./components/Skill";
import AboutMe from "./components/MoreAboutMe";
export default function About({ darkMode, setDarkMode, t, volume }) {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { type: "tween", duration: 0.3 },
        }}
        className=" px-5"
      >
        <main className="">
          
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0, transition: { type: "tween", duration: 0.3 } }}
            className=" mt-8"
          >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { type: "tween", duration: 0.5 },
                }}
              >
                <AboutMe t={t} darkMode={darkMode} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { type: "tween", duration: 0.5 },
                }}
              >
                <Skill t={t} darkMode={darkMode} />
              </motion.div>
          </motion.div>
        </main>
      </motion.div>
    </>
  );
}
