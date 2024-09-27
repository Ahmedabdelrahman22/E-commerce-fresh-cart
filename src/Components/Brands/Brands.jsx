import React, { useState } from 'react'
import style from './Brands.module.css'
import useBrands from '../Hooks/useBrands'
import Loading from '../Loading/Loading'
import RecentProducts from '../RecentProducts/RecentProducts'

export default function Brands() {


  let { data, isLoading, isFetching, isError } = useBrands()

  // console.log(data);
  return <>

    {!isLoading ?
      <div className="flex flex-wrap gap-3 justify-center">
        {data.data.map((Brand ,index) => <div key={index} className='my-6' >  
          <div className="flex-1 product rounded-md px-2">
            <div>
              <img className='w-full' src={Brand.image} alt="" />
              <h3 className='text-main text-center font-bold'>{Brand.name}</h3>
            </div>
          </div>
        </div> )}
      </div> :
      <div className="flex justify-center py-16">
        <Loading />
      </div>


    }




  </>
}
