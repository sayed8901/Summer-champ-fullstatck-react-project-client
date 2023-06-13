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
      <div className="sticky top-20 z-10 -mt-5 text-right">
        <button className="btn btn-sm capitalize" onClick={toggleTheme}>
          <span className="text-gradient flex gap-2">
            <p>{darkMode ? "Dark" : "Light"}</p>
          <small>mode</small>
          </span>
        </button>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
