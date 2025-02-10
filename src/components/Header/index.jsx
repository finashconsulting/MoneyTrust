"use client";
import { useEffect, useState } from "react";
import { Images } from "@/utils/Images";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillNotification, AiOutlineNotification } from "react-icons/ai";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollPosition(scrollTop);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial values
    handleResize();
    handleScroll();

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Temporary Banner */}
      {isBannerVisible && (
        <div className="bg-blue1 flex items-center gap-2 justify-center text-white text-center h-14 md:h-12 px-4 md:px-4 lg:px-20 fixed w-full top-0 z-20">
          <AiFillNotification className="text-xl" />
          <h6 className="text-xs lg:text-sm font-semibold">
            'Our office is closed for the holidays and will reopen on January
            3rd.'
          </h6>
        </div>
      )}
      <header
        className={`flex items-center justify-between px-4 lg:px-14 py-4 md:py-2 ${
          scrollPosition >= 20 || isMobile ? "shadow-md" : "shadow-none"
        } bg-white fixed w-full z-10 lg:z-20`}
        style={{
          top: isBannerVisible ? "48px" : "0px", // Adjust top dynamically
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Images.HeaderLogo.src}
            alt="Logo"
            className="w-16 md:w-[90px] h-auto"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex justify-center">
          <button
            onClick={toggleMenu}
            className="!text-black focus:outline-none"
          >
            <img src={Images.hamburger.src} alt="ico" />
          </button>
        </div>

        {/* Navigation Links - Hidden on mobile, displayed on medium and up */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-blue1 font-semibold"
                : "text-black font-normal"
            } text-[17px]`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "text-blue1 font-semibold"
                : "text-black font-normal"
            } text-[17px] hover:text-blue1`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`${
              pathname === "/services"
                ? "text-blue1 font-semibold"
                : "text-black font-normal"
            } text-[17px] hover:text-blue1`}
          >
            Services
          </Link>
          <Link
            href="/faq"
            className={`${
              pathname === "/faq"
                ? "text-blue1 font-semibold"
                : "text-black font-normal "
            } text-[17px] hover:text-blue1`}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "text-blue1 font-semibold"
                : "text-black font-normal"
            } text-[17px] hover:text-blue1`}
          >
            Contact
          </Link>
        </nav>

        {/* Sign In Button - Hidden on mobile, displayed on medium and up */}
        <Link
          href="/login"
          className="hidden md:block text-center border-[#0066FF] text-sm  text-white border bg-blue1 hover:bg-blue1/95 font-normal py-2.5 px-3.5 w-32 rounded-[50px]"
        >
          Sign In
        </Link>

        {/* Mobile Menu - Visible when isOpen is true */}
        <div
          className={`absolute z-20 top-[62px] pb-2 right-0 w-full bg-white shadow-md md:hidden transition-all duration-300 transform ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              onClick={toggleMenu}
              href="/"
              className={`${
                pathname === "/" ? "text-blue1 font-semibold" : "text-black"
              }  text-lg`}
            >
              Home
            </Link>
            <Link
              onClick={toggleMenu}
              href="/about"
              className={`${
                pathname === "/about"
                  ? "text-blue1 font-semibold"
                  : "text-black"
              }  text-lg hover:text-blue1`}
            >
              About
            </Link>
            <Link
              onClick={toggleMenu}
              href="/services"
              className={`${
                pathname === "/services"
                  ? "text-blue1 font-semibold"
                  : "text-black"
              }  text-lg hover:text-blue1`}
            >
              Services
            </Link>
            <Link
              onClick={toggleMenu}
              href="/faq"
              className={`${
                pathname === "/faq" ? "text-blue1 font-semibold" : "text-black"
              }  text-lg hover:text-blue1`}
            >
              FAQ
            </Link>
            <Link
              onClick={toggleMenu}
              href="/contact"
              className={`${
                pathname === "/contact"
                  ? "text-blue1 font-semibold"
                  : "text-black"
              }  text-lg hover:text-blue1`}
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/login"
            className="text-center bg-blue1 w-3/4 text-white font-semibold py-2 rounded-[50px] mx-auto block mt-4"
          >
            Sign In
          </Link>
        </div>
      </header>
    </>
  );
}
