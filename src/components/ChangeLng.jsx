import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import useClickOutside from "../Hooks/useClickOutside";
import { changeLanguage } from "i18next";
import useUpdateEffect from "../Hooks/useUpdateEffect";
import useSound from "use-sound";

export default function ChangeLng({ volume }) {
  const ref = useRef();
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem("i18nextLng") || "en";
  });
  const [open, setOpen] = useState(false);
  const handleLangChange = (value) => {
    setSelectedLang(value);
    localStorage.setItem("i18nextLng", value);
    document.documentElement.lang = value;
    changeLanguage(value);
  };
  useClickOutside(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  function soundLang() {
    if (open) {
      let soundOpen = new Audio("/assets/sound/deck_ui_switch_toggle_on.wav");
      soundOpen.play();
      soundOpen.volume = volume;
    } else {
      let soundClose = new Audio("/assets/sound/deck_ui_switch_toggle_off.wav");
      soundClose.play();
      soundClose.volume = volume;
    }
  }

  const [ hover] = useSound("/assets/sound/deck_ui_misc_10.wav")
  return (
    <div>
      <div
        ref={ref}
        className=" border border-black border-solid dark:border-white w-20 h-max cursor-pointer"
        onClick={() => {setOpen(!open), soundLang()}}
      >
        <p className=" flex justify-center">
          {selectedLang == "id" ? "IDN" : "ENG"}
        </p>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "max-content" }}
            exit={{ opacity: 0, height: 0 }}
            className=" fixed top-14  border bg-background dark:bg-background_Darkmod border-black w-20 border-solid dark:border-white flex flex-col gap-2 "
          >
            <button
              onMouseEnter={() => hover()}
              onClick={() => handleLangChange("id")}
              className=" hover:bg-sidebar hover:dark:bg-navCurrent_Darkmode"
            >
              IDN
            </button>
            <button
              onMouseEnter={() => hover()}
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
