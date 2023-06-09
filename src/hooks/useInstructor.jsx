import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../authProviders/AuthProvider";

const useInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const [ axiosSecure ] = useAxiosSecure();

  // here using axios secure with tanstack react query
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`users/instructor/${user?.email}`);
      console.log('is instructor response', res);
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;