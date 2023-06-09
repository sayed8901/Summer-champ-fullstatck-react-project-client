import { makeAdmin, makeInstructor } from "../../api/userAuth";
import LazyLoad from "react-lazy-load";
import { toast } from "react-hot-toast";
import { useAllUsers } from "../../hooks/useCustomHook";


const AllUsers = () => {
const [allUsers, refetch] = useAllUsers();

  const handleMakeAdmin = (currentSingleUser) => {
    makeAdmin(currentSingleUser.email);
    toast.success(`${currentSingleUser.name} is an admin now!`);
    refetch();
  };

  const handleMakeInstructor = (currentSingleUser) => {
    makeInstructor(currentSingleUser.email);
    toast.success(`${currentSingleUser.name} is an instructor now!`);
    refetch();
  };



  return (
    <div>
      <div className="sm:w-3/4 mx-auto my-16">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          All <span className="text-gradient">Users</span>
        </h2>
      </div>

      <LazyLoad className="overflow-x-auto my-12">
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
                <td className="mx-auto grid grid-cols-2 items-center text-center gap-4">
                  {/* <button className="btn btn-outline btn-info">
                    Make Instructor
                  </button> */}
                  {singleUser.role === "instructor" || "" ? (
                    "Instructor Already!"
                  ) : (
                    <button disabled={singleUser.role === "admin" || ""}
                      onClick={() => {
                        handleMakeInstructor(singleUser);
                      }}
                      className="btn btn-outline btn-primary"
                    >
                      Make Instructor
                    </button>
                  )}
                  {singleUser.role === "admin" || "" ? (
                    "Admin Already!"
                  ) : (
                    <button disabled={singleUser.role === "instructor" || ""}
                      onClick={() => {
                        handleMakeAdmin(singleUser);
                      }}
                      className="btn btn-outline btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
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
