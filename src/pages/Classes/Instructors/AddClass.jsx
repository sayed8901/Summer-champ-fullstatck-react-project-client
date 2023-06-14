import { useContext } from "react";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../authProviders/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { addClass } from "../../../hooks/useHooksAPI";
import { Fade, Slide } from "react-awesome-reveal";


const AddClass = () => {
  useTitle("Add a Class");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const img_hosting_token = import.meta.env.VITE_IMGBB_KEY;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;


  const handleAdd = (event) => {
    event.preventDefault();

    const form = event.target;
    const className = form.className.value;
    // const classImage = form.classImage.value;
    const availableSeats = parseFloat(form.availableSeats.value);
    const price = parseFloat(form.price.value);
    const instructorName = user.displayName;
    const instructorEmail = user.email;

    // image upload
    const uploadedImage = form.image.files[0];
    // console.log(uploadedImage);
    const formData = new FormData();
    formData.append("image", uploadedImage);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        // console.log(imageData.data);
        const imageURL = imageData.data.display_url;

        const newClassData = {
          className,
          classImage: imageURL,
          availableSeats,
          price,
          instructorName,
          instructorEmail,
          status: "pending",
          enrolledStudents: 0,
        };

        addClass(newClassData);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have successfully created a new class.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/my-all-classes");
      });
  };

  
  return (
    <div>
      <form
        onSubmit={handleAdd}
        className="card-body w-full sm:max-w-[90%] mx-auto"
      >
        <Fade className="text-3xl font-bold text-center text-gradient mb-4">
          Add a New Class
        </Fade>
        <Slide cascade>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              name="className"
              placeholder="Name of the class you want to add."
              className="input input-bordered text-black"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="file"
              name="image"
              className="input input-bordered pt-2 text-black"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                type="number"
                name="availableSeats"
                placeholder="Number of seats open"
                className="input input-bordered text-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price of the course"
                className="input input-bordered text-black"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              readOnly
              defaultValue={user.displayName}
              name="instructorName"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="email"
              readOnly
              defaultValue={user.email}
              name="instructorEmail"
              className="input input-bordered text-black"
            />
          </div>
        </Slide>

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
