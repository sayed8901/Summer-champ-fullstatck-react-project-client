import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { useState } from "react";

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeClassName = isDarkMode ? "dark" : "light";

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div data-theme={themeClassName} className={`min-h-screen my-container`}>
      <Navbar></Navbar>
      {/* dark/light toggle btn */}
      <div className="fixed top-0 right-[5%] z-20">
        <button className="btn btn-sm glass capitalize" onClick={toggleMode}>
          <span className="flex gap-1 items-baseline">
            <p className="text-gradient text-sm">
              {isDarkMode ? "Dark" : "Light"}
            </p>
            <p className="text-xs">mode</p>
          </span>
        </button>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
