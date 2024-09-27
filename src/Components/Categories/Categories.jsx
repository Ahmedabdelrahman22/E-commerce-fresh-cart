import axios from "axios";
import { useEffect, useState } from "react";
import useCategories from "../Hooks/useCategories";
import Loading from "../Loading/Loading";
import { date } from "yup";

export default function categories() {

  
  
  //   const [categories, setCategories] = useState([])
  
  //   async function getCategories() {
    //     try {
      //       let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  //       setCategories(data.data)
  //       console.log(data.data);
  
  //     } catch (err) {
  //       console.log(err);

  //     }
  //   }
  
  //   useEffect(() => {
    //     getCategories();
    //   }, [])
    
  let{ data ,isLoading , isFetching , isError} = useCategories()
    


  return <>

  
{!isLoading ?
    < div className="flex gap-3" >
      {data.data?.map((category, index) => <div key={index} className='my-6'>
        <div className="flex-1 rounded-md px-2  ">
          <div >
            <img className="w-24 h-24 product mx-5 " src={category.image} alt="" />
            <h3 className="">{category.name}</h3>
          </div>
        </div>
      </div>)}
    </div > :
    <div className="flex justify-center py-16">
      <Loading />
    </div>

  }


{/* 
    < div className="flex gap-3" >
      {categories?.map((category, index) => <div key={index} className='my-6'>
        <div className="flex-1 rounded-md px-2  ">
          <div >
            <img className="w-24 h-24 product mx-5 " src={category.image} alt="" />
            <h3 className="">{category.name}</h3>
          </div>
        </div>
      </div>)}
    </div > */}






  </>







}

