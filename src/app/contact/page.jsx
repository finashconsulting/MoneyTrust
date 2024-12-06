import Location from '@/components/Location'
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import PagesHero from '@/components/pagesHero';

const page = () => {
    return (
        <div className=''>
            <PagesHero page={'Contact Us'} />
            <section className="bg-white container mx-auto py-12 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-xl sm:text-3xl font-extrabold text-gray-800 mb-4">
                        Contact Money Trust Currency Exchange
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {"For inquiries, assistance, or to learn more about our currency exchange services, please don't hesitate to reach out to us."}
                    </p>
                    <p className="text-gray-600">
                        {"You can contact our dedicated team via the provided email or phone number, and we'll be delighted to address your currency-related needs with professionalism and efficiency."}
                    </p>
                </div>
            </section>
            <section className="container mx-auto md:px-20 bg-white py-12 px-6">
                <div className="flex justify-between md:flex-row flex-col gap-12">
                    {/* Contact Information */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="self-start flex flex-col gap-3">
                            <MdOutlineMailOutline />
                            <h3 className="font-semibold text-lg">Email</h3>
                            <p className="text-gray-600">Our friendly team is here to help.</p>
                            <a href="mailto:hi@nurona.com" className="font-semibold">hi@nurona.com</a>
                        </div>

                        <div className="self-start flex flex-col gap-3">
                            <FaWhatsapp />
                            <h3 className="font-semibold text-lg">Live Chat</h3>
                            <p className="text-gray-600">Our friendly team is here to help.</p>
                            <a href="#" className="font-semibold text">Start new chat</a>
                        </div>

                        <div className="self-start flex flex-col gap-3">
                            <GrLocation />
                            <h3 className="font-semibold text-lg">Office</h3>
                            <p className="text-gray-600">Come say hello at our office HQ.</p>
                            <address className="font-semibold ">
                                100 Smith Street,<br />
                                Collingwood VIC 3066 AU
                            </address>
                        </div>

                        <div className="self-start flex flex-col gap-3">
                            <LuPhone />
                            <h3 className="font-semibold text-lg">Phone</h3>
                            <p className="text-gray-600">Mon-Fri from 8am to 5pm.</p>
                            <a href="tel:+1555000000" className="font-semibold ">+1 (555) 000-0000</a>
                        </div>
                        <div className='col-span-2'>
                            <Location />

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">First name</label>
                                    <input type="text" placeholder="First name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Last name</label>
                                    <input type="text" placeholder="Last name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" placeholder="you@company.com" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="tel" placeholder="+123 456874645" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea placeholder="Message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>

                            <div className="flex items-start">
                                <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label className="ml-2 text-sm text-gray-700">You agree to our friendly privacy policy.</label>
                            </div>

                            <button type="submit" className="w-full py-3 bg-blue1 text-white rounded-[50px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page