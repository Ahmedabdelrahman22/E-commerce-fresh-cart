import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export let CartContext = createContext();

export default function CartContextProvider({ children }) {
    
    let headers ={
        token : localStorage.getItem('userToken')
    }
    
    const [cartItems, setCartItems] = useState(null)
    const [wishlistItems, setWishlistItems] = useState(null)

    async function addToWishlist(productId ) {

        try{
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , {
                productId
            }, {
                headers 
                
            } )
            console.log(data);
            toast.success(data.message ,{
                duration: 2500 ,
            } )
            
            
        }catch(err){
            console.log(err);
            
        }

    }

    async function getWishlistItems() {
    
        try{
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist` , {
                headers
            } )
            console.log(data);
            setWishlistItems(data);
            return data
            
            
        }catch(err){
            console.log(err);
            
        }
    
    }

    async function removeProductFromWishlist(productId) {

        try{
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}` , {
                headers
            } )
            console.log(data);
            toast.success(data.message ,{
                duration: 2500 ,
            } )

            setWishlistItems(data)
            return data 
            
        }catch(err){
            console.log(err);
            
        }

    }
    
    async function checkOutSession(shippingAddress) {
    
        try{
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartItems.data._id}?url=https://e-commerce-fresh-cart-peach.vercel.app/` ,{
                shippingAddress
            } , {
                headers
            } )
            // console.log(data);
            return data;
            
            
        }catch(err){
            console.log(err);
            
        }
    
    }

    async function addToCart(productId) {

        try{
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , {
                productId
            }, {
                headers 
                
            } )
            console.log(data);
            toast.success(data.message ,{
                duration: 2500 ,
            } )
            setCartItems(data)
            // return data 
            
        }catch(err){
            console.log(err);
            
        }


        
    }
    
    async function getCartItems() {
    
        try{
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {
                headers
            } )
            // console.log(data);
            setCartItems(data);
            return data
            
            
        }catch(err){
            console.log(err);
            
        }
    
    }

    async function updateProductCount(productId , count) {

        try{
            let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {
                count
            }, {
                headers
            } )
            // console.log(data);

            setCartItems(data);
            return data; 
            
        }catch(err){
            console.log(err);
            
        }

    }

    async function deleteAutoUserCart() {

        try{
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart` , {
                headers
            } )
            // console.log(data);

            setCartItems(null)
            // return data 
            
        }catch(err){
            console.log(err);
            
        }

    }

    async function removeProductFromCart(productId) {

        try{
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {
                headers
            } )
            // console.log(data);

            setCartItems(data)
            return data 
            
        }catch(err){
            console.log(err);
            
        }

    }

    useEffect(() => {
     getCartItems()
    }, [])
    







    return <CartContext.Provider value={  {addToCart , removeProductFromWishlist , getWishlistItems , addToWishlist , deleteAutoUserCart , checkOutSession , updateProductCount , removeProductFromCart , getCartItems , cartItems , setCartItems }  } >
        {children}
    </CartContext.Provider>
}





