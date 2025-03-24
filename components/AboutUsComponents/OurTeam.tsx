import Image from "next/image";
import React from "react";

const OurTeam = () => {
  const theTeam = [
    {
      image: "/images/CEO-AltGreenery.svg",
      name: "Solomon Afoya",
      role: "Chief Executive Officer",
    },
    {
      image: "/images/coo-AltGreenery.svg",
      name: "Ajiboye Emmanuel",
      role: "Chief Operating Officer",
    },
    {
      image: "/images/CTO-AltGreenery.svg",
      name: "Ogbechie Laura",
      role: "Chief Technology Officer",
    },
    {
      image: "/images/CFO-AltGreenery.svg",
      name: "Nwanoneze Chinenye",
      role: "Chief Financial Officer",
    },
    {
      image: "/images/CMO-AltGreenery.svg",
      name: "Shotunde Toyin",
      role: "Chief Marketing Officer",
    },
  ];
  return (
    <div className="flex flex-col gap-32 px-[6.25rem] pt-[8.25rem] pb-[16.5rem] items-center">
      <div className="flex flex-col text-center items-center gap-16 max-w-[51.125rem]">
        <h2 className="font-fraunces text-primary-1000 text-[40px] font-black">
          Our Team
        </h2>
        <p className="text-neutral-1900 text-lg">
          At AltGreenery, we thrive on the dedication of a hardworking team,
          from farmers in the fields to logistics experts ensuring smooth
          operations. Here, we highlight the leadership driving our vision
          forward, but it’s the collective effort of everyone behind the scenes
          that makes our mission a reality.
        </p>
      </div>
      {/* -------- team members -------- */}
      <div className="grid grid-cols-4 gap-y-32 gap-x-8 items-center">
        {theTeam.map((member, index) => (
          <div key={index} className={`flex flex-col gap-8 items-center ${index === 0 ? 'col-span-4' : ''}`}>
            <div className="rounded-2xl">
                <Image unoptimized className="rounded-2xl" src={member.image} alt={member.name} width={292} height={384} />
            </div>
            <div className="text-center">
                <h3 className="text-neutral-1900 text-[24px] font-bold">{member.name}</h3>
                <p className="text-neutral-1400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
