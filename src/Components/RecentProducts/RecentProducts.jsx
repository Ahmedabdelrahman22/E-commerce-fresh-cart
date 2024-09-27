import React, { useContext, useState } from 'react'
// import style from './RecentProducts.module.css'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
// import { wishlistContext } from '../Context/wishlistContext';

export default function RecentProducts({product}) {

  let {addToCart } = useContext(CartContext);
  let {addToWishlist } = useContext(CartContext);
  // let {addToWishlist } = useContext(wishlistContext);



  return <>
    
    <div className="w-1/6 product px-2 py-4">
        <div >
              <Link to={`productdetails/${product.id}`}>
              <NavLink to="" onClick={() =>addToWishlist(product.id)} ><i className="fa-sharp fa-solid fa-heart text-red-200 hover:text-red-700 "></i></NavLink>
                  <img src={product.imageCover} className='w-full' alt={product.title} />
                  <h2 className='text-main text-sm'>{product.category.name}</h2>
                  <h2 className='font-medium'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
                  <div className="flex justify-between my-2">
                    <h3>{product.price} EGP</h3>
                    <h3><i className='fas fa-star rating-color'></i> {product.ratingsAverage}</h3>
                  </div>
              </Link>
            <button onClick={() =>addToCart(product.id)} className='btn w-full bg-main text-white rounded my-1 py-1'>Add To Cart</button>
            {/* <button onClick={() =>addToWishlist(product.id)} className='btn w-full bg-main text-white rounded my-1 py-1'>Add To Wishlist</button> */}
        </div>
    </div>
  
  </>
}
