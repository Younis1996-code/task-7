import Image from 'next/image'
import React from 'react'
import heroAbout from "@/assets/AboutUs/Abouthero.jpg"

const AboutHero = () => {
  return (
    <section className='w-screen h-[88vh] md:h-[79.1vh] px-5'>
      <div className='absolute top-0 left-0 w-screen h-full md:h-[calc(100vh-5.5555%)] bg-red-500 z-[-1]'>
        <div className='absolute top-0 left-0 w-full h-full bg-[#00000033] z-0'></div>
        <div className='relative w-full h-full z-[-1]'>
            <Image className='object-cover' src={heroAbout} alt='hero image' fill />
        </div>
      </div>

      <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-[6.5vw]/[100%] md:text-[3.75vw]/[100%] text-white font-normal text-center font-podcast'>Our team cares about your full relax</h1>
        <p className='text-[3.5vw]/[100%] md:text-[1.25vw]/[100%] text-white font-bold mt-6 mb-6 text-center w-[90%] md:w-[48%]'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
        <button className='font-semibold text-[3vw]/[100%] md:text-[1.0416vw]/[100%] text-white rounded-[50px] py-[1.5vw] px-[2.5vw] md:py-[0.72916vw] md:px-[1.25vw] border-[1.5px] border-white cursor-pointer'>View our Tour Packages</button>
      </div>
    </section>
  )
}

export default AboutHero
