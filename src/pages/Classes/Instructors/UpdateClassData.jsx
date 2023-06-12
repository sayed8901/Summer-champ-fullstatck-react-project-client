import { useNavigate, useParams } from "react-router-dom";
import { updateClassInfo, useGetSingleClass } from "../../../hooks/useHooksAPI";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const UpdateClassData = () => {
  useTitle("Update Class");
  const { id } = useParams();
  const [singleClass] = useGetSingleClass(id);
  console.log(id, singleClass);

  const navigate = useNavigate();

  const img_hosting_token = import.meta.env.VITE_IMGBB_KEY;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    // const classImage = form.classImage.value;
    const availableSeats = parseFloat(form.availableSeats.value);
    const price = parseFloat(form.price.value);
    console.log("update triggered", className);

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
          updateId: id, 
          className,
          classImage: imageURL,
          availableSeats,
          price,
        };

        updateClassInfo(newClassData);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Class info has been successfully updated.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/my-all-classes");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleUpdate}
        className="card-body w-full sm:max-w-[90%] mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-gradient mb-2">
          Update Class Info
        </h2>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              name="className"
              defaultValue={singleClass.className}
              className="input input-bordered"
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
              className="input input-bordered pt-2"
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
                defaultValue={singleClass.availableSeats}
                className="input input-bordered"
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
                defaultValue={singleClass.price}
                className="input input-bordered"
                required
              />
            </div>
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

export default UpdateClassData;
