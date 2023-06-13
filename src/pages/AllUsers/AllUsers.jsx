import { makeAdmin, makeInstructor, saveAsInstructor,  } from "../../api/userAuth";
import LazyLoad from "react-lazy-load";
import { toast } from "react-hot-toast";
import { useAllUsers } from "../../hooks/useHooksAPI";
import useTitle from "../../hooks/useTitle";
import { Fade } from "react-awesome-reveal";


const AllUsers = () => {
  useTitle("Manage Users");

  const [allUsers, refetch] = useAllUsers();

  const handleMakeAdmin = (currentSingleUser) => {
    makeAdmin(currentSingleUser.email);
    toast.success(`${currentSingleUser.name} is an admin now!`);
    refetch();
  };

  const handleMakeInstructor = (currentSingleUser) => {
    makeInstructor(currentSingleUser.email);
    toast.success(`${currentSingleUser.name} is an instructor now!`);
    saveAsInstructor(currentSingleUser);
    toast.success(`${currentSingleUser.name} has also been saved as an instructor!`);
    refetch();
  };

  

  return (
    <div>
      <Fade className="sm:w-3/4 mx-auto mt-12 mb-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          All <span className="text-gradient">Users</span>
        </h2>
      </Fade>

      <LazyLoad className="overflow-x-auto my-6 lg:mx-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center font-bold text-base bg-base-200">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row data */}
            {allUsers.map((singleUser, index) => (
              <tr className="hover" key={singleUser._id}>
                <td className="text-center">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mx-auto mask mask-squircle w-12 h-12">
                      <img src={singleUser.image} />
                    </div>
                  </div>
                </td>
                <td className="text-center font-bold">{singleUser.name}</td>
                <td className="text-center">{singleUser.email}</td>

                <td className="mx-auto flex items-center text-center gap-4">
                  {/* instructor btn */}
                  <div className="w-1/2">
                    {singleUser.role === "instructor" || "" ? (
                      <span className="text-base font-semibold">
                        Instructor Already!
                      </span>
                    ) : (
                      <button
                        disabled={singleUser.role === "admin" || ""}
                        onClick={() => {
                          handleMakeInstructor(singleUser);
                        }}
                        className="btn btn-outline btn-info"
                      >
                        Make Instructor
                      </button>
                    )}
                  </div>

                  {/* admin btn */}
                  <div className="w-1/2">
                    {singleUser.role === "admin" || "" ? (
                      <span className="text-base font-semibold">
                        Admin Already!
                      </span>
                    ) : (
                      <button
                        disabled={singleUser.role === "instructor" || ""}
                        onClick={() => {
                          handleMakeAdmin(singleUser);
                        }}
                        className="btn btn-outline btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </LazyLoad>
    </div>
  );
};

export default AllUsers;
