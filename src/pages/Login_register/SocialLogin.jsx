import { useContext } from "react";
import { AuthContext } from "../../authProviders/AuthProvider";
import { saveUser } from "../../api/userAuth";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { setLoading, googleSignIn, gitHubSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathname || "/";
  // console.log(fromLocation);

  // handle Google Sign In
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        // save user to BD
        saveUser(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have successfully logged in!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(fromLocation, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error(error.message);
      });
  };

  // handle github Sign In
  const handleGitHubLogIn = () => {
    gitHubSignIn()
      .then((result) => {
        console.log(result.user);
        // save user to BD
        saveUser(result.user);
        navigate(fromLocation, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="divider w-3/4 mx-auto"></div>

      <div className="flex flex-col w-full md:flex-row">
        <div className="grid flex-grow card rounded-box place-items-center">
          {/* Google log in btn */}
          <div onClick={handleGoogleLogIn} className="gap-4 btn btn-active">
            <span>
              <img
                className="w-6"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
            </span>
            <span>Login with Google</span>
          </div>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow card rounded-box place-items-center">
          {/* GitHub log in btn */}
          <div onClick={handleGitHubLogIn} className="gap-4 btn btn-active">
            <span>
              <img
                className="w-6"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjl1XRlAmb5KiajU1cpS9nQ2cFRBa4t5sukA&usqp=CAU"
                alt=""
              />
            </span>
            <span>Login with GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
