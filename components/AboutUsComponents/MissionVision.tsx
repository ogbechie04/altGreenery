import React from "react";

const MissionVision = () => {
  const missionVission = [
    {
      icon: "/icon/mission-icon.svg",
      title: "Our Mission",
      description:
        "To nourish communities by producing high-quality, locally grown vegetables year-round. We are dedicated to sustainable farming practices that support food security, create jobs, and empower healthier, more resilient communities across Nigeria and beyond. Through continuous innovation and responsible stewardship, we aim to make fresh, nutritious food accessible to everyone, every season",
    },
    {
      icon: "/icon/vision-icon.svg",
      title: "Our Vision",
      description:
        "To be recognized as leaders in championing sustainable agriculture in Nigeria and across Africa, establishing our presence in major cities and bridging the gap in food availability for our target markets. Through innovation and community empowerment, we aspire to transform the agricultural landscape and ensure food security for generations to come.",
    },
  ];

  return (
    <div className="bg-[url('/images/ceo-background.svg')] flex items-center justify-center px-5 lg:px-[6.25rem] pt-[4.1875rem] lg:pt-32 pb-[11.625rem] lg:pb-[16.6875rem]">
      <div className="py-[5.5rem] px-[13.1875rem] flex flex-col gap-[4.4375rem] bg-[#FAFAFA] rounded-[2rem]">
        {missionVission.map((item, index) => (
            <div
            key={index}
            className="px-[5.5rem] rounded-[2rem] py-16 flex flex-col gap-12 bg-primary-800 text-white items-center text-center relative"
            >
            <div className={`absolute bg-[url('/icon/logomark-grey.svg')] bg-cover w-[219px] h-[232px] bottom-0 ${index === 0 ? 'left-0' : 'right-0'}`}></div>
            <div className="flex gap-8 items-center">
              <img src={item.icon} alt={item.title} />
              <h2 className="text-[2rem] font-fraunces font-black">
                {item.title}
              </h2>
            </div>
            <p className="max-w-[40.125rem] text-xl ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;
