import PagesHero from '@/components/pagesHero';
import { Images } from '@/utils/Images'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const services = [
    {
        icon: <img src={Images.service1.src} alt='' />,
        title: "Currency Exchange",
        description:
            "A smooth and effective way to meet a range of financial needs to both individual and commercial clients through our currency exchange service.",
    },
    {
        icon: <img src={Images.service2.src} alt='' />,
        title: "Wire Transfer",
        description:
            "We use a secure network to make it easier for money to move between financial institutions, ensuring that money gets to its destination on time.",
    },
    {
        icon: <img src={Images.service3.src} alt='' />,
        title: "Ria Money Transfer",
        description:
            "Our Ria Money Transfer service offers people wishing to transfer and receive money worldwide a dependable and easy-to-use option.",
    },
    {
        icon: <img src={Images.service4.src} alt='' />,
        title: "Money Gram Transfers",
        description:
            "One of the best options for individuals who value efficiency in their international financial transactions due to its speedy service.",
    },
    {
        icon: <img src={Images.service5.src} alt='' />,
        title: "Western Union Transfer",
        description:
            "A desirable choice for individuals who want to get the most for their money due to its dedication to offering reasonably priced services.",
    },
    {
        icon: <img src={Images.service6.src} alt='' />,
        title: "Foreign Currency Banknotes",
        description:
            "Guarantees a smooth and effective procedure for obtaining the banknotes you require, whether you are a traveler or a business.",
    },
    {
        icon: <img src={Images.service7.src} alt='' />,
        title: "Property Transactions",
        description:
            "Within the ever-changing realm of real estate transactions, our services offer Canada-wide sellers and buyers important assistance.",
    },
    {
        icon: <img src={Images.service8.src} alt='' />,
        title: "Currency Conversions",
        description:
            "Our all-inclusive service guarantees that our clients may conduct foreign transactions with peace of mind.",
    },
    {
        icon: <img src={Images.service9.src} alt='' />,
        title: "Paying for College and University",
        description:
            "Pay for college, university, and dormitory registration fees across Canada.",
    },
];

const page = () => {
    return (
        <div className=''>
            <PagesHero page={"Services"} />
            <section className="bg-gray-50 md:px-20 py-10 md:py-28 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="md:text-3xl text-2xl font-extrabold text-center mb-8">
                        Our Services At A Glance
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start"
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                                <p className="text-blue1 mb-4">{service.description}</p>
                                {/* <a
                                    href="#"
                                    className="font-semibold flex items-center hover:text-blue-700"
                                >
                                     Learn More <AiOutlineArrowRight className="ml-2 -rotate-45" />
                                </a> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page