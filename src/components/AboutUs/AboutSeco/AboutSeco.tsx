import React from 'react'
import { FaHandHoldingDollar, FaMedal } from 'react-icons/fa6'
import { GoPersonAdd } from 'react-icons/go'
import { TbMapDiscount } from 'react-icons/tb'

interface AboutSecoData {
    id: number
    icon: React.ReactElement
    title: string
}

const AboutSeco = () => {

    const secoData : AboutSecoData[] = [
        {
            id: 1,
            icon: <TbMapDiscount className='text-[7vw]/[100%] md:text-[3.125vw]/[100%] text-[#FA8B02]' />,
            title: "Complete Packages For All Your Wishes",
        },
        {
            id: 2,
            icon: <FaMedal className='text-[7vw]/[100%] md:text-[3.125vw]/[100%] text-[#FA8B02]' />,
            title: "Over 30 Years Of Experience",
        },
        {
            id: 3,
            icon: <GoPersonAdd className='text-[7vw]/[100%] md:text-[3.125vw]/[100%] text-[#FA8B02]' />,
            title: "Expert Guides For You",
        },
        {
            id: 4,
            icon: <FaHandHoldingDollar className='text-[7vw]/[100%] md:text-[3.125vw]/[100%] text-[#FA8B02]' />,
            title: "Guaranteed fun at the best price!",
        },
    ]

  return (
    <section className="flex justify-between flex-wrap md:flex-nowrap gap-3 bg-[url('/offerback.png')] bg-cover bg-center px-[13vw] py-[4.16667vw] mt-15 lg:mt-30 h-fit">
      {secoData.map((item : AboutSecoData) => (
        <div key={item.id} className='flex flex-col items-center gap-2 md:gap-[0.8334vw] p-[5.3334vw] md:p-[1.5625vw] rounded-3xl bg-[#FFFFFF4D] w-[47%] md:w-[15.2604vw]'>
          {item.icon}
          <p className='text-[2vw]/[100%] md:text-[1.0416vw]/[100%] font-semibold text-[#000000] text-center flex-1 flex justify-center items-center'>{item.title}</p>
        </div>
      ))}
    </section>
  )
}

export default AboutSeco
