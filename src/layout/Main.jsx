import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { useState } from "react";


const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeClassName = isDarkMode ? 'dark' : 'light';

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <div data-theme={themeClassName}
      className={`min-h-screen my-container`}
    >
      <button className="btn btn-sm glass fixed z-20 top-0 right-12" onClick={toggleMode}>{isDarkMode ? 'Dark' : 'Light'} Mode</button>
      {/* <button className="btn glass">Glass button</button> */}
      <Navbar></Navbar>
      {/* dark/light toggle btn */}

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
