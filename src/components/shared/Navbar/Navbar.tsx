"use client";

import { navLinks } from "@/utils/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Choose logo based on scroll position
  const logoSrc =
    pathname === "/" && isAtTop
      ? "/assets/images/logo.png" 
      : "/assets/images/black-logo.png";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        pathname === "/" && isAtTop ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* ✅ Logo */}
          <Link href={"/"}>
            <Image
              src={logoSrc}
              alt="logo"
              width={1000}
              height={1000}
              className="h-[72px] w-[125px] transition-all duration-500"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2 text-primary">
              {navLinks.map((item, index) => {
                const isActive = item.link === pathname;
                const textColor =
                  pathname === "/" && isAtTop && !isActive
                    ? "text-white"
                    : "text-black";
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className={`p-2 px-4 text-base transition-all duration-500 ease-in-out ${textColor} ${
                        isActive ? "font-medium underline" : "font-normal"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile menu */}
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
