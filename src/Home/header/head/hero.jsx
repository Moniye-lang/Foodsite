import '../head/hero.css'
import { Link } from 'react-router-dom'

export default function Hero(){
    return(
       <div className="main flex flex-col gap-y-7 items-center justify-center min-h-[90vh] px-[20px] text-center lg:text-left">
            <div>
                <p className="text-[60px] sm:text-[60px] md:text-[70px] lg:text-[105px] font-medium text-[#070505] mt-[px] sm:mt-[80px]  
                 lg:text-[#333] text-center">
                  Best food for 
                  <span className="block text-center">your taste</span>
                </p>
                <p className='text-[#000] text-center mt-[] text-[18px] lg:text-[#333]'>
                  Discover delectable cuisine and unforgettable moments 
                  <span className='block'>in our welcoming, culinary haven</span>
                </p>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-[20px]'>
                <div>
                <Link to='/Menu' className='border-2 mr-[10px] text-[#333] bg-[#fff] p-[15px] rounded-[40px] h-[50px] w-[150px] cursor-pointer hover:bg-[#AD343E] hover:text-[#fff]'>Explore Menu</Link>
                </div>
            </div>
        </div>
    ) 
}
