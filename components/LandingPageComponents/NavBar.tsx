import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import Button from "../Button";

interface NavBarProps {
  variant: "light" | "dark";
}

const NavBar: React.FC<NavBarProps> = ({ variant = "dark" }) => {
  return (
    <div
      className={`flex items-center w-full max-w-[61.625rem] gap-6 justify-between bg-primary-800 pr-14 pl-[3.75rem] pt-[0.8125rem] pb-[0.9375rem] rounded-[6.25rem] ${
        variant === "light" ? "opacity-100" : "opacity-80"
      }`}
    >
      {/* -------- logo and name -------- */}
      <Link href={"/"} className="flex items-center">
        <Image
          src={"/icon/logomark.svg"}
          width={60}
          height={60}
          alt="altgreenery-logo"
          className="p-1"
        />
        <p className="font-fraunces text-xs font-black text-primary-100 leading-[30px]">
          Altgreenery
        </p>
      </Link>
      {/* -------- nav links -------- */}
      <div className="font-arimo text-lg text-neutral-500 flex gap-5 whitespace-nowrap">
        <Link href={"/"}>Home</Link>
        <Link href={""}>About Us</Link>
      </div>
      {/* -------- nav button -------- */}
      <div>
        <Button text="Contact Us" />
      </div>
    </div>
  );
};

export default NavBar;
