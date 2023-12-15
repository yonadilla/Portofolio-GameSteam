import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ isOpen, toggleOpen, darkMode }) => {

  const path = useLocation();
  const [activeLink, setActiveLink] = useState( path.pathname);


  console.log(darkMode);
  let sidebar = [
    { id: "Home", label: "Home", path: "/" },
    { id: "About Me", label: "About Me", path: "/aboutme" },
    { id: "Statistic", label: "Statistic", path: "/statistic" },
  ];
  return (
    <div className=" flex justify-center flex-col items-center my-auto  gap-6 mt-7">
      {sidebar.map((tab) => (
            <Link key={tab.id} onClick={() => toggleOpen()} to={tab.path}>
              <button
                onClick={() => setActiveLink(tab.path)}
                className={`${
                  activeLink == path.pathname
                    ? ""
                    : ""
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
    </div>
  );
};
