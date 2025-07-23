import Image from 'next/image'
import React from 'react'
import heroImage from "../../assets/heroimage.jpg"
import HeroToggle from './HeroToggle';

const Hero = () => {
    
  return (
    <section className='w-screen h-[88vh] md:h-[79.1vh] px-5'>
      <div className='absolute top-0 left-0 w-screen h-full md:h-[calc(100vh-5.5555%)] bg-red-500 z-[-1]'>
        <div className='absolute top-0 left-0 w-full h-full bg-[#00000033] z-0'></div>
        <div className='relative w-full h-full z-[-1]'>
            <Image className='object-cover' src={heroImage} alt='hero image' fill />
        </div>
      </div>

      <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-[11vw]/[100%] md:text-[3.75vw]/[100%] text-white font-normal text-center font-podcast'>Enjoy in the best way!</h1>
        <h3 className='text-[4vw]/[100%] md:text-[1.5625vw]/[100%] text-white font-bold mt-[0.8334vw] mb-[3.125vw] text-center'>Enjoy our services for your trip anytime</h3>

        <div className='flex flex-col justify-center items-center p-2 md:p-[1.04167vw] bg-[#FFFFFF33] rounded-xl'>
            <HeroToggle />
        </div>
      </div>
    </section>
  )
}

export default Hero
