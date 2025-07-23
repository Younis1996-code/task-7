import React from 'react'
import { CiClock2 } from 'react-icons/ci'
import { FaSearch } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { IoCarSportOutline } from 'react-icons/io5'
import { LuCalendarDays, LuFlagTriangleRight } from 'react-icons/lu'

export interface TourData {
id:number,
icon: any,
title: string,
selectDe: string,
selectOp: (string | number)[], 
}

const HeroData = ({ tripChoose} : {tripChoose: string}) => {
     const publicData : TourData[]=[
        {
            id:1,
            icon: <IoIosPeople className='md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]' />,
            title:'Number of people',
            selectDe:'Choose number',
            selectOp: [1,2,3,4,5,6,7,8,9,10],
        },
        {
            id:2,
            icon: <LuCalendarDays className='md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]' />,
            title:'Date',
            selectDe:'Choose Date',
            selectOp: ["4/12/2025", "5/12/2025", "6/12/2025"],
        },
        {
            id:3,
            icon: <CiClock2 className='md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]' />,
            title:'Time',
            selectDe:'Choose Time',
            selectOp: [8,9,10,11,12,1,2,3,4],
        },
        {
            id:4,
            icon: <LuFlagTriangleRight className='md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]' />,
            title:'Tour',
            selectDe:'Select Tour',
            selectOp: ["Syria", "Damascus", "UAE"],
        },
        {
            id:5,
            icon: <IoCarSportOutline className='md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]' />,
            title:'Transportation',
            selectDe:'Select Transportation',
            selectOp: ["car", "bus", "train"],
        },
     
    ]
    
    const privateData : TourData[]=[
        {
            id:1,
            icon: <IoIosPeople className='md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]' />,
            title:'Number of people',
            selectDe:'Choose number',
            selectOp: [1,2,3,4,5,6,7,8,9,10],
        },
        {
            id:2,
            icon: <LuCalendarDays className='md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]' />,
            title:'Date',
            selectDe:'Choose Date',
            selectOp: ["4/12/2025", "5/12/2025", "6/12/2025"],
        },
        {
            id:3,
            icon: <CiClock2 className='md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]' />,
            title:'Time',
            selectDe:'Choose Time',
            selectOp: [8,9,10,11,12,1,2,3,4],
        },
        {
            id:4,
            icon: <LuFlagTriangleRight className='md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]' />,
            title:'Tour',
            selectDe:'Select Tour',
            selectOp: ["Syria", "Damascus", "UAE"],
        },
        {
            id:5,
            icon: <IoCarSportOutline className='md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]' />,
            title:'Transportation',
            selectDe:'Select Transportation',
            selectOp: ["car", "bus", "train"],
        },
     
    ]
    return (
    <div className=''>
      {tripChoose === "public" ? (
        <div className='flex flex-wrap w-fit gap-1 md:gap-3 p-2 md:p-3 rounded-xl rounded-tl-none bg-white'>
        {publicData.map((data) => (
          <div key={data.id} className="flex gap-1.75 p-1 md:p-[0.8334vw] flex-1 sm:flex-0">
            {data.icon} 
           <div className='flex flex-col gap-1.5'>
             <p className="text-xs/[100%] md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]">{data.title}</p>
             <select name="people" id="people" className='text-xs/[100%] md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-normal text-[#333333]/60 md:pr-5 focus:outline-none cursor-pointer text-center'>
               <option  value={data.selectDe}>{data.selectDe}</option>
               {data.selectOp.map((option, index) => (
                 <option className="text-sm/[100%] md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]" key={index} value={option}>{option}</option>
               ))}
             </select>
           </div>
          </div>
        ))}

        <div className='flex-1 sm:flex-0'>
          <button className='w-10 h-10 md:w-[7.5vw] md:h-[7.5vw] lg:w-[4.16667vw] lg:h-[4.16667vw] flex justify-center items-center rounded-xl bg-[#FA8B02] cursor-pointer'>
            <FaSearch className='text-lg/[100%] md:text-[3vw] lg:text-[1.5625vw]/[100%] text-white' />
        </button>
        </div>
        </div>
      ) : (
        <div className='flex flex-wrap w-fit gap-1 md:gap-3 p-2 md:p-3 rounded-xl rounded-tl-none bg-white'>
        {privateData.map((data) => (
          <div key={data.id} className="flex gap-1.75 p-1 md:p-[0.8334vw] flex-1 sm:flex-0">
            {data.icon} 
           <div className='flex flex-col gap-1.5'>
             <p className="text-xs/[100%] md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]">{data.title}</p>
             <select name="people" id="people" className='text-xs/[100%] md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-normal text-[#333333]/60 md:pr-5 focus:outline-none cursor-pointer text-center'>
               <option  value={data.selectDe}>{data.selectDe}</option>
               {data.selectOp.map((option, index) => (
                 <option className="text-sm/[100%] md:text-[2vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]" key={index} value={option}>{option}</option>
               ))}
             </select>
           </div>
          </div>
        ))}

        <div className='flex-1 sm:flex-0'>
          <button className='w-10 h-10 md:w-[7.5vw] md:h-[7.5vw] lg:w-[4.16667vw] lg:h-[4.16667vw] flex justify-center items-center rounded-xl bg-[#FA8B02] cursor-pointer'>
            <FaSearch className='text-lg/[100%] md:text-[3vw] lg:text-[1.5625vw]/[100%] text-white' />
        </button>
        </div>
        </div>
      )}
    </div>
  )
}

export default HeroData
