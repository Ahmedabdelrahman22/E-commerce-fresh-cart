// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";

// export let wishlistContext = createContext();

// export default function wishlistContextProvider({ children }) {
    
//     let headers ={
//         token : localStorage.getItem('userToken')
//     }
    
//     const [wishlist,setWishlist ] = useState(null)

//     async function addToWishlist(productId) {

//             try{
//                 let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , {
//                     productId
//                 }, {
//                     headers 
                    
//                 } )
//                 console.log(data);
//                 toast.success('Done❤️👍' ,{
//                     duration: 2500 ,
                    
//                 } )
                
                
//             }catch(err){
//                 console.log(err);
                
//             }
    
//         }

    
  



// return <wishlistContext.Provider value={ {addToWishlist} }>
//     {children}
// </wishlistContext.Provider>

// }

