import { Images } from "@/utils/Images"
import { IoIosArrowDown } from "react-icons/io";

const HeroCard = () => {
    return (
        <div className="bg-white shadow-lg  flex flex-col max-w-full w-full  lg:max-w-[400px] h-full ">
            <div className="flex ">
                <button className="bg-blue1 h-[75px] flex-1 text-white font-semibold">Account to Account</button>
                <button className="bg-gray2 h-[75px] flex-1 text-black font-semibold">By Cash</button>
            </div>
            <div className="md:max-h-[510px] pb-4 self-center h-full px-4 lg:max-w-[490px] w-full ">
                <div className="mt-4 space-y-4">
                    <div className="flex  items-center shadow-md border rounded-md px-4 py-2">
                        <div className="flex-1">
                            <label className="block text-gray-500 text-sm">Sell/Send</label>
                            <h1 className="text-2xl font-semibold text-black opacity-60 w-full">10,000</h1>
                        </div>
                        <div className="flex items-center">
                            <img src={Images.cadIco.src} alt="Canada Flag" className="w-8 h-5 mr-2" />
                            <span className="text-gray-800 font-semibold">CAD</span>
                            <IoIosArrowDown className="font-bold text-xl ml-2" />
                        </div>
                    </div>
                    <div className="flex items-center border shadow-md rounded-md px-4 py-2">
                        <div className="flex-1">
                            <label className="block text-gray-500 text-sm">Sell/Send</label>
                            <h1 className="text-2xl font-semibold text-black opacity-60 w-full">7,135.75</h1>
                        </div>
                        <div className="flex items-center">
                            <img src={Images.usIco.src} alt="USA Flag" className="w-8 h-5 mr-2" />
                            <span className="text-gray-800 font-semibold">USD</span>
                            <IoIosArrowDown className="font-bold text-xl ml-2" />
                        </div>
                    </div>
                </div>
                <div className=" mt-4 text-lg md:text-2xl text-black">
                    1 CAD = 0.7136 USD<br />
                    1 USD = 1.4012 CAD
                </div>
                <div className="flex sm:flex-row flex-col gap-2 sm:space-x-4 text-sm text-gray-500 mt-5 ">
                    <div className="flex items-center space-x-1">
                        <img src={Images.checkGreen.src} alt="USA Flag" className="w-8 h-5 mr-2" />
                        <span>No Hidden Fees</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <img src={Images.checkGreen.src} alt="USA Flag" className="w-8 h-5 sm:mr-2" />
                        <span>Great Exchange Rate</span>
                    </div>
                </div>
                <div className="flex text-gray-500 flex-wrap justify-between items-center mt-5 ">
                    <span>{"Don't have an account?"}</span>
                    <span>Already have an account? </span>
                </div>
                <div className="flex sm:flex-row flex-col justify-between gap-5 mt-6">
                    <button className="bg-blue1 flex-1 text-white px-6 py-2 rounded-full">Get Started</button>
                    <button className="border flex-1 border-[#94C99D] text-[#94C99D] px-6 py-2 rounded-full">Login</button>
                </div>
            </div>
        </div>
    )
}

export default HeroCard