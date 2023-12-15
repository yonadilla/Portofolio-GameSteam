import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({darkMode, volume}) {
  const path = useLocation();
  const [activeLink, setActiveLink] = useState( path.pathname);
  
  let sidebar = [
    { id: "Home", label: "Home", path: "/" },
    { id: "About Me", label: "About Me", path: "/aboutme" },
    { id: "Statistic", label: "Statistic", path: "/statistic" },
  ];
  
  useEffect(() => {
    const soundNavigation = new Audio ("/src/sound/deck_ui_navigation.wav")
    soundNavigation.play ()
    soundNavigation.volume = volume
  
  },[activeLink])
  return (
    <div className=" fixed top-0 w-full my-6">
      <div className={ ` ${darkMode == true ?  " shadow-neon-pink " : " border-black " }  rounded-xl bg-black dark:bg-[#FF53cd] p-1 w-52 `}>
        <ul className=" h-[90vh] flex flex-col items-center justify-center w-full bg-background dark:bg-background_Darkmod rounded-lg gap-4">
          {sidebar.map((tab) => (
            <Link key={tab.id} to={tab.path}>
              <button
                onClick={() => {setActiveLink(tab.path)}}
                className={`${
                  activeLink == tab.path
                    ? " "
                    : " hover:text-black/50 dark:hover:text-white/50"
                } relative rounded-xl px-3 py-1.5 font-medium outline-2 transition focus-visible:outline `}
              >
                {activeLink == tab.path && (
                  <motion.div
                    layoutId="active-Link"
                    className="absolute inset-0 bg-navCurrent dark:bg-[#2dd9fe] dark:shadow-neon-blue"
                    style={{ borderRadius: 12 }}
                    transition={{ type: "spring", duration: 1 }}
                  />
                )}
                <span className={`relative z-20 mix-blend-normal`}>
                  {tab.label}
                </span>
              </button>
            </Link>
          ))}
            
        <footer
          className={
            ` flex justify-center absolute bottom-0   m-1  bg-text rounded-b-lg dark:bg-sidebar_Darkmode`
          }
        >
          <div className=" flex text-xs items-center py-2 flex-col text-center">
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
        </footer>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
