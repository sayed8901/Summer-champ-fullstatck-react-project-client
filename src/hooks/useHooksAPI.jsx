import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../authProviders/AuthProvider";

// to get all the selected classes
export const useSelectedClasses = () => {
  const { user } = useContext(AuthContext);

  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/selectedClasses?email=${user?.email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.json();
    },
  });
  return [selectedClasses, refetch];
};

// to get all addedClasses for individual instructor by email
export const useAddedClasses = () => {
  const { user } = useContext(AuthContext);

  const { data: myAllClasses = [], refetch } = useQuery({
    queryKey: ["myAllClasses", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/instructor/classes/${user.email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.json();
    },
  });
  return [myAllClasses, refetch];
};


// to get all users
export const useAllUsers = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.json();
    },
  });
  return [allUsers, refetch];
};


// to get all classes
export const useAllClasses = () => {
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/classes`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.json();
    },
  });
  return [allClasses, refetch];
};


// to get a single class by ID
export const useGetSingleClass = (id) => {
  const { data: singleClass = [], refetch } = useQuery({
    queryKey: ["singleClass"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.json();
    },
  });
  return [singleClass, refetch];
};



// to get all enrolledClasses for individual student by email
export const useEnrolledClasses = (user) => {
  const { data: myEnrolledClasses = [], refetch } = useQuery({
    queryKey: ["myEnrolledClasses", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/enrolledClasses/${user.email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.json();
    },
  });
  return [myEnrolledClasses, refetch];
};
