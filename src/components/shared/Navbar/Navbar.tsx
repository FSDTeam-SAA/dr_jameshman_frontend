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

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        pathname === "/" && isAtTop ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={"/assets/images/logo.png"}
              alt="logo.png"
              width={1000}
              height={1000}
              className="h-[72px] w-[125px]"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2 text-primary">
              {navLinks.map((item, index) => {
                const isActive = item.link === pathname;
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className={`
                        p-2 px-4 text-white text-base transition-all duration-500 ease-in-out
                         
                        ${isActive ? " font-medium underline" : "font-normal"}
                        ${
                          pathname === "/" && isAtTop && !isActive
                            ? "text-white"
                            : "text-white"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile menu button */}
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

