import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../authProviders/AuthProvider";
import { toast } from "react-hot-toast";

const CheckOutForm = ({ classData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionID, setTransactionID] = useState("");

  
  const {price, classImage, className, _id, instructorName, instructorEmail} = classData;

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price })
      .then((res) => {
        console.log("clientSecret:", res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // getting a reference to a mounted CardElement
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error while establishing payment method:", error.message);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("testing payment method:", paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log("confirmError:", confirmError);
      setCardError(confirmError.message);
    }

    console.log("payment intent:", paymentIntent);

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const transactionID = paymentIntent.id;
      setTransactionID(transactionID);

      // Save payment information to the server
      const paymentInfo = {
        user: user?.email,
        transactionID,
        price,
        classId : _id,
        classImage,
        className,
        instructorName,
        instructorEmail,
        date: new Date(),
      };

      axiosSecure.post("/payments", paymentInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success('Payment Successfully Completed.')
        }
      });
    }
  };

  return (
    <>
      <form className="w-2/3 mx-auto my-24" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center">
          <button
            className="btn btn-primary btn-sm mt-8"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>

      {cardError && (
        <p className="text-error font-bold text-center">{cardError}</p>
      )}
      {transactionID && (
        <p className="text-center border-x-4 rounded-2xl w-3/4 mx-auto mb-8">
          Payment completed with <span className="text-primary">transactionID</span>: <br /><span className="text-xl font-bold text-gradient">{transactionID}</span>
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
