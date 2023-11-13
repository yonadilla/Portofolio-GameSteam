import "./App.css";
import useDarkMode from "./Hooks/useDarkMode";
import useOpenSideBar from "./Hooks/useOpenSidebar";
import Footer from "./components/Footer";
import Router from "./router/router";
import { Example } from "./sidebar/Example";
import { useEffect } from "react";

function App() {
  const { isOpen, toggleOpen } = useOpenSideBar();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "";
  }, [isOpen]);

  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className=" lg:text-xl">
      <Example isOpen={isOpen} toggleOpen={toggleOpen} darkMode={darkMode} />
      <Router darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
