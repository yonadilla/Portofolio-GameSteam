import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import useClickOutside from "../Hooks/useClickOutside";
import { changeLanguage } from "i18next";
export default function ChangeLng() {
  const ref = useRef()
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem("i18nextLng") || "en";
  });
  const [open, setOpen] = useState(false);
  const handleLangChange = (value) => {
    setSelectedLang(value);
    localStorage.setItem("i18nextLng", value);
    document.documentElement.lang = value;
    changeLanguage(value)
  };
  useClickOutside(ref, () => {
    if (open) {
      setOpen(false);
    }
  })
  return (
    <div>
      <div
      ref={ref}
        className=" border border-black border-solid dark:border-white w-20 h-max cursor-pointer"
        onClick={() => setOpen(!open)}
      >
      <p className=" pl-2">{selectedLang == "id" ? "IDN" : "ENG"}</p>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "max-content" }}
            exit={{ opacity: 0, height: 0 }}
            className=" absolute top-10 border bg-background dark:bg-background_Darkmod border-black w-20 border-solid dark:border-white flex flex-col gap-2 "
          >
            <button
              onClick={() => handleLangChange("id")}
              className=" hover:bg-sidebar hover:dark:bg-navCurrent_Darkmode"
            >
              IDN
            </button>
            <button
              onClick={() => handleLangChange("en")}
              className=" hover:bg-sidebar hover:dark:bg-navCurrent_Darkmode"
            >
              ENG
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
