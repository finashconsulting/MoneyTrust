"use client"
import { Images } from "@/utils/Images"
import Calculator from "../Calculator"
import { useState } from "react";

const Hero = () => {
  const [cartData, setCartData] = useState([]);

    return (
        <div className={`relative md:pt-[152px] pt-[84px] flex justify-center bg-cover bg-center h-full lg:py-0 py-16 ${cartData.length>0 ? "lg:min-h-[1150px]" : "lg:min-h-[881px]"}`} 
        // style={{ backgroundImage: `url(${Images.HeroBg.src})` }}
        style={{
            background: "linear-gradient(to bottom, #0a457b, #9fd1a4)",
        }}
        >
            <div className="px-4 md:mx-20 flex  flex-col lg:flex-row items-center gap-10">

                <div className="text-white flex-1 space-y-4">
                    <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                            <img src={Images.checkGreen.src} alt="ico" className="md:h-auto h-4" />
                            <span className="text-[8px] md:text-sm whitespace-nowrap">24/7 Transfer</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <img src={Images.checkGreen.src} alt="ico" className="md:h-auto h-4" />
                            <span className="text-[8px] md:text-sm whitespace-nowrap">No Hidden Fees</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <img src={Images.checkGreen.src} alt="ico" className="md:h-auto h-4" />
                            <span className="text-[8px] md:text-sm whitespace-nowrap">Great Exchange Rate</span>
                        </div>
                    </div>
                    <h1 className="md:text-[62px] text-[24px] font-bold">Money Trust Currency Exchange</h1>
                    <p className="md:text-[20px] opacity-90">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}</p>
                    <p className="md:text-[20px] opacity-90 !m-0">{"Lorem Ipsum has been the industry's standard dummy text."}</p>
                    <div className="flex space-x-4 mt-6">
                        <button className="bg-blue1 text-white flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg md:px-6 px-3 py-3 rounded-full">Transfer Money
                            <img src={Images.plus.src} className="h-5" alt="ico" />
                        </button>
                        <button className="border flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg border-white text-white md:px-6 px-3 py-3 rounded-full">See How It Works
                            <img src={Images.work.src} className="h-5" alt="ico" />
                        </button>
                    </div>
                </div>

                {/* <!-- Right Side Form --> */}
                <div className="md:flex lg:justify-end flex-1 hidden">
                    {/* <HeroCard /> */}
                    <Calculator setCartData={setCartData}/>
                </div>
            </div>
        </div>

    )
}

export default Hero