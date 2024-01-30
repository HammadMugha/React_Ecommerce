import Products from "../components/Products"
import { ProductsData } from "../data/data"


function ProductsPage() {
  return (
    <>
    <Products items={ProductsData} title={"All Latest Products"}/>
    </>
  )
}

export default ProductsPage