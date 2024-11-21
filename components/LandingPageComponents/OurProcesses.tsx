import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

const OurProcesses = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const processes = [
    {
      icon: "/icon/sustainable-farming.svg",
      title: "Sustainable Farming",
      description:
        "We use sustainable farming practices to grow high-quality vegetables all year round, maximizing yields while protecting the environment and ensuring continuous harvests",
    },
    {
      icon: "/icon/quality-harvesting.svg",
      title: "Quality Harvesting & Packaging ",
      description:
        "Each crop is carefully harvested at its peak freshness, and we maintain strict standards during the packaging process to preserve the quality and nutritional value of our produce",
    },
    {
      icon: "/icon/efficient-distribution.svg",
      title: "Efficient Distribution",
      description:
        "We make sure our produce get from the farm to the market quickly and efficiently, minimizing spoilage and keeping transportation costs low so that fresh produce is available all year",
    },
    {
      icon: "/icon/continuous-improvement.svg",
      title: "Continuous Improvement",
      description:
        "We are committed to continually improving our methods by monitoring and refining our farming, packaging, and distribution processes, ensuring that we always maintain the highest standards",
    },
  ];

  return (
    <div className="flex flex-col justify-center px-5 lg:px-[6.25rem] pt-16 pb-32 lg:pb-[16.5rem] gap-32 lg:gap-[12.5rem] w-full">
      <h3 className="font-fraunces text-primary-1000 text-[1.75rem] lg:text-[2.5rem] font-black whitespace-nowrap z-10 self-center">
        Our 4 Step Process
      </h3>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-center justify-center px-2">
        {processes.map((process, index) => (
          <div
            key={index}
            className="flex flex-col gap-8 items-center justify-center max-w-[18.25rem]"
          >
            <div className="p-[2.25rem] lg:p-[2.625rem] bg-[#BBEDD733] rounded-full items-center justify-center">
              <Image
                src={process.icon}
                alt={process.title}
                width={isMobile ? 87 : 102}
                height={isMobile ? 87 : 102}
              />
            </div>
            <div className="text-center flex flex-col gap-6 items-center">
              <p className="text-primary-800 text-xl lg:text-2xl font-fraunces font-black leading-9 lg:max-w-60">
                {process.title}
              </p>
              <p className="font-arimo text-neutral-1100 lg:text-lg leading-6">
                {process.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcesses;
