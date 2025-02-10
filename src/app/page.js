"use client";
import Calculator from "@/components/Calculator";
import FlagSlider from "@/components/FlagSlider";
import Hero from "@/components/Hero";
import { Images } from "@/utils/Images";
import { BiPlusMedical } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

import {
  MdOutlineArrowBack,
  MdOutlineArrowForward,
  MdOutlineStar,
} from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { fadeIn, staggerContainer } from "@/utils/motion";

export default function Home() {
  const workArray = [
    {
      img: Images.progress.src,
      heading: "Get The Exchange Rate",
      desc: "Call our office or simply walk-in to know the latest exchange rate.",
    },
    {
      img: Images.chart.src,
      heading: "Confirm The Transfer",
      desc: "Confirm the exchange rate and the service fee and pay the equivalent money to our office cashier. Also provide the destinaion account/contact information.",
    },
    {
      img: Images.success.src,
      heading: "Track your transfer",
      desc: "We process your money transfer as soon as possible and will update you when the money is delivered or transferred to the destination account/person.",
    },
  ];

  const chooseArray = [
    {
      icon: "",
      title: "Secure and Reliable",
      desc: "We are regulated by FINTRAC and have a segregated account at major Canadian financial institution. With our state-of-the-art currency order management system, you are at a relief by using an extremely secure service.",
    },
    {
      icon: "",
      title: "Responsive Staff",
      desc: "Our Staff is well trained to handle multiple queries at a time, you will be pleased with our customer management experience, your satisfaction is our top priority.",
    },
    {
      icon: "",
      title: "Fast Service",
      desc: "We offer same day delivery of funds to your desired destination if booked before bank cut-off.Our instant money transfer service takes less time than you would usually imagine.",
    },
    {
      icon: "",
      title: "Best Rate",
      desc: "We guarantee to beat your bank’s exchange rate. You can save hundreds to thousands of dollars.",
    },
  ];

  const servicesArray = [
    {
      title: "Western Union Transfers",
      desc: "A desirable choice for individuals who want to get the most for their money because of its dedication to offering reasonably priced services.",
    },
    {
      title: "Foreign Currency Banknotes",
      desc: "Guarantees a smooth and effective procedure for obtaining the banknotes you require, regardless of whether you are a traveller or business.",
    },
    {
      title: "Money Gram Transfers",
      desc: "One of the best options for individuals who value efficiency in their international financial transactions because of its speedy money transfer service",
    },
    {
      title: "Ria Money Transfer",
      desc: "Our Ria Money Transfer service offers people wishing to transfer and receive money worldwide a dependable and easy-to-use option.",
    },
  ];

  const planArray = [
    {
      img: Images.currency.src,
      title: "Easy Currency Conversion",
      desc: "Our foreign student currency exchange service guarantees that students have the financial freedom needed for both daily expenses and academic endeavours by enabling them to convert their native currency to Canadian dollars or any other essential currency with ease.",
    },
    {
      img: Images.assis.src,
      title: "Banking Assistance",
      desc: "To help students seamlessly integrate into the local banking system, we offer Banking Assistance, which helps students open bank accounts in Canada. With the help of this service, students may easily access vital financial services and manage their finances more effectively by streamlining the frequently complicated account opening process.",
    },
    {
      img: Images.money.src,
      title: "Money Transfer",
      desc: "Finally, students may send and receive money worldwide or from their home country safely and effectively using our Student Money Transfer service. Our dependable transfer service makes sure that money reaches students quickly and safely, whether it's for living expenses, tuition, or other financial needs. This helps students have a stress-free financial experience while they study in Canada.",
    },
  ];

  const TestimonialArray = [
    {
      user: {
        img: Images.Testimonial1.src,
        name: "Joaquin Valdez ",
        job: "Banker",
      },
      desc: "“Just went in earlier at this branch. I really had a good deal in exchanging my US dollars to Canadian dollars. I definitely recommend to go here if you want to buy or sell USD. I believe they also have a great deal with buying/selling Euros as well. Thanks to the nice lady for accommodating my request to choose specific denominations that I want in CAD.",
    },
    {
      user: {
        img: Images.Testimonial1.src,
        name: "Deli raesi",
        job: "CEO of Solit",
      },
      desc: "“One of money trust's standout features is its consistently low trading fees, which remain among the most competitive in the industry. This makes it an attractive choice for traders looking to minimize costs without compromising on quality or service",
    },
    {
      user: {
        img: Images.Testimonial2.src,
        name: "Dasha Zukher",
        job: "Businessman",
      },
      desc: "“Great customer service from the staff, everyone I’ve ever dealt with was very friendly and pleasant to deal with. The money exchange rate was very good as well compared to other companies I’ve used before. I highly recommend Money Trust’s services if you are looking for an overall great experience. 10/10",
    },
    {
      user: {
        img: Images.Testimonial2.src,
        name: "Koray Yilma",
        job: "Enterpreuner",
      },
      desc: "“It's a great experience, while other branches just agreed to send money, I got my job done here in less than 2 minutes, AWESOME.",
    },
    {
      user: {
        img: Images.Testimonial1.src,
        name: "Joaquin Valdez ",
        job: "Banker",
      },
      desc: "“Just went in earlier at this branch. I really had a good deal in exchanging my US dollars to Canadian dollars. I definitely recommend to go here if you want to buy or sell USD. I believe they also have a great deal with buying/selling Euros as well. Thanks to the nice lady for accommodating my request to choose specific denominations that I want in CAD.",
    },
    {
      user: {
        img: Images.Testimonial1.src,
        name: "Deli raesi",
        job: "CEO of Solit",
      },
      desc: "“One of money trust's standout features is its consistently low trading fees, which remain among the most competitive in the industry. This makes it an attractive choice for traders looking to minimize costs without compromising on quality or service",
    },
    {
      user: {
        img: Images.Testimonial2.src,
        name: "Dasha Zukher",
        job: "Businessman",
      },
      desc: "“Great customer service from the staff, everyone I’ve ever dealt with was very friendly and pleasant to deal with. The money exchange rate was very good as well compared to other companies I’ve used before. I highly recommend Money Trust’s services if you are looking for an overall great experience. 10/10",
    },
    {
      user: {
        img: Images.Testimonial2.src,
        name: "Koray Yilma",
        job: "Enterpreuner",
      },
      desc: "“It's a great experience, while other branches just agreed to send money, I got my job done here in less than 2 minutes, AWESOME.",
    },
  ];

  const scrollContainerRef = useRef(null);

  // Scroll Left Handler
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300; // Adjust scroll amount
    }
  };

  // Scroll Right Handler
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300; // Adjust scroll amount
    }
  };

  const riseUpVariant = (delay = 0) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay, duration: 0.6 },
    },
  });

  // Animation variants for money transfer items
  const itemVariants = (i, arrayLength) => {
    if (i === 0) {
      // First item animation (from the left)
      return {
        hidden: { x: -100, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 40, duration: 0.9 },
        },
      };
    } else if (i === arrayLength - 1) {
      // Last item animation (from the right)
      return {
        hidden: { x: 100, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 40, duration: 0.9 },
        },
      };
    } else {
      // Default animation for other items
      return {
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 40, duration: 0.9 },
        },
      };
    }
  };

  // Why Choose us variants
  // Variants for the parent container
  const chooseUsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6, // Stagger each child by 0.3 seconds
      },
    },
  };

  // Variants for each item
  const chooseUsItems = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Duration of each item's animation
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200, // Controls the springiness
        damping: 8, // Controls the bounciness (lower value = more bounce)
        duration: 2,
      },
    },
  };

  const fadeInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200, // Controls the springiness
        damping: 8, // Controls the bounciness (lower value = more bounce)
        duration: 2,
      },
    },
  };
  return (
    <main className="pb-10">
      <Hero />
      <section className="md:hidden px-5 md:px-0 pb-5 -mt-8  block relative">
        {/* z-20 */}
        {/* <HeroCard /> */}
        <Calculator />
      </section>
      <section className="flex pt-10 px-5 md:px-20 xl:flex-row flex-col items-end gap-y-3 gap-x-12 mt-5 container mx-auto justify-between">
        <div className="xl:basis-2/5">
          <h1 className="text-xl font-bold  md:text-4xl sm:!leading-[45px]">
            Popular Countries Our Customers Send Money
          </h1>
          <p className="md:text-lg opacity-80 font-montserrat pt-5">
            Our customers trust us to transfer money quickly and securely to
            their loved ones and businesses in top destinations worldwide,
            including Hong Kong, Canada, China, and the USA.{" "}
          </p>
        </div>
        <div className="w-full xl:flex-1 xl:w-1/2">
          <FlagSlider />
        </div>
      </section>
      <section className="px-5 md:px-20 container flex flex-col items-center mx-auto gap-y-3 mt-36">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={riseUpVariant(0.3)}
          className="text-xl text-center font-bold md:text-4xl"
        >
          How Does Money Transfer Work?
        </motion.h1>
        <div className="flex justify-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={riseUpVariant(0.6)}
            className="md:text-lg mt-2 text-center max-w-[600px]"
          >
            Mobile banking differs from mobile payments, which involves the use
            of a mobile device.
          </motion.p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 flex-col items-center md:mt-10 justify-between max-w-[1225px] w-full relative">
          {workArray?.map((item, i) => (
            <div
              key={i}
              className="z-10 flex items-center w-full justify-start p-4 "
            >
              <img
                src={item.img}
                className={`h-64 flex justify-start items-start w-full rounded-lg animate-float ${
                  i === 2 ? "pb-8" : ""
                }`}
                alt=""
              />
            </div>
          ))}

          {/* Wave image with animation */}
          <img
            className="hidden lg:block absolute lg:rotate-0 rotate-90 h-full w-full animate-wave"
            src={Images.waveLine.src}
            alt="Wave line animation"
          />
        </div>

        <div className="flex lg:flex-row  flex-col justify-between max-w-[1225px] w-full relative">
          {workArray?.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col justify-start p-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={riseUpVariant(0.6)}
            >
              <div className="flex flex-col w-full items-center">
                <img
                  src={item.img}
                  className={`h-auto flex lg:hidden justify-start items-start w-full rounded-lg ${
                    i === 2 ? "lg:pb-8" : ""
                  }`}
                  alt=""
                />
                <h1 className="md:text-2xl text-xl font-bold ml-4 mt-5 flex items-center">
                  {item?.heading}
                </h1>
              </div>
              <p className="max-w-xs text-center mt-6 text-[#555556]">
                {item?.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="px-5 md:px-20 container mx-auto flex pb-3 lg:flex-row flex-col items-center gap-10 md:gap-20 mt-24">
        <motion.div
          className="lg:basis-[40%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <img src={Images.chose.src} className=" rounded-lg w-full" alt="" />
        </motion.div>
        <div className="lg:basis-[60%]">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={riseUpVariant(0.3)}
            className="md:text-4xl text-2xl font-bold flex items-center text-blue1"
          >
            Why Choose Us?
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={riseUpVariant(0.8)}
            className="pt-4 text-[15px] font-light text-[#555556] mt-2 mb-10"
          >
            {
              "When it comes to your currency exchange needs in North York, Toronto, look no further than us. We understand the value of accurate and speedy transactions at our exchange office, and our committed team is always available to help you with a degree of responsiveness that guarantees your peace of mind. Select us for your currency exchange needs, and discover why we're the go-to option in North York—our combination of security, dependability, and quickness."
            }
          </motion.p>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
            variants={chooseUsVariants}
            className="md:mt-8 grid grid-cols-1 mt-2 md:grid-cols-2 gap-x-3 gap-y-10 pb-10"
          >
            {chooseArray.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                variants={chooseUsItems}
              >
                <img src={Images.checkGreen.src} className="mt-1" alt="" />
                <div>
                  <h1 className="font-semibold text-[#091133] text-base">
                    {item.title}
                  </h1>
                  <p className=" text-[15px] font-light text-[#555556] pt-1.5 lg:w-[85%]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.section>
        </div>
      </section>
      <section className="bg-gray3 p-10 py-28 md:mt-10">
        <div className="container mx-auto md:px-20">
          <div className="flex justify-between md:flex-row flex-col">
            <h1 className="text-4xl font-bold max-w-[320px] flex sm:flex-row flex-col gap-3 leading-10">
              <img
                src={Images.CoreServices.src}
                className="sm:block hidden"
                alt=""
              />
              <p className="text-[#94C99D] sm:hidden text-lg">Core Services</p>
              Our Services At A Glance
            </h1>
            <div className="flex justify-end flex-col items-end gap-2">
              <p className="sm:text-end text-start max-w-[500px]">
                Quickly and easily send, receive and request money online with
                Money Trust.
              </p>
              <Link
                href="/services"
                className="bg-[#94C99D] hover:bg-[#77ae80] transition-all text-white hidden md:flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg md:px-6 px-3 py-3 rounded-full"
              >
                View More
                <img src={Images.plus.src} className="h-5" alt="ico" />
              </Link>
            </div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-8 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4"
          >
            {servicesArray.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white flex flex-col p-6"
                variants={fadeIn("right", "spring", i * 0.5, 0.75)}
              >
                <BiPlusMedical
                  className={`${
                    i === 0 ? "text-[#7CBF88]" : ""
                  } text-[#7203E3]`}
                />
                <h1 className="font-bold max-w-40 text-lg py-5">
                  {item.title}
                </h1>
                <p className="text-end self-end text-[16px] max-w-[90%] text-[#707070]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center py-5 md:hidden">
            <Link
              href="/services"
              className="bg-[#94C99D] text-white flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg md:px-6 px-3 py-3 rounded-full"
            >
              View More
              <img src={Images.plus.src} className="h-5" alt="ico" />
            </Link>
          </div>
        </div>
      </section>
      <section className="px-5 md:px-20 container mx-auto flex lg:flex-row flex-col gap-5 mt-14 md:mt-24">
        <div className="flex-1 order-2 lg:order-1 pb-14 lg:pb-0">
          <strong className="font-bold text-lg pb-3 block text-[#94C99D]">
            Best plan
          </strong>
          <h1 className="text-xl md:text-4xl font-bold max-w-[400px]">
            International Students Are Welcome
          </h1>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="flex flex-col gap-4 pt-8"
          >
            {planArray.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-3 items-start"
                variants={fadeIn("up", "spring", index * 0.5, 1)}
              >
                <img src={item.img} alt="ico" />
                <div>
                  <h1 className="font-bold text-[#0D0E10] text-xl pb-2">
                    {item.title}
                  </h1>
                  <p className="text-[#676879] text-[15px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="flex  lg:justify-normal justify-center">
              <Link
                href="/services"
                className="bg-blue1 hover:bg-blue1/90 text-white w-fit flex justify-center items-center md:gap-3 gap-2 whitespace-nowrap text-sm md:text-lg md:px-6 px-3 py-3 rounded-full"
              >
                View More
                <GoArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.img
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "", 0.5, 1)}
          src={Images.plan.src}
          className="flex-1 lg:w-1/5 order-1 lg:order-2"
          alt=""
        />
      </section>
      <section className="bg-blue1 overflow-hidden   md:mt-10 pb-10 sm:pb-14 md:pb-20 lg:pb-0">
        <div className="  text-white xl:gap-4 flex lg:flex-row flex-col h-auto xl:h-[750px]">
          <div className="lg:basis-[62%] relative -mt-14 md:-mt-20 flex justify-center">
            {/* <div className="hidden lg:block -left-96 relative bg-white rounded-[800px] -lg:top-0 2xl:-top-8 h-[900px] xl:h-[1050px] lg:w-[950px] xl:w-[1000px] 2xl:w-[1100px]">
             
            </div> */}
            <div className="hidden lg:block absolute right-20 xl:right-24 2xl:right-28 top-[75px] xl:top-[77px]  bg-white rounded-[1000px]  h-[92%] lg:w-[950px] xl:w-[1000px] 2xl:w-[1150px]"></div>

            <Image
              src={Images.service.src}
              width={400}
              height={400}
              alt=""
              className=" h-auto w-full sm:w-[90%] md:w-1/2  lg:w-full xl:w-[96%]  2xl:w-[93%]  lg:absolute lg:top-[50%] lg:left-0 lg:-translate-y-1/2 lg:z-10"
            />
          </div>
          <div className="lg:basis-[50%] flex flex-col lg:pl-4 xl:pl-0 lg:pr-6 xl:pr-10 lg:pt-10  pb-0 lg:pb-10 2xl:pb-0 xl:pt-20">
            <div className="">
              <motion.h1
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn("up", "", 0.5, 1)}
                className="px-5 lg:px-0 md:text-4xl text-xl sm:text-2xl font-bold -mt-5 md:mt-0 pb-5 md:pb-10 uppercase "
              >
                Highlights Of Our Services
              </motion.h1>
              <motion.p
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn("up", "", 0.8, 1)}
                className="px-5 lg:px-0 text-sm sm:text-base font-poppins font-normal text-justify leading-7"
              >
                Our tailored services cater to your financial needs, offering
                innovative solutions for secure and efficient currency
                exchanges. Whether you're sending money abroad or managing
                international transactions, we ensure a smooth process that
                prioritizes your convenience and peace of mind. <br /> To
                protect our clients' financial transactions, we employ advanced
                security measures at every stage of the currency exchange
                process. Our state-of-the-art encryption technology ensures your
                data remains private and secure, safeguarding it from
                unauthorized access. Additionally, our highly trained staff
                adheres to strict security guidelines to guarantee the integrity
                of every transaction. <br /> We are committed to maintaining the
                highest security standards and providing a seamless, secure
                environment for all currency exchange services at our Toronto
                and North Vancouver locations. Your trust and confidence remain
                our top priorities.
              </motion.p>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }} // Trigger once when 20% in view
                variants={chooseUsVariants}
                className="mt-8 flex flex-col gap-4 px-5 lg:px-0"
              >
                <motion.li
                  variants={chooseUsItems}
                  className="flex gap-2 items-center"
                >
                  <FaCheckCircle className="text-[#94C99D]" />
                  Great Exchange rate{" "}
                </motion.li>
                <motion.li
                  variants={chooseUsItems}
                  className="flex gap-2 items-center"
                >
                  <FaCheckCircle className="text-[#94C99D]" />
                  24/7 Transfer{" "}
                </motion.li>
                <motion.li
                  variants={chooseUsItems}
                  className="flex gap-2 items-center"
                >
                  <FaCheckCircle className="text-[#94C99D]" />
                  No Hidden fees{" "}
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFA]  md:mt-10 min-h-[900px] md:min-h-[720px]">
        <div className="">
          <div className="relative container mx-auto">
            <div className="px-5 md:px-20 pt-5 sm:pt-16 flex justify-between items-end lg:items-start flex-row">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={riseUpVariant(0.6)}
                className="text-4xl font-bold max-w-[420px] flex sm:flex-row flex-col gap-3 leading-10"
              >
                <img
                  src={Images.Testimonial.src}
                  className="sm:block hidden"
                  alt=""
                />
                <p className="text-blue1 sm:hidden text-lg">Testimonial</p>
                {"Our client's feedback is our strength"}
              </motion.h1>

              <div className="flex items-center gap-4">
                <button
                  className=" bg-blue1 hover:bg-blue1/90 text-white p-1.5 lg:p-2 rounded-full shadow-lg"
                  onClick={scrollLeft}
                >
                  <MdOutlineArrowBack size={20} />
                </button>

                {/* Right Arrow */}
                <button
                  className=" bg-blue1 text-white hover:bg-blue1/90 p-1.5 lg:p-2 rounded-full shadow-lg"
                  onClick={scrollRight}
                >
                  <MdOutlineArrowForward size={20} />
                </button>
              </div>
            </div>
            <div className="absolute left-0 w-screen pl-0 md:pl-20 mt-8  pb-20 ">
              <div
                ref={scrollContainerRef}
                className="flex scrollbar-hide overflow-x-auto scroll-smooth"
                // variants={staggerContainer}
                // initial="hidden"
                // whileInView="show"
                // viewport={{ once: true, amount: 0.25 }}
              >
                {TestimonialArray.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white min-w-[350px] mx-auto md:min-w-[390px] h-full flex flex-col pl-5 py-6 lg:p-6"
                    // variants={fadeIn("right", "spring", i * 0.5, 0.75)}
                  >
                    <div className="flex items-center gap-2">
                      {Array(5) // Creates an array with exactly 5 elements
                        .fill(0) // Fills the array with dummy values
                        .map((_, i) => (
                          <div
                            key={i}
                            className="bg-[#94C99D] flex justify-center items-center w-5 h-5"
                          >
                            <MdOutlineStar className="text-white" />
                          </div>
                        ))}
                    </div>
                    <p className="pt-4 text-[#070F38] text-base lg:text-lg leading-8">
                      {item.desc}
                    </p>
                    <div className="pt-5 flex gap-2 items-center">
                      <img
                        className="w-[50px] h-[50px]"
                        src={item.user.img}
                        alt=""
                      />
                      <div>
                        <h1 className="font-medium text-[#015180] underline">
                          {item.user.name}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F4] p-5 md:p-10 ">
        <div className="container md:px-20 mx-auto ">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={riseUpVariant(0.3)}
            className="text-center font-bold text-xl md:text-4xl pt-5"
          >
            We Are Trusted By
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={riseUpVariant(0.6)}
            className="flex  mt-3 justify-center"
          >
            <div className="w-56 h-[2px] bg-[#94C99D]"></div>
          </motion.div>
          <div className="flex justify-center flex-wrap lg:flex-nowrap gap-5 pt-10">
            <motion.img
              src={Images.trust1.src}
              alt=""
              className="w-[130px] sm:w-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            />
            <motion.img
              src={Images.trust2.src}
              alt=""
              className="w-[130px] sm:w-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
