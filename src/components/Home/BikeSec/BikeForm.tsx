import React from 'react'
import { CiClock2 } from 'react-icons/ci';
import { LuCalendarDays } from 'react-icons/lu';

interface BikeData {
    id: string;
    label: string;
    name: string;
    type?: string;
    holder: string;
    seleOp?: (string | number)[];
}

const BikeForm = () => {

    const bikeData : BikeData[] = [
        {
            id: "name",
            label: "Name and Surname",
            name: "name",
            type: "text",
            holder: "Enter your name and surname",
        },
        {
            id: "email",
            label: "Email Address",
            name: "email",
            type: "email",
            holder: "Enter your email address",
        },
        {
            id: "phone",
            label: "Telephone Number",
            name: "phone",
            type: "text",
            holder: "Enter your telephone number",
        },
        {
            id: "service",
            label: "Service Type",
            name: "service",
            holder: "Select the service types",
            seleOp: ["Bike", "Bus", "Car"],
        },
        {
            id: "date",
            label: "Telephone Number",
            name: "phone",
            type: "text",
            holder: "Select the date",
        },
        {
            id: "time",
            label: "Time",
            name: "time",
            type: "text",
            holder: "Select the time",
        },
    ]

  return (
    <form className='rounded-3xl bg-white/30 p-5 md:p-7.5 w-full'>
     
            <div className='flex flex-col gap-4 md:flex-row md:justify-between md:gap-x-7.5 md:gap-y-7.5 md:flex-wrap'>
                {bikeData.map((laIn : BikeData) => (
                    <div key={laIn.id} className='flex flex-col gap-2 w-full md:w-[47%]'>
                        <label htmlFor={laIn.id} className='text-sm/[100%] md:text-lg/[100%] font-semibold'>{laIn.label}</label>
                        
                            {laIn.id === "service" ? (
                                <select name={laIn.name} id={laIn.id} className='text-xs/[100%] md:text-basmse/[100%] lg:text-base/[100%] font-normal text-[#333333]/50 w-full py-3 md:py-3.5 px-2 md:px-6 bg-white rounded-lg cursor-pointer focus:outline-none'>
                                    <option value={laIn.holder} className='text-xs/[100%] md:text-base/[100%] font-normal text-[#333333]/50'>{laIn.holder}</option>
                                    {laIn.seleOp?.map((op, index) => (
                                        <option key={index} value={op} className='text-[#333333] text-lg font-bold text-center'>{op}</option>
                                    ))}
                                </select>
                            ) : (
                                <div className='relative'>
                                    <input id={laIn.id} name={laIn.name} type={laIn.type} placeholder={laIn.holder} className='text-xs/[100%] md:text-basmse/[100%] lg:text-base/[100%] font-normal text-[#333333]/50 w-full py-3 md:py-3.5 px-2 md:px-6 bg-white rounded-lg focus:outline-none' />
                                    {laIn.id === "date" ? (
                                        <button className='absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer'><LuCalendarDays className='text-base/[100%] font-normal text-[#333333]/50' /></button>
                                    ) : laIn.id === "time" && (
                                        <button className='absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer'><CiClock2 className='text-base/[100%] font-normal text-[#333333]/50' /></button>
                                    )}
                                </div>
                            )}
                        
                    </div>
                ))}
            </div>
      <div className='w-full mt-7.5 flex justify-center'>
        <button className='font-semibold text-xl/[100%] text-white rounded-[50px] py-2.5 px-6 bg-[#FA8B02] w-fit cursor-pointer'>Book Now</button>
      </div>
    </form>
  )
}

export default BikeForm
