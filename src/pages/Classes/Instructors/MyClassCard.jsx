import { useState } from "react";
import { useEnrolledNumberOfStudents } from "../../../hooks/useHooksAPI";
import { useEffect } from "react";

const MyClassCard = ({ singleClass }) => {
  const [countedNumber, setCountedNumber] = useState();
  const { _id } = singleClass;
  const [totalEnrolledStudentsByClassID] = useEnrolledNumberOfStudents(_id);
  useEffect(() => {
    setCountedNumber(totalEnrolledStudentsByClassID.length);
  }, [totalEnrolledStudentsByClassID.length]);

  return (
    <div className={`card sm:card-side shadow-xl bg-base-100 mb-12 sm:mb-8`}>
      <figure className="sm:w-5/12 sm:ms-4">
        <img className="rounded-xl" src={singleClass.classImage} />
      </figure>
      <div className="card-body space-y-2 md:space-y-4">
        <h2 className="card-title text-gradient md:text-2xl">
          {singleClass.className}
        </h2>
        <div className="space-y-1 md:space-y-2">
          <p>
            Total Enrolled Students: {countedNumber}
          </p>
          <p>
            Approval Status:
            <b className="text-gradient"> {singleClass?.status}</b>
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-primary btn-outline">
            Update the class info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyClassCard;
