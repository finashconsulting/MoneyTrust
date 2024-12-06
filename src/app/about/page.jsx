import PagesHero from '@/components/pagesHero';
import { Images } from '@/utils/Images'
import React from 'react'
import { FaLinkedin, FaTwitter, FaFacebook, FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const page = () => {
    return (
        <div className=''>
            <PagesHero page={'About US'} />
            <section className="bg-white md:px-20 py-12 px-6">
                {/* Company Information Section */}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}

                    {/* Illustration Section (Placeholder) */}
                    <div className="flex justify-center">
                        <img
                            src={Images.cover.src}
                            alt="Currency Exchange Illustration"
                            className="w-full max-w-sm"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                            About Money Trust Currency Exchange
                        </h2>
                        <p className="text-gray-600 mb-4">
                           For over a decade, Money Trust Currency Exchange has been a trusted name in the financial services industry, providing reliable and secure currency exchange solutions across Canada. Our journey began with a vision to offer transparent and customer-focused services, and today, we are proud to be recognized for our professionalism and dedication.
                        </p>
                        <p className="text-gray-600 mb-4">
                           With two key branches located in Toronto and North Vancouver, we have grown to serve a diverse clientele, from individuals to businesses, ensuring their financial needs are met with precision and care. Our expertise spans across a wide range of currency exchange services, tailored to deliver the best value, speed, and reliability.
At Money Trust, we believe in building lasting relationships by putting our customers first. Whether it’s offering competitive exchange rates, ensuring secure transactions, or delivering exceptional service, we are here to make your financial journey seamless and stress-free.

                        </p>
                        <p className="text-gray-600 mb-6">
                           Why Choose Us?
•	Trusted Expertise: A decade of experience in currency exchange solutions.
•	Convenience: Strategically located branches for easy access.
•	Reliability: Secure and transparent transactions with no hidden fees.
•	Customer Focus: Dedicated to meeting the unique needs of our clients.
Let Money Trust Currency Exchange be your partner in achieving your financial goals. Experience the difference with a team that cares about your success.

                        </p>

                    </div>

                </div>

               
            </section>
        </div>
    )
}

export default page
