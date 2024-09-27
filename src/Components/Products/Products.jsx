import CategoriesSlider from "../categoriesSlider/categoriesSlider"
import useProducts from "../Hooks/useProducts"
import Loading from "../Loading/Loading"
import MainSlider from "../mainSlider/mainSlider"
import RecentProducts from "../RecentProducts/RecentProducts"

export default function Home() {


  let{ data ,isLoading , isFetching , isError} = useProducts()

  // console.log(data?.data.data);

  return <>

  
    {! isLoading ?
      <div className="flex flex-wrap justify-center">
        {data.map((product) => <RecentProducts key={product.id} product={product} />)}
      </div> :
      <div className="flex justify-center py-16">
        <Loading />
      </div>
      

    }

  </>
}

