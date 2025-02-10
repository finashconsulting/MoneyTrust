"use client";
import { Images } from "@/utils/Images";
import Image from "next/image";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp, FaPhoneAlt, FaCommentDots, FaTimes, FaTelegram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Controls menu open/close state
  return (
    <footer className="bg-white md:px-20 pb-6">
      <div className="container mx-auto flex xl:flex-row justify-between flex-col px-5 md:px-0 md:gap-10">
        {/* Logo and Newsletter */}
        <div className="sm:basis-[40%] md:basis-1/2 lg:basis-1/2 flex flex-col items-start">
          <Image
            src={Images.HeaderLogo.src} // Replace with your logo path
            alt="Logo"
            width={80}
            height={80}
            className="mb-4"
          />
          <p className="text-sm mb-4">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex items-center mb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-black rounded-md px-4 py-2 w-40 sm:w-48 mr-2"
            />
            <button className=" rounded-md px-4 py-2 border border-black">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500">
            By subscribing you agree to our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and consent to receive updates from our company.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:gap-5 lg:gap-24 lg:basis-1/2 w-full">
          {/* Links Columns */}
          <div className="">
            <h3 className="font-bold my-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:flex-1 ">
            <h3 className="font-bold my-4">Address</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex gap-2 items-start pt-1">
                <GrLocation className="text-gray-600" />
                <span className="w-[90%] sm:w-[70%] lg:w-full 2xl:w-[90%] -mt-1 xl:text-justify">
                  Toronto: Dynasty Court, 5460 Yonge St Shop 105, North York, ON
                  M2N 6K7
                </span>
              </li>
              <li className="flex gap-2 items-center -pt-1">
                <LuPhone className=" text-gray-600" />
                <p className="">Phone: +1 (416) 567-2222</p>
              </li>
              <li className="flex gap-2 items-start pt-1">
                <GrLocation className="text-gray-600" />
                <span className="w-full sm:w-[80%] lg:w-full 2xl:w-[90%]  -mt-1 xl:text-justify">
                  North Vancouver: 146 3rd St W, North Vancouver, BC V7M 1E8
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <LuPhone className=" text-gray-600" />
                <p className="">Phone: +1 (604) 200-0031</p>
              </li>
              <li className="flex gap-2 items-center">
                <MdOutlineMailOutline className=" text-gray-600" />
                <p className="">Email: Info@moneytrust.ca</p>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className=" items-end">
            <h3 className="font-bold my-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <FaFacebookF className="mr-2" />
                <a
                  href="https://www.instagram.com/moneytrust.ca?igsh=dWlkcGRtd3VmcWM="
                  target="_blank"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center">
                <FaInstagram className="mr-2" />
                <a
                  href="https://www.instagram.com/moneytrust.ca?igsh=dWlkcGRtd3VmcWM="
                  target="_blank"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center">
                <FaTwitter className="mr-2" />
                <a
                  href="https://www.instagram.com/moneytrust.ca?igsh=dWlkcGRtd3VmcWM="
                  target="_blank"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedinIn className="mr-2" />
                <a
                  href="https://www.instagram.com/moneytrust.ca?igsh=dWlkcGRtd3VmcWM="
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2023 Relume. All rights reserved.</p>
        <div className="flex mt-4 space-x-3 md:mt-0">
          <a
            href="#"
            className="underline sm:text-lg whitespace-nowrap text-[12px]"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="underline sm:text-lg whitespace-nowrap text-[12px]"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="underline sm:text-lg whitespace-nowrap text-[12px]"
          >
            Cookies Settings
          </a>
        </div>
      </div>

      {/* //Bottom bar */}
      <div className="fixed bottom-5 lg:bottom-8 right-5 lg:right-7 z-50 flex flex-col items-center">
        {/* WhatsApp Icon */}
        <Link
          href="https://wa.me/+14165742222"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-[-30px]"
              : "opacity-0 translate-y-0 pointer-events-none"
          }`}
        >
          <div className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-all">
            <FaWhatsapp size={24} />
          </div>
        </Link>

        {/* Phone Icon */}
        <Link
          href="tel:+14165742222"
           target="_blank"
          className={`transition-all duration-300 delay-200 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-[-20px]"
              : "opacity-0 translate-y-0 pointer-events-none"
          }`}
        >
          <div className="bg-blue-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-all">
            <FaPhoneAlt size={24} />
          </div>
        </Link>

        
        {/* Telegram Icon */}
        <Link
          href="https://t.me/MONEYTRUSTT"
           target="_blank"
          className={`transition-all duration-300 delay-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-[-10px]"
              : "opacity-0 translate-y-0 pointer-events-none"
          }`}
        >
          <div className="bg-[#24a1de] p-3 rounded-full text-white shadow-lg hover:scale-110 transition-all">
            <FaTelegram  size={24} />
          </div>
        </Link>

        {/* Main Message Icon */}
        <div
          className={`relative bg-[#cc00cc] p-3 rounded-full text-white shadow-lg cursor-pointer transform transition-transform duration-500 ${
            menuOpen ? "rotate-180" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <RxCross2 size={24} className="hover:scale-110 transition-all" />
          ) : (
            <FaCommentDots
              size={24}
              className="hover:scale-110 transition-all"
            />
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
