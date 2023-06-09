import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authProviders/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { FidgetSpinner } from "react-loader-spinner";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div
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
    }
    
    if(user && isAdmin){
        return children
    }
    else{
        return <Navigate to={'/'} state={{from:location}} replace></Navigate>
    }
};

export default AdminRoute;