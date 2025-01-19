import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { useContext } from "react";
import { ThemeContext } from "../authProviders/ThemeContextProvider";

const Main = () => {
  const { themeClassName } = useContext(ThemeContext);

  return (
    <div data-theme={themeClassName} className="min-h-screen">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
