import React from 'react'
import BikeForm from './BikeForm'
import Image from 'next/image'
import bikeIma from "@/assets/Home/bike picture.png"
import HomeTitle from '../HomeTitle'

const BikeSec = () => {
  return (
    <section className="flex justify-between bg-[url('/offerback.png')] bg-cover bg-center px-[13vw] mt-16 h-fit">
      
        <div className='flex flex-col gap-5 md:gap-9 h-fit my-[3.125vw] w-full xl:w-[60%] 2xl:w-[50%]'>
            <HomeTitle value="Book Now Bike" value1="text-center" />
            <BikeForm />
        </div>
        <div className='hidden xl:block relative flex-1'>
            <Image src={bikeIma} alt="bike image" className="xl:absolute bottom-[-5%] right-0 object-contain h-full xl:h-[83.6419%]" />
        </div>
      
    </section>
  )
}

export default BikeSec
