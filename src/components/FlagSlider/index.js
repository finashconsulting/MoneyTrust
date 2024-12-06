"use client"
import Slider from "react-slick";
import Image from "next/image";
import { Images } from "@/utils/Images";

const FlagSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        // responsive: [
        //     {
        //         breakpoint: 768, // Mobile view
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         },
        //     },
        //     {
        //         breakpoint: 400, // Mobile view
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             centerMode: true,
        //             centerPadding: "20px",
        //         },
        //     },
        //     {
        //         breakpoint: 1024, // Tablet view
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         },
        //     },
        // ],
    };

    const flags = [
        { src: Images.usFlag.src, alt: "USA", label: "USA" },
        { src: Images.hongkongFlag.src, alt: "Hong Kong", label: "Hong Kong" },
        { src: Images.cadFlag.src, alt: "Canada", label: "Canada" },
        { src: Images.chinaFlag.src, alt: "China", label: "China" },
    ];

    return (
        <div className="max-w-xl mx-auto">
            <Slider {...settings}>
                {flags.map((flag, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Image
                            src={flag.src}
                            alt={flag.alt}
                            width={150}
                            height={60}
                            className="!w-16 md:!w-32 shadow-md"
                        />
                        <span className="text-sm text-gray-700 md:ml-6 mt-2">{flag.label}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FlagSlider;
