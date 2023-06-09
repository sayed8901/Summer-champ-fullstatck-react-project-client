import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../authProviders/AuthProvider";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [ axiosSecure ] = useAxiosSecure();

  // here using axios secure with tanstack react query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`users/admin/${user?.email}`);
      console.log('is admin response', res);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;