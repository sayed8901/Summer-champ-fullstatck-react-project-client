import LazyLoad from "react-lazy-load";
import { useAllClasses } from "../../../hooks/useHooksAPI";
import { makeApproved, makeDenied } from "../../../api/userAuth";
import { toast } from "react-hot-toast";

const ManageClasses = () => {
  const [allClasses, refetch] = useAllClasses();
  //   console.log(allClasses);

  const handleStatusApproved = (currentSingleClassData) => {
    makeApproved(currentSingleClassData._id);
    toast.success(`"${currentSingleClassData.className}" has been approved.`);
    refetch();
  };

  const handleStatusDenied = (currentSingleClassData) => {
    makeDenied(currentSingleClassData._id);
    toast.error(
      `Oops!! "${currentSingleClassData.className}" has been denied!`
    );
    refetch();
  };

  return (
    <div>
      <div className="sm:w-3/4 mx-auto mt-12 mb-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          All <span className="text-gradient">Classes</span>
        </h2>
      </div>

      <LazyLoad className="overflow-x-auto my-6 lg:mx-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center font-bold bg-base-200">
              <th>#</th>
              <th>Class Name & Image</th>
              <th>Instructor Name & Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}

            {allClasses.map((singleClass, index) => (
              <tr className="hover" key={singleClass._id}>
                <td className="text-center">{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mx-auto mask mask-squircle w-12 h-12">
                        <img src={singleClass.classImage} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{singleClass.className}</div>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  {singleClass.instructorName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {singleClass.instructorEmail}
                  </span>
                </td>
                <td className="text-center">{singleClass.availableSeats}</td>
                <td className="text-center">{singleClass.price}</td>
                <td className="text-center">{singleClass.status}</td>

                <td className="mx-auto flex items-center text-center gap-4">
                  {/* denied btn */}
                  <div className="w-1/3">
                    <button
                      disabled={
                        singleClass.status === "approved" ||
                        singleClass.status === "denied"
                      }
                      onClick={() => {
                        handleStatusApproved(singleClass);
                      }}
                      className="btn btn-outline btn-primary"
                    >
                      Approve
                    </button>
                  </div>

                  {/* approved btn */}
                  <div className="w-1/3">
                    <button
                      disabled={
                        singleClass.status === "approved" ||
                        singleClass.status === "denied"
                      }
                      onClick={() => {
                        handleStatusDenied(singleClass);
                      }}
                      className="btn btn-outline btn-error"
                    >
                      Deny
                    </button>
                  </div>
                  <button className="btn btn-sm btn-outline btn-info w-1/3">
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </LazyLoad>
    </div>
  );
};

export default ManageClasses;
