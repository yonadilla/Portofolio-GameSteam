import { motion } from "framer-motion";
import AcSubmition from "./components/AcSubmition";
import CountSolved from "./components/CountSolved";
import Language from "./components/Language";
import Profile from "./components/Profile";
import SkillStats from "./components/SkillStats";


export default function StatistikPage() {
  return (
    <div className=" flex flex-col lg:flex-row gap-5">
      <motion.div
      initial={{y : "-200vw"}}
      animate={{y : "0", transition: { type: "tween", duration: 0.3 }}}
      className=" lg:w-[30%] bg-slate-200 shadow-2xl dark:bg-gray-500 rounded-md h-[50%] p-2 flex flex-col gap-6">
        <Profile />
        <Language/>
        <SkillStats />
      </motion.div>
      <motion.div
      initial={{x : "150vw"}}
      animate={{x : "0", transition: { type: "tween", duration: 0.3 }}}
      className=" lg:w-[65%] shadow-2xl bg-slate-200 dark:bg-gray-500 rounded-md h-[50%] p-2 flex flex-col gap-6 px-5 mb-8 lg:mb-0">
        <CountSolved />
        <AcSubmition/>
      </motion.div>
    </div>
  );
}
