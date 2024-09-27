import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import axios from "axios";


export default function useCategories() {
    function getCategories() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    }


    let response = useQuery({
        queryKey: ['recentCategories'],
        queryFn: getCategories,
        // staleTime : 50000,
        // gcTime : 3000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        select: (data) => data?.data,


    })
    console.log(response);

    return response

}







