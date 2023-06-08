import { useEffect, useState } from "react";
import { getAllInstructors } from "../../api/instructors";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    getAllInstructors().then((data) => {
      setInstructors(data);
    });
  }, []);
  const topInstructors = instructors.slice(0, 6);
  //   console.log(topInstructors);

  return (
    <div className="my-32">
      <div className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
          Popular <span className="text-gradient">Instructors</span>
        </h2>
        <p className="py-12 text-center">
          Hi Champs. How is going.. Welcome you to this summer camping.
          <br /> <br /> If you are interested, you can find our top popular
          sports classes here & enroll to your favorite one today...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topInstructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card bg-base-100 shadow-xl flex flex-row"
          >
            <figure className="m-4">
              <img
                className="rounded-xl w-28 sm:w-32 md:w-28"
                src={instructor.image}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p><small><b>{instructor.email}</b></small></p>
              <small>classes: {instructor.classes.map(classNames => <b key={classNames}>{classNames}, </b>)}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
