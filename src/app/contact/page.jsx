import Location from "@/components/Location";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import PagesHero from "@/components/pagesHero";

const page = () => {
  return (
    <div className="">
      <PagesHero page={"Contact Us"} />
      <section className="bg-white container mx-auto py-12 px-6">
        <div className="max-w-2xl mx-auto text-center mt-10">
          {/* <h2 className="text-xl sm:text-3xl font-extrabold text-gray-800 mb-4">
                        Contact Money Trust Currency Exchange
                    </h2> */}
          <p className="text-gray-600 mb-6 font-montserrat">
            {
              "For inquiries, assistance, or to learn more about our currency exchange services, please don't hesitate to reach out to us."
            }
          </p>
          <p className="text-gray-600 font-montserrat">
            {
              "You can contact our dedicated team via the provided email or phone number, and we'll be delighted to address your currency-related needs with professionalism and efficiency."
            }
          </p>
        </div>
      </section>
      <section className="container mx-auto lg:px-10 xl:px-20 bg-white py-0 lg:py-12 px-4 md:px-6">
        <div className="flex lg:justify-around lg:flex-row flex-col gap-12 items-start">
          {/* Contact Information */}
          <div className="flex order-2 lg:order-1 flex-col gap-7">
            <div className="flex flex-col gap-6">
              <div className="flex gap-5">
                <GrLocation className="sm:text-2xl text-3xl text-gray-600" />
                <div className="font-montserrat flex flex-col gap-2">
                  <h3 className="font-semibold text-base">Location</h3>
                  {/* <p className="text-gray-600 text-sm">
                    Come say hello at our office HQ.
                  </p> */}
                  <address className=" font-medium md:w-[350px] text-gray-600 leading-6  text-sm not-italic">
                    <span className="font-semibold">Toronto:</span> Dynasty
                    Court, 5460 Yonge St Shop 105, North York,{" "}
                    {/* <br /> <span className="pt-2"> */}
                    ON M2N 6K7
                    {/* </span> */}
                  </address>{" "}
                  <address className="font-medium md:w-[370px] text-gray-600 leading-6   text-sm not-italic">
                    <span className="font-semibold">North Vancouver:</span> 146
                    3rd St W, North Vancouver, BC V7M 1E8 {/* <br /> */}
                  </address>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <MdOutlineMailOutline className="text-xl lg:text-3xl text-gray-600" />
              <div className="font-montserrat flex flex-col gap-1 ">
                <h3 className="font-semibold text-base font-montserrat">
                  Email
                </h3>
                <p className="text-gray-600 text-sm">
                  Our friendly team is here to help.
                </p>
                <a
                  href="mailto:hi@nurona.com"
                  className="text-gray-600 font-semibold text-sm"
                >
                  Info@moneytrust.ca
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-3 lg:gap-5">
                <LuPhone className="text-xl lg:text-3xl text-gray-600" />
                <div className="font-montserrat flex flex-col gap-1">
                  <h3 className="font-semibold text-base">Phone / FAX</h3>
                  <p className="text-gray-600 text-sm">
                    Mon-Fri from 8am to 5pm.
                  </p>
                  <a
                    href="tel:+1555000000 test-sm"
                    className="font-semibold text-gray-500"
                  >
                    +1 (416) 567-2222
                  </a>
                  <a
                    href="tel:+1555000000 test-sm"
                    className="font-semibold text-gray-500"
                  >
                    +1 (604) 200-0031
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-5">
                <FaWhatsapp className="text-xl lg:text-3xl text-gray-600" />
                <div className="font-montserrat flex flex-col gap-1">
                  <h3 className="font-semibold text-base font-montserrat">
                    Live Chat
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our friendly team is here to help.
                  </p>
                  <a href="#" className="font-semibold text-sm">
                    Start new chat
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-4 lg:p-8 order-1 lg:order-2 w-full lg:w-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="shadow-custom-shadow border w-full">
                  <input
                    type="text"
                    placeholder="First name"
                    className=" rounded font-montserrat placeholder:text-gray-600 w-full px-4 py-3 focus:outline-none "
                  />
                </div>
                <div className="shadow-custom-shadow border">
                  <input
                    type="text"
                    placeholder="Last name"
                    className=" rounded font-montserrat placeholder:text-gray-600 w-full px-4 py-3 focus:outline-none "
                  />
                </div>
              </div>

              <div className="shadow-custom-shadow border">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="rounded font-montserrat placeholder:text-gray-600 w-full px-4 py-3 focus:outline-none "
                />
              </div>

              <div className="shadow-custom-shadow border">
                <input
                  type="tel"
                  placeholder="+123 456874645"
                  className="rounded font-montserrat placeholder:text-gray-600 w-full px-4 py-3 focus:outline-none "
                />
              </div>

              <div className="shadow-custom-shadow border">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="  rounded font-montserrat placeholder:text-gray-600 w-full px-4 py-3 focus:outline-none "
                ></textarea>
              </div>

              <div className="flex items-start  bg-[#F4F4FA] shadow-custom-shadow mb-6">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <label className="ml-2 text-sm text-gray-700 font-montserrat">
                  You agree to our friendly privacy policy.
                </label>
              </div>

              <button
                type="submit"
                className=" w-full py-3 bg-blue1 text-white rounded-[50px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        <div className="col-span-2 mb-10 lg:mb-0">
          <Location />
        </div>
      </section>
    </div>
  );
};

export default page;
