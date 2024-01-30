import { Link } from "react-router-dom";


export default function Product({item}) {
  const {title,brand,image} = item
  return (
    <>
     <Link to={`/product/${item?.id}`} onClick={()=> window.scroll("0px")}>
        <div className="p-4 min-h-[350px] w-full" key={item?.id}>
        <div className="bg-gray-100 p-6 rounded-lg overflow-hidden">
          <div className="w-full overflow-hidden">
          <img src={image}
          className='duration-400 hover:scale-105 object-cover' style={{ width: '100%', height: 'auto' }} // optional
          />
          </div>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mt-3">{brand}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title.substring(0,25)}</h2>
          <button className="button">Add to Basket</button>
          {/* <p className="leading-relaxed text-base">{description}</p> */}
        </div>
      </div>
        </Link>
    </>
  )
}
