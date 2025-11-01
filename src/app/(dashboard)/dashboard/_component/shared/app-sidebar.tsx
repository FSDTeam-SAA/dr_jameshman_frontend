"use client";
import {
  BookCheck,
  BookText,
  DollarSign,
  FileImage,
  List,
  MessageSquareText,
  NotebookPen,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Booking",
    url: "/dashboard",
    icon: BookText,
  },
  {
    title: "Contact",
    url: "/dashboard/contact",
    icon: MessageSquareText,
  },
  {
    title: "Treatment Category",
    url: "/dashboard/treatment-category",
    icon: BookCheck,
  },
  {
    title: "Treatment List",
    url: "/dashboard/treatment-list",
    icon: List,
  },
  {
    title: "Price List",
    url: "/dashboard/price-list",
    icon: DollarSign,
  },
  {
    title: "Gallery Management",
    url: "/dashboard/gallery-management",
    icon: FileImage,
  },
  {
    title: "FAQ",
    url: "/dashboard/faq",
    icon: NotebookPen,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathName = usePathname();

  return (
    <Sidebar className="border-none">
      <SidebarContent className="bg-white shadow-2xl">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="mt-5 mb-5 h-[80px]">
            <Link href={`/`}>
              <Image
                src={`/assets/images/dashboard-logo.png`}
                alt="logo.png"
                width={1000}
                height={1000}
                className="h-[200px] w-[218px] object-cover"
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive =
                  item.url === "/dashboard"
                    ? pathName === "/dashboard"
                    : pathName === item.url ||
                      pathName.startsWith(`${item.url}/`);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className={`h-[60px] rounded-none text-[20px] hover:bg-primary hover:text-white transition-all duration-300 pl-5 ${
                        isActive && "bg-primary text-white font-medium"
                      }`}
                      asChild
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
