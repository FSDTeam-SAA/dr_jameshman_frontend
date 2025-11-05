"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/utils/navLinks";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import MobileTreatmentsDropdown from "./MobileTreatmentsDropdown";

const MobileNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const closeSheet = () => setIsOpen(false);

  const pricingItems = [
    { label: "Fees", link: "/pricing" },
    {
      label: "Offers & Payment Plans",
      link: "/pricing/offers-and-payment-plans",
    },
  ];

  const aboutItems = [
    { label: "Why Us", link: "/about-us#why-us" },
    { label: "Meet The Team", link: "/about-us#meet-the-team" },
  ];

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-10 w-10" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={closeSheet}>
                <Image
                  src={"/assets/images/update-black-logo.png"}
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="h-[60px] w-[150px]"
                />
              </Link>
            </div>

            <nav className="flex-1">
              <ul className="space-y-4">
                {navLinks.map((item, index) => {
                  const isActive = item.link === pathname;

                  if (item.label === "Treatments") {
                    return (
                      <MobileTreatmentsDropdown
                        key={index}
                        closeSheet={closeSheet}
                      />
                    );
                  }

                  // Pricing dropdown
                  if (item.label === "Pricing") {
                    return (
                      <li key={index}>
                        <button
                          onClick={() => setShowPricing(!showPricing)}
                          className={`flex items-center justify-between w-full p-3 rounded-lg font-medium transition-all duration-300 ${
                            isActive
                              ? "bg-[#e7e7e7] text-primary"
                              : "hover:bg-[#f5f5f5]"
                          }`}
                        >
                          <span>{item.label}</span>
                          {showPricing ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>

                        {showPricing && (
                          <ul className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                            {pricingItems.map((subItem, idx) => (
                              <li key={idx}>
                                <Link
                                  href={subItem.link}
                                  onClick={closeSheet}
                                  className="block p-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }

                  // About Us dropdown
                  if (item.label === "About Us") {
                    return (
                      <li key={index}>
                        <button
                          onClick={() => setShowAbout(!showAbout)}
                          className={`flex items-center justify-between w-full p-3 rounded-lg font-medium transition-all duration-300 ${
                            isActive
                              ? "bg-[#e7e7e7] text-primary"
                              : "hover:bg-[#f5f5f5]"
                          }`}
                        >
                          <span>{item.label}</span>
                          {showAbout ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>

                        {showAbout && (
                          <ul className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                            {aboutItems.map((subItem, idx) => (
                              <li key={idx}>
                                <Link
                                  href={subItem.link}
                                  onClick={closeSheet}
                                  className="block p-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }

                  // Normal links
                  return (
                    <li key={index}>
                      <Link
                        href={item.link}
                        onClick={closeSheet}
                        className={`block p-3 rounded-lg font-medium transition-all duration-300 text-left ${
                          isActive
                            ? "bg-[#e7e7e7] text-primary"
                            : "hover:bg-[#f5f5f5]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
