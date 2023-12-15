import { motion } from "framer-motion";

export default function Footer({ darkMode }) {
  return (
    <div>
      <motion.footer
      initial={{y : "100vh"}}
      animate={{y : 0}}
      exit={{y : "100vh"}}
        className={
          " flex justify-center bg-text dark:bg-sidebar_Darkmode w-full"
        }
      >
        <div className=" flex text-xs items-center py-2 flex-col">
        <div className="">
          <p> &copy; 2023 created by yon</p>
          </div>
          <div>
            All icons From
            <a
              href="https://icons8.com/icons"
              className="text-underline pl-1 font-size-sm"
            >
              Icons8
            </a>{" "}
            And{" "}
            <a
              href="https://iconscout.com"
              className="text-underline font-size-sm"
            >
              IconScout
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
