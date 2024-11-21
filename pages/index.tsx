import FoodInsecurity from "@/components/LandingPageComponents/FoodInsecuritySection";
import Footer from "@/components/LandingPageComponents/Footer";
import HeroSection from "@/components/LandingPageComponents/HeroSection";
import NavBar from "@/components/LandingPageComponents/NavBar";
import OurProcesses from "@/components/LandingPageComponents/OurProcesses";
import WhatSetsUsApart from "@/components/LandingPageComponents/WhatSetsUsApart";
import WordsFromCEO from "@/components/LandingPageComponents/WordsFromCEO";

export default function Home() {
  return (
    <div className=" flex flex-col items-center relative">
      <div className="flex items-center justify-center w-full absolute z-10 mt-10 lg:mt-[3.5625rem]">
        <NavBar variant="dark" />
      </div>
      <HeroSection />
      <FoodInsecurity />
      <WhatSetsUsApart />
      <WordsFromCEO />
      <OurProcesses />
      <Footer />
    </div>
  );
}
