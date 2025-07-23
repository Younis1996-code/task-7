import Image from "next/image"
import { ExploreData } from "./HomeExplore"
import { LuCalendarDays } from "react-icons/lu"
import { IoIosPeople } from "react-icons/io"

const SliderCard = ({data} : {data: ExploreData}) => {
  return (
    <div className="flex flex-col ">
      <div className="relative h-[35vw] md:h-[27.5vw] lg:h-[21.04167vw] w-[72.8vw] md:w-[35.8vw] lg:w-[17.1875vw] rounded-3xl overflow-hidden">
        <Image src={data.img} alt={data.title} fill />
      </div>
      <div className="flex flex-col gap-3 mt-2 md:mt-4">
        <h3 className="text-[4.5vw]/[100%] md:text-[2vw]/[100%] lg:text-[1.25vw]/[100%] font-bold">{data.title}</h3>
        <div className="flex gap-1.5 md:gap-2.5 items-center">
          <p className="text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.9375vw]/[100%] font-semibold text-[#333333]/80">{data.from}</p>
          <p className="text-[4.5vw]/[100%] md:text-[2vw]/[100%] lg:text-[1.25vw]/[100%] font-extrabold text-[#FA8B02]">{data.price}</p>
        </div>
        <div className="flex gap-2.5 justify-between items-center">
          <p className="text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.8334vw]/[100%] font-semibold text-[#FA8B02] flex gap-1.5 items-center"><LuCalendarDays className='text-base/[100%] font-semibold text-[#FA8B02]' /> {data.date}</p>
          <p className="text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.8334vw]/[100%] font-semibold text-[#FA8B02] flex gap-1.5 items-center"><IoIosPeople className='text-base/[100%] font-semibold text-[#FA8B02]' /> {data.ppl}</p>
        </div>

        <p className="text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.9375vw]/[100%] font-normal">{data.para}</p>

      </div>
    </div>
  )
}

export default SliderCard
