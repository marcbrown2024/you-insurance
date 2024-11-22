"use client";

// react/nextjs components
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const currentPathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [showMenu]);
  
  return (
    <div
      className={`fixed top-0 left-0 w-screen flex-col lg:hidden items-center justify-center ${
        showMenu ? "h-fit overflow-hidden" : "h-24"
      } z-[1000]`}
    >
      <div className="h-24 w-screen flex items-center justify-between bg-white py-4 pr-8 shadow-lg z-[1000]">
        <Image src="/logobox.png" alt="logo" height={80} width={80} />
        <button type="button" onClick={toggleMenu}>
          <svg
            className="w-8 h-8 hover:scale-95"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className={`h-screen w-full ${
          showMenu ? "translate-y-0" : "translate-y-[-150%]"
        } bg-[#d22a30] transition-all duration-500 ease-in-out z-[999] overflow-clip`}
      >
        <div className="flex-1 w-full text-3xl text-white font-poppins font-medium tracking-wide">
          <div className="h-full flex flex-col items-start justify-start gap-8 p-10 md:p-6">
            <Link
              href="/"
              onClick={() => setShowMenu(!showMenu)}
              className={`${
                currentPathname === "/"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
              onClick={() => setShowMenu(!showMenu)}
              className={`${
                currentPathname === "/about"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              About
            </Link>
            <Link
              href="/autoInsurance"
              onClick={() => setShowMenu(!showMenu)}
              className={`${
                currentPathname === "/home"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              Auto Insurance
            </Link>
            <Link
              href="/homeInsurance"
              onClick={() => setShowMenu(!showMenu)}
              className={`${
                currentPathname === "/life"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              Home Insurance
            </Link>
            <Link
              href="/lifeInsurance"
              onClick={() => setShowMenu(!showMenu)}
              className={`${
                currentPathname === "/services"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              Life Insurance
            </Link>
            <Link
              href="/ourServices"
              onClick={() => setShowMenu(!showMenu)}
              className={`${
                currentPathname === "/life"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              Services
            </Link>
            <Link
              href="/contactUs"
              onClick={() => setShowMenu(!showMenu)}
              className={`${
                currentPathname === "/services"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              Contact Us
            </Link>
            <Link
              href="/blog"
              onClick={() => setShowMenu(!showMenu)}
              className={`${
                currentPathname === "/services"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              Blog
            </Link>
          </div>
        </div>
        <Image
          src="/insuranceContract.png"
          alt="logo"
          height={500}
          width={500}
          className="hidden md:flex mx-auto opacity-50"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;