import { Elements } from "@stripe/react-stripe-js";
import useTitle from "../../../../hooks/useTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useGetSingleClass } from "../../../../hooks/useHooksAPI";

// provide publishable Key.
// it is said to be use this stripePromise outside or above of the components
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// console.log(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  useTitle("Payment");

  const { id } = useParams();
  const [singleClass] = useGetSingleClass(id);

  return (
    <div className="mx-auto w-[350px] sm:w-[500px] md:w-[600px] lg:w-[700px] sm:px-8">
      <div className="mb-8 lg:mb-16 ">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          <span className="text-gradient">Payment</span> process
        </h2>
      </div>

      <div className="border-y-8 rounded-3xl">
        <Elements stripe={stripePromise}>
          <CheckoutForm classData={singleClass}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
