import { useParams } from "react-router-dom";

const UpdateClassData = () => {
  const { id } = useParams();
  console.log(id);


  return <div>Update</div>;
};

export default UpdateClassData;
