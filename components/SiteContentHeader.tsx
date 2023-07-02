"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";
import Image from "next/image";
import { useSession } from "next-auth/react";
import LoginSignUpDialog from "./LoginSignupDialog";

const SiteContentHeader = () => {
  // User Session
  const { data: session, status } = useSession();

  // All the states are in this scope
  const [profileMenu, setProfileMenu] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  // All the lifecycle hooks in this scope
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dialogDiv = document.getElementById("profileMenuContainer");

      if (dialogDiv && !dialogDiv.contains(event.target as Node)) {
        setProfileMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // All the Interactive Methods are in this scope
  const openProfileMenu = (e: React.MouseEvent<HTMLButtonElement>): void => {
    //  Geth the menu opened for two different scenarios
    // TODO: 1- Get  the one for General Site. 2- The other one should  be for the user
    e.preventDefault();
    setProfileMenu((prevState) => !prevState);
  };

  return (
    <nav className="w-full flex justify-between items-center pt-3 px-6 md:px-10 md:border border-2 border-gray-200 h-20">
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
      {/* This is the Search Component that has been rendered  */}
      <SearchComponent />
      <div id="profileMenuContainer">
        <div className="hidden md:flex">
          {/* Based on the status of the authentication showing the skeleton for loading comps  */}
          {status === "loading" ? (
            <div className="animate-pulse flex space-x-2">
              <div className="rounded-full bg-slate-200 h-5 w-20"></div>
              <div className="h-5 w-5 bg-slate-200 rounded-full"></div>
              <div className="rounded-full bg-slate-200 h-5 w-10"></div>
            </div>
          ) : (
            <>
              <Link
                href="/"
                className="inline-block font_400_14  px-4 py-2 rounded-full hover:bg-gray-100"
              >
                {status === "authenticated"
                  ? "Switch to hosting"
                  : "Airbnb your home"}
                {/* Change this according the Site Auth */}
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
                onClick={(e) => openProfileMenu(e)}
              >
                <Image
                  alt="Bars"
                  src="/icons/Bars.svg"
                  width={16}
                  height={16}
                  className="rounded-full object-contain mr-2"
                />
                <div className="relative inline-block">
                  {status === "authenticated" ? (
                    <>
                      <Image
                        src={
                          session?.user?.image
                            ? session?.user?.image
                            : "/icons/Profile-Filled.svg"
                        }
                        alt={
                          session?.user?.name ? session?.user?.name : "Profile"
                        }
                        width={30}
                        height={30}
                        className="rounded-full object-contain"
                      />
                      <span className="absolute top-[-5px] right-[-5px] inline-flex items-center justify-center w-4 h-4 primary_bg_color text-white font_400_12 rounded-full  border-2 border-white">
                        5 {/* Set the notification number accordingly */}
                      </span>
                    </>
                  ) : (
                    <Image
                      alt="Profile"
                      src="/icons/Profile-Filled.svg"
                      width={30}
                      height={30}
                      className="rounded-full object-contain"
                    />
                  )}
                </div>
              </button>
            </>
          )}
          {profileMenu && status === "unauthenticated" && (
            <div className="absolute md:top-[68px] right-12 bg-white shadow-lg flex flex-col item-start rounded-lg w-[220px]">
              <ul className="space-y-2 py-2">
                <li
                  className="flex items-center justify-between hover:bg-gray-100 py-1 rounded cursor-pointer"
                  onClick={() => setDialogOpen(true)}
                >
                  <span className="pl-4">Log in</span>
                </li>
                <li
                  className="flex items-center justify-between hover:bg-gray-100 py-1 rounded cursor-pointer"
                  // onClick={() => handleItemClick("Item 2")}
                >
                  <span className="pl-4">Sign up</span>
                </li>
                <hr />
                <li
                  className="flex items-center justify-between hover:bg-gray-100 py-1 rounded cursor-pointer"
                  // onClick={() => handleItemClick("Item 3")}
                >
                  <span className="pl-4">Airbnb your home</span>
                </li>
                <li
                  className="flex items-center justify-between hover:bg-gray-100 py-1 rounded cursor-pointer"
                  // onClick={() => handleItemClick("Item 3")}
                >
                  <span className="pl-4">Help</span>
                </li>
              </ul>
            </div>
          )}

          {profileMenu && status === "authenticated" && (
            <div className="absolute md:top-[68px] right-12 bg-white shadow-lg flex flex-col item-start rounded-lg w-[220px]">
              <ul className="space-y-2 py-2">
                <li
                  className="flex items-center justify-between hover:bg-gray-100 py-1 rounded cursor-pointer"
                  // onClick={() => handleItemClick("Item 1")}
                >
                  <span className="pl-4">Messages</span>
                </li>
                <li
                  className="flex items-center justify-between hover:bg-gray-100 py-1 rounded cursor-pointer"
                  // onClick={() => handleItemClick("Item 2")}
                >
                  <span className="pl-4">Trips</span>
                </li>
                <li
                  className="flex items-center justify-between hover:bg-gray-100 py-1 rounded cursor-pointer"
                  // onClick={() => handleItemClick("Item 3")}
                >
                  <span className="pl-4">Wishlists</span>
                </li>
                <hr />
                <li
                  className="flex items-center justify-between hover:bg-gray-100 py-1 rounded cursor-pointer"
                  // onClick={() => handleItemClick("Item 3")}
                >
                  <span className="pl-4">Manage Listings</span>
                </li>
                <li
                  className="flex items-center justify-between hover:bg-gray-100 py-1 rounded cursor-pointer"
                  // onClick={() => handleItemClick("Item 3")}
                >
                  <span className="pl-4">Account</span>
                </li>
                <hr />
                <li
                  className="flex items-center justify-between hover:bg-gray-100 py-1 rounded cursor-pointer"
                  // onClick={() => handleItemClick("Item 3")}
                >
                  <span className="pl-4">Help</span>
                </li>
                <li
                  className="flex items-center justify-between hover:bg-gray-100 py-1 rounded cursor-pointer"
                  // onClick={() => handleItemClick("Item 3")}
                >
                  <span className="pl-4">Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* This is the Login SignUp Dialog box  */}
        {dialogOpen && (
          <LoginSignUpDialog openDialog={dialogOpen} setFlag={setDialogOpen} />
        )}
      </div>
    </nav>
  );
};

export default SiteContentHeader;
