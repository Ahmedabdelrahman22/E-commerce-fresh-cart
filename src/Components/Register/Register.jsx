import React, { useContext, useState } from 'react'
import style from './Register.module.css'
import { useFormik, validateYupSchema } from 'formik'
import * as Yup from  'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext.jsx'

export default function Register() {

    const [apiError, setApiError] = useState(null)
    const [loading, setLoading] = useState(false)

    let {setUserData} = useContext(UserContext)

    
    let navigate = useNavigate()

    async  function register(values) {
        try {
            setLoading(true)
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , values)

            console.log(data);
            localStorage.setItem('userToken' , data.token)
            setUserData(data.token);

            navigate('/');

            setLoading(false)

        } catch (err) {
            console.log(err.response.message);
            setApiError(err.response.message);
            setLoading(false)
            
        }

   } 

   let validationSchema = Yup.object().shape({
    name: Yup.string().min(3,'lenght is 3').max(20 , "max length is 20").required("name is required"),
    email: Yup.string().email('email invalid').required("email is required"),
    password: Yup.string().matches(/^[A-Z]\w{5,10}$/ , 'password invalid ex(Ahmed123)').required('password is required'),
    rePassword: Yup.string().oneOf([Yup.ref('password')],"password and repassword don't match").required('rePassword is required'),
    phone: Yup.string().matches(/^(002)?01[0125][0-9]{8}$/, 'phone must be egyption numder').required('phone is required'),

   })

   let formik = useFormik({
    initialValues:{
        name: '',
        email:'',
        password:'',
        rePassword:'',
        phone:''
    } , 
    validationSchema 
    , onSubmit: register
}) 


  
  return <>
    

    <div className='tp-8 w-1/2 mx-auto'>
        <h2 className='text-3xl py-6 font-semibold text-emerald-500 '>Register Now</h2>
        <form onSubmit={formik.handleSubmit} className="">

            {apiError && <div className="px-4 py-2 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                {apiError}
            </div>}
          
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="name" id="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name :</label>
            </div>

            {formik.errors.name && formik.touched.name && <div className="px-4 py-2 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                {formik.errors.name}
            </div>} 

            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="email" id="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email :</label>
            </div>
            
            {formik.errors.email && formik.touched.email && <div className="px-4 py-2 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                {formik.errors.email}
            </div>} 

            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="password" id="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password :</label>
            </div>
            
            {formik.errors.password && formik.touched.password && <div className="px-4 py-2 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                {formik.errors.password}
            </div>} 

            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="rePassword" id="rePassword" value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your rePassword :</label>
            </div>
            
            {formik.errors.rePassword && formik.touched.rePassword && <div className="px-4 py-2 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                {formik.errors.rePassword}
            </div>} 

            <div className="relative z-0 w-full mb-5 group">
                <input type="tel" name="phone" id="phone" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone :</label>
            </div>
            
            {formik.errors.phone && formik.touched.phone && <div className="px-4 py-2 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                {formik.errors.phone}
            </div>} 
            
            {loading? <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-embg-emerald-300 font-medium rounded-lg w-full sm:w-auto px-3 py-1.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-embg-emerald-800">
                <i className='fas fa-spinner fa-spin-pulse'></i>
            </button>:  <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-embg-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-embg-emerald-800">Submit</button>
        }
            
                
        </form>
    </div>

  </>
}           
