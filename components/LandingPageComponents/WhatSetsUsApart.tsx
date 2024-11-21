import Image from "next/image";
import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const WhatSetsUsApart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="flex flex-col justify-center px-5 lg:px-[6.25rem] pt-32 pb-52 bg-[#FAFAFA] w-full">
      <h3 className="font-fraunces text-primary-1000 text-[1.75rem] lg:text-[2.5rem] font-black whitespace-nowrap z-10 self-center">
        What Sets Us Apart
      </h3>
      {/* -------- community and sustainable agriculture -------- */}
      <div className="mt-32 flex flex-col lg:flex-row items-center justify-between gap-[8.0625rem]">
        {/* -------- images -------- */}
        <div className="relative self-start lg:self-auto">
          <div className="border-2 lg:border-[3px] border-solid border-primary-100 rounded-2xl lg:rounded-3xl p-[0.3125rem] lg:p-2">
            <Image
              className="rounded-3xl"
              src={"/images/comm-img-1.svg"}
              alt="community-image-1"
              width={isMobile ? 254 : 382}
              height={isMobile ? 254 : 382}
            />
          </div>
          <div className="border-2 lg:border-[3px] border-solid border-primary-100 rounded-2xl lg:rounded-3xl p-[0.3125rem] lg:p-2 w-fit absolute -right-1/4 top-1/2 bg-white">
            <Image
              className="rounded-3xl"
              src={"/images/comm-img-2.svg"}
              alt="community-image-2"
              width={isMobile ? 185 : 278}
              height={isMobile ? 185 : 278}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-600 font-fraunces text-2xl lg:text-[1.75rem] font-black">
            Community & Sustainable Agriculture
          </h3>
          <p className="font-arimo lg:text-lg leading-6 text-neutral-1900 max-w-[38rem]">
            Altgreenery is about more than just farming; it&apos;s about
            empowering communities and creating real opportunities. By expanding
            our farmlands, we&apos;re generating local jobs and helping to
            strengthen the economy, ensuring that people benefit directly from
            our growth.
            <br />
            <br />
            Our focus also extends to delivering top-quality vegetables that are
            fresh, safe, and nutritious. Every harvest is carefully packaged to
            retain quality, filling the gaps in Nigeria&apos;s food supply and
            offering locally grown produce all year round through sustainable
            practices.
          </p>
        </div>
      </div>
      {/* -------- reliable distribution -------- */}
      <div className="mt-32 flex flex-col gap-[8.3125rem] lg:flex-row-reverse items-center justify-between">
        {/* -------- images -------- */}
        <div className="relative self-end lg:self-auto">
          <div className="border-2 lg:border-[3px] border-solid border-primary-100 rounded-2xl lg:rounded-3xl p-[0.3125rem] lg:p-2">
            <Image
              className="rounded-3xl"
              src={"/images/distribution-img-1.svg"}
              alt="distribution-image-1"
              width={isMobile ? 254 : 382}
              height={isMobile ? 254 : 382}
            />
          </div>
          <div className="border-2 lg:border-[3px] border-solid border-primary-100 rounded-2xl lg:rounded-3xl p-[0.3125rem] lg:p-2 w-fit absolute -left-1/4 top-1/2 bg-white">
            <Image
              className="rounded-3xl"
              src={"/images/distribution-img-2.svg"}
              alt="distribution-image-2"
              width={isMobile ? 185 : 278}
              height={isMobile ? 185 : 278}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-primary-600 font-fraunces text-2xl lg:text-[1.75rem] font-black max-w-[38rem]">
            Reliable Distribution for Year-Round Freshness
          </h3>
          <p className="font-arimo lg:text-lg leading-6 text-neutral-1900 max-w-[38rem]">
          At Altgreenery, we know that delivering fresh produce on time is just as important as growing it well. That&apos;s why we focus on getting our vegetables to market quickly, all year round. By streamlining our logistics, we make sure the produce goes from farm to table while it&apos;s still fresh and nutritious.
            <br />
            <br />
            This reliable supply keeps stores stocked and customers happy, no matter the season. Our approach also aims to keep prices of our produce stable, even during off-seasons, making fresh vegetables more accessible and affordable for everyone. With Altgreenery, you can always count on a steady flow of farm-fresh goodness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatSetsUsApart;
