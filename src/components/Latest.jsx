import React from 'react'

export default function Latest() {
  return (
    <div className="latest bg-[#C8EBFF] py-10">
      <div className='container mx-auto'>
        <div className="flex justify-around items-center flex-col md:flex-row text-center md:text-left">
            <div className="col">
              <h1 className='text-[45px] mb-2 font-[600]'>Get Our <br />
Latest Offers News</h1>
             <span className='text-[25px] mb-2 font-[400] text-[#2577fd] mb-3 md:mb-0'>Subscribe news latter</span>
            </div>
            <div className="col">
              <div className="input flex md:w-[350px] rounded-[30px] justify-between bg-white">
                  <input type="text" placeholder='Your email here' className='rounded-[30px] pl-4 outline-none'/>
                  <button className='bg-[#FF2020] hover:bg-blue-700 text-white font-bold py-3 px-7 rounded-[30px]'>Shop Now</button>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}
