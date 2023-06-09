import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authProviders/AuthProvider";
import useInstructor from "../hooks/useInstructor";
import { FidgetSpinner } from "react-loader-spinner";


const InstructorRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
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
    
    if(user && isInstructor){
        return children
    }
    else{
        return <Navigate to={'/'} state={{from:location}} replace></Navigate>
    }
};

export default InstructorRoute;