import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { CounterContext } from '../Context/CounterContext'
import { UserContext } from '../Context/UserContext'
import { CartContext } from '../Context/CartContext'

export default function Navbar() {


  // let {count , userName} = useContext(CounterContext)

  let navigate = useNavigate();
  let { userData, setUserData } = useContext(UserContext);
  const {cartItems} = useContext(CartContext)

  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login')
  }





  return <>

    <nav className='bg-gray-200 z-50  md:fixed top-0 inset-x-0 py-2 text-center capitalize'>
      <div className="container flex flex-col md:flex-row justify-between items-center text-gray-500">
        <div className='flex flex-col md:flex-row space-x-3'>
        {userData && <ul className='flex flex-col md:flex-row space-x-2'>
            <img src={logo} width={120} alt="" />
            <li><NavLink to="">Home</NavLink></li>
            {/* <li><NavLink to="cart">cart</NavLink></li> */}
            <li><NavLink to="products">products</NavLink></li>
            <li><NavLink to="categories">categories</NavLink></li>
            <li><NavLink to="brands">brands</NavLink></li>
            <li><NavLink to="/wishlist" className='relative'> <i className="fa-sharp fa-solid fa-heart fa-xl text-red-700 "></i></NavLink></li>
          </ul> }
        </div>
        <div className=''>
          <ul className='flex flex-col md:flex-row space-x-2'>
            <li className='space-x-2 text-black'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-linkedin-in'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </li>
            {userData ? 
            

            <>
            <li onClick={() => logOut()} className='mx-2 cursor-pointer' >logout</li> 
            <li><NavLink to="/cart" className='relative'> <i className=" text-main fa-solid fa-cart-shopping fa-2xl"></i><span className='text-white absolute font-sm top-[-8px] left-[11px]'> {cartItems?.numOfCartItems}</span></NavLink></li>

            </> :
              <>

                <li><NavLink to="Register">Register</NavLink></li>
                <li><NavLink to="login">Login</NavLink></li>

              </>
            }


          </ul>
        </div>
      </div>
    </nav>

  </>
}
