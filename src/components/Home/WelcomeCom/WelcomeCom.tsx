import Image from "next/image";
import WelcomeIma from "../../../assets/Home/about picture.png";
import HomeTitle from "../HomeTitle";

export interface WelcomeInfo {
  numb: string;
  para: string;
}

const welcomeInfo: WelcomeInfo[] = [
  {
    numb: "20+",
    para: "Years Experience",
  },
  {
    numb: "100+",
    para: "Happy Customer",
  },
  {
    numb: "15+",
    para: "Choice of Services",
  },
  {
    numb: "10+",
    para: "Professional Guides",
  },
];

const WelcomeCom = () => {
  return (
    <section className="w-full grid md:grid-cols-2 gap-2 mt-15 md:mt-30">
      <div className="hidden md:block h-full w-full xl:w-[64.2857%] mx-auto overflow-visible">
        <Image
          src={WelcomeIma}
          alt="WelcomeIma"
          
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-3 md:gap-[1.6667vw]">
        <div className="flex flex-col gap-1.5">
        <p className="text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.8334vw]/[100%] font-semibold text-[#333333]/60">WELCOME TO OUR SITE!</p>
        <HomeTitle value="We are the best company for your visit" />

        </div>
        <p className="text-[3.5vw]/[110%] md:text-[1.5vw]/[16px] lg:text-[0.9375vw]/[32px] font-normal">
          After decades of experience, and a whole life in Lucca, we offer you
          the most complete tourism service in the city. In addition to having
          bikes and rickshaws to have as much fun as you want, you have the
          choice of tour guides with whom to tour and drivers for your every
          need! We offer packages in the way that you get the most at the lowest
          price. Book with us and we will always be available for you!
        </p>
        <div className="flex flex-wrap lg:flex-nowrap w-full xl:w-[68.4285%] justify-between gap-3">
          {welcomeInfo.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-1.5 w-[47%] ">
              <p className="text-[5.5vw]/[100%] md:text-[2.5vw]/[16px] lg:text-[1.6667vw]/[32px] font-bold text-[#FA8B02]">
                {item.numb}
              </p>
              <p className="text-[3.5vw]/[100%] md:text-[1.5vw]/[100%] lg:text-[0.8334vw]/[100%] font-normal text-[#333333]/60 whitespace-normal">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeCom;
