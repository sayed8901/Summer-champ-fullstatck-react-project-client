import { useContext } from "react";
import { useEnrolledClasses } from "../../../hooks/useHooksAPI";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../authProviders/AuthProvider";
import LazyLoad from "react-lazy-load";
import moment from "moment/moment";

const EnrolledClasses = () => {
  useTitle("Enrolled Classes");
  const { user } = useContext(AuthContext);

  const [myEnrolledClasses] = useEnrolledClasses(user);

  return (
    <div>
      <div className="sm:w-3/4 mx-auto my-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          My All <span className="text-gradient">Enrolled Classes</span>
        </h2>
      </div>

      <LazyLoad className="overflow-x-auto my-6 lg:mx-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center font-bold text-base bg-base-200">
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Enrollment Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row data */}
            {myEnrolledClasses.map((singleClass, index) => (
              <tr className="hover" key={singleClass._id}>
                <td className="text-center">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mx-auto mask mask-squircle w-12 h-12">
                      <img src={singleClass.classImage} />
                    </div>
                  </div>
                </td>
                <td className="text-center font-bold">{singleClass.className}</td>
                <td className="text-center">{singleClass.instructorName}</td>
                <td className="text-center">{singleClass.instructorEmail}</td>
                <td className="text-center text-sm">{moment(singleClass.date).format("dddd, MMMM Do YYYY, hh:mm a")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </LazyLoad>
    </div>
  );
};

export default EnrolledClasses;
