import Button from "@/components/Button";
import Footer from "@/components/LandingPageComponents/Footer";
import NavBar from "@/components/LandingPageComponents/NavBar";
import PhoneNumberInput from "@/components/PhoneInput";
import Head from "next/head";
import React from "react";

const contactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us - AltGreenery</title>
        <meta
          name="description"
          content="Sustainable agriculture for everyone"
        />
        <link rel="icon" href="/logomark.svg" />
      </Head>
      <div className="flex flex-col justify-center">
        {/* -------- navbar -------- */}
        <div className="w-full h-[8.25rem] lg:h-[27.125rem] relative flex items-start justify-center">
          <div className="bg-[url('/images/contact-us-pattern.png')] w-full h-full bg-cover bg-center absolute"></div>
          <div className="relative z-10 w-full flex justify-center mt-[3.5625rem] ">
            <NavBar variant={"light"} />
          </div>
        </div>

        {/* -------- get in touch with us and image -------- */}
        <div className="mx-5 lg:mx-[6.25rem]">
          {/* -------- contact us form -------- */}
          <div className="grid lg:grid-cols-2 gap-x-32 gap-y-20 lg:gap-y-10">
            {/* -------- contact us form -------- */}
            <div className="w-full flex flex-col gap-12 lg:gap-[4.125rem]">
              {/* -------- heading text -------- */}
              <div className="flex flex-col gap-6">
                <h1 className="font-fraunces text-[#161617] text-[1.75rem] lg:text-[2.5rem] font-black">
                  Get in touch with us
                </h1>
                <p className="font-arimo text-neutral-1000">
                  We&apos;d love to hear from you! For questions,
                  collaborations, investment opportunities, or orders, reach out
                  through the form below, and we&apos;ll respond promptly.
                </p>
              </div>
              {/* -------- actual form -------- */}
              <form
                action=""
                className="grid grid-cols-2 gap-x-6 gap-y-10 w-full"
              >
                {/* -------- first name -------- */}
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-solid border-[#DDDDDD] rounded-lg px-4 py-3 placeholder:text-neutral-900 focus:outline focus:outline-primary-900"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-solid border-[#DDDDDD] rounded-lg px-4 py-3 placeholder:text-neutral-900 focus:outline focus:outline-primary-900"
                />
                {/* -------- phone number -------- */}
                <div className="w-full col-span-2">
                  <PhoneNumberInput />
                </div>
                {/* -------- email address -------- */}
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="border border-solid border-[#DDDDDD] rounded-lg px-4 py-3 placeholder:text-neutral-900 focus:outline focus:outline-primary-900 col-span-2"
                />
                {/* -------- text area -------- */}
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your complaint, request or information"
                  className="border border-solid border-[#DDDDDD] rounded-lg px-4 py-3 placeholder:text-neutral-900 focus:outline focus:outline-primary-900 col-span-2 resize-none h-[10.875rem]"
                ></textarea>
              </form>
            </div>
            <div className="hidden lg:inline-block rounded-xl bg-[url('/images/contact-us-image.svg')] bg-cover bg-center w-full"></div>
            <div className="w-full lg:mt-10">
              <Button text={"Submit"} className="w-full" />
            </div>
          </div>
        </div>
        {/* -------- footer -------- */}
        <div className="mt-[10.5rem] lg:mt-[22.4375rem]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default contactUs;
