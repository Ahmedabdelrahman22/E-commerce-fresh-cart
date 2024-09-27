import React, { useContext, useEffect, useState } from 'react'
import style from './AllOrders.module.css'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';

export default function AllOrders() {

  let { deleteAutoUserCart } = useContext(CartContext);

  useEffect(() => {

    deleteAutoUserCart()

  }, [])




  return <>

    <div className="bg-[#F8F9FA] w-3/4 container mx-auto rounded-md my-6 md:h-[400px]">
      <div className="flex flex-wrap justify-center">
        <div className="space-y-3">
        <h1 className='md:text-4xl font-bold mt-10'> Your payment process is successful <i className="fa-solid fa-circle-check text-[#22DB14]"></i></h1>
        <button className='btn  bg-main text-white p-2 rounded py-1'><Link to={'/'}>Return Home</Link></button>
        </div>
      </div>
    </div>

  </>
}
