import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open my-container">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mt-[50vh]"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
          <Link >My Selected Classes</Link>
          </li>
          <li>
          <Link >My Enrolled Classes</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to={'/'}>Back to Home Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
