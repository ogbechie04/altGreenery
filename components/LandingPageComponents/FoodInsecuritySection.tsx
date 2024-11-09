import Image from "next/image";
import React from "react";

const FoodInsecurity = () => {
  return (
    <div className="flex flex-col relative items-center justify-center py-32 px-[12.8125rem]">
      <div className="absolute left-[80px] bottom-[160px]">
        <Image
          src={"/images/food-insecurity-2.svg"}
          alt="image-design"
          width={69}
          height={67}
        />
      </div>
      {/* -------- food insecutiy heading -------- */}
      <div className="flex relative">
        <div className="absolute -left-10 -top-10">
          <Image
            src={"/images/food-insecurity-1.svg"}
            alt="image-design"
            width={69}
            height={67}
          />
        </div>
        <h3 className="font-fraunces text-primary-1000 text-[2.5rem] font-black whitespace-nowrap z-10">
          Food Insecurity Crisis
        </h3>
      </div>
      {/* -------- global hunger -------- */}
      <div className="mt-16 flex items-center justify-between gap-[6.5625rem]">
        <div className="gap-4 flex flex-col">
          <h4 className="text-primary-600 font-fraunces text-[1.75rem] font-black">
            5.8 % Rise in Global Hunger
          </h4>
          <p className="font-arimo text-lg leading-6 text-neutral-1900 max-w-[38rem]">
            Globally, food security and quality has been deteriorating
            significantly. Reports suggests that around{" "}
            <span className="font-bold">828 million</span> people faced hunger
            in 2021, an increase of about 46 million from the previous year.
            Additionally, about 3.1 billion people could not afford a healthy
            diet in 2020 due to high food prices and income inequalities, which
            further impacted the availability and quality of nutritious food
          </p>
          <div className="bg-secondary-100 py-2.5 px-4 rounded-[2rem] w-fit">
            <p className="text-neutral-1100 text-lg leading-6 font-arimo">
              Food and Agriculture Organization (FAO)
            </p>
          </div>
        </div>
        <Image
          src={"/images/globe-image.svg"}
          alt="globe"
          width={376}
          height={474}
        />
      </div>
      {/* -------- food insecurity -------- */}
      <div className="mt-16 flex flex-row-reverse items-center justify-between gap-[8.125rem]">
        <div className="gap-4 flex flex-col">
          <h4 className="text-primary-600 font-fraunces text-[1.75rem] font-black">
            25 Million Face Food Insecurity
          </h4>
          <p className="font-arimo text-lg leading-6 text-neutral-1900 max-w-[38rem]">
            According to UNICEF, food insecurity in Nigeria has reached alarming
            levels. About <span className="font-bold">25 million</span> people
            are expected to struggle with hunger and malnutrition during the
            2023 lean season. Factors like reduced agricultural output and
            rising food prices make it harder for families to afford nutritious
            food. This crisis is particularly severe for children, with nearly 2
            million suffering from severe acute malnutrition each year.
          </p>
          <div className="bg-secondary-100 py-2.5 px-4 rounded-[2rem] w-fit">
            <p className="text-neutral-1100 text-lg leading-6 font-arimo">
              United Nations Children&apos;s Fund
            </p>
          </div>
        </div>
        <Image
          src={"/images/unicef-image.svg"}
          alt="globe"
          width={376}
          height={474}
        />
      </div>
    </div>
  );
};

export default FoodInsecurity;
