import { useContext, useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { getAllApprovedClasses } from "../api/classes";
import LazyLoad from "react-lazy-load";
import { AuthContext } from "../authProviders/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Classes = () => {
  useTitle("Classes");

  const { user } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    getAllApprovedClasses().then((data) => {
      setClasses(data);
    });
  }, []);
  // console.log(classes);

  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You need log in first to continue!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/login', {state:{ from: location }, replace:true});
    }
  };

  return (
    <div>
      <div className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
          All <span className="text-gradient">Classes</span>
        </h2>
        <p className="py-12 text-center">
          You can check out our popular sports classes here & enroll to your
          favorite one.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {classes.map((singleClass) => (
          <LazyLoad key={singleClass._id}>
            <div className={`card sm:card-side shadow-xl ${singleClass.availableSeats === 0 ? 'bg-red-400' : 'bg-base-100' }`}>
              <figure className="sm:w-5/12 sm:ms-4">
                <img className="rounded-xl" src={singleClass?.classImage} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-gradient">
                  {singleClass.className}
                </h2>
                <div>
                  <p>
                    Instructor: <b>{singleClass.instructorName}</b>
                  </p>
                  <p>Available Seats: {singleClass.availableSeats}</p>
                  <p>
                    Price:{" "}
                    <b className="text-gradient">BDTK {singleClass.price}</b>
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button disabled={singleClass.availableSeats === 0} onClick={handleSelect} className="btn btn-primary">Select</button>
                </div>
              </div>
            </div>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default Classes;
