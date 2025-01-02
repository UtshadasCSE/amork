"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

import { GoHomeFill } from "react-icons/go";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiMessageFill } from "react-icons/ri";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <GoHomeFill className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: (
        <HiMiniUserGroup className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <RiMessageFill className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Header;
