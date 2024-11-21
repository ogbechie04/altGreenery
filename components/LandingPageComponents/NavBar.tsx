import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import Button from "../Button";
import { FiMenu } from "react-icons/fi";
import {
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface NavBarProps {
  variant: "light" | "dark";
}

const NavBar: React.FC<NavBarProps> = ({ variant = "dark" }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={`flex items-center w-full max-w-[20.9375rem] lg:max-w-[61.625rem] gap-6 justify-between ${
        variant === "light" ? "bg-primary-800" : "bg-[#FFFFFF33]"
      } px-5 py-1.5 lg:pr-14 lg:pl-[3.75rem] lg:pt-[0.8125rem] lg:pb-[0.9375rem] rounded-[6.25rem] ${
        variant === "light" ? "opacity-100" : ""
      }`}
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
        <Link href={""}>About Us</Link>
      </div>
      {/* -------- desktop nav button -------- */}
      <div className={`${isMobile ? "hidden" : "block"}`}>
        <Button text="Contact Us" />
      </div>
      {/* mobile menu */}
      <div className={`${isMobile ? "block" : "hidden"}`}>
        <IconButton
          aria-label="navbar-menu"
          id="menu-button"
          aria-controls={open ? "nav-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          aria-expanded={open ? "true" : undefined}
        >
          <FiMenu className="text-neutral-500" />
        </IconButton>
        <Menu
          open={open}
          onClose={handleClose}
          anchorEl={anchorEl}
          MenuListProps={{
            "aria-labelledby": "navbar-menu",
          }}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About Us</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
