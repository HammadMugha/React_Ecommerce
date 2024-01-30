// import { useState } from "react";
// import Product from "./Product"
// import axios from "axios";
import Product from "./Product";
// import { ProductsData } from "../data/data";



export default function Products({items,title}) {
  // const [data,setData] = useState([])
  // const [loading,setLoading] = useState(false)

  // useEffect(()=>{
  //   const header = {"Bearer a35cad2af7a86ad9604eeee8c5282430d7472a703ea778de727a9939d10814473c97b6632c94f951b3f1460333f362c498b4deacd10b61612f31042a60eb2fa64cbb7265d292be403e4b2885c62118f6167d812a55d11b8c3233aa53cd8b29d96b3100524af1ac538e8f8a3e7c3d888370a26811deda9462c75772aa208d97ce"}
  //   const token = "a35cad2af7a86ad9604eeee8c5282430d7472a703ea778de727a9939d10814473c97b6632c94f951b3f1460333f362c498b4deacd10b61612f31042a60eb2fa64cbb7265d292be403e4b2885c62118f6167d812a55d11b8c3233aa53cd8b29d96b3100524af1ac538e8f8a3e7c3d888370a26811deda9462c75772aa208d97ce"
  //   try {
  //     setLoading(true);
  //     axios.get("http://localhost:1337/api/products?populate=*",{
  //       headers:{
  //         Authorization: `Bearer ${token}`
  //       }
  //     }).then((res) => {
  //       return setData(res.data.data)
  //       // console.log(res.data.data);
  //           }).catch((err)=> {
  //             console.log(err);
  //           })
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(true);
  //   }
  //   setLoading(false);
          
  //  },[data])

  //  const {products} = await getProducts()
  //  console.log(products);
   
  return (
    <>
    <div className="container mx-auto py-[40px]">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{title}</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div className="grid md:grid-cols-4 grid-cols-1 gap-[20px]">
    {
        // loading === true ? <><p>......loading</p> </> :
        items.map((record,index)=>(
          <Product item={record} key={index}/>
        ))
    }
    </div>
    </div>
    </>
  )
}
