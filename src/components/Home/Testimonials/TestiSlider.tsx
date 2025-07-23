import React from 'react'
import { TestimonialsData } from './Testimonials'
import Image from 'next/image'

const TestiSlider = ({data} : {data: TestimonialsData}) => {
  return (
    <div className=' flex flex-col gap-4 md:gap-6 pt-5 lg:p-7.5'>
      <div className='w-[72.8vw] md:w-[35vw] lg:w-[31vw] 2xl:w-[33vw] flex flex-col items-center justify-center gap-4'>
        <div className='relative w-20 h-20 rounded-full overflow-hidden'>
        <Image src={data.img} alt={data.name} fill />
      </div>
      <h5 className='text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.9375vw]/[100%] font-normal'>{data.name}</h5>
      </div>
      <p className='text-[3.5vw]/[110%] md:text-[1.5vw]/[110%] lg:text-[0.9375vw]/[30px] font-normal md:p-5'>{data.para}</p>
    </div>
  )
}

export default TestiSlider
