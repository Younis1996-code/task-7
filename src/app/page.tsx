import Hero from "@/components/Hero/Hero";
import AfterOff from "@/components/Home/AfterOff/AfterOff";
import BikeSec from "@/components/Home/BikeSec/BikeSec";
import HomeExplore from "@/components/Home/HomeExplore.tsx/HomeExplore";
import OfferSec from "@/components/Home/OfferSec/OfferSec";
import Packages from "@/components/Home/Packages/Packages";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import WelcomeCom from "@/components/Home/WelcomeCom/WelcomeCom";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-screen">
      <Hero />
      <div className="px-[13vw] mt-10 lg:mt-31">
          <HomeExplore />
          <WelcomeCom />
      </div>
          <OfferSec />

          <AfterOff />
          <BikeSec />
          <Packages />
          <Testimonials />
    </div>
  );
}
