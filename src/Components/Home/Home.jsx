import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import RecentProducts from '../RecentProducts/RecentProducts'
import Loading from '../Loading/Loading'
import CategoriesSlider from '../categoriesSlider/categoriesSlider'
import MainSlider from '../mainSlider/mainSlider'
import { useQuery } from '@tanstack/react-query'
import useProducts from '../Hooks/useProducts'


export default function Home() {



  // const [products, setProducts] = useState([])

  // async function getRecentProducts() {
  //   try {
  //     let {data} =await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  //     console.log(data.data);
  //     setProducts(data.data)

  //   } catch (err) {
  //     console.log(err); 
  //   }
  // }

  // useEffect(() => {

  //   getRecentProducts();

  // }, [])


  let{ data ,isLoading , isFetching , isError} = useProducts()

  // console.log(data?.data.data);

  return <>

    <MainSlider />
    
    <CategoriesSlider />

    {! isLoading ?
      <div className="flex flex-wrap justify-center">
        {data.map((product) => <RecentProducts key={product.id} product={product} />)}
      </div> :
      <div className="flex justify-center py-16">
        <Loading />
      </div>
      

    }

  </>
}
