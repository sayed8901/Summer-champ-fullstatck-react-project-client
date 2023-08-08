import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const ImprovementStrategy = () => {
    const [improvementStrategyData, setImprovementStrategyData] = useState([]);

    useEffect(() => {
        fetch("/improveStrategy.json")
          .then((res) => res.json())
          .then((data) => setImprovementStrategyData(data));
    }, [])
    // console.log(improvementStrategyData);


    return (
      <div className="my-32">
        <Slide className="sm:w-3/4 mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
            Improvement <span className="text-gradient"> Strategy</span>
          </h2>
          <p className="py-12 text-center">
            Our Instructors believe that if you want to improve the Game, you
            need to focus on Key Elements.
          </p>
        </Slide>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {improvementStrategyData.map((instruction) => (
            <div
              key={instruction.id}
              className="card glass shadow-xl text-left m-4 p-4 sm:p-8 rounded-md space-y-4 group hover:scale-110 hover:duration-500"
            >
              <div className="flex justify-start items-center gap-4">
                <img
                  className="bg-slate-200 p-2 rounded-lg w-24"
                  src={instruction.logo}
                  alt=""
                />
                <h3 className="sm:text-xl font-bold">{instruction.title}</h3>
              </div>
              <p>{instruction.description}+ Jobs Available</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ImprovementStrategy;