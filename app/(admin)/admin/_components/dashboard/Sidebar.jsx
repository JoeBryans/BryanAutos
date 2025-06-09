// "use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconCashBanknote } from "@tabler/icons-react";
import {
  AlignJustify,
  BanknoteXIcon,
  ChartBarStacked,
  HouseIcon,
  LayoutDashboard,
  LineChart,
  Settings,
  Users2Icon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
// import { useRouter } from "next/navigation";
const NavLink = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboard />,
  },
  {
    name: "Vehicles",
    href: "/admin/vehicles",
    icon: <HouseIcon />,
  },
  {
    name: "Sales",
    href: "/admin/sales",
    icon: <IconCashBanknote />,
  },
  {
    name: "Customers",
    href: "/admin/customer",
    icon: <Users2Icon />,
  },
  {
    name: "Leads",
    href: "/admin/leads",
    icon: <LineChart />,
  },
  {
    name: "Financing",
    href: "/admin/financing",
    icon: <BanknoteXIcon />,
  },
  {
    name: "Service",
    href: "/admin/service",
    icon: <Settings />,
  },
  {
    name: "Reports",
    href: "/admin/reports",
    icon: <ChartBarStacked />,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: <Settings />,
  },
];
const Sidebar = () => {
  //   const router = useRouter();

  return (
    <Sheet className="w-sm">
      <SheetTrigger asChild>
        <button
          className={
            "z-40 flex gap-1 text-white  font-bold bg-zinc-400 p-1.5 rounded-lg  absolute left-4 cursor-pointer top-6"
          }
        >
          <AlignJustify />
        </button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        {/* <SheetHeader>
          <SheetTitle className="text-2xl mt-10 mx-auto font-bold text-zinc-800">
            Filter Results
          </SheetTitle>
        </SheetHeader> */}
        <div className="flex flex-col items-start justify-start gap-5 px-5  py-24 sticky top-0 left-0 right-0">
          {NavLink.map((links, i) => (
            <Link
              key={i}
              href={links.href}
              className="flex  gap-5 text-zinc-600 text-lg hover:bg-zinc-200 py-1.5 rounded-lg px-2.5 hover:text-zinc-800 transition-all ease-in-out"
            >
              {links.icon}
              {links.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
