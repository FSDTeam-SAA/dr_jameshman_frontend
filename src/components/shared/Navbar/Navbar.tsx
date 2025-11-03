"use client";

import { navLinks } from "@/utils/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { NavbarSkeleton } from "@/components/ui/navbar-skeleton";

export interface TreatmentCategory {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalCategories: number;
  itemsPerPage: number;
}

export interface TreatmentCategoryResponse {
  status: boolean;
  mnessage: string; // Note: typo in your API key; ideally should be `message`
  data: TreatmentCategory[];
  pagination: Pagination;
}


const Navbar = () => {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);

  const {data, isLoading, isError, error} = useQuery<TreatmentCategoryResponse>({
    queryKey: ["treatments-categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/treatmentCategories`);
      return res.json();
    },
  })

console.log(data?.data)
  // Get treatment categories from API
  const treatmentCategories = data?.data?.map((cat) => ({
    label: cat?.name,
    link: `/treatments/${cat?._id}`
  })) || [];


  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY <= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc =
    pathname === "/" && isAtTop
      ? "/assets/images/logo.png"
      : "/assets/images/black-logo.png";

  // Dropdown items
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

  // ✅ Adjust padding dynamically
  const containerPadding =
    pathname === "/" && isAtTop ? "py-2" : "py-0";

    
  if (isLoading) return <NavbarSkeleton/>
  if (isError) return <div className="bg-white py-10 text-black text-center leading-[120%] font-medium">Error: {error?.message}</div>;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        pathname === "/" && isAtTop ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className={`container transition-all duration-500 ${containerPadding}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={logoSrc}
              alt="logo"
              width={1000}
              height={1000}
              className="h-[72px] w-[125px] transition-all duration-500"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2 text-primary">
              {navLinks.map((item, index) => {
                const isActive = item.link === pathname;
                const textColor =
                  pathname === "/" && isAtTop && !isActive
                    ? "text-white"
                    : "text-black";

                // Treatments dropdown
                if (item?.label === "Treatments") {
                  return (
                    <li key={index} className="relative">
                      <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                          <button
                            className={`flex items-center gap-1 p-2 px-4 text-base transition-all duration-500 ease-in-out ${textColor}`}
                          >
                            {item.label}
                            <ChevronDown className="w-4 h-4 mt-[2px]" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mt-2 w-48 bg-white shadow-lg border rounded-lg">
                          {treatmentCategories?.map((item, idx) => (
                            <DropdownMenuItem key={idx} asChild>
                              <Link
                                href={item?.link}
                                className="block w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer"
                              >
                                {item?.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                  );
                }
                // Pricing dropdown
                if (item.label === "Pricing") {
                  return (
                    <li key={index} className="relative">
                      <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                          <button
                            className={`flex items-center gap-1 p-2 px-4 text-base transition-all duration-500 ease-in-out ${textColor}`}
                          >
                            {item.label}
                            <ChevronDown className="w-4 h-4 mt-[2px]" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mt-2 w-48 bg-white shadow-lg border rounded-lg">
                          {pricingItems.map((priceItem, idx) => (
                            <DropdownMenuItem key={idx} asChild>
                              <Link
                                href={priceItem.link}
                                className="block w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer"
                              >
                                {priceItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                  );
                }

                // About Us dropdown
                if (item.label === "About Us") {
                  return (
                    <li key={index} className="relative">
                      <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                          <button
                            className={`flex items-center gap-1 p-2 px-4 text-base transition-all duration-500 ease-in-out ${textColor}`}
                          >
                            {item.label}
                            <ChevronDown className="w-4 h-4 mt-[2px]" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mt-2 w-48 bg-white shadow-lg border rounded-lg">
                          {aboutItems.map((aboutItem, idx) => (
                            <DropdownMenuItem key={idx} asChild>
                              <Link
                                href={aboutItem.link}
                                className="block w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer"
                              >
                                {aboutItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                  );
                }

                // Normal links
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className={`p-2 px-4 text-base transition-all duration-500 ease-in-out ${textColor} ${
                        isActive ? "font-semibold underline" : "font-normal"
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



