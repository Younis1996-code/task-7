"use client"

import { useEffect, useState } from 'react'
import HomeTitle from '../HomeTitle';
import SliderButtons from '../HomeExplore.tsx/SliderButtons';
import DataSlider from '../HomeExplore.tsx/DataSlider';
import testiIma from "@/assets/Home/testimonials.png"
import { StaticImageData } from 'next/image';
import TestiSlider from './TestiSlider';

export interface TestimonialsData {
    id: number;
    img: StaticImageData;
    name: string;
    para: string;
}

const testimonialsData : TestimonialsData[] = [
    {
        id: 1,
        img: testiIma,
        name: "Lyod Gomez",
        para: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
    },
    {
        id: 2,
        img: testiIma,
        name: "Lyod Gomez",
        para: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
    },
    {
        id: 3,
        img: testiIma,
        name: "Lyod Gomez",
        para: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
    },
    {
        id: 4,
        img: testiIma,
        name: "Lyod Gomez",
        para: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
    },
]

const Testimonials = () => {
    const [currentItems, setCurrentItems] = useState(0);
        const [itemsNumber, setItemsNumber] = useState(2);
    
        useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth <= 767) {
                    setItemsNumber(1);
                } else if (window.innerWidth > 767) {
                    setItemsNumber(2);
                }
            };
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, [])

  return (
    <section className='px-[13vw] mt-15 md:mt-30'>
      <div className='flex justify-between items-center'>
        <HomeTitle value="Happy Customers Says" />
        <SliderButtons currentItems={currentItems} setCurrentItems={setCurrentItems} itemsNumber={itemsNumber} exploreData={testimonialsData} />
      </div>
      <DataSlider currentItems={currentItems} itemsNumber={itemsNumber}>
        {testimonialsData.map((data) => {return <TestiSlider key={data.id} data={data} />})}
      </DataSlider>
    </section>
  )
}

export default Testimonials
