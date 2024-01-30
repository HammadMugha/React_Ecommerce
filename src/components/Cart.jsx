import { useState } from "react";
import { useSelector } from "react-redux"

export default function Cart(){
const [items,setItems] = useState([])
    const {cartItems} = useSelector(state=> state.cart)
    console.log(cartItems)
    setItems(cartItems)
  return (
    <>
     <div className="py-[50px]">
        {items.length === 0 ? (
          <h3 className="text-center text-[22px]">Your cart is empty.</h3>
        ) : 
        (
          <div className="cart">
             {items.map((item)=>{
                <div className='col' key={item.id}>
                    <h2>{item.title}</h2>
                    
                </div>
             })}
         </div>
        )
        }

     </div>
    </>
  )
}