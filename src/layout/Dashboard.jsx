import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
        <ul className="menu p-4 w-56 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to={"/dashboard/selected-classes"}>My Selected Classes</Link>
          </li>
          <li>
            <Link to={"/dashboard/enrolled-classes"}>My Enrolled Classes</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to={"/classes"}>See All Classes</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to={"/instructors"}>See All Instructors</Link>
          </li>
          <li>
            <Link to={"/"}>Back to Home Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
