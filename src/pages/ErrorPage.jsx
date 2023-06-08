import Lottie from "lottie-react";
import ErrorAnimation from "../assets/ErrorPage-sports.json";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const ErrorPage = () => {
  useTitle('Error')
  
  return (
    <div className="hero min-h-screen">
      <div className="my-container card sm:card-side bg-base-100">
        <figure>
          <Lottie animationData={ErrorAnimation} loop={true} />
        </figure>
        <div className="card-body text-center flex flex-col justify-evenly sm:mr-4 lg:mr-12 sm:w-7/12">
          <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-4xl text-error font-bold mb-8 sm:mb-0 text-gradient">
            Oops!! <br /> <br /> Page not found!
          </h1>
          <Link>
            <button className="btn btn-outline btn-info w-40 font-extrabold">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default ErrorPage;
