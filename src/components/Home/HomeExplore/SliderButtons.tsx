"use client";

import React from 'react'
import { ExploreData } from './HomeExplore';
import { TestimonialsData } from '../Testimonials/Testimonials';

interface Props {
  currentItems: number;
  setCurrentItems: React.Dispatch<React.SetStateAction<number>>;
  itemsNumber: number;
  exploreData: ExploreData[] | TestimonialsData[];
}

const SliderButtons = ({currentItems, setCurrentItems, itemsNumber, exploreData} : Props) => {
  const handleNext = () => {
    if (currentItems < exploreData.length - itemsNumber) {
      setCurrentItems(currentItems + 1);
    }
  }

  const handlePrev = () => {
    if (currentItems > 0) {
      setCurrentItems(currentItems - 1);
    }
  }


  return (
    <div className='flex gap-2 md:gap-[1.04167vw]'>
      <button disabled={currentItems === 0} onClick={handlePrev} className='text-lg/[100%] md:text-[2.5vw]/[100%] lg:text-[1.5625vw]/[100%] w-6.5 h-6.5 md:w-[4vw] md:h-[4vw] lg:w-[2.604167vw] lg:h-[2.604167vw] rounded-full text-white font-medium bg-[#FA8B02] disabled:bg-[#EFEFEF] disabled:text-[#333333]/60 cursor-pointer'>&lt;</button>
      <button disabled={currentItems === exploreData.length - itemsNumber} onClick={handleNext} className='text-lg/[100%] md:text-[2.5vw]/[100%] lg:text-[1.5625vw]/[100%] w-6.5 h-6.5 md:w-[4vw] md:h-[4vw] lg:w-[2.604167vw] lg:h-[2.604167vw] rounded-full text-white font-medium bg-[#FA8B02] disabled:bg-[#EFEFEF] disabled:text-[#333333]/60 cursor-pointer'>&gt;</button>
    </div>
  )
}

export default SliderButtons
