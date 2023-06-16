import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { AuthContext } from "../../authProviders/AuthProvider";
import { useContext, useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { getRole } from "../../api/userAuth";
import { Fade } from "react-awesome-reveal";
import { ThemeContext } from "../../authProviders/ThemeContextProvider";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);

  const { user, logOut } = useContext(AuthContext);
  const [role, setRole] = useState();
  getRole(user?.email).then((data) => setRole(data));
  // console.log(role);

  
// for hide/ un-hide navbar on sticky-scroll
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     setIsNavbarVisible(
  //       prevScrollPos > currentScrollPos || currentScrollPos < 10
  //     );
  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // to clean up the "scroll" event listener while unmounting
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  
  // Creating NavBar Menu Items for further used below
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={`my-5 lg:my-0 mx-2 font-bold text-blue-600 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={`mb-5 lg:mb-0 mx-2 font-bold text-blue-600 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={`mb-5 lg:mb-0 mx-2 font-bold text-blue-600 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Classes
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to={
              (role === "instructor" && "/dashboard/my-all-classes") ||
              (role === "admin" && "/dashboard/manage-classes") ||
              "/dashboard/selected-classes"
            }
            // to="/dashboard/my-all-classes"
            className={`mb-5 lg:mb-0 mx-2 font-bold text-blue-600 ${({
              isActive,
            }) => (isActive ? "active" : "")}`}
          >
            <Fade cascade damping={0.1}>
              Dashboard
            </Fade>
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`navbar bg-base-300 bg-opacity-50 h-24 sticky top-0 z-10 rounded ${
        darkMode ? "theme-dark" : "theme-light"
      } 

      transition-opacity duration-300`}
      // ${ isNavbarVisible ? "opacity-100" : "opacity-0" }
    >
      <div className="navbar-start">
        {/* dropdown navbar for small display */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>

        <Link to={"/"} className="normal-case text-xl">
          <div className="sm:flex flex-row items-center justify-center gap-1 w-24 sm:w-48">
            <div>
              <img className="hidden sm:inline" src={logo} alt="" />
            </div>
            <h2 className="mt-1 sm:mt-4 text-xl sm:text-2xl px-1 font-bold text-gradient">
              Summer Champ
            </h2>
          </div>
        </Link>
      </div>

      {/* wide navbar for large display */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ml-8 px-1">{navItems}</ul>
      </div>

      {/* to dynamically show user photo & name and also to switch button action between "log in" or "log out" */}
      <div className="navbar-end flex gap-4">
        {user ? (
          <div className="flex justify-center items-center gap-4 border-4 rounded-full bg-gradient px-2 py-1">
            <div
              className="tooltip tooltip-left tooltip-primary"
              data-tip={user.displayName}
            >
              <LazyLoad>
                <img
                  className="rounded-full w-12 h-12"
                  src={user.photoURL}
                  alt=""
                />
              </LazyLoad>
            </div>
            <button
              onClick={logOut}
              className="btn btn-sm btn-outline h-10 w-14 rounded-xl capitalize font-bold text-white"
            >
              Log out
            </button>
          </div>
        ) : (
          <button>
            <Link to={"/login"} className="btn btn-info btn-outline font-bold">
              log in
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
