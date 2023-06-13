import LazyLoad from "react-lazy-load";
import { deleteSelectedClass, useSelectedClasses } from "../../../hooks/useHooksAPI";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { Fade } from "react-awesome-reveal";
import { useContext } from "react";
import { ThemeContext } from "../../../authProviders/ThemeContextProvider";

const SelectedClasses = () => {
  useTitle('Selected Classes');
  const {darkMode} = useContext(ThemeContext);
  
  const [selectedClasses, refetch] = useSelectedClasses();
  //   console.log(selectedClasses);

  const handleDelete = (singleClass) => {
    const id = singleClass._id;
    // console.log(id);
    deleteSelectedClass(id);
    refetch();
    toast.success('Your have successfully deleted this class from your list.')
  }

  return (
    <div className="lg:px-8">
      <Fade className="sm:w-3/4 mx-auto my-16">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          My <span className="text-gradient">Selected Classes</span>
        </h2>
      </Fade>

      {selectedClasses.map((singleClass) => (
        <LazyLoad key={singleClass._id}>
          <div
            className={`card glass sm:card-side shadow-xl bg-base-100 mb-12 sm:mb-8 ${darkMode ? 'theme-dark' : 'theme-light'}`}
          >
            <figure className="sm:w-5/12 sm:ms-4">
              <img className="rounded-xl" src={singleClass?.classImage} />
            </figure>
            <div className="card-body space-y-2 md:space-y-4">
              <h2 className="card-title text-gradient md:text-2xl mb-2 md:mb-4">
                {singleClass.className}
              </h2>
              <div className="space-y-1 md:space-y-2">
                <p>
                  Instructor Name: <b>{singleClass.instructorName}</b>
                </p>
                <p className="sm:text-sm md:text-base">
                  Instructor email: <b>{singleClass.instructorEmail}</b>
                </p>
              </div>
                <p>
                  Price:{" "}
                  <b className="text-gradient">BDTK {singleClass.price}</b>
                </p>
              <div className="card-actions justify-end gap-4">
                <button
                  onClick={() => {
                    handleDelete(singleClass);
                  }}
                  className="btn btn-sm btn-primary btn-outline"
                >
                  Delete
                </button>
                <Link to={`/dashboard/payment/${singleClass._id}`}
                  className="btn btn-sm btn-primary bg-gradient"
                >
                  Payment
                </Link>
              </div>
            </div>
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default SelectedClasses;
