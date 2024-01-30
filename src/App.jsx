
import './App.css'
import { useState } from "react";
import HeroSec from './components/HeroSec'
import Latest from './components/Latest'
import Service from './components/Service'
import Products from './components/Products'
import Category from './components/Category'
import HeaderOne from './components/HeaderOne'
import { ProductsData } from "./data/data";
function App() {
  const [data,setData] = useState([...ProductsData])

  return (
    <>
      <HeroSec />
      <Products items={data} title={"All Products"}/>
      <Service />
      <Latest />
      <HeaderOne />
      <Category />
    </>
  )
}

export default App
