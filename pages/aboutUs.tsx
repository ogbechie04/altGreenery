import HeroSection from "@/components/AboutUsComponents/HeroSection";
import MissionVision from "@/components/AboutUsComponents/MissionVision";
import OurTeam from "@/components/AboutUsComponents/OurTeam";
import Footer from "@/components/LandingPageComponents/Footer";
import NavBar from "@/components/LandingPageComponents/NavBar";
import Head from "next/head";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - AltGreenery</title>
        <meta
          name="description"
          content="Sustainable agriculture for everyone"
        />
        <link rel="icon" href="/logomark.svg" />
      </Head>
      <div className=" flex flex-col items-center relative">
        <div className="flex items-center justify-center w-full absolute z-10 mt-10 lg:mt-[3.5625rem]">
          <NavBar variant="light" />
        </div>
        <HeroSection />
        <MissionVision />
        <OurTeam />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
