import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import FAQ from "../../assets/FAQ_animation.json";
import { Slide } from "react-awesome-reveal";

const CommonQNA = () => {
  const [sampleQuestion, setSampleQuestion] = useState([]);

  useEffect(() => {
    fetch("/FAQ.json")
      .then((res) => res.json())
      .then((data) => setSampleQuestion(data));
  }, []);

  return (
    <div className="my-8" name="FAQ">
      <Slide className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          Some <span className="text-gradient">FAQs</span>
        </h2>
        <p className="pt-12 pb-8 text-center">
          You might have some queries bubbling on your mind. Do not worry! Here you can find the answers of your most common askings.
        </p>
      </Slide>

      <div className="hero">
        <div className="hero-content flex-col md:flex-row">
          <div className="relative lg:w-1/2 ">
            <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
              <Lottie animationData={FAQ} loop={true} />
            </div>
          </div>

          {/* Accordion Part */}
          <div className="mt-16 sm:mt-0">
            {sampleQuestion.map(({ id, question, answer }) => (
              <div
                key={id}
                className="collapse collapse-arrow bg-base-200 my-2"
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  {question}
                </div>
                <div className="collapse-content">
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonQNA;
