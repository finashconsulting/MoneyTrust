import { Images } from '@/utils/Images'
import React from 'react'

const PagesHero = ({ page }) => {
    return (
        <section className="relative md:pt-[100px] pt-[110px]  text-white max-h-[281px] items-center flex justify-center bg-cover bg-center h-full py-12 lg:h-[881px]" style={{ backgroundImage: `url(${Images.HeroBg.src})` }}>
            <h1 className='md:text-4xl text-xl font-bold'>{page}</h1>
        </section>
    )
}

export default PagesHero