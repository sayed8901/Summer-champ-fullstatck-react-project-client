import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { useContext } from "react";
import { ThemeContext } from "../authProviders/ThemeContextProvider";

const Main = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen my-container ${
        darkMode ? "theme-dark" : "theme-light"
      }`}
    >
      <Navbar></Navbar>
      {/* dark/light toggle btn */}
      <div className="sticky top-[2px] z-10 -mt-7 mr-2 text-right">
        <button className="btn btn-sm capitalize" onClick={toggleTheme}>
          <span className="flex gap-1 items-baseline">
            <p className="text-gradient text-sm">{darkMode ? "Dark" : "Light"}</p>
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
