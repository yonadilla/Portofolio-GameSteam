import { motion, useCycle } from "framer-motion";
import "./App.css";
import useDarkMode from "./Hooks/useDarkMode";
import Footer from "./page/Footer";
import Router from "./router/router";
import { Example } from "./page/navbar/Example";
import { Suspense, useEffect, useRef, useState } from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import useMediaQuery from "./Hooks/useMediaQuery";
import Sidebar from "./page/sidebar";
import { SpeedInsights } from "@vercel/speed-insights/react";

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["id", "en"],
    fallbackLng: "id",
    detection: {
      order: ["localStorage", "htmlTag", "cookie", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "assets/Locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });
function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { t } = useTranslation();
  const ref = useRef();
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const [start, setStart] = useState(true);

  useEffect(() => {
    if (isOpen && !isLarge) {
      document.body.style.position = " relative";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    if (isOpen && isLarge) {
      document.body.style.position = "fixed";
    } else document.body.style.position = "relative";
  }, [isOpen]);

  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <>
      <SpeedInsights/>
      <motion.div
        className={` ${
          start ? "flex" : "hidden"
        } flex-col gap-56 tracking-widest justify-center items-center h-screen `}
      >
        <p className=" text-center game text-4xl">
          {t("Welcome")}
        </p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=" game text-xl tracking-wide px-4 py-2"
          onClick={() => {
            setStart(false)
          }}
        >
          Start
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          display: start ? "none" : "block",
          opacity: start ? 0 : 1,
        }}

        transition={{delay : 1}}
        className=" lg:text-lg lg:h-screen"
      >
        <div className=" lg:flex lg:w-[90vw] lg:mx-auto my-6 w-screen">
          {!isLarge ? (
            <Example
              isOpen={isOpen}
              toggleOpen={toggleOpen}
              darkMode={darkMode}
            />
          ) : (
            <div className=" w-52">
              <Sidebar darkMode={darkMode}  />
            </div>
          )}
          <motion.div
            animate={isOpen ? { scale: 0.9 } : { scale: 1 }}
            className={isOpen ? "blur-sm" : "blur-none lg:w-[80%] lg:ml-10 "}
          >
            <Router
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              isOpen={isOpen}
              t={t}
            />
          </motion.div>
        </div>
        {!isLarge && <Footer darkMode={darkMode} />}
      </motion.div>
    </>
  );
}

export default App;
