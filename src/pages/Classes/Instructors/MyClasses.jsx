import { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../../authProviders/AuthProvider";


const MyClasses = () => {
  useTitle("My Classes");
  const [myClasses, setMyClasses] = useState([]);
  const {user} = useContext(AuthContext);
//   console.log(user.email);


  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/classes/${user.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
    })
    .then(res => res.json())
    .then(data => setMyClasses(data))
  }, [user.email]);
  console.log(myClasses);

  return <div>my classes: {myClasses.length}</div>;
};

export default MyClasses;
