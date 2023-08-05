import { Slide } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const OurHeros = () => {
  return (
    <div className="my-32" name="hero">
      <Slide className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
          Our <span className="text-gradient">Heros</span>
        </h2>
        <p className="py-12 text-center">
          Here are our top champions. They are our true heros.
        </p>
      </Slide>

      <Marquee speed={100}>
        <img
          className="mask mask-parallelogram w-96"
          src="https://i.ibb.co/LvLLxbN/Cycling.jpg"
        />
        <img
          className="mask mask-parallelogram w-96"
          src="https://i.ibb.co/9cFKrx6/Sea-bath.jpg"
        />
        <img
          className="mask mask-parallelogram w-96"
          src="https://i.ibb.co/mBWyBkp/Kite-flight.jpg"
        />
        <img
          className="mask mask-parallelogram w-96"
          src="https://i.ibb.co/hdjDrGQ/Skating.jpg"
        />
      </Marquee>
    </div>
  );
};

export default OurHeros;
