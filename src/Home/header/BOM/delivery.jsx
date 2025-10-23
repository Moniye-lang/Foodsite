import { Clock4,ShoppingCart,ReceiptText } from "lucide-react"

export default function Delivery(){
    return(
        <div className="bg-[rgb(128,128,128,10%)] flex flex-col-reverse md:flex-row h-auto md:h-[120vh] items-center justify-evenly px-[20px] py-[50px]">
            <div className="flex lg:flex-row flex-col gap-[20px]">
                <div className="mt-[10px]"><img src="mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.png" alt="" /></div>
                <div className="grid lg:mt-[40px] m-auto"> 
                    <div><img src="sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.png" alt="" /></div>
                    <div className="mt-[20px]"><img src="sadj-iron-pot-with-various-salads 1.png" alt="" /></div>
                </div>
            </div>
                <div className="">
                    <p className="text-[50px] text-[#333]">Fastest Food <br /> Delivery In City</p>
                    <br />
                    <p className="text-[#333]">Our visual designer lets you quickly and of drag a down <br /> your way to customa pps for both keep desktops.</p>

                    <div className="mt-[40px]">
                        <p></p>
                        <div className="flex mt-[20px] gap-[20px] text-[17px] font-[510]"><Clock4 className="bg-[#AD343E] rounded-[50%] p-[6px] text-[#fff]"></Clock4>  
                        <p className="text-[#333]"> Delivery within 30 minutes </p>
                        </div>
                        <div className="flex mt-[20px] gap-[20px] text-[17px] font-[510]"><ReceiptText className="bg-[#AD343E] rounded-[50%] p-[6px] text-[#fff]"></ReceiptText> 
                        <p className="text-[#333]">Best Offer & Prices</p>
                        </div>
                        <div className="flex mt-[20px] gap-[20px] text-[17px] font-[510]"><ShoppingCart className="bg-[#AD343E] rounded-[50%] p-[6px] text-[#fff]"></ShoppingCart>
                        <p className="text-[#333]">Online Services Available</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}