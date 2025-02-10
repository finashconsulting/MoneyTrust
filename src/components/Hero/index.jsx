"use client";
import { Images } from "@/utils/Images";
import Calculator from "../Calculator";
import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  const [cartData, setCartData] = useState([]);

  const itemVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.4, type: "spring", stiffness: 100 },
    }),
  };

  const riseUpVariant = (delay = 0) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay,  duration: 0.6 },
      // type: "spring", stiffness: 100,
    },
  });

  const calculatorVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200, // Controls the springiness
        damping: 8, // Controls the bounciness (lower value = more bounce)
        duration: 1,
      },
    },
  };

  return (
    <div className="mt-20">
      <div
        className={` bg-cover bg-center pb-20  md:min-h-[108vh] md:pb-1"}`}
        // style={{ backgroundImage: `url(${Images.HeroBg.src})` }}
        style={{
          background: "linear-gradient(to bottom, #0a457b, #aedfb3)",
        }}
      >
        <div className="px-4 md:mx-14 flex  flex-col lg:flex-row gap-x-20 xl:gap-x-28  pt-24 md:pt-44 ">
          <div className="text-white  space-y-4 xl:basis-[52%] md:mb-20 lg:mb-0">
          <motion.div
        className="flex items-center space-x-4 md:space-x-6 text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          "24/7 Transfer",
          "No Hidden Fees",
          "Great Exchange Rate",
        ].map((text, i) => (
          <motion.div
            className="flex items-center space-x-2 md:space-x-3"
            key={i}
            custom={i}
            variants={itemVariant}
          >
            <img
              src={Images.checkGreen.src}
              alt="ico"
              className="md:h-auto h-3.5"
            />
            <span className="text-[11px] md:text-sm whitespace-nowrap">
              {text}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <motion.h1
          className="text-3xl lg:text-[40px] xl:text-[52px] font-extrabold lg:leading-[46px] xl:leading-[64px] pt-5 md:pt-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={riseUpVariant(0)}
        > 
              Money Trust Currency Exchange
            </motion.h1>
            <motion.p
          className="md:text-[20px] text-[15px] opacity-90 !font-montserrat font-light"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={riseUpVariant(0.6)}
        >
              {
                "Experience seamless money transfers at great exchange rates with no hidden fees. Whether you’re sending funds internationally or buying gold, our 24/7 service ensures your money moves when you need it. Trust us for hassle-free, transparent, and efficient currency exchange solutions."
              }
            </motion.p>

            <motion.div
          className="flex space-x-4 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={riseUpVariant(0.8)}
        >
              {/* <button className="bg-blue1 text-white flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg md:px-6 px-3 py-3 rounded-full">
                Transfer Money
                <img src={Images.plus.src} className="h-5" alt="ico" />
              </button>
              <button className="border flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg border-white text-white md:px-6 px-3 py-3 rounded-full">
                See How It Works
                <img src={Images.work.src} className="h-5" alt="ico" />
              </button> */}
              <h5 className="mt-5 flex flex-row  gap-1.5 flex-wrap text-blue1 text-sm md:text-xl font-bold">
               
               Have questions? Call us now at<FiPhoneCall className="text-[#FF2D55] text-base sm:text-2xl sm:mr-2" /><span className="text-white ">1 (416) 574-2222</span>
               
                to get started!
              </h5>
            </motion.div>
          </div>

          {/* <!-- Right Side Form --> */}
          <motion.div
        className="md:flex lg:justify-end w-auto hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={calculatorVariant}
      >
            {/* <HeroCard /> */}
            <Calculator setCartData={setCartData} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
