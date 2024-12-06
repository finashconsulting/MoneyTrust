import { Images } from "@/utils/Images";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white md:px-20 py-10">
            <div className="container mx-auto flex sm:flex-row flex-col px-5 md:px-0 gap-10">
                {/* Logo and Newsletter */}
                <div className="flex-1 flex flex-col items-start">
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
                        By subscribing you agree to our <a href="#" className="underline">Privacy Policy</a> and consent to receive updates from our company.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 flex-1">
                    {/* Links Columns */}
                    <div className="col-span-1">
                        <h3 className="font-bold my-4">Column One</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Link One</a></li>
                            <li><a href="#" className="hover:underline">Link Two</a></li>
                            <li><a href="#" className="hover:underline">Link Three</a></li>
                            <li><a href="#" className="hover:underline">Link Four</a></li>
                            <li><a href="#" className="hover:underline">Link Five</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-bold my-4">Column Two</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Link Six</a></li>
                            <li><a href="#" className="hover:underline">Link Seven</a></li>
                            <li><a href="#" className="hover:underline">Link Eight</a></li>
                            <li><a href="#" className="hover:underline">Link Nine</a></li>
                            <li><a href="#" className="hover:underline">Link Ten</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-span-1">
                        <h3 className="font-bold my-4">Follow Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                                <FaFacebookF className="mr-2" />
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="flex items-center">
                                <FaInstagram className="mr-2" />
                                <a href="#" className="hover:underline">Instagram</a>
                            </li>
                            <li className="flex items-center">
                                <FaTwitter className="mr-2" />
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="flex items-center">
                                <FaLinkedinIn className="mr-2" />
                                <a href="#" className="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>© 2023 Relume. All rights reserved.</p>
                <div className="flex mt-4 space-x-3 md:mt-0">
                    <a href="#" className="underline sm:text-lg whitespace-nowrap text-[12px]">Privacy Policy</a>
                    <a href="#" className="underline sm:text-lg whitespace-nowrap text-[12px]">Terms of Service</a>
                    <a href="#" className="underline sm:text-lg whitespace-nowrap text-[12px]">Cookies Settings</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
