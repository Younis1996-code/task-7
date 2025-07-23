"use client";

import { useState } from "react";
// import { CiClock2 } from 'react-icons/ci';
import { FaGlobeAmericas } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
// import { IoCarSportOutline } from 'react-icons/io5';
// import { LuCalendarDays, LuFlagTriangleRight } from 'react-icons/lu';
import HeroData from "./HeroData";

const HeroToggle = () => {
  const [tripChoose, setTripChoose] = useState("public");
  return (
    <div>
      <div className="flex">
        <div
          onClick={() => setTripChoose("public")}
          className={`flex gap-[0.520834vw] p-2 md:p-[1.2vw] lg:p-[0.8334vw] justify-center items-center rounded-tl-xl cursor-pointer ${
            tripChoose === "public" ? "bg-white" : "bg-[#FFFFFF66]"
          }`}
        >
          <FaGlobeAmericas
            className={`text-sm/[100%] md:text-[2vw] lg:text-[0.9375vw]/[100%] font-semibold ${
              tripChoose === "public" ? "text-[#FA8B02]" : "text-white"
            }`}
          />
          <p
            className={`text-sm/[100%] md:text-[2vw] lg:text-[0.9375vw]/[100%] font-semibold ${
              tripChoose === "public" ? "text-[#FA8B02]" : "text-white"
            }`}
          >
            Public Tours
          </p>
        </div>
        <div
          onClick={() => setTripChoose("private")}
          className={`flex gap-[0.520834vw] p-2 md:p-[1.2vw] lg:p-[0.8334vw] justify-center items-center rounded-tr-xl cursor-pointer ${
            tripChoose === "private" ? "bg-white" : "bg-[#FFFFFF66]"
          }`}
        >
          <IoIosPeople
            className={`text-sm/[100%] md:text-[2vw] lg:text-[0.9375vw]/[100%] font-semibold ${
              tripChoose === "private" ? "text-[#FA8B02]" : "text-white"
            }`}
          />
          <p
            className={`text-sm/[100%] md:text-[2vw] lg:text-[0.9375vw]/[100%] font-semibold ${
              tripChoose === "private" ? "text-[#FA8B02]" : "text-white"
            }`}
          >
            Private Tours
          </p>
        </div>
      </div>

      <HeroData tripChoose={tripChoose} />
    </div>
  );
};

export default HeroToggle;
