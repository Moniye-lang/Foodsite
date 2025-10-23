

    export default function Order(){
        return(
           <div className="h-auto mt-[100px] bg-[rgb(128,128,128,15%)] flex flex-col lg:flex-row items-center justify-center px-[20px] py-[40px] gap-[30px] text-center lg:text-left">
                <div>
                    <p className="text-[40px] font-semibold ">You can order <br /> through apps</p>
                    <p className="text-[#333] font-semibold">Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit enim bibendum sed et aliquet <br /> aliquet  risus tempor semper.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-[20px] place-items-center">


                    <div className="text-[22px] w-[130px] bg-[#fff] h-[50px] text-center pt-[7px] font-[500] rounded-[5px] ml-[20px] shadow-2xl">Uber <span className="text-[#05C167]">Eats</span> </div>
                    <div className="text-[21px] font-bold w-[130px] bg-[#fff] h-[50px] text-center pt-[7px] rounded-[5px] text-[#F63440] shadow-2xl">GRUBHUB</div>
                    <div className="text-[20px] font-semibold rounded-[5px] w-[130px] bg-[#fff] h-[50px] text-center pt-[7px] font ml-[-30px] shadow-2xl">Postmates</div>
                    <div className=" bg-[#fff] h-[50px] w-[170px] p-[17px] rounded-[5px] ml-[-25px] mt-[25px] shadow-2xl"><img src="Vector (2).png" alt="" /></div>
                    <div className="w-[160px] h-[50px] p-[30px] bg-[#fff] pt-[17px] mt-[25px] rounded-[5px] ml-[-10px] shadow-2xl"><img src="Group.png" alt="" /></div>
                    <div className="w-[170px] p-[30px] bg-[#fff] h-[50px] pt-[10px]  mt-[25px] rounded-[5px] shadow-2xl"><img src="Vector (4).png" alt="" /></div>
                    <div className="w-[160px] p-[30px] bg-[#fff] h-[50px] pt-[15px]  mt-[25px] rounded-[5px] shadow-2xl"><img src="Group 39981.png" alt="" /></div>
                    <div className="w-[160px] p-[30px] bg-[#fff] h-[50px] pt-[15px]  mt-[25px] rounded-[5px] shadow-2xl"><img src="Vector (5).png" alt="" /></div>
                    <div className="w-[160px] p-[30px] bg-[#fff] h-[50px] pt-[15px]  mt-[25px] rounded-[5px] shadow-2xl"><img src="Group 39979.png" alt="" /></div>

                </div>
            </div>
        )
    }