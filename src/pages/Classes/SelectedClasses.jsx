import LazyLoad from "react-lazy-load";
import { useSelectedClasses } from "../../hooks/useCustomHook";
import { deleteSelectedClass } from "../../api/classes";
import { toast } from "react-hot-toast";

const SelectedClasses = () => {
  const [selectedClasses, refetch] = useSelectedClasses();
  //   console.log(selectedClasses);

  const handleDelete = (singleClass) => {
    const id = singleClass._id;
    console.log(id);
    deleteSelectedClass(id);
    refetch();
    toast.success('Your have successfully deleted this class from your list.')
  }

  return (
    <div>
      <div className="sm:w-3/4 mx-auto my-16">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          My <span className="text-gradient">Selected Classes</span>
        </h2>
      </div>

      {selectedClasses.map((singleClass) => (
        <LazyLoad key={singleClass._id}>
          <div
            className={`card sm:card-side shadow-xl bg-base-100 mb-12 sm:mb-8`}
          >
            <figure className="sm:w-5/12 sm:ms-4">
              <img className="rounded-xl" src={singleClass?.classImage} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-gradient">
                {singleClass.className}
              </h2>
              <div>
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
                <button
                  className="btn btn-sm btn-primary bg-gradient"
                >
                  Payment
                </button>
              </div>
            </div>
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default SelectedClasses;
