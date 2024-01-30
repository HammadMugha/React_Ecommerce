
import { ServiceSection } from '../data/data'


function Service() {
    const { posts } = ServiceSection;
  return (
    <>
    <div className="container mx-auto py-[50px]">
     <div className="grid py-5 grid-cols-1 md:grid-cols-4 sm:grid-cols-1">
        {
            posts.map((item)=>{
                return <div className="col text-center" key={item.id}>
                <img src={item?.img} className='mx-auto mb-3'/>
                <h3 className='text-[20px] font-semibold mb-2'>{item?.title}</h3>
                <p>{item?.text}</p>
            </div>
            })
        }
     </div>
    </div>
    </>
  )
}

export default Service