"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Clock,
  Facebook,
  InstagramIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ContactInfoResponse {
  status: boolean;
  message: string;
  data: ContactInfo[];
  pagination: Pagination;
}

export interface ContactInfo {
  _id: string;
  address: string;
  email: string;
  openingHours: string;
  phoneNumbers: string[];
  __v: number;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

const Footer = () => {
  const { data, isLoading, isError, error } = useQuery<ContactInfoResponse>({
    queryKey: ["contact-info"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact-info`
      );
      return res.json();
    },
  });

  // ✅ Always return valid JSX or null — never void
  if (isLoading)
    return (
      <div className="bg-primary py-10 text-center text-white">
        Loading footer...
      </div>
    );

  if (isError)
    return (
      <div className="bg-primary py-10 text-center text-red-300">
        Failed to load footer: {error.message}
      </div>
    );

  return (
    <div className="bg-primary pt-6 md:pt-8 lg:pt-10 pb-4 md:pb-6 lg:pb-8">
      <div className="container">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-8 md:pb-10 lg:pb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link href="/">
              <Image
                src="/assets/images/footer-logo.png"
                alt="footer logo"
                width={243}
                height={90}
                className="h-[90px] w-[243px] object-cover"
              />
            </Link>
            <p className="text-sm md:text-[15px] font-normal text-white leading-[150%] py-3 md:py-4 lg:py-6">
              Providing exceptional dental care with a focus on comfort{" "}
              <br className="hidden md:block" /> and results for over{" "}
              {new Date().getFullYear() - 2015} years.
            </p>

            <div className="flex items-center gap-3">
              <Facebook className="w-8 h-8 text-white cursor-pointer" />
              <Twitter className="w-8 h-8 text-white cursor-pointer" />
              <InstagramIcon className="w-8 h-8 text-white cursor-pointer" />
              <FaTiktok className="w-8 h-8 text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-base md:text-lg lg:text-xl font-medium text-white">
              Quick Links
            </h3>
            <ul className="pt-3 md:pt-4 lg:pt-6 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm md:text-[15px] text-white hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="text-sm md:text-[15px] text-white hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-sm md:text-[15px] text-white hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm md:text-[15px] text-white hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-2">
            <h3 className="text-base md:text-lg lg:text-xl font-medium text-white">
              Contact Us
            </h3>
            <ul className="pt-3 md:pt-4 lg:pt-6 space-y-2">
              <li className="flex items-start gap-2 text-white text-sm md:text-[15px]">
                <MapPin className="w-5 h-5" />
                {data?.data[0]?.address ||
                  "44 Muckross Avenue, Perrystown, Dublin 12, D12VK49"}
              </li>

              <li className="flex flex-col gap-2 text-white text-sm md:text-[15px]">
                {data?.data[0]?.phoneNumbers.map((number, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      {number}
                    </div>
                  </div>
                )) || "083 011 0533"}
              </li>

              <li className="flex items-center gap-2 text-white text-sm md:text-[15px]">
                <Mail className="w-5 h-5" />
                {data?.data[0]?.email || "perrystownorthodontics@gmail.com"}
              </li>

              <li className="flex items-start gap-2 text-white text-sm md:text-[15px]">
                <Clock className="w-5 h-5" />
                Opening hours :{" "}
                {data?.data[0]?.openingHours ||
                  "Monday to Friday 10 AM – 6:30 PM"}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 border-t border-[#D9D9D980] pt-4 md:pt-6 lg:pt-8">
          <p className="text-sm md:text-[15px] font-normal text-white leading-[120%]">
            © {new Date().getFullYear()} Perrystown Orthodontics. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-3 md:gap-4">
            <Link href="/privacy-policy" className="text-white hover:underline">
              Privacy Policy
            </Link>
            <Link href="/gdpr" className="text-white hover:underline">
              GDPR
            </Link>
            <Link
              href="/terms-and-condition"
              className="text-white hover:underline"
            >
              Terms of Service
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
