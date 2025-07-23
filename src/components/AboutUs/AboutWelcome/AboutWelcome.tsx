import HomeTitle from '@/components/Home/HomeTitle'
import Image from 'next/image'
import React from 'react'
import AboutWel from "@/assets/AboutUs/aboutwelcome.png"
import { WelcomeInfo } from '@/components/Home/WelcomeCom/WelcomeCom';

const welcomeInfo: WelcomeInfo[] = [
  {
    numb: "20+",
    para: "Years Experience",
  },
  {
    numb: "100+",
    para: "Happy Customer",
  },
  {
    numb: "15+",
    para: "Choice of Services",
  },
  {
    numb: "10+",
    para: "Professional Guides",
  },
];

const AboutWelcome = () => {
  return (
    <section className="w-full grid lg:grid-cols-2 gap-[3.6458vw] mt-15 md:mt-30 px-[13vw]">
      <div className="relative h-[200px] md:h-[26.875vw] w-full rounded-3xl overflow-hidden">
        <Image
          src={AboutWel}
          alt="WelcomeIma"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-3 md:gap-[1.6667vw]">
        <div className="flex flex-col gap-1.5">
        <p className="text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.8334vw]/[100%] font-semibold text-[#333333]/60">WELCOME TO OUR SITE!</p>
        <HomeTitle value="We Are The Center Of Lucca To Offer You The Best" />

        </div>
        <p className="text-[3.5vw]/[110%] md:text-[1.5vw]/[16px] lg:text-[0.9375vw]/[32px] font-normal">
          We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!
        </p>
        <div className="flex flex-wrap lg:flex-nowrap w-full xl:w-[68.4285%] justify-between gap-3">
          {welcomeInfo.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-1.5 w-[47%] ">
              <p className="text-[5.5vw]/[100%] md:text-[2.5vw]/[16px] lg:text-[1.6667vw]/[32px] font-bold text-[#FA8B02]">
                {item.numb}
              </p>
              <p className="text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.8334vw]/[100%] font-normal text-[#333333]/60 whitespace-normal">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutWelcome
