// import Cart from "../components/Cart";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { BiTrash,BiPlus,BiMinus } from 'react-icons/bi'
import { decreaseQty, deleteProduct, increaseQty } from "../store/cartSlice";

import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
 
function CartPage() {
    const {id} = useParams()
    console.log(id)
      const dispatch = useDispatch();
    const handleClick = (e,item)=>{
      e.preventDefault()
      dispatch(deleteProduct(item))
      toast.success(`${item.title} Remove successfuly`)
      
    }  
  //  Increase Quantity
  const handleIncre = (e,item)=>{
    e.preventDefault()
      dispatch(increaseQty(item))
  }
   //  Decrease Quantity
   const handleDecre = (e,item)=>{
    e.preventDefault()
      dispatch(decreaseQty(item))
  }
  // const [items,setItems] = useState([])
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  //Total price
  const [total,setTotal] = useState(0)
  useEffect(()=>{
    let pric = 0
    cartItems.map((item)=>{
      pric += item.price * item.quantity
      setTotal(pric)
    })
  },[cartItems])
  // setItems(cartItems)
  return (
    <>
      <div className="container mx-auto py-5 min-h-[60vh]">
      {cartItems.length > 0 && 
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 py-5">
            <div className="col bg-[#EEEEEE] p-[30px] col-span-6">
            <div className="heading">
            <h2 className="text-[25px] font-semibold mb-3">Shopping Cart</h2>
            </div>
            <div className="flex flex-col">
                {cartItems.map((data)=>{
                   return <div className="flex justify-between mb-4 items-center" key={data.id}>
                        <img src={data.image} width="100px" height="50px"/>
                        <h2>{data.title.substring(0,20)}</h2>
                        <h3>${data.price * data.quantity}</h3>
                        <div className="quantity flex items-center
                         gap-2 rounded-full border-gray-400
                         bg-white px-4 py-2 shadow-slate-200">
                          <button><BiMinus onClick={(e)=> handleDecre(e,data)}/></button>
                          <span>{data.quantity}</span>
                          <button><BiPlus onClick={(e)=> handleIncre(e,data)}/></button>
                        </div>
                        <span><BiTrash className="cursor-pointer" onClick={(e) => handleClick(e,data)}/></span>
                    </div>
                })}
            </div>
            </div>
            <div className="col col-span-2">
                <h4 className="text-[30px]">Total:{total}</h4>
            </div>
      </div>
      }
      {cartItems.length < 1 && 
      <div className="flex">
        <h2 className="text-[28px]">Your Cart is empty..</h2>
      </div>
      }
      </div>
    </>
  );
}

export default CartPage;
