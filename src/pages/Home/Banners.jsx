import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const BannerSlider = () => {
  return (
    <div>
      <div className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
          Welcome <span className="text-gradient">Champs</span>
        </h2>
        <p className="py-12 text-center">
          Hi Champs. How is going.. Welcome you to this summer camping.
          <br /> <br /> You can check out our special sports events to utilize this summer time at its best.
        </p>
      </div>

      <div className="mt-4 mb-16 rounded-xl overflow-hidden object-cover">
        <Carousel autoPlay>
          <div>
            <img
              className="rounded-xl"
              src={"https://i.ibb.co/W0B58Dj/download.jpg"}
            />
            <p className="legend">Summer time, play time</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={"https://i.ibb.co/mH0mcfC/images.jpg"}
            />
            <p className="legend">Cricket tournament awaits you..</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={"https://i.ibb.co/vYkqZNj/download.jpg"}
            />
            <p className="legend">Play together to joy more</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={"https://i.ibb.co/C9pdfqk/download.jpg"}
            />
            <p className="legend">Mini football champions after the ball...</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={"https://i.ibb.co/pJQYhV5/download.jpg"}
            />
            <p className="legend">Playing volleyball in school premises.</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={"https://i.ibb.co/sHW0jYV/images.jpg"}
            />
            <p className="legend">Family vacation on river-side.</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={"https://i.ibb.co/h1wW2Mk/images.jpg"}
            />
            <p className="legend">find more activities on upcoming summer camp</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={"https://i.ibb.co/fHSG6v7/download.jpg"}
            />
            <p className="legend">Are you ready to take the challenge?</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={"https://i.ibb.co/N6CHZNg/istockphoto-1369485989-612x612.jpg"}
            />
            <p className="legend">Dare to leap?</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BannerSlider;
