import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    return (
        <div className="min-h-screen bg-[linear-gradient(to_bottom,rgb(128,128,128,0.09)_50%,#fff_50%)] flex flex-col">
            <div className="text-[50px] md:text-[70px] text-[#333] text-center mt-6 md:mt-10">
                Contact Us
            </div>
            <div className="block text-[#333] text-[15px] md:text-[17px] text-center px-4 mt-2">
                We consider all the drivers of change gives you the  
                <br className="hidden md:block" /> components you need to change to create a truly happens.
            </div>

            <form 
                action="" 
                className="bg-[#fff] shadow-2xl w-[90%] max-w-[700px] h-auto md:h-[580px] grid items-center justify-center m-auto mt-6 mb-10 rounded-3xl p-6 md:p-0"
            >
                <div className="flex flex-col md:flex-row gap-[15px] w-full justify-center">
                    <div className="grid gap-[10px] w-full md:w-[300px]">
                        <label htmlFor="name" className="font-medium text-[#333]">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            className="border-[rgb(128,128,128,0.5)] border-2 w-full p-[12px] rounded-3xl"
                        />
                    </div>
                    <div className="grid gap-[10px] w-full md:w-[300px]">
                        <label htmlFor="email" className="font-medium text-[#333]">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter email address" 
                            className="border-[rgb(128,128,128,0.5)] border-2 w-full p-[12px] rounded-3xl"
                        />
                    </div>
                </div>

                <div className="grid gap-[10px] w-full">
                    <label htmlFor="subject" className="font-medium text-[#333]">Subject</label>
                    <input 
                        type="text" 
                        placeholder="Write a subject" 
                        className="border-[rgb(128,128,128,0.5)] border-2 w-full md:w-[600px] p-[12px] rounded-3xl"
                    />
                </div>

                <div className="grid gap-[10px] w-full">
                    <label htmlFor="message" className="font-medium text-[#333]">Message</label>
                    <textarea 
                        placeholder="Write your message" 
                        className="border-[rgb(128,128,128,0.5)] border-2 w-full md:w-[600px] h-[130px] p-[12px] rounded-3xl"
                    ></textarea>
                </div>

                <button 
                    className="w-full md:w-[600px] mt-[10px] text-center bg-[#AD343E] p-[12px] rounded-4xl cursor-pointer text-[#fff] font-medium"
                >
                    Send
                </button>
            </form>
        </div>
    )
}

