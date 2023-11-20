import { motion } from "framer-motion";
import "./App.css";
import useDarkMode from "./Hooks/useDarkMode";
import useOpenSideBar from "./Hooks/useOpenSidebar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Router from "./router/router";
import { Example } from "./sidebar/Example";
import { Suspense, useEffect } from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import useMediaQuery from "./Hooks/useMediaQuery";

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
  const { isOpen, toggleOpen } = useOpenSideBar();
  const { t } = useTranslation();
  const isLarge = useMediaQuery("(min-width: 1024px)");
  useEffect(() => {
    if ( isOpen && !isLarge){
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
    <div className=" lg:text-lg">
      <Suspense fallback={<Loading />}>
        <Example isOpen={isOpen} toggleOpen={toggleOpen} darkMode={darkMode} />
        <motion.div
          animate={isOpen ? { scale: 0.9 } : { scale: 1 }}
          className={isOpen ? "blur-sm" : "blur-none"}
        >
          <Router
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            isOpen={isOpen}
            t={t}
          />
        </motion.div>
        <Footer darkMode={darkMode} />
      </Suspense>
    </div>
  );
}

export default App;
