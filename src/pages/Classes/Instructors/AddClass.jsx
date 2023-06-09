import { useContext } from "react";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../authProviders/AuthProvider";
import { addClass } from "../../../api/addClass";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
    useTitle('Add a Class');
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAdd = (event) => {
        event.preventDefault();

        const form = event.target;
        const className = form.className.value;
        const classImage = form.classImage.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const instructorName = user.displayName;
        const instructorEmail = user.email;

        const newClassData = {className, classImage, availableSeats, price, instructorName, instructorEmail};

        addClass(newClassData)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You have successfully created a new class.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/my-all-classes");
    }

  return (
    <div>
      <form
        onSubmit={handleAdd}
        className="card-body w-full sm:max-w-[90%] mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-gradient mb-2">
          Add a New Class
        </h2>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              name="className"
              placeholder="Name of the class you want to add."
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="url"
              name="classImage"
              placeholder="Relevant photo_URL of the class"
              className="input input-bordered"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-8">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                type="text"
                name="availableSeats"
                placeholder="Number of seats open"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price of the course"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text" readOnly defaultValue={user.displayName}
              name="instructorName"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="email" readOnly defaultValue={user.email}
              name="instructorEmail"
              className="input input-bordered"
            />
          </div>
        </div>

        <input
          className="btn btn-primary w-36 mx-auto mt-6 bg-gradient font-bold"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddClass;
