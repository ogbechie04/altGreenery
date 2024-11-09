import React from "react";
import Button from "../Button";

const HeroSection = () => {
  return (
    <div className="w-full flex items-center justify-start relative h-full max-h-[64rem]">
      <div className="bg-[url('/images/hero-image.svg')] w-full h-full bg-cover bg-center absolute  style={{ filter: 'blur(5px)' }}"></div>
      <div className="w-full h-full  bg-[rgba(2,2,2,0.8)] absolute"></div>
      <div className="max-w-[56.375rem] pl-[6.25rem] relative flex flex-col gap-5">
        <div className="z-50 flex flex-col gap-4">
          <h1 className="font-fraunces text-neutral-100 text-[2.5rem] font-black whitespace-nowrap">
            Fresh, Locally Farmed,
            <br /> Agricultural Produce All Year Round
          </h1>
          <p className="font-arimo text-primary-300 text-xl">
            With an unwavering commitment to high-quality vegetables and
            sustainable farming practices, we ensure fresh produce is available
            for you all year round.
          </p>
        </div>
        <div className="w-fit">
          <Button text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
