import Faq from '@/components/faq'
import PagesHero from '@/components/pagesHero'
import { Images } from '@/utils/Images'
import React from 'react'

const page = () => {
    return (
        <div className=''>
            <PagesHero page={"FAQ's"} />

            <Faq />
            <div className="bg-gray-50 rounded-xl py-10 px-6 max-w-4xl mx-auto shadow-md">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-2">Still Have Questions?</h2>
                    <p className="text-gray-600 mb-6">
                        Our team is ready to answer any of your questions.
                    </p>
                    <button className="bg-blue1 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page