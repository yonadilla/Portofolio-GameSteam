import { Route, Routes, useLocation } from "react-router-dom";
import { lazy } from "react";
import StatistikPage from "../page/Statistik/StatistikPage";
import AboutmePage from "../page/AboutMe/AboutMePage";
import HomePage from "../page/Home/HomePage"
import { AnimatePresence } from "framer-motion";

export default function Router({ darkMode, setDarkMode, t }) {
  return (
    <div>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage darkMode={darkMode} t={t} setDarkMode={setDarkMode} />
            }
          />
          <Route
            path="/aboutme"
            element={<AboutmePage darkMode={darkMode} t={t} />}
          />
          <Route
            path="/statistic"
            element={<StatistikPage darkMode={darkMode} t={t} />}
          />
        </Routes>
    </div>
  );
}
