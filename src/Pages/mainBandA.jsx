import { useState,useEffect } from "react"
import { Maindata } from "./maindata"
import { Link } from "react-router-dom"

    export default function MainBandA(){
        const[data]=useState(Maindata)

        useEffect(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, []);

        return(
            <div  className="h-auto">
                <div>
                    <p className="text-[60px] text-center font-semibold">Our Blog & Articles</p>
                    <p className="text-[#333] text-[17px] text-center">We consider all the drivers of change gives you the components you need <br /> to change to create a truly happens.</p>
                </div>

             
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[60px] gap-x-[px] px-[20px] justify-items-center mt-[70px]">

                {
                 data.map((items)=>(
                    <Link to={`/maindata/${items.id}`} key={items.id} className="m-auto hover:scale-105 transition-all duration-[.8s] hover:text-blue-500">
                        <div><img src={items.img} alt="" className="rounded-t-[10px] w-[320px]"/></div>
                        <div className="grid p-[30px] w-[320px] bg-[#fff] rounded-b-[10px] shadow-2xl">
                            <div className="font-[520] text-[13px] text-[#333]">{items.date}</div>
                            <Link to={`/maindata/${items.id}`} className="font-medium "> {items.title}</Link>
                        </div>
                    </Link>
                 ))   
                }
                </div>
                <br />
            </div>
        )
    }