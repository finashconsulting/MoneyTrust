import PagesHero from "@/components/pagesHero";
import { Images } from "@/utils/Images";
import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const page = () => {
  return (
    <div className="">
      <PagesHero page={"About US"} />
      <section className="bg-white md:px-10 xl:px-40 pt-10 md:pt-24 pb-16 px-6">
        {/* Company Information Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-0 items-center">
          {/* Text Section */}

          {/* Illustration Section (Placeholder) */}
          <div className="">
            <img
              src={Images.cover.src}
              alt="Currency Exchange Illustration"
              className="w-full max-w-lg"
            />
          </div>
          <div>
            <p className="text-black leading-8 lg:leading-8 font-poppins font-normal text-sm lg:text-base">
              For over a decade, Money Trust Currency Exchange has been a
              trusted name in the financial services industry, providing
              reliable and secure currency exchange solutions across Canada. Our
              journey began with a vision to offer transparent and
              customer-focused services, and today, we are proud to be
              recognized for our professionalism and dedication. <br /> With two
              key branches located in Toronto and North Vancouver, we have grown
              to serve a diverse clientele, from individuals to businesses,
              ensuring their financial needs are met with precision and care.
              Our expertise spans across a wide range of currency exchange
              services, tailored to deliver the best value, speed, and
              reliability. <br /> At Money Trust, we believe in building lasting
              relationships by putting our customers first. Whether it’s
              offering competitive exchange rates, ensuring secure transactions,
              or delivering exceptional service, we are here to make your
              financial journey seamless and stress-free.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="w-fit mx-auto mt-16 md:mt-28 ">
          <h4 className="font-extrabold text-center text-[#94C99D] text-xl md:text-2xl lg:text-3xl font-lexend">
            Why Choose Us?
          </h4>
          <div className="flex flex-col gap-4 mt-5 lg:mt-10 ">
            <h6 className="text-blue1 font-poppins text-base lg:text-lg font-medium text-center md:text-left">
              <span className="text-[#94C99D] font-poppins font-bold">
                Trusted Expertise{" "}
              </span>
              : A decade of experience in currency exchange solutions.
            </h6>
            <h6 className="text-blue1 font-poppins text-base lg:text-lg font-medium text-center md:text-left ">
              <span className="text-[#94C99D] font-poppins font-bold">
                Convenience
              </span>
              : Strategically located branches for easy access.
            </h6>
            <h6 className="text-blue1 font-poppins text-base lg:text-lg font-medium text-center md:text-left">
              <span className="text-[#94C99D] font-poppins font-bold">
                Reliability
              </span>
              : Secure and transparent transactions with no hidden fees.
            </h6>
            <h6 className="text-blue1 font-poppins text-base lg:text-lg font-medium text-center md:text-left">
              <span className="text-[#94C99D] font-poppins font-bold">
                Customer Focus
              </span>
              : Dedicated to meeting the unique needs of our clients.
            </h6>
          </div>
        </div>

        <div className="container mx-auto mt-10 md:mt-16 ">
          <p className="lg:w-[90%] text-center text-base lg:text-lg font-figtree font-semibold text-[#202020]/50 ">
            Let Money Trust Currency Exchange be your partner in achieving your
            financial goals. Experience the difference with a team that cares
            about your success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
