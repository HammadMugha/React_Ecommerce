import { ServiceOneData } from "../data/data";


export default function Category() {
    const {posts,title} = ServiceOneData
  return (
    <>
    <div className="container mx-auto py-10">
        <div className="heading text-center pb-8">
            <h1 className="text-[38px] font-semibold">{title.title}</h1>
            <p>{title.desc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
            {posts.map((item)=>{
               return <div className="col text-center" key={item}>
                   <img src={item.image} alt="" className="mx-auto mb-3"/>
                   <h2>{item.title}</h2>
                </div>
            })}
        </div>
    </div>
    </>
  )
}
