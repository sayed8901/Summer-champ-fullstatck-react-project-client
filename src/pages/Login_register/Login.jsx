import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../authProviders/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {
  useTitle("Log in");

  const [errorMsg, setErrorMsg] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  // for password view/hide toggling
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { userLogin, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathname || "/";
  // console.log(fromLocation);

  const onSubmit = (data) => {
    // console.log(data);

    // to log in an user
    userLogin(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        reset();
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
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto mt-12 mb-16 py-8 bg-base-200 rounded-xl">
      <h2 className="text-3xl font-bold text-center my-2">
        <span className="text-gradient">Log in</span> Now!
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          {/* based on password shoe/hide toggling, dynamically change the type of input field..*/}
          <div className="flex justify-between items-center gap-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 12,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
              })}
            />

            {/* based on handleToggle function, dynamically change the button text.. */}
            <span className="w-10 text-2xl" onClick={handleToggle}>
              {showPassword ? (
                <span
                  className="tooltip tooltip-primary"
                  data-tip="Click to hide password"
                >
                  <FaEyeSlash />
                </span>
              ) : (
                <span
                  className="tooltip tooltip-primary"
                  data-tip="Click to show password"
                >
                  <FaEye />
                </span>
              )}
            </span>
          </div>
          {errors.password?.type === "required" && (
            <p className="text-red-300">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-400">Password must be 6 characters</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-500">
              Password must be less than 12 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must have 1 uppercase, 1 number & 1 special character
            </p>
          )}
        </div>

        <div className="form-control mt-8 w-1/2 mx-auto">
          <input className="btn btn-primary" type="submit" value="Log in" />
        </div>
      </form>
      <p className="text-center mb-8 text-xl text-error font-bold">
        {errorMsg}
      </p>

      <p className="text-center">
        <small>
          New to this site?{" "}
          <Link to={"/register"} className="ms-2 btn btn-sm btn-outline">
            Register Now!
          </Link>
        </small>
      </p>

      {/* Social Log in options from "SocialLogin" component */}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
