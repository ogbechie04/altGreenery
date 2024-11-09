import Button from "@/components/Button";
import FoodInsecurity from "@/components/LandingPageComponents/FoodInsecuritySection";
import HeroSection from "@/components/LandingPageComponents/HeroSection";
import NavBar from "@/components/LandingPageComponents/NavBar";
import WhatSetsUsApart from "@/components/LandingPageComponents/WhatSetsUsApart";
import WordsFromCEO from "@/components/LandingPageComponents/WordsFromCEO";

export default function Home() {
  return (
    <div className="h-screen">
        <Button text="Contact us" />
        <NavBar variant="light" />
        <HeroSection />
        <FoodInsecurity />
        <WhatSetsUsApart />
        <WordsFromCEO />
    </div>
  );
}
