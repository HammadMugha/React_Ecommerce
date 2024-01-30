
import { BiShoppingBag  ,BiHeart , BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
export default function Navbar() {
  const [scroll,setScroll] = useState(false)
  const handleScroll = ()=>{
    const offset = window.scrollY
    if(offset > 200){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
  },[])
  const {cartItems} = useSelector(state=> state.cart)
  console.log(cartItems);
  return (
    <>
    <div className={`${scroll ? "StickyNav":""}`}>
        <div className="container py-1 mx-auto">
            <div className="flex justify-between items-center py-4">
                <div className="log text-lg font-medium"><img src="../../public/images/logo.png.webp" /></div>
                <ul className="flex gap-4 items-center">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/products"}>Products</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <button className="bg-[#FF2020] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[25px]"><Link href={"/signup"}>Sign up</Link></button>
                </ul>
                <div className="right flex gap-4 items-center">
                  <div className="badge">
                    <BiSearch size={24}/>
                  </div>
                  <div className="badge relative">
                    <Link to={"/cart"}>
                    <BiShoppingBag  size={24}/>
                    </Link>
                    {cartItems && <span className='absolute right-[-5px] top-[-6px] bg-[#FF2020] text-white rounded-full h-[16px] w-[16px] text-[13px] flex items-center justify-center'>{cartItems.length}</span>}
                  </div>
                  <div className="badge">
                  <BiHeart size={24}/>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
