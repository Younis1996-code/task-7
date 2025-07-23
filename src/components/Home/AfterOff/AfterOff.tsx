import Image, { StaticImageData } from "next/image";
import aftIma1 from "../../../assets/Home/afteroff/afterof1.png"
import aftIma2 from "../../../assets/Home/afteroff/afterof2.jpg"
import aftIma3 from "../../../assets/Home/afteroff/afterof3.jpg"
import aftIma4 from "../../../assets/Home/afteroff/afterof4.png"

interface AfterOffData {
    id: number;
    image: StaticImageData;
    title: string;
    para: string;
}

const afterofData = [
    {
        id: 1,
        image: aftIma1,
        title: "Bike and rickshaw rental",
        para: "Book your quality vehicle quickly for an hour or all day!",
    },
    {
        id: 2,
        image: aftIma2,
        title: "Guided tour of the countryside",
        para: "Book your quality vehicle quickly for an hour or all day!",
    },
    {
        id: 3,
        image: aftIma3,
        title: "Taxi and NCC service",
        para: "Do you need not only a bike but also a driver? Then you have found the right place!",
    },
    {
        id: 4,
        image: aftIma4,
        title: "Bus Package",
        para: "Do you need not only a bike but also a driver? Then you have found the right place!",
    },
    
]

const AfterOff = () => {
  return (
    <section className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-8 px-[13vw] mt-15 md:mt-30">
      {afterofData.map((item) => (
        <div key={item.id} className="flex flex-col gap-3 md:gap-5 w-full md:w-[47%] lg:w-[25%]">
          <div className="relative w-full h-[40vw] md:h-[20vw] lg:h-[15.729167vw] rounded-3xl overflow-hidden">
            <Image src={item.image} alt={item.title} fill />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[4.5vw]/[100%] md:text-[2vw]/[100%] lg:text-[1.25vw]/[100%] font-bold">{item.title}</h3>
            <p className="text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.9375vw]/[26px] font-normal">{item.para}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default AfterOff
