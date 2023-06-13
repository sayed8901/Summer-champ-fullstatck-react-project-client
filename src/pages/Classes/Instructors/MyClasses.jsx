import useTitle from "../../../hooks/useTitle";
import { useAddedClasses } from "../../../hooks/useHooksAPI";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const MyClasses = () => {
  useTitle("My Classes");

  const [myAllClasses] = useAddedClasses();
  //   console.log(myAllClasses);

  return (
    <div className="lg:px-8">
      <div>
        <Fade className="sm:w-3/4 mx-auto my-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-center">
            My <span className="text-gradient">All Classes</span>
          </h2>
        </Fade>

        {myAllClasses.map((singleClass) => (
          <LazyLoad key={singleClass._id}>
            <div
              className={`card sm:card-side shadow-xl bg-base-100 mb-12 sm:mb-8`}
            >
              <figure className="sm:w-5/12 sm:ms-4">
                <img className="rounded-xl" src={singleClass.classImage} />
              </figure>
              <div className="card-body space-y-1 md:space-y-2 sm:w-7/12">
                <h2 className="card-title text-gradient md:text-2xl">
                  {singleClass.className}
                </h2>
                <div className="space-y-0 md:space-y-1">
                  <p>Total Enrolled Students: <b>{singleClass.enrolledStudents}</b></p>
                  <p>
                    Approval Status:
                    <b className="text-gradient"> {singleClass?.status}</b>
                  </p>
                </div>
                {
                  singleClass.status === "denied" && <small>Feedback: <b>{singleClass?.feedback}</b></small>
                }
                <div className="card-actions justify-end">
                  <Link to={`update-class/${singleClass._id}`} className="btn btn-sm btn-primary btn-outline">
                    Update the class info
                  </Link>
                </div>
              </div>
            </div>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
