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
                            MONEY TRUST CURRENCY EXCHANGE
                        </h2>
                        <p className="text-gray-600 mb-4">
                            After ten years of unrelenting dedication to quality, our currency exchange business has established a reliable reputation across Canada. Founded with the goal of offering trustworthy financial solutions, we are proud of our ten-year history of professionalism and experience.
                        </p>
                        <p className="text-gray-600 mb-4">
                            We have grown and expanded continuously throughout the years, and we today have two well-known branches in Toronto and North Vancouver.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our ability to serve a wide range of clients and meet the financial needs of people and businesses in various locations is made possible by our regional presence.
                        </p>
                        <button className="px-6 py-2 text-blue1 border-blue1 border rounded-md">
                            Learn More
                        </button>
                    </div>

                </div>

                {/* Expert Team Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-extrabold text-gray-800 text-center mb-4">
                        We Have Expert Team
                    </h3>
                    <p className="text-gray-600 text-center mb-12">
                        Meet our expert management team members
                    </p>

                    {/* Team Members Grid */}
                    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                        {/* Team Member 1 */}
                        <div className='flex flex-col items-center'>
                            <div className="bg-white w-full shadow-lg rounded-lg text-center">
                                <img
                                    src={Images.user1.src}
                                    alt="Andry Tait."
                                    className="mx-auto w-full"
                                />

                            </div>
                            <div className='flex justify-between w-full pt-4 md:flex-row flex-col items-start'>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Jhon Doe</h4>
                                    <p className="text-sm text-gray-600 mb-4">Founder & CEO</p>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <FaTwitter className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                                    <FaFacebookF className="text-blue-700 hover:text-blue-800 cursor-pointer" />
                                    <RiLinkedinFill className="text-blue-800 hover:text-blue-900 cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className='flex flex-col items-center'>
                            <div className="bg-white w-full shadow-lg rounded-lg text-center">
                                <img
                                    src={Images.user2.src}
                                    alt="Andry Tait."
                                    className="mx-auto w-full"
                                />

                            </div>
                            <div className='flex justify-between w-full pt-4 md:flex-row flex-col items-start'>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Jhonson H.</h4>
                                    <p className="text-sm text-gray-600 mb-4">Project Manager</p>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <FaTwitter className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                                    <FaFacebookF className="text-blue-700 hover:text-blue-800 cursor-pointer" />
                                    <RiLinkedinFill className="text-blue-800 hover:text-blue-900 cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className='flex flex-col items-center'>
                            <div className="bg-white w-full shadow-lg rounded-lg text-center">
                                <img
                                    src={Images.user3.src}
                                    alt="Andry Tait."
                                    className="mx-auto w-full"
                                />

                            </div>
                            <div className='flex justify-between w-full pt-4 md:flex-row flex-col items-start'>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Andry Tait.</h4>
                                    <p className="text-sm text-gray-600 mb-4">Developer</p>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <FaTwitter className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                                    <FaFacebookF className="text-blue-700 hover:text-blue-800 cursor-pointer" />
                                    <RiLinkedinFill className="text-blue-800 hover:text-blue-900 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page