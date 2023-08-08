import { Slide } from "react-awesome-reveal";
import SocialLinks from "../../components/SocialLinks";

const Contact = () => {
    return (
      <div className="mt-8 mb-24">
        <Slide className="sm:w-3/4 mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
            <span className="text-gradient">Contact</span> us
          </h2>
          <p className="py-12 text-center">
            Have questions or need assistance? We are here to help! Feel free to
            reach out to us for any inquiries or information about our exciting
            summer camp programs.
          </p>
        </Slide>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 w-5/6 mx-auto">
          <div className="text-center mx-auto lg:text-left mb-16">
            <h1 className="text-2xl font-bold mb-8">Get in touch!</h1>
            <p className="py-6">
              Contact us today and let the adventure begin!
            </p>
            <SocialLinks></SocialLinks>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-center mb-4">
              Leave your thought..
            </h1>
            <div className="card shadow-2xl glass">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Comments</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Your feedback"
                    className="input input-bordered h-28"
                  />
                </div>
                <div className="form-control mt-6 w-1/2 mx-auto">
                  <button className="btn btn-primary rounded-full bg-gradient">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;