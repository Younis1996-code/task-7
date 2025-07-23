import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.svg";
import { FaFacebookF, FaInstagram, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

interface FooterData {
    title: string;
    links: string[];
}

const Footer = () => {
  const footerData : FooterData[] = [
    {
      title: "Services",
      links: [
        "Bike and Rickshaw rental",
        "Guided Tours of Lucca",
        "Guided Bike Tour of Lucca",
        "Trip In The Tuscan Hills",
        "Transportation With Luxury Cars",
        "Wine Tours By Bus With Guide",
      ],
    },
    {
      title: "Home",
      links: ["Home", "About Us", "Tour Packages"],
    },
    {
      title: "Help",
      links: ["Terms of Use", "Provicy Policy"],
    },
  ];

  return (
    <footer className="px-[13vw] mt-40 py-10 bg-[#333333]">
      <div className="flex flex-col gap-8">
        <div className="relative md:w-33 md:h-33 w-20 h-20">
          <Image src={logo} alt="logo" fill />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5 border-y border-white/10 py-8 flex-wrap xl:flex-nowrap">
          {footerData.map((item) => (
            <div key={item.title} className="flex flex-col gap-5">
              <h3 className="text-lg/[30px] md:text-xl/[30px] font-extrabold text-white">
                {item.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {item.links.map((link, index) => (
                  <Link
                    href="/"
                    key={index}
                    className="text-sm/[30px] md:text-lg/[30px] font-semibold text-white"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-5">
            <h3 className="text-lg/[30px] md:text-xl/[30px] font-extrabold text-white">Contacts</h3>
            <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                    <FaLocationDot className="text-lg/[26px] font-semibold text-[#FA8B02]" />
                    <p className="text-sm/[30px] md:text-lg/[26px] font-semibold text-white">Piazza Napoleone, Lucca, Tuscany</p>
                </div>
                <div className="flex items-center gap-2.5">
                    <FaPhoneAlt className="text-lg/[26px] font-semibold text-[#FA8B02]" />
                    <p className="text-sm/[30px] md:text-lg/[26px] font-semibold text-white">	+39 346 368 5708</p>
                </div>
                <div className="flex items-center gap-2.5">
                    <IoMdMail className="text-lg/[26px] font-semibold text-[#FA8B02]" />
                    <p className="text-sm/[30px] md:text-lg/[26px] font-semibold text-white">italiainlimo@gmail.com</p>
                </div>

            </div>

          </div>

          <div className="flex flex-col gap-5">
                <h3 className="text-lg/[30px] md:text-xl/[30px] font-extrabold text-white lg:text-center">
                Social Media
              </h3>
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 md:w-12.5 md:h-12.5 bg-[#FA8B02] rounded-full flex justify-center items-center"><FaTwitter className="text-lg md:text-3xl" /></div>
                <div className="w-10 h-10 md:w-12.5 md:h-12.5 bg-[#FA8B02] rounded-full flex justify-center items-center"><FaFacebookF className="text-lg md:text-2xl" /></div>
                <div className="w-10 h-10 md:w-12.5 md:h-12.5 bg-[#FA8B02] rounded-full flex justify-center items-center"><FaInstagram className="text-lg md:text-3xl" /></div>
              </div>
          </div>
        </div>

        <div className="flex justify-center">
            <p className="text-xs/[26px] md:text-base/[26px] text-white font-normal">Copyright © 2022.  All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
