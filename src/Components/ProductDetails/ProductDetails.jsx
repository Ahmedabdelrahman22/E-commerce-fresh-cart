import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from 'react-slick'


export default function ProductDetails() {

  let { id } = useParams()
  const [productDetails, setProductDetails] = useState({})
  // console.log(id);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };


  async function getProductDetails(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    console.log(data);
    setProductDetails(data.data)

  }

  useEffect(() => {
    getProductDetails(id)

  }, [])


  return <>

    <h1 className="text-3xl">ProductDetails</h1>
    <div className="flex items-center py-10">
      <div className="w-1/4 p-4">
        {/* <Slider {...settings}>
          {productDetails.images?.map((image, index) => <img key={index} src={image} className='w-full' alt="" />)}
        </Slider> */}
        
        {/* l slider msh sh8al  */}
        {productDetails.images > 1 ? <Slider {...settings}>
          {productDetails.images?.map((image, index) => <img key={index} src={image} className='w-full' alt="" />)}
        </Slider> : <img src={productDetails.imageCover} className='w-full' alt="" />
      }

      </div>
      <div className="w-3/4">
        <div>
          <h2>{productDetails.title}</h2>
          <p className='my-6 text-gray-500'>{productDetails.description}</p>
          <h3>{productDetails.category?.name}</h3>
          <div className="flex justify-between my-2">
            <h3>{productDetails.price} EGP</h3>
            <h3><i className='fas fa-star rating-color'></i>{productDetails.ratingsAverage}</h3>

          </div>
          <button className='btn w-full bg-main text-white rounded py-1'>Add To Cart</button>

        </div>
      </div>
    </div>



  </>
}
