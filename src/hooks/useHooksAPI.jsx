import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../authProviders/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


// save a selected class data
export const saveSelectedClass = (classData) => {
  fetch(`${import.meta.env.VITE_API_URL}/selectedClasses/${classData?.bookingId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
    body: JSON.stringify(classData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};


// save a selected class data
export const updateClassInfo = (classData) => {
  fetch(`${import.meta.env.VITE_API_URL}/updateClass/${classData?.updateId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
    body: JSON.stringify(classData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};


// to send feedback
export const sendFeedback = (feedbackData) => {
  fetch(`${import.meta.env.VITE_API_URL}/feedback/${feedbackData?.feedbackId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
    body: JSON.stringify(feedbackData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};


// to get all the selected classes
export const useSelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedClasses?email=${user?.email}`);
      return res.data;
      // await fetch(`${import.meta.env.VITE_API_URL}/selectedClasses?email=${user?.email}`, {
      //     method: "GET",
      //     headers: {
      //       "content-type": "application/json",
      //       authorization: `Bearer ${localStorage.getItem("access-token")}`,
      //     },
      //   }
      // );
      // return res.json();
    },
  });
  return [selectedClasses, refetch];
};


// delete a selected class data
export const deleteSelectedClass = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/selectedClasses/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  })
  const result = await response.json();
  return result;
}




// save newClass data by an instructor
export const addClass = async (newClassData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/instructors/add-class`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
    body: JSON.stringify(newClassData),
  });
  const data = await response.json();
  return data;
};


// to get all addedClasses for individual instructor by email
export const useAddedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: myAllClasses = [], refetch } = useQuery({
    queryKey: ["myAllClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/instructor/classes/${user.email}`);
      return res.data;
      // await fetch(`${import.meta.env.VITE_API_URL}/instructor/classes/${user.email}`, {
      //     method: "GET",
      //     headers: {
      //       "content-type": "application/json",
      //       authorization: `Bearer ${localStorage.getItem("access-token")}`,
      //     },
      //   }
      // );
      // return res.json();
    },
  });
  return [myAllClasses, refetch];
};





// to get all users
export const useAllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
      // await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      //   method: "GET",
      //   headers: {
      //     "content-type": "application/json",
      //     authorization: `Bearer ${localStorage.getItem("access-token")}`,
      //   },
      // });
      // return res.json();
    },
  });
  return [allUsers, refetch];
};


// to get all classes
export const useAllClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/classes`);
      return res.data;
      // await fetch(`${import.meta.env.VITE_API_URL}/admin/classes`, {
      //   method: "GET",
      //   headers: {
      //     "content-type": "application/json",
      //     authorization: `Bearer ${localStorage.getItem("access-token")}`,
      //   },
      // });
      // return res.json();
    },
  });
  return [allClasses, refetch];
};



// to get a single class by ID
export const useGetSingleClass = (id) => {
  const [axiosSecure] = useAxiosSecure();
  const { data: singleClass = [], refetch } = useQuery({
    queryKey: ["singleClass"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${id}`);
      return res.data;
      // await fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
      //   method: "GET",
      //   headers: {
      //     "content-type": "application/json",
      //     authorization: `Bearer ${localStorage.getItem("access-token")}`,
      //   },
      // });
      // return res.json();
    },
  });
  return [singleClass, refetch];
};



// to get all enrolledClasses for individual student by email
export const useEnrolledClasses = (user) => {
  const [axiosSecure] = useAxiosSecure();
  const { data: myEnrolledClasses = [], refetch } = useQuery({
    queryKey: ["myEnrolledClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolledClasses/${user.email}`);
      return res.data;
      // await fetch(`${import.meta.env.VITE_API_URL}/enrolledClasses/${user.email}`, {
      //     method: "GET",
      //     headers: {
      //       "content-type": "application/json",
      //       authorization: `Bearer ${localStorage.getItem("access-token")}`,
      //     },
      //   }
      // );
      // return res.json();
    },
  });
  return [myEnrolledClasses, refetch];
};







// to get number of payment completed class to get number of enrolled students for that individual class
// extra created: not been used yet
export const useEnrolledNumberOfStudents = (classID) => {
  const [axiosSecure] = useAxiosSecure();
  const {data: totalEnrolledStudentsByClassID = [], refetch} = useQuery({
    queryKey: ['totalEnrolledStudentsByClassID'],
    queryFn: async () => {
        const res = await axiosSecure.get(`/payment-enrolled-students/${classID}`)
        // console.log(res.data);
        return res.data;
    }
  })
  return [totalEnrolledStudentsByClassID, refetch];
};


