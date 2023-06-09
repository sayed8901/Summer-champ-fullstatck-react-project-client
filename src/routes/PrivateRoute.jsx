import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";
import { AuthContext } from "../authProviders/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  // to show a loader-spinner in loading state
  if (loading) {
    return (
      <div
        className="hero min-h-screen"
        style={{ minHeight: `calc(100vh - 10em)` }}
      >
        <FidgetSpinner
          visible={true}
          height="150"
          width="150"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#F4442E"
        />
      </div>
    );
  }

  // Only showing the child components only if there a user is logged in.

  // If not, s/he will be redirected to log in route. N.B.: While sending, it will carry the current path using " state={{ from: location }} "
  if (user) {
    return children;
  } 
  else {
    return (
      <Navigate
        to={"/login"}
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }
};

export default PrivateRoute;
