import React, { useState } from 'react'
import style from './Footer.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink } from 'react-router-dom'


export default function Footer() {




  return <>

    {/* <h1 className="text-3xl">Footer</h1> */}




    <footer className="bg-white rounded-lg shadow  m-4 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavLink to="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="" />
          </NavLink>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <span className="hover:underline me-4 md:me-6">About</span>
            </li>
            <li>
              <span className="hover:underline me-4 md:me-6">Privacy Policy</span>
            </li>
            <li>
              <span className="hover:underline me-4 md:me-6">Licensing</span>
            </li>
            <li>
              <span className="hover:underline">Contact</span>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 . All Rights Reserved.</span>
      </div>
    </footer>



  </>
}
