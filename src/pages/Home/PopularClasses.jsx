import { useEffect, useState } from "react";
import { getAllClassesByEnrolledStudents } from "../../api/classes";
import LazyLoad from "react-lazy-load";
import AnimatedSection from "../../components/AOS-Animate/AnimatedSection";
import { Slide } from "react-awesome-reveal";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    getAllClassesByEnrolledStudents().then((data) => {
      setClasses(data);
    });
  }, []);
  const topClasses = classes.slice(0, 12);
  //   console.log(topClasses);

  return (
    <div className="my-32">
      <Slide className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
          Popular <span className="text-gradient">Classes</span>
        </h2>
        <p className="py-12 text-center">
          This summer, we are providing some exciting sports camping.
          <br /> <br /> If you are interested, you can find our top popular
          sports classes here & enroll to your favorite one today...
        </p>
      </Slide>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {topClasses.map((singleClass) => (
          <LazyLoad key={singleClass._id}>
            <AnimatedSection>
              <div className="card glass group hover:scale-110 hover:duration-500 hover:shadow-xl">
                <figure>
                  <img
                    className="max-h-64 w-full lg:h-64 xl:h-72 rounded-2xl hover:animate-pulse"
                    src={singleClass?.classImage}
                  />
                </figure>

                <div className="space-y-4 p-4 text-center">
                  <h2 className="mb-4 text-gradient text-2xl font-bold">
                    {singleClass?.className}
                  </h2>
                  <div className="divider">Instructor info</div>
                  <p>
                    <small>
                      Instructor:{" "}
                      <b className="text-xl">{singleClass?.instructorName}</b>
                    </small>
                    <br />
                    <small>
                      Instructor email: <b>{singleClass?.instructorEmail}</b>
                    </small>
                  </p>
                  <div className="divider pt-4">Sports class info</div>
                  <div>
                    <small className="mt-4 mb-2 text-gradient">
                      Price: BDTK <b>{singleClass?.price}</b>
                    </small>
                    <div className="flex justify-between">
                      <small className="text-center">
                        Total students enrolled:{" "}
                        <b>{singleClass?.enrolledStudents}</b>
                      </small>
                      <small className="text-center text-gradient">
                        Available Seats: <b>{singleClass?.availableSeats}</b>
                      </small>
                    </div>
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
