import { NavLink, Outlet } from "react-router-dom";
import { getRole } from "../api/userAuth";
import { useContext } from "react";
import { AuthContext } from "../authProviders/AuthProvider";
import { useState } from "react";
import {
  FaChalkboardTeacher,
  FaCheckCircle,
  FaCheckDouble,
  FaCreditCard,
  FaHouseUser,
  FaMedal,
  FaSpa,
  FaUserCheck,
  FaVolleyballBall,
} from "react-icons/fa";
import { ThemeContext } from "../authProviders/ThemeContextProvider";

const Dashboard = () => {
  const [role, setRole] = useState();
  const { user } = useContext(AuthContext);
  getRole(user?.email).then((data) => setRole(data));
  // console.log(role);

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`drawer lg:drawer-open my-container ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center relative">
        {/* Page content here */}
        <label
          htmlFor="sidebar"
          className="drawer-button lg:hidden absolute top-5 right-0 flex flex-col gap-1"
        >
          <span className="btn btn-primary btn-sm z-10">Open drawer</span>
          <button className="btn btn-sm capitalize w-24 ml-6 -mt-3" onClick={toggleTheme}>
          <span className="flex gap-1 items-baseline">
            <p className="text-gradient text-sm">{darkMode ? "Dark" : "Light"}</p>
            <p className="text-xs">mode</p>
          </span>
          </button>

        </label>
        <div className="min-h-screen hero">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="sidebar" className="drawer-overlay"></label>
        <div className={`menu px-4 py-12 w-64 h-full bg-base-200 text-base-content flex flex-row justify-center items-start overflow-y-auto ${darkMode ? 'theme-dark' : 'theme-light'}`}>
          {/* Sidebar content here */}

          {/* instructor only routes */}
          {role === "instructor" && (
            <div>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-pink-300 rounded-xl">
                <NavLink to="/dashboard/add-class">
                  {" "}
                  <FaVolleyballBall /> Add a New Class
                </NavLink>
              </li>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-pink-300 rounded-xl">
                <NavLink to="/dashboard/my-all-classes">
                  {" "}
                  <FaMedal /> My All Classes
                </NavLink>
              </li>
            </div>
          )}

          {/* admin only routes */}
          {role === "admin" && (
            <div>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-orange-500 rounded-xl">
                <NavLink to="/dashboard/manage-classes">
                  {" "}
                  <FaMedal /> Manage Classes
                </NavLink>
              </li>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-orange-500 rounded-xl">
                <NavLink to="/dashboard/manage-users">
                  {" "}
                  <FaUserCheck /> Manage Users
                </NavLink>
              </li>
            </div>
          )}

          {/* students routes */}
          {!role && (
            <div>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-amber-400 rounded-xl">
                <NavLink to={"/dashboard/selected-classes"}>
                  {" "}
                  <FaCheckCircle /> My Selected Classes
                </NavLink>
              </li>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-amber-400 rounded-xl">
                <NavLink to="/dashboard/enrolled-classes">
                  {" "}
                  <FaCheckDouble /> My Enrolled Classes
                </NavLink>
              </li>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-amber-400 rounded-xl">
                <NavLink to="/dashboard/payment-history">
                  {" "}
                  <FaCreditCard /> Payment History
                </NavLink>
              </li>
            </div>
          )}

          {/* common routes */}
          {/* <div className="divider my-8"></div> */}
          <div>
            <li className="mb-6 font-bold text-blue-600 border-b-8 border-lime-400 rounded-xl">
              <NavLink to={"/classes"}>
                {" "}
                <FaSpa /> See All Classes
              </NavLink>
            </li>
            <li className="mb-6 font-bold text-blue-600 border-b-8 border-lime-400 rounded-xl">
              <NavLink to={"/instructors"}>
                {" "}
                <FaChalkboardTeacher /> See All Instructors
              </NavLink>
            </li>
            <li className="mb-6 font-bold text-blue-600 border-b-8 border-lime-400 rounded-xl">
              <NavLink to={"/"}>
                <FaHouseUser /> Home Page
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
