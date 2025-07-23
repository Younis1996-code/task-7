import Image from 'next/image'
import React from 'react'
import offIma from "../../../assets/Home/offerima1.png"
import HomeTitle from '../HomeTitle'

const OfferSec = () => {
  return (
    <section className="flex justify-between bg-[url('/offerback.png')] bg-cover bg-center px-[13vw] mt-15 lg:mt-60 h-fit">
      <div className='flex flex-col gap-8 h-fit my-[3.125vw] p-7.5 rounded-3xl bg-[#FFFFFF4D] w-full lg:w-[40%]'>
        <HomeTitle value={"Get Special Offers for Organizations"} value1="text-center" />
        <p className='text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.9375vw]/[100%] font-normal text-[#000000] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <button className='font-semibold text-base/[100%] md:text-xl/[100%] text-white rounded-[50px] py-2.5 px-6 bg-[#FA8B02] w-fit mx-auto'>Contact Us</button>
      </div>
      <div className='hidden lg:block relative flex-1'>
        <Image src={offIma} alt="offer image" className=" lg:absolute bottom-0 right-0 object-contain h-full lg:h-[31.25vw]" />
      </div>
    </section>
  )
}

export default OfferSec
