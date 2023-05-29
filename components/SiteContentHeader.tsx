"use client";

import Link from "next/link";
import { useRouter } from "next//navigation";
import { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";
import Image from "next/image";

const SiteContentHeader = () => {
  const [langRegionToggle, setLangRegionToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center pt-3 px-6 md:px-10 md:border border-2 border-gray-200">
      <Image
        priority
        width={32}
        height={32}
        src="/icons/AirbnbLogo.svg"
        alt="Airbnb_Logo"
        className="hidden md:block lg:hidden"
      />
      <Image
        priority
        width={100}
        height={80}
        src="/icons/AirbnbWideLogo.svg"
        alt="Airbnb_Logo"
        className="hidden lg:block"
      />
      <SearchComponent />
      <div className="hidden md:flex">
        <Link
          href="/"
          className="inline-block font_400_14  px-4 py-2 rounded-full hover:bg-gray-100"
        >
          Switch to hosting
        </Link>
        <button type="button" onClick={() => {}}>
          <Image
            alt="Lang_Region"
            src="/icons/Globe.svg"
            width={32}
            height={32}
            className="hover:bg-gray-100 px-2 py-2 rounded-full cursor-pointer object-contain"
          />
        </button>
        <button
          className="rounded-full border border-1 hover:shadow flex cursor-pointer px-2 items-center"
          onClick={() => {}}
        >
          <Image
            alt="Bars"
            src="/icons/Bars.svg"
            width={16}
            height={16}
            className="rounded-full object-contain mr-2"
          />
          <div className="relative inline-block">
            <Image
              alt="Profile"
              src="/icons/Profile-Filled.svg"
              width={30}
              height={30}
              className="rounded-full object-contain"
            />
            <span className="absolute top-[-5px] right-[-5px] inline-flex items-center justify-center w-4 h-4 primary_bg_color text-white font_400_12 rounded-full border border-2 border-white">
              5 {/* Set the notification number accordingly */}
            </span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default SiteContentHeader;
