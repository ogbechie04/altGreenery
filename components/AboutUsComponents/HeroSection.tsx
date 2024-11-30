import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-start relative h-[50.75rem] lg:h-[64rem]">
      <div className="bg-[url('/images/about-us-header-image.svg')] w-full h-full bg-cover bg-center absolute style={{ filter: 'blur(5px)' }}"></div>
      <div className="max-w-[56.375rem] px-5 lg:px-0 lg:pl-[6.25rem] relative flex flex-col gap-10">
        <div className="z-50 flex flex-col gap-4 lg:mt-[8.75rem] max-w-[38.0625rem]">
          <h1 className="font-fraunces text-neutral-100 text-[1.75rem] lg:text-[2.5rem] font-black lg:whitespace-nowrap">
            Who We Are?
            <div className="h-[2px] w-[395px] bg-[#F7C814]"></div>
          </h1>
          <p className="font-arimo text-primary-300 lg:text-xl">
            Established in the yer 2024, At AltGreenery, we know firsthand the
            challenges of growing quality produce in Nigeria and Africa at
            large. That&nbsp;s why, we continue to put in effort to find sustainable
            ways in overcoming these challenges, ensuring a steady supply of
            fresh vegetables every season. <br /><br />
            We&nbsp;re here not only to provide quality produce but also to ensure
            it&nbsp;s available year-round—addressing food security from the ground
            up. We believe that with the right practices, we can bridge the gap
            in sustainable, consistent farming and make a lasting impact on our
            communities.
          </p>
        </div>
        <div className="w-fit">
          <Button onClick={() => router.push("/contactUs")} text="Contact Us" className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
