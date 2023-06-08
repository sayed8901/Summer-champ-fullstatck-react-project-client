import { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { getAllApprovedClasses } from "../api/classes";

const Classes = () => {
  useTitle("Classes");

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    getAllApprovedClasses().then((data) => {
        setClasses(data);
    });
  }, []);
//   console.log(classes);

  return (
    <div>
      <div className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
          All <span className="text-gradient">Classes</span>
        </h2>
        <p className="py-12 text-center">
          You can check out our popular sports classes here & enroll to your
          favorite one.
        </p>
      </div>

      
    </div>
  );
};

export default Classes;
