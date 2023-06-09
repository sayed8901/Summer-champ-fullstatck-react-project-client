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
        <ul className="menu p-4 w-64 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="mt-12">
            <li>
              <Link
                className="my-4 btn btn-primary btn-sm btn-outline btn-block"
                to={"/dashboard/selected-classes"}
              >
                My Selected Classes
              </Link>
            </li>
            <li>
              <Link
                className="my-4 btn btn-primary btn-sm btn-outline btn-block"
                to={"/dashboard/enrolled-classes"}
              >
                My Enrolled Classes
              </Link>
            </li>
          </div>
          <div className="divider my-16"></div>
          <div>
            <li className="my-4 btn btn-sm btn-outline btn-block">
              <Link to={"/classes"}>See All Classes</Link>
            </li>
            <li className="my-4 btn btn-sm btn-outline btn-block">
              <Link to={"/instructors"}>See All Instructors</Link>
            </li>
            <li className="my-4 btn btn-sm btn-outline btn-block">
              <Link to={"/"}>Back to Home Page</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
