import { useNavigate, useParams } from "react-router-dom";
import { sendFeedback } from "../../../hooks/useHooksAPI";

const Feedback = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleFeedback = (event) => {
    event.preventDefault();
    const feedbackText = event.target.feedback.value;
    const feedbackData = { feedback: feedbackText, feedbackId : id }

    sendFeedback(feedbackData);
    navigate("/dashboard/manage-classes");
  }




  return (
    <form
        onSubmit={handleFeedback}
      className="card-body w-full mx-auto"
    >
      <h2 className="text-2xl font-bold text-center text-gradient mb-2">
        Send your feedback
      </h2>
      <div>
        <div className="my-12 textarea ">
          <textarea
            className="input input-bordered w-72 md:w-96 h-44 p-8 border-y-8 rounded-3xl text-black"
            name="feedback"
            placeholder="Write here about your feedback about the class status approval."
          ></textarea>
        </div>
      </div>

      <input
        className="btn btn-primary w-36 mx-auto mt-6 bg-gradient font-bold"
        type="submit"
        value="Post"
      />
    </form>
  );
};

export default Feedback;
