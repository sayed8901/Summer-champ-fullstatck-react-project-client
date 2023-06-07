import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../authProviders/AuthProvider";


const Register = () => {
  useTitle('Registration')
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // for password view/hide toggling
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  // props extracting using AuthContext
  const { createNewUser, updateUserData } = useContext(AuthContext);
  //   console.log(createNewUser);

  const handleRegister = (e) => {
    setErrorMsg("");
    setSuccessMsg("");

    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    // console.log(email, password, photoURL);

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

    // to create a new user
    createNewUser(email, password)
      .then((result) => {
        const newUser = result.user;
        // console.log(newUser);
        setSuccessMsg("New User has been Created Successfully");

        //   updating user name to firebase auth
        if (newUser) {
          updateUserData(name, photoURL)
            .then(() => {
              const successMessage =
                "User profile has been successfully updated.";
              console.log(successMessage);
              setSuccessMsg(successMessage);
              //   console.log(newUser);
            })
            .catch((error) => {
              console.log(error.message);
              setErrorMsg(error.message);
            });
        }
        form.reset();
      })

      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

  return (
    <form
      onSubmit={handleRegister}
      className="card-body w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-2">
        <span className="text-gradient">Register</span> Now!
      </h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input
          type="url"
          name="photo"
          placeholder="Photo_URL"
          className="input input-bordered"
          required
        />
      </div>
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
      </div>
      <div className="form-control mt-3">
        <button className="btn btn-primary">Register</button>
      </div>

      {/* link to go to log in form */}
      <small className="mt-2 text-center">
        Already have an account?{" "}
        <Link to={"/login"} className="btn btn-sm btn-outline">
          Login Now
        </Link>
      </small>

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

export default Register;


