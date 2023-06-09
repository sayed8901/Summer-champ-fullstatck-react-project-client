import { NavLink, Outlet } from "react-router-dom";
import { getRole } from "../api/userAuth";
import { useContext } from "react";
import { AuthContext } from "../authProviders/AuthProvider";
import { useState } from "react";

const Dashboard = () => {
  const [role, setRole] = useState();
  const { user } = useContext(AuthContext);
  getRole(user.email).then((data) => setRole(data));
  // console.log(role);

  return (
    <div className="drawer lg:drawer-open my-container">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center relative">
        {/* Page content here */}
        <label
          htmlFor="sidebar"
          className="btn btn-primary btn-sm drawer-button lg:hidden absolute top-5 right-0"
        >
          Open drawer
        </label>
        <div className="min-h-screen hero">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="sidebar" className="drawer-overlay"></label>
        <div className="menu px-8 py-12 w-60 h-full bg-base-200 text-base-content flex flex-row justify-center items-start overflow-y-auto">
          {/* Sidebar content here */}

          {/* instructor only routes */}
          {
            role === "instructor" && 
            <div>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-amber-400 rounded-xl">
                <NavLink to="/dashboard/add-class">Add a New Class</NavLink>
              </li>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-amber-400 rounded-xl">
                <NavLink to="/dashboard/my-all-classes">My All Classes</NavLink>
              </li>
            </div>
          }

          {/* instructor only routes */}
          {
            role === "admin" && 
            <div>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-amber-400 rounded-xl">
                <NavLink to="/dashboard/manage-classes">Manage Classes</NavLink>
              </li>
            </div>
          }

          {/* students routes */}
          {
            !role &&
            <div>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-amber-400 rounded-xl">
                <NavLink to={"/dashboard/selected-classes"}>My Selected Classes</NavLink>
              </li>
              <li className="mb-6 font-bold text-blue-600 border-b-8 border-amber-400 rounded-xl">
                <NavLink to="/dashboard/enrolled-classes">My Enrolled Classes</NavLink>
              </li>
            </div>
          }

          {/* common routes */}
          {/* <div className="divider my-8"></div> */}
          <div>
            <li className="mb-6 font-bold text-blue-600 border-b-8 border-lime-400 rounded-xl">
              <NavLink to={"/classes"}>See All Classes</NavLink>
            </li>
            <li className="mb-6 font-bold text-blue-600 border-b-8 border-lime-400 rounded-xl">
              <NavLink to={"/instructors"}>See All Instructors</NavLink>
            </li>
            <li className="mb-6 font-bold text-blue-600 border-b-8 border-lime-400 rounded-xl">
              <NavLink to={"/"}>Back to Home Page</NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
