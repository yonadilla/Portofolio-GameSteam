import React, { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import Svg_volume from "../svg/Svg_volume";
import Volume from "./Volume";
export default function Filter() {
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

      animate(
        "ul",
        {
          clipPath: isOpen
            ? "inset(0% 0% 0% 0% round 10px)"
            : "inset(10% 50% 90% 50% round 10px)",
          borderColor: "black",
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "10px",
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.5,
        }
      );

      animate(
        "li",
        isOpen
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
        {
          duration: 0.2,
          delay: isOpen ? staggerMenuItems : 0,
        }
      );
    }, [isOpen]);

    return scope;
  }

  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  return (
    <div>
      <nav className="menu z-10 translate-x-32 absolute top-5" ref={scope}>
        <div className=" flex w-auto items-center translate-y-6">
          <Volume />
          <button
            className="button text-black w-24 absolute right-0 "
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
            <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </div>
          </button>
        </div>
        <ul
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
          className=" translate-y-10 p-3 w-48 z-10 bg-white"
        >
          <li>All </li>
          <li>JavaScript </li>
          <li>Css </li>
          <li>Html </li>
          <li>Java </li>
        </ul>
      </nav>
    </div>
  );
}
