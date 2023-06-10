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
        `${import.meta.env.VITE_API_URL}/classes/${user.email}`,
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

// to get users
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


// to get users
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
