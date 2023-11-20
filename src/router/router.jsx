import { Route, Routes, useLocation } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../page/HomePage"))
const AboutmePage = lazy(() => import("../page/AboutMePage"))

export default function Router({ darkMode, setDarkMode, t }) {

  const location = useLocation();
  return (
    <div>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Home darkMode={darkMode} t={t} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/aboutme"
            element={<AboutmePage darkMode={darkMode} t={t} />}
          />
        </Routes>
    </div>
  );
}
