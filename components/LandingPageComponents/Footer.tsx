import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMapPin } from "react-icons/hi2";
import { TbMailFilled } from "react-icons/tb";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center px-[6.25rem] py-12 bg-primary-800 gap-8 w-full">
      {/* -------- upper half -------- */}
      <div className="flex justify-between">
        {/* -------- name, logo, address and email -------- */}
        <div className="flex flex-col gap-10">
          {/* -------- name and logo -------- */}
          <Link href={"/"} className="flex items-center gap-6">
            <Image
              src={"/icon/logomark.svg"}
              width={43.28}
              height={43.28}
              alt="altgreenery-logo"
            />
            <p className="font-fraunces text-2xl font-black text-primary-100 leading-9">
              Altgreenery
            </p>
          </Link>
          {/* -------- address and email -------- */}
          <div className="flex flex-col gap-6">
            {/* -------- address -------- */}
            <div className="flex items-center text-neutral-300 gap-4">
              <HiMapPin className="w-6 h-6" />
              <p className="font-arimo leading-6">
                2 Abon Afoya, Alogani Center, Nassarawa
              </p>
            </div>
            {/* -------- email -------- */}
            <Link href={""} className="flex items-center gap-4">
              <TbMailFilled className="w-6 h-6 text-neutral-300" />
              <p className="font-arimo leading-6 text-primary-300">
                altgreeneryafrica@gmail.com
              </p>
            </Link>
          </div>
        </div>
        {/* -------- socials and mailing list -------- */}
        <div className="flex flex-col items-end gap-[1.875rem]">
          {/* -------- connect with us and socials -------- */}
          <div className="flex flex-col gap-4">
            <p className="font-arimo text-right text-neutral-300 leading-5">
              Connect with us :
            </p>
            <div className="flex gap-[2.625rem] items-center justify-center">
              <Link href={""}>
                <ImFacebook2 size={24} color="#DEEFE6" />
              </Link>
              <Link href={""}>
                <FaSquareInstagram size={24} color="#DEEFE6" />
              </Link>
              <Link href={""}>
                <FaYoutube size={24} color="#DEEFE6" />
              </Link>
            </div>
          </div>
          {/* -------- mailing list -------- */}
          <div className="flex flex-col gap-[0.9375rem]">
            <p className="font-arimo text-right text-neutral-300 leading-5">
              Join our mailing list to keep up with updates from us:
            </p>
            <div className="flex gap-3 caret-teal-50">
              <input
                type="email"
                className="bg-[#B0E8CA1F] py-2 px-3 focus:outline-none placeholder:text-[#D1EBDD66] font-arimo text-[15px] rounded  w-full text-neutral-500"
                placeholder="Enter email address"
              />
              <button className="bg-[#FDF4D0B2] px-4 py-2 rounded-lg font-arimo text-neutral-2000">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* divider */}
      <hr className="border-[#A6A6A633]" />
      {/* -------- lower half -------- */}
      <div>
        <p className="font-arimo text-[0.9375rem] leading-5 text-neutral-300">
          Copyright &copy; 2024 AltGreenery. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
