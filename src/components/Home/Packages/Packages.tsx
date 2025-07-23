import React from 'react'
import imag1 from "@/assets/Home/packages/package1.png"
import imag2 from "@/assets/Home/packages/package2.png"
import imag3 from "@/assets/Home/packages/package3.png"
import imag4 from "@/assets/Home/packages/package4.png"
import { CiCalendarDate } from 'react-icons/ci'
import { TfiHeadphoneAlt, TfiMapAlt } from 'react-icons/tfi'
import { RiCoupon2Line } from 'react-icons/ri'
import { BiSolidDiscount } from 'react-icons/bi'
import { GiBeerBottle, GiHillConquest } from 'react-icons/gi'
import { IoBusOutline, IoLocationOutline, IoPeopleSharp, IoPerson } from 'react-icons/io5'
import { FaHandHoldingDollar, FaPersonDotsFromLine } from 'react-icons/fa6'
import Image, { StaticImageData } from 'next/image'
import HomeTitle from '../HomeTitle'

interface PackagesData {
    id: number,
    img: StaticImageData,
    title: string,
    price: string,
    desc: {
        id: number,
        icon: React.ReactElement,
        para: string
    }[]
}

const Packages = () => {
    const packagesData : PackagesData[] = [
        {
            id: 1,
            img: imag1,
            title: "BIKE / RICKSHAW",
            price: "10",
            desc: [
                {
                    id: 1,
                    icon: <CiCalendarDate className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Your bike for a day"
                },
                {
                    id: 2,
                    icon: <TfiMapAlt className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "City App"
                },
                {
                    id: 3,
                    icon: <BiSolidDiscount className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Discount on Rickshaw"
                },
                {
                    id: 4,
                    icon: <TfiHeadphoneAlt className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Guaranteed Support"
                },
            ]
        },
        {
            id: 2,
            img: imag2,
            title: "BIKE TOURS",
            price: "30",
            desc: [
                {
                    id: 1,
                    icon: <GiHillConquest className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "A Mountain Bike Included"
                },
                {
                    id: 2,
                    icon: <IoPerson className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "A Guide For You"
                },
                {
                    id: 3,
                    icon: <GiBeerBottle className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Bottle of water"
                },
                {
                    id: 4,
                    icon: <TfiHeadphoneAlt className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Guaranteed Support"
                },
            ]
        },
        {
            id: 3,
            img: imag3,
            title: "BIKE / RICKSHAW",
            price: "45",
            desc: [
                {
                    id: 1,
                    icon: <RiCoupon2Line className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Park ticket"
                },
                {
                    id: 2,
                    icon: <IoBusOutline className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Return bus"
                },
                {
                    id: 3,
                    icon: <IoPeopleSharp className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Companion"
                },
                {
                    id: 4,
                    icon: <TfiHeadphoneAlt className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Guaranteed Support"
                },
            ]
        },
        {
            id: 4,
            img: imag4,
            title: "TRANSFER",
            price: "10",
            desc: [
                {
                    id: 1,
                    icon: <FaPersonDotsFromLine className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Personal Driver"
                },
                {
                    id: 2,
                    icon: <IoLocationOutline className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Wherever You Want"
                },
                {
                    id: 3,
                    icon: <FaHandHoldingDollar className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "At the best price"
                },
                {
                    id: 4,
                    icon: <TfiHeadphoneAlt className='font-normal text-lg/[100%] text-[#FA8B02]' />,
                    para: "Guaranteed Support"
                },
            ]
        },
        
    ]
  return (
    <section className="px-[13vw] mt-30">
        <HomeTitle value="The Most Popular Packages" />
      <div className='flex flex-col md:flex-row flex-wrap xl:flex-nowrap justify-between gap-5 mt-15'>
            {packagesData.map((item : PackagesData) => (
                <div key={item.id} className='flex flex-col border border-[#EFEFEF] rounded-[3.25vw] md:rounded-[2.25vw] lg:rounded-[1.25vw] overflow-hidden w-full md:w-[47%] xl:w-[25%]'>
                    <div className='relative w-full h-[40vw] md:h-[25vw] lg:h-[17.70834vw]'>
                        <Image src={item.img} alt={item.title} fill />
                    </div>
                    <div className='flex flex-col gap-4 p-6'>
                        <h3 className='text-[4vw]/[100%] md:text-[2vw]/[100%] lg:text-[1.04167vw]/[100%] font-extrabold'>{item.title}</h3>
                        <p className='text-[6.5vw]/[100%] md:text-[3.5vw]/[100%] lg:text-[2.5vw]/[100%] font-bold text-[#fa8b02] flex gap-1.5 items-start'><span className='text-[4vw]/[100%] md:text-[2vw]/[100%] lg:text-[1.04167vw]/[100%] font-normal text-[#333333]/50'>€</span>{item.price} <span className='text-[4vw]/[100%] md:text-[2vw]/[100%] lg:text-[1.04167vw]/[100%] font-normal text-[#333333]/50 mt-auto'>/day</span></p>
                        <div className='flex flex-col gap-3 md:gap-8'>
                            {item.desc.map((fea) => (
                            <div key={fea.id} className='flex gap-2 md:gap-4 items-center'>
                                {fea.icon}
                                <p className='text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.9375vw]/[100%] font-normal'>{fea.para}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                        <button className='text-[4vw]/[100%] md:text-[2vw]/[100%] lg:text-[1.04167vw]/[100%] font-semibold text-[#FA8B02] border border-[#FA8B02] px-6 py-3 rounded-[50px] mt-auto mx-6 mb-6 h-fit cursor-pointer'>Book Now</button>
                </div>
            ))}
      </div>
    </section>
  )
}

export default Packages
