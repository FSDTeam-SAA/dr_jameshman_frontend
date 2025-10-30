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

const Navbar = () => {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY <= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc =
    pathname === "/" && isAtTop
      ? "/assets/images/logo.png"
      : "/assets/images/black-logo.png";

  // ✅ Dropdown items
  const pricingItems = [
    { label: "Fees", link: "/pricing" },
    { label: "Offers & Payment Plans", link: "/pricing/offers-and-payment-plans" },
  ];

  const aboutItems = [
    { label: "Our Team", link: "/about-us/team" },
    { label: "Our Story", link: "/about-us/story" },
    { label: "Testimonials", link: "/about-us/testimonials" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        pathname === "/" && isAtTop ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="container py-2">
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

                // Pricing dropdown
                if (item.label === "Pricing") {
                  return (
                    <li key={index} className="relative">
                      <DropdownMenu>
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
                      <DropdownMenu>
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
                                className="block w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
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






// "use client";

// import { navLinks } from "@/utils/navLinks";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import MobileNavbar from "./MobileNavbar";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isAtTop, setIsAtTop] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsAtTop(window.scrollY <= 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Choose logo based on scroll position
//   const logoSrc =
//     pathname === "/" && isAtTop
//       ? "/assets/images/logo.png" 
//       : "/assets/images/black-logo.png";

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         pathname === "/" && isAtTop ? "bg-transparent" : "bg-white shadow-md"
//       }`}
//     >
//       <div className="container py-1">
//         <div className="flex items-center justify-between">
//           {/* ✅ Logo */}
//           <Link href={"/"}>
//             <Image
//               src={logoSrc}
//               alt="logo"
//               width={1000}
//               height={1000}
//               className="h-[72px] w-[125px] transition-all duration-500"
//             />
//           </Link>

//           {/* Desktop navigation */}
//           <div className="hidden md:block">
//             <ul className="flex items-center gap-2 text-primary">
//               {navLinks.map((item, index) => {
//                 const isActive = item.link === pathname;
//                 const textColor =
//                   pathname === "/" && isAtTop && !isActive
//                     ? "text-white"
//                     : "text-black";
//                 return (
//                   <li key={index}>
//                     <Link
//                       href={item.link}
//                       className={`p-2 px-4 text-base transition-all duration-500 ease-in-out ${textColor} ${
//                         isActive ? "font-semibold underline" : "font-normal"
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           {/* Mobile menu */}
//           <MobileNavbar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
