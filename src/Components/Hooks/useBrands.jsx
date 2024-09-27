import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import axios from "axios";



export default function useBrands(){

    function getBrands(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/brands');
    }

    let response = useQuery({
        queryKey : ['recent brands'],
        queryFn : getBrands,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,

        select : (data) => data?.data,
    })
    console.log(response);

    return response
    
}