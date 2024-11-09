import Image from "next/image";
import React from "react";

const WordsFromCEO = () => {
  return (
    <div className="bg-[url('/images/ceo-background.svg')] flex items-center justify-center px-[6.25rem] pt-32 pb-[16.6875rem]">
      <div
        className="py-[6.09375rem] px-[13.25rem] flex flex-col gap-20 items-center justify-center text-center rounded-[2rem]"
        style={{
          background:
            "linear-gradient(207deg, #2CA870 16.74%, #11422C 126.51%)",
        }}
      >
        <p className="text-[2.5rem] font-fraunces font-bold text-neutral-500">
          Words from our CEO
        </p>
        <p className="font-arimo text-2xl text-white leading-7">
          &quot;As humans, food is a necessity. But what happens when
          communities struggle to access the nourishment they need? This lack of
          access can drive up prices, as we rely on imports or longer distance
          transportation. <br />
          <br /> At AltGreenery, we understand the importance of reliable,
          affordable food for families and businesses alike. That&apos;s why
          we&apos;re committed to sustainable farming practices that ensure both
          quality and availability. We envision a future where every community,
          in Nigeria and beyond, has access to the food they need. We&apos;re
          not just building a business; we&apos;re building a sustainable food
          source for all.&quot;
        </p>
        <div className="flex items-center justify-center gap-8">
          <Image
            src={"/images/ceo-portrait.svg"}
            width={64}
            height={64}
            alt=""
          />
          <div className="flex flex-col items-start font-arimo">
            <p className="text-white text-xl font-bold leading-7">Solomon Afoya</p>
            <p className="text-lg text-neutral-500">Founder & CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordsFromCEO;
