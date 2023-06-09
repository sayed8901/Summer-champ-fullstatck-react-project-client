import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../authProviders/AuthProvider";

// to get all the selected classes
export const useSelectedClasses = () => {
    const {user} = useContext(AuthContext);

    const {data: selectedClasses = [], refetch} = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/selectedClasses?email=${user?.email}`)
            return res.json();
        },
    });
    return [selectedClasses, refetch]
}