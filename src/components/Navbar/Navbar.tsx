"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import Link from "next/link";
// import NavbarLinks from "./NavbarLinks";
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

const NAV_LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Tour Packages",
    href: "/tour",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-screen h-25 md:h-[10vw] lg:h-[8.95834vw] py-5 px-5 md:py-3 md:px-10 lg:py-[1.04167vw] xl:px-[13vw] z-50 ${isScrolled ? "bg-gray-400 shadow-md" : "bg-[#FFFFFF33]"}`}>
      <div className="flex justify-between items-center">
        <div
          onClick={() => router.push("/")}
          className="relative w-15 h-15 md:w-[6.875vw] md:h-[6.875vw] cursor-pointer"
        >
          <Image
            src={logo}
            alt="logo"
            fill={true}
            className="object-cover"
            priority
          />
        </div>
        <div className="hidden flex-1 lg:flex justify-between items-center">
          <ul className="flex-1 flex justify-center gap-10 text-white font-semibold text-xl">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <li
                  key={link.name}
                  className={isActive ? "border-b-2 border-[#FA8B02]" : " "}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              );
            })}
          </ul>

          <div className="flex gap-2.5 justify-center items-center">
            <select
              name="lang"
              id="lang"
              className="text-white/80 font-semibold text-xl text-center focus:outline-none cursor-pointer"
            >
              <option value="en" className="text-black font-semibold text-xl">
                Eng
              </option>
              <option value="ar" className="text-black font-semibold text-xl">
                Ar
              </option>
              <option value="fr" className="text-black font-semibold text-xl">
                Fr
              </option>
            </select>
            <button
              onClick={() => setModalOpen("login")}
              className="py-2.5 px-3 text-white font-semibold text-xl cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => setModalOpen("signup")}
              className="py-2.5 px-6 bg-[#FA8B02] text-white rounded-[50px] font-semibold text-xl cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>

        <FaBarsStaggered
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl cursor-pointer lg:hidden"
        />

        {isOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-screen h-screen bg-gray-400 flex flex-col ">
            <div className="flex justify-between items-center">
              <div className="relative w-[80px] md:w-[133px] h-[80px] md:h-[130px] cursor-pointer mt-[5vh] ml-[5vw]">
                <Image
                  src={logo}
                  alt="logo"
                  fill={true}
                  className="object-cover"
                  priority
                />
              </div>

              <div
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-5xl cursor-pointer mt-[5vh] mr-[5vw] h-fit"
              >
                x
              </div>
            </div>

            <ul className=" flex flex-col justify-center items-center gap-5 p-5 text-white font-semibold text-xl mt-auto">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (pathname.startsWith(link.href) && link.href !== "/");
                return (
                  <li
                    onClick={() => setIsOpen(!isOpen)}
                    key={link.name}
                    className={
                      isActive ? "w-fit border-b-2 border-[#FA8B02]" : "w-fit"
                    }
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col gap-5 justify-center items-center mt-5 mb-auto">
              <select
                name="lang"
                id="lang"
                className="text-white/80 font-semibold text-xl text-center focus:outline-none cursor-pointer"
              >
                <option value="en" className="text-black font-semibold text-xl">
                  Eng
                </option>
                <option value="ar" className="text-black font-semibold text-xl">
                  Ar
                </option>
                <option value="fr" className="text-black font-semibold text-xl">
                  Fr
                </option>
              </select>
              <button
                onClick={() => {
                  setModalOpen("login"), setIsOpen(!isOpen);
                }}
                className="py-2.5 px-3 text-white font-semibold text-xl cursor-pointer"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setModalOpen("signup"), setIsOpen(!isOpen);
                }}
                className="py-2.5 px-6 bg-[#FA8B02] text-white rounded-[50px] font-semibold text-xl cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>

      {modalOpen !== "" && (
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </nav>
  );
};

export default Navbar;
