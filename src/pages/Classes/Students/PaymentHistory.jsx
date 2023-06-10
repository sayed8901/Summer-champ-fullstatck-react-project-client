import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../../../authProviders/AuthProvider";
import { useEnrolledClasses } from "../../../hooks/useHooksAPI";
import useTitle from "../../../hooks/useTitle";
import LazyLoad from "react-lazy-load";


const PaymentHistory = () => {
    useTitle("Payment History");
  const { user } = useContext(AuthContext);

  const [myEnrolledClasses] = useEnrolledClasses(user);

    return (
        <div>
      <div className="sm:w-3/4 mx-auto my-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          <span className="text-gradient">Payment</span> History
        </h2>
      </div>

      <LazyLoad className="overflow-x-auto my-6 lg:mx-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center font-bold text-base bg-base-200">
              <th>#</th>
              <th>Class Name</th>
              <th>Payment <br /> Amount</th>
              <th>Payment <br /> Method</th>
              <th>Transaction ID</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row data */}
            {myEnrolledClasses.map((singleClass, index) => (
              <tr className="hover" key={singleClass._id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center font-bold">{singleClass.className}</td>
                <td className="text-center">{singleClass.price}</td>
                <td className="text-center font-bold">{singleClass.paymentMethod}</td>
                <td className="text-center text-xs">{singleClass.transactionID}</td>
                <td className="text-center text-sm">{moment(singleClass.date).format("dddd, MMMM Do YYYY, hh:mm a")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </LazyLoad>
    </div>
    );
};

export default PaymentHistory;