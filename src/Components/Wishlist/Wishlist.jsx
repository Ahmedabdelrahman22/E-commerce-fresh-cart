import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import Products from '../Products/Products'

export default function Wishlist() {

  const { getWishlistItems, removeProductFromWishlist } = useContext(CartContext)

  const [wishlist, setWishlist] = useState(null)

  //   async function removeProduct(productId) {
  //     let response = await removeProductFromCart(productId);
  //     console.log(response);
  //     setCart(response.data);
  //   }


  //   async function updateCart(productId, count) {
  //     if (count > 1) {
  //       let response = await updateProductCount(productId, count);
  //       console.log(response);
  //       setCart(response.data)

  //     } else {
  //       removeProduct(productId)
  //     }
  //   }

  async function removeWishlist(productId) {
    let response = await removeProductFromWishlist(productId);
    console.log(response);
    setWishlist(response.data);

  }


  async function getWishlist() {
    let response = await getWishlistItems();
    console.log(response);
    setWishlist(response.data);
  }

  useEffect(() => {
    getWishlist()
  }, [])



  return <>

    <h1 className="text-5xl text-center font-bold py-8">{`❤️ My Wishlist`}</h1>



    {wishlist ? <div className="relative  overflow-x-auto w-3/4 mx-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-slate-950">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              QTY
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {wishlist?.map((wishlist) => <tr key={wishlist.id} className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300">
            <td className="p-4">
              <img src={wishlist.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="" />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-black">
              {wishlist.title}
            </td>
            <td className="px-6 py-4">
              {wishlist.quantity}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-black">
              {wishlist.price}
            </td>
            <td className="px-6 py-4">
                <button onClick={() => removeWishlist(wishlist.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
              </td>
          </tr>)}
        </tbody>
      </table>
      <div className="flex justify-between px-8 py-2">
      <button className='btn  bg-main text-white p-2 rounded py-1'><Link to={'/'}>Return Home</Link></button>
      <button className='btn  bg-main text-white p-2 rounded py-1'><Link to={'/cart'}>View Cart</Link></button>

        {/* <span>Total Cart Price</span> */}
        {/* <span>{wishlist.totalWishlistPrice} EGP</span> */}
      </div>

    </div> : <Loading />}







  </>
}



