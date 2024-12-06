"use client";
import { useState } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "How does one go about exchanging money?",
            answer:
                "You must bring a valid government-issued picture ID, like a passport or driver’s license, to one of our locations in order to exchange money. After confirming your identity, a member of our staff will finish the exchange process on your behalf.",
        },
        {
            question: "Where in Canada can I exchange money?",
            answer: "You can exchange money at any of our authorized exchange locations across Canada.",
        },
        {
            question: "How do I know if I'm getting a fair exchange rate?",
            answer: "We provide transparent exchange rates that you can compare with current market rates.",
        },
        {
            question: "Do you provide special prices for large-scale currency exchanges?",
            answer: "Yes, we offer special rates for large transactions. Contact our customer support for more details.",
        },
        {
            question: "If I am not a citizen of Canada, may I exchange money?",
            answer: "Yes, non-citizens can exchange money as long as they provide a valid photo ID.",
        },
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg p-4 !bg-blue-50 ${
                            activeIndex === index ? "bg-blue-50" : ""
                        } cursor-pointer`}
                        onClick={() => handleToggle(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">{item.question}</h3>
                            {activeIndex === index ? (
                                <IoArrowUpCircleOutline className="text-gray-600 text-2xl" />
                            ) : (
                                <IoArrowDownCircleOutline className="text-gray-600 text-2xl" />
                            )}
                        </div>
                        {activeIndex === index && (
                            <p className="mt-2 text-sm text-gray-700">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
