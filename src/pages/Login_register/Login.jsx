import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../authProviders/AuthProvider";


const Login = () => {
  useTitle('Log in')
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // for password view/hide toggling
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  // props extracting using AuthContext
  const { userLogin, googleSignIn, gitHubSignIn } =
    useContext(AuthContext);

  // fromLocation refers to the last path..
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const fromLocation = location.state?.from?.pathname || "/";
  console.log(fromLocation);

  const handleLogin = (e) => {
    setErrorMsg("");
    setSuccessMsg("");

    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      setErrorMsg("At least 1 character should be in uppercase!");
      return;
    } else if (!/(?=.*[a-z].*[a-z])/.test(password)) {
      setErrorMsg("At least 2 characters should be in lowercase!");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setErrorMsg("Password should contain at least 1 numbers!");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setErrorMsg("There should be at least 1 special character!");
      return;
    } else if (!/.{6}/.test(password)) {
      setErrorMsg("Password should contain at least 6 characters!");
      return;
    }

    // to log in an user
    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccessMsg("User Successfully Logged in");
        form.reset();
        navigate(fromLocation, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

  //   log in with google popup
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        setSuccessMsg("User Successfully Logged in with Google");
        navigate(fromLocation, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

  //   log in with GitHub popup
  const handleGitHubLogIn = () => {
    gitHubSignIn()
      .then((result) => {
        const gitHubUser = result.user;
        console.log(gitHubUser);
        setSuccessMsg("User Successfully Logged in with Google");
        navigate(fromLocation, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="card-body w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-2">
        <span className="text-gradient">Log in</span> Now!
      </h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <div className="flex justify-between items-center gap-4">
          {/* based on password shoe/hide toggling, dynamically change the type of input field..*/}
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered w-full"
            required
          />

          {/* based on handleToggle function, dynamically change the button text.. */}
          <span className="w-10 text-2xl" onClick={handleToggle}>
            {showPassword ? (
              <span className="tooltip tooltip-primary" data-tip="Click to hide password">
                <FaEyeSlash />
              </span>
            ) : (
              <span className="tooltip tooltip-primary" data-tip="Click to show password">
                <FaEye />
              </span>
            )}
          </span>
        </div>
      </div>

      <div className="form-control mt-3">
        <button className="btn btn-primary">Login</button>
      </div>

      {/* link to go to registration form */}
      <small className="mt-2 text-center">
        New to this site?{" "}
        <Link to={"/register"} className="btn btn-sm btn-outline">
          Resister Now
        </Link>
      </small>

      <div className="mt-5">
        <h4 className="mb-5 text-center">More Login options</h4>

        <div className="flex flex-col w-full lg:flex-row">
          <div
            className="grid flex-grow card rounded-box place-items-center"
          >
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
          <div
            className="grid flex-grow card rounded-box place-items-center"
          >
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

      {/* to dynamically show either error msg or success msg & also apply styles dynamically.... */}
      <p
        className={`text-center my-1 text-xl ${
          errorMsg ? "text-primary" : "text-success"
        }`}
      >
        {errorMsg ? errorMsg : successMsg}
      </p>
    </form>
  );
};

export default Login;

