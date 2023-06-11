import { useEffect, useState } from "react";
import { getAllClassesByEnrolledStudents } from "../../api/classes";
import LazyLoad from "react-lazy-load";
import AnimatedSection from "../../components/AOS-Animate/AnimatedSection";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    getAllClassesByEnrolledStudents().then((data) => {
      setClasses(data);
    });
  }, []);
  const topClasses = classes.slice(0, 6);
  //   console.log(topClasses);

  return (
    <div className="my-32">
      <div className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
          Popular <span className="text-gradient">Classes</span>
        </h2>
        <p className="py-12 text-center">
          This summer, we are providing some exciting sports camping.
          <br /> <br /> If you are interested, you can find our top popular
          sports classes here & enroll to your favorite one today...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topClasses.map((singleClass) => (
          <LazyLoad key={singleClass._id}>
            <AnimatedSection>
              <div className="card glass">
                <figure>
                  <img
                    className="h-48 lg:h-64 xl:h-72 rounded-2xl"
                    src={singleClass?.classImage}
                  />
                </figure>

                <div className="space-y-4 py-8 px-4 text-center">
                  <h2 className="mb-8 text-gradient text-2xl font-bold">
                    {singleClass?.className}
                  </h2>
                  <div className="divider pb-2">Instructor info</div>
                  <p>
                    <small>
                      Instructor:{" "}
                      <b className="text-xl">{singleClass?.instructorName}</b>
                    </small>
                  </p>
                  <p>
                    <small>
                      Instructor email: <b>{singleClass?.instructorEmail}</b>
                    </small>
                  </p>
                  <div className="divider pt-8 pb-2">Sports class info</div>
                  <p>
                    <small className="mt-4 mb-2 text-gradient">
                      Price: BDTK <b>{singleClass?.price}</b>
                    </small>
                  </p>
                  <div className="flex justify-between">
                    <small className="text-center">
                      Total students enrolled: <b>{singleClass?.enrolledStudents}</b>
                    </small>
                    <small className="text-center text-gradient">
                      Available Seats: <b>{singleClass?.availableSeats}</b>
                    </small>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
