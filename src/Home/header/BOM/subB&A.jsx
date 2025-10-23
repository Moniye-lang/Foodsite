import { useState } from "react"
import { subBA } from "./subBAdata"
import { Link } from "react-router-dom"

export default function SubBandA() {
  const [cards] = useState(subBA)

  return (
    <div className="bg-[rgb(128,128,128,0.2)] min-h-[135vh] text-[#333] px-4 sm:px-8">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:w-[86.5%] sm:ml-[100px] relative">
        <p className="text-[32px] sm:text-[40px] md:text-[50px] mt-[40px] sm:mt-[100px]">
          Our Blog & Articles
        </p>
        <Link to='/MainPage' className="mt-4 sm:mt-[115px] bg-[#AD343E] text-white font-[550] h-[50px] w-[160px] flex justify-center items-center rounded-[40px]">
          Read All Articles
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly mt-[50px] gap-8 flex-wrap">

        <div className="rounded-[10px] w-full max-w-[500px]">
          <img
            src="pexels-andra-918581 1.png"
            alt=""
            className="h-[300px] sm:h-[350px] md:h-[430px] w-full object-cover rounded-t-[10px]"
          />
          <div className="grid p-[25px] sm:p-[35px] bg-white rounded-b-[10px] min-h-[220px] shadow-2xl text-[14px]">
            <p className="font-[520] text-sm">January 3, 2023</p>
            <p className="font-[550] text-[17px] sm:text-[19px]">
              The secret tips & tricks to prepare a perfect burger & pizza <br /> for our customers
            </p>
            <p className="text-[13px] sm:text-[14px] mt-2">
              Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper <br /> adipiscia massa gravida nisi cras enim quis nibholm varius amet gravida <br /> ut facilisis neque egestas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
          {cards.map((items) => (
            <div key={items.id}>
              <div>
                <img
                  src={items.img}
                  alt=""
                  className="rounded-t-[10px] w-[100%] max-w-[300px]"
                />
              </div>
              <div className="grid p-[20px] bg-white w-[100%] max-w-[300px] h-[130px] rounded-b-[10px] shadow-2xl">
                <div className="font-[520] text-[13px]">{items.date}</div>
                <div className="font-[540]">{items.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
