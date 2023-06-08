import { useEffect, useState } from "react";
import { getAllInstructors } from "../api/instructors";
import useTitle from "../hooks/useTitle";
import LazyLoad from "react-lazy-load";

const Instructors = () => {
    useTitle("Instructors");

  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    getAllInstructors().then((data) => {
      setInstructors(data);
    });
  }, []);
//   console.log(instructors);

  return (
    <div>
        <div className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
          All <span className="text-gradient">Instructors</span>
        </h2>
        <p className="py-12 text-center">
          Meet our all the instructors who are always ready to excite your sports experience.
        </p>
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
              <th>Classes</th>
            </tr>
          </thead>
          <tbody>
            {/* row data */}
            {instructors.map((instructor, index) => (
              <tr className="hover" key={instructor._id}>
                <td className="text-center">{index + 1}</td>
                <td>
                  <div className="mx-auto mask mask-squircle w-12 h-12">
                    <img src={instructor.image} />
                  </div>
                </td>
                <td className="text-center font-bold">{instructor.name}</td>
                <td className="text-center">{instructor.email}</td>
                <td className="text-center">{instructor.classes.map(singleClass => <span key={singleClass}>{singleClass}, </span>)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </LazyLoad>
    </div>
  );
};

export default Instructors;
