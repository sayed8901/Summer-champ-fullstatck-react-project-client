import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../authProviders/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { saveUser } from "../../api/userAuth";
import { toast } from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import { ThemeContext } from "../../authProviders/ThemeContextProvider";

const Register = () => {
  useTitle("Registration");
  const {darkMode} = useContext(ThemeContext);

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
    watch,
  } = useForm();

  const { createNewUser, updateUserData, setLoading } = useContext(AuthContext);
  //   console.log(createNewUser);
  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathname || "/";
  // console.log(fromLocation);

  const onSubmit = (data) => {
    // console.log(data);

    createNewUser(data.email, data.password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);

        updateUserData(data.name, data.photoURL)
          .then(() => {
            console.log("user profile updated successfully!");
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });

            // saving user info to the mongoDB users collection
            saveUser(newUser);
            navigate(fromLocation, { replace: true });
          })
          .catch((error) => {
            setLoading(false);
            console.log(error.message);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error(error.message);
      });
  };

  // cross-check "password" value with the "confirm password" value.
  const password = watch("password");

  return (
    <div className={`w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto mt-12 mb-16 py-8 bg-base-200 rounded-xl ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <h2 className="text-3xl font-bold text-center my-2">
        <span className="text-gradient">Register</span> Now!
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="Name"
            className="input input-bordered text-black"
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="input input-bordered text-black"
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
              className="input input-bordered w-full text-black"
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

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          {/* based on password shoe/hide toggling, dynamically change the type of input field..*/}
          <div className="flex justify-between items-center gap-4">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input input-bordered w-full text-black"
              {...register("confirmPassword", {
                required: true,
                minLength: 6,
                maxLength: 12,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,

                // to cross-check "password" value with the "confirm password" value.
                validate: (value) => value === password,
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
            <p className="text-red-300">Confirm Password is required</p>
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
          {/* to display error msg when "password" does not match with the "confirm password" */}
          {errors.confirmPassword && (
            <p className="text-red-500 text-center mt-4">Passwords do not matched</p>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="url"
            name="photoURL"
            {...register("photoURL", { required: true })}
            placeholder="Photo URL"
            className="input input-bordered text-black"
          />
          {errors.photoURL && (
            <span className="text-red-500">Photo URL is required</span>
          )}
        </div>

        <div className="form-control mt-8 w-1/2 mx-auto">
          <input className="btn btn-primary" type="submit" value="Sign up" />
        </div>
      </form>

      <p className="text-center">
        <small>
          Already Have an Account?{" "}
          <Link to={"/login"} className="ms-2 btn btn-sm btn-neutral">
            Log in now!
          </Link>
        </small>
      </p>

      {/* Social Log in options from "SocialLogin" component */}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
