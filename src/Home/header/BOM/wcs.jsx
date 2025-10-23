export default function Wcs() {
    return (
        <div className="min-h-[80vh] mt-[100px] px-4">
            <div className="text-[32px] md:text-[50px] text-center mb-[50px] font-[560]">What Our Customers Say</div>
            <div className="flex flex-col lg:flex-row gap-[30px] items-center lg:items-start justify-center">
                <div className="text-[#AD343E] font-[560] bg-[rgb(128,128,128,5%)] w-full max-w-[370px] h-[auto] relative rounded-[10px]">
                    <p className="text-[20px] md:text-[22px] mt-[20px] ml-[45px]">“The best restaurant”</p>
                    <p className="text-[#333] p-[25px] md:p-[43px] text-sm md:text-base">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                    <hr className="text-[rgb(128,128,128,15%)] w-[80%] mx-auto" />
                    <div className="flex mt-[15px] items-center text-[#333] gap-[15px] ml-[35px] mb-4">
                        <img src="Ellipse 19.png" alt="" />
                        <div>
                            <p className="font-[510]">Sophire Robson</p>
                            <p className="font-[490]">Los Angeles, CA</p>
                        </div>
                    </div>
                </div>

                <div className="text-[#AD343E] font-[560] bg-[rgb(128,128,128,5%)] w-full max-w-[370px] h-[auto] relative rounded-[10px]">
                    <p className="text-[20px] md:text-[22px] mt-[20px] ml-[42px]">“Simply delicious”</p>
                    <p className="text-[#333] p-[25px] md:p-[43px] text-sm md:text-base">Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
                    <hr className="text-[rgb(128,128,128,15%)] w-[80%] mx-auto" />
                    <div className="flex mt-[15px] items-center text-[#333] gap-[15px] ml-[35px] mb-4">
                        <img src="Image (1).png" alt="" />
                        <div>
                            <p className="font-[510]">Matt Cannon</p>
                            <p className="font-[490]">San Diego, CA</p>
                        </div>
                    </div>
                </div>

                <div className="text-[#AD343E] font-[560] bg-[rgb(128,128,128,5%)] w-full max-w-[370px] h-[auto] relative rounded-[10px]">
                    <p className="text-[20px] md:text-[22px] mt-[20px] ml-[40px]">“One of a kind restaurant”</p>
                    <p className="text-[#333] p-[25px] md:p-[42px] text-sm md:text-base">The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
                    <hr className="text-[rgb(128,128,128,15%)] w-[80%] mx-auto" />
                    <div className="flex mt-[15px] items-center text-[#333] gap-[15px] ml-[35px] mb-4">
                        <img src="Image (2).png" alt="" />
                        <div>
                            <p className="font-[510]">Andy Smith</p>
                            <p className="font-[490]">San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
