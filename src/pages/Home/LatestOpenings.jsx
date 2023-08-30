import { Fade, Slide } from "react-awesome-reveal";
import AnimatedSection from "../../components/AOS-Animate/AnimatedSection";
import Countdown from "../../utilities/Countdown";

const LatestOpenings = () => {
  // for the countdown part
  const targetDate = new Date("2023-10-31T23:59:59").getTime();

  return (
    <div className="my-32">
      <Slide className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
          Upcoming <span className="text-gradient">Openings</span>
        </h2>
        <p className="py-12 text-center">
          We are planning to launch some exciting sports classes very soon. If
          you are interested, you can check it out & have a look time-to-time
          for upcoming events.
        </p>
      </Slide>

      {/* The countdown part */}
      <div>
        <Fade className="mx-auto">
          <p className="font-bold text-center">
            Are you ready to take the upcoming challenge?
          </p>
          <p className="font-bold text-center text-xl my-2">
            Lets <span className="text-gradient">Countdown</span> Together..
          </p>
        </Fade>
        <Slide className="flex justify-center items-center mt-8 mb-16">
          <Countdown targetDate={targetDate} />
        </Slide>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* class 1 */}
        <AnimatedSection>
          <div className="card glass group hover:scale-110 hover:duration-500 hover:shadow-xl">
            <div className="space-y-4 p-4 text-center">
              <h2 className="mb-4 text-gradient text-2xl font-bold">Karate</h2>
              <div className="divider">Instructor info</div>
              <p>
                <small>
                  Instructor: <b className="text-xl">Mr. Rasel</b>
                </small>
                <br />
                <small>
                  Instructor email: <b>rasel@ist.com</b>
                </small>
              </p>
              <div className="divider pt-4">Sports class info</div>
              <div>
                <small className="mt-4 mb-2 text-gradient">
                  Price: BDTK <b>200</b>
                </small>
                <br />
                <small className="text-center text-gradient">
                  Seats: <b>will be available soon...</b>
                </small>
              </div>
            </div>
            <figure>
              <img
                className="max-h-48 m-4 lg:h-64 xl:h-72 rounded-2xl"
                src={
                  "https://images.unsplash.com/photo-1514050566906-8d077bae7046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
                }
              />
            </figure>
          </div>
        </AnimatedSection>

        {/* class 2 */}
        <AnimatedSection>
          <div className="card glass mt-12 sm:mt-0 group hover:scale-110 hover:duration-500 hover:shadow-xl">
            <div className="space-y-4 p-4 text-center">
              <h2 className="mb-4 text-gradient text-2xl font-bold">
                Swimming competition
              </h2>
              <div className="divider">Instructor info</div>
              <p>
                <small>
                  Instructor: <b className="text-xl">Supriya Jannat</b>
                </small>
                <br />
                <small>
                  Instructor email: <b>supriya@jannat.com</b>
                </small>
              </p>
              <div className="divider pt-4">Sports class info</div>
              <div>
                <small className="mt-4 mb-2 text-gradient">
                  Price: BDTK <b>150</b>
                </small>
                <br />
                <small className="text-center text-gradient">
                  Seats: <b>will be available soon...</b>
                </small>
              </div>
            </div>
            <figure>
              <img
                className="max-h-48 m-4 lg:h-64 xl:h-72 rounded-2xl"
                src={
                  "https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                }
              />
            </figure>
          </div>
        </AnimatedSection>

        {/* class 3 */}
        <AnimatedSection>
          <div className="card glass mt-12 sm:mt-0 group hover:scale-110 hover:duration-500 hover:shadow-xl">
            <div className="space-y-4 p-4 text-center">
              <h2 className="mb-4 text-gradient text-2xl font-bold">Hiking</h2>
              <div className="divider">Instructor info</div>
              <p>
                <small>
                  Instructor: <b className="text-xl">Mr. Tamim</b>
                </small>
                <br />
                <small>
                  Instructor email: <b>tamim@arabi.com</b>
                </small>
              </p>
              <div className="divider pt-4">Sports class info</div>
              <div>
                <small className="mt-4 mb-2 text-gradient">
                  Price: BDTK <b>175</b>
                </small>
                <br />
                <small className="text-center text-gradient">
                  Seats: <b>will be available soon...</b>
                </small>
              </div>
            </div>
            <figure>
              <img
                className="max-h-48 m-4 lg:h-64 xl:h-72 rounded-2xl"
                src={
                  "https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                }
              />
            </figure>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default LatestOpenings;
