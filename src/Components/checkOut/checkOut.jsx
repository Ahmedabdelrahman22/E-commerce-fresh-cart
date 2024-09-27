import React, { useContext, useState } from 'react'
import { useFormik, validateYupSchema } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Register from '../Register/Register'
import { UserContext } from '../Context/UserContext'
import { CartContext } from '../Context/CartContext'

export default function CheckOut() {

  let { checkOutSession } = useContext(CartContext)

    async function checkOut(values) {

      let response = await checkOutSession(values);

      // console.log(response);
      if (response.status == 'success') {
        window.location.href =response.session.url
      }

    }

  

  let formik = useFormik({
    initialValues: {
      details: '',
      phone: '',
      city: '',

    }
    , onSubmit: checkOut
  })



  return <>


    <div className='tp-8 w-1/2 mx-auto'>
      <h2 className='text-3xl py-6 font-semibold text-emerald-500 '>CheckOut</h2>
      <form onSubmit={formik.handleSubmit} className="">

        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="details" id="details" value={formik.values.details} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your details :</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="city" id="city" value={formik.values.city} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your city :</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input type="tel" name="phone" id="phone" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your phone :</label>
        </div>

        <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-embg-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-embg-emerald-800">Submit</button>

      </form>
    </div>

  </>
}           
