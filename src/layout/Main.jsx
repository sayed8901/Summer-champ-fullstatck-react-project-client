import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { useContext } from "react";
import { ThemeContext } from "../authProviders/ThemeContextProvider";

const Main = () => {
  const { themeClassName } = useContext(ThemeContext);

  return (
    <div data-theme={themeClassName} className={`min-h-screen my-container`}>
      <Navbar></Navbar>

      {/* dark/light toggle btn */}
      {/* <ThemeToggler
        toggleMode={toggleMode}
        isDarkMode={isDarkMode}
      ></ThemeToggler> */}

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
