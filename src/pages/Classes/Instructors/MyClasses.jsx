import useTitle from "../../../hooks/useTitle";
import { useAddedClasses } from "../../../hooks/useHooksAPI";
import MyClassCard from "./MyClassCard";


const MyClasses = () => {
  useTitle("My Classes");

  const [myAllClasses, ] = useAddedClasses();
  //   console.log(myAllClasses);

  return (
    <div className="lg:px-8">
      <div>
        <div className="sm:w-3/4 mx-auto my-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-center">
            My <span className="text-gradient">All Classes</span>
          </h2>
        </div>

        {myAllClasses.map((singleClass) => (
            <MyClassCard key={singleClass._id} singleClass={singleClass}></MyClassCard>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
