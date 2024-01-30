
export default function HeroSec() {
  return (
    <div className="hero bg-[#C8EBFF] pt-[60px]">
        <div className='container mx-auto'>
    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center items-center'>
        <div className="left flex justify-center items-center">
        <img src={"../../public/images/women.webp"} alt='asas'/>
        </div>
        <div className="right">
            <span className='text-[25px] mb-2 font-semibold text-[#2577fd]'>60% Discount</span>
            <h1 className='text-[45px] mb-2 font-semibold'>Winter Collection</h1>
            <button className="bg-[#FF2020] hover:bg-blue-700 text-white font-bold py-3 px-7 rounded-[25px]">Shop Now</button>
        </div>
    </div>
    </div>
    </div>
  )
}
