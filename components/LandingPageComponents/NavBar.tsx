import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import Button from "../Button";
import { FiMenu } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { Close } from "@mui/icons-material";

interface NavBarProps {
  variant: "light" | "dark";
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ variant, className }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={`flex items-center w-full max-w-[20.9375rem] lg:max-w-[61.625rem] gap-6 justify-between ${
        variant === "light" ? "bg-primary-800" : "bg-[#FFFFFF33]"
      } px-5 py-1.5 lg:pr-14 lg:pl-[3.75rem] lg:pt-[0.8125rem] lg:pb-[0.9375rem] rounded-[6.25rem] ${
        variant === "light" ? "opacity-100" : ""
      } ${className}`}
    >
      {/* -------- logo and name -------- */}
      <Link href={"/"} className="flex items-center">
        <Image
          src={"/icon/logomark.svg"}
          width={isMobile ? 35 : 60}
          height={isMobile ? 35 : 60}
          alt="altgreenery-logo"
          className="p-1"
        />
        <p className="font-fraunces text-xs font-black text-primary-100 leading-[30px]">
          Altgreenery
        </p>
      </Link>
      {/* -------- desktop nav links -------- */}
      <div
        className={`font-arimo text-lg text-neutral-500 flex gap-5 whitespace-nowrap ${
          isMobile ? "hidden" : "block"
        }`}
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/aboutUs"}>About Us</Link>
      </div>
      {/* -------- desktop nav button -------- */}
      <div className={`${isMobile ? "hidden" : "block"}`}>
        <Button onClick={() => router.push("/contactUs")} text="Contact Us" />
      </div>
      {/* -------- mobile dialogue -------- */}
      <div className={`${isMobile ? "block" : "hidden"}`}>
        <IconButton
          aria-label="navbar-menu"
          id="menu-button"
          aria-controls={open ? "nav-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClickOpen}
          aria-expanded={open ? "true" : undefined}
        >
          <FiMenu className="text-neutral-500" />
        </IconButton>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          aria-labelledby="navbar-menu"
        >
          <DialogContent
            sx={{
              width: "100%",
              backgroundColor: "#333333",
              paddingX: "40px",
              paddingTop: "87px",
            }}
          >
            <div className="flex flex-col gap-36">
              {/* -------- name, logo and close button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src={"/icon/logomark.svg"}
                    width={40}
                    height={40}
                    alt="altgreenery-logo"
                    className="p-1"
                  />
                  <p className="font-fraunces text-xs font-black text-primary-100 leading-[30px]">
                    Altgreenery
                  </p>
                </div>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{ color: "#C6C6C6" }}
                >
                  <Close />
                </IconButton>
              </div>
              {/* -------- nav links and buttons -------- */}
              <div
                className={`font-arimo text-lg text-primary-300 flex flex-col items-center gap-5 whitespace-nowrap`}
              >
                <Link href={"/"}>Home</Link>
                <Link href={"/aboutUs"}>About Us</Link>
                {/* -------- desktop nav button -------- */}
                <div className={`mt-5 w-full`}>
                  <Button
                    onClick={() => router.push("/contactUs")}
                    text="Contact Us"
                    className="text-black w-full"
                  />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default NavBar;
