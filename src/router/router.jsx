import { Route, Routes, useLocation } from "react-router-dom";
import { lazy } from "react";
import StatistikPage from "../page/Statistik/StatistikPage";
import AboutmePage from "../page/AboutMe/AboutMePage";
import { AnimatePresence } from "framer-motion";
const Home = lazy(() => import("../page/Home/HomePage"));

export default function Router({ darkMode, setDarkMode, t, volume, setVolume }) {
  const location = useLocation();
  return (
    <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home darkMode={darkMode} t={t} setVolume={setVolume} setDarkMode={setDarkMode} volume={volume} />
            }
          />
          <Route
            path="/aboutme"
            element={<AboutmePage darkMode={darkMode} t={t} volume={volume} />}
          />
          <Route
            path="/statistic"
            element={<StatistikPage darkMode={darkMode} t={t} />}
          />
        </Routes>
    </div>
  );
}
