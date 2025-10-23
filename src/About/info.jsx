export default function Info() {
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-[rgb(128,128,128,15%)] justify-evenly mt-[100px] items-center px-6 py-12 gap-12">
      
      <div className="max-w-xl text-center lg:text-left">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#333]">
          A little information <br /> for our valuable guest
        </p>
        <p className="text-[#333] mt-4 text-sm sm:text-base">
          At place, we believe that dining is not just about food, but also about the
          overall experience. Our staff, renowned for their warmth and dedication,
          strives to make every visit an unforgettable event.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="w-full min-w-[140px] h-[120px] text-center rounded-md bg-white border border-[rgb(128,128,128,45%)] flex flex-col items-center justify-center">
            <p className="text-2xl sm:text-3xl font-medium text-[#333]">3</p>
            <p className="text-sm sm:text-base">Locations</p>
          </div>
          <div className="w-full min-w-[140px] h-[120px] text-center rounded-md bg-white border border-[rgb(128,128,128,45%)] flex flex-col items-center justify-center">
            <p className="text-2xl sm:text-3xl font-medium text-[#333]">1995</p>
            <p className="text-sm sm:text-base">Founded</p>
          </div>
          <div className="w-full min-w-[140px] h-[120px] text-center rounded-md bg-white border border-[rgb(128,128,128,45%)] flex flex-col items-center justify-center">
            <p className="text-2xl sm:text-3xl font-medium text-[#333]">65+</p>
            <p className="text-sm sm:text-base">Staff Members</p>
          </div>
          <div className="w-full min-w-[140px] h-[120px] text-center rounded-md bg-white border border-[rgb(128,128,128,45%)] flex flex-col items-center justify-center">
            <p className="text-2xl sm:text-3xl font-medium text-[#333]">100%</p>
            <p className="text-sm sm:text-base">Satisfied Customers</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md">
        <img
          src="pexels-cottonbro-studio-4252139 1.png"
          alt=""
          className="w-full h-auto rounded-[10px] object-cover"
        />
      </div>
    </div>
  )
}
