import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Fade } from "react-awesome-reveal";

const BannerSlider = () => {
  return (
    <div>
      <Fade className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
          Welcome <span className="text-gradient">Champs</span>
        </h2>
        <p className="py-12 text-center">
          Hi Champs. How is going.. Welcome you to this summer camping.
          <br /> <br /> You can check out our special sports events to utilize
          this summer time at its best.
        </p>
      </Fade>

      <div className="mt-4 mb-16 rounded-xl overflow-hidden object-cover">
        <Carousel autoPlay infiniteLoop>
          <div>
            <img
              className="rounded-xl"
              src={
                "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              }
              // src={"https://i.ibb.co/W0B58Dj/download.jpg"}
            />
            <p className="legend">Summer time, play time</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={
                "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"
              }
              // src={"https://i.ibb.co/mH0mcfC/images.jpg"}
            />
            <p className="legend">Cricket tournament awaits you..</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={
                "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
              }
              // src={"https://i.ibb.co/vYkqZNj/download.jpg"}
            />
            <p className="legend">Play together to joy more</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={
                "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
              }
              // src={"https://i.ibb.co/C9pdfqk/download.jpg"}
            />
            <p className="legend">champions chasing the ball...</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={
                "https://plus.unsplash.com/premium_photo-1661963404614-74802f16a7a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
              }
              // src={"https://i.ibb.co/pJQYhV5/download.jpg"}
            />
            <p className="legend">Playing volleyball in school premises.</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={
                "https://images.unsplash.com/photo-1685527200496-b92600a39955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              }
              // src={"https://i.ibb.co/sHW0jYV/images.jpg"}
            />
            <p className="legend">Kayaking on river-side.</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={
                "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              }
              // src={"https://i.ibb.co/h1wW2Mk/images.jpg"}
            />
            <p className="legend">
              find more activities on upcoming summer camp
            </p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={
                "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
              }
              // src={"https://i.ibb.co/fHSG6v7/download.jpg"}
            />
            <p className="legend">Are you ready to take the challenge?</p>
          </div>
          <div>
            <img
              className="rounded-xl"
              src={
                "https://images.unsplash.com/photo-1551892589-865f69869476?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              }
              // src={"https://i.ibb.co/9cFKrx6/Sea-bath.jpg"}
            />
            <p className="legend">Dare to leap?</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BannerSlider;
