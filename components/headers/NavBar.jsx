"use client";
import {
  IconHeart,
  IconUser,
  IconUserBitcoin,
  IconUserCancel,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { User2 } from "lucide-react";
import SideNave from "./Sidenav";
import UserBar from "./UserBar";
import { usePathname } from "next/navigation";
import { LoggedInUser } from "../currentUser";
const NavLinks = [
  {
    name: "New Vehicles",
    href: "/new-vehicles",
  },
  {
    name: "Used Vehicles",
    href: "/used-vehicles",
  },
  {
    name: "Finance",
    href: "/finance",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
const UserLinks = [
  {
    name: "Profile",
    href: "/profile",
  },
  {
    name: "Saved",
    href: "/save-vehicles",
    icon: <IconHeart size={25} />,
  },

  {
    name: "Reservation",
    href: "/reserv",
    icon: <User2 size={25} />,
  },
];
const NavBar = () => {
  const currentPath = usePathname();
  const AdminDasboard = currentPath.startsWith("/admin");
  console.log("currentPath", currentPath);
  const user = LoggedInUser();
  console.log("user", user);

  return (
    <div className="w-full bg-white  shadow-md">
      {!AdminDasboard ? (
        <div className="flex justify-around items-center py-4 px-4 md:px-10 md:py-5">
          {/* <Link href={"/"} className="flex items-center">
            <img
              src="/car-dealer-logo-for-bryanauto.jpeg"
              alt="logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold ml-2">BryanAuto</span>
          </Link> */}

          <Link
            href={"/"}
            className="mx-5 text-2xl font-bold hover:text-neutral-300 transition-all ease-in-out  "
          >
            <img
              src="/car-dealer-logo-for-bryanauto.jpeg"
              alt="logo"
              className="w-full h-20  object-cover"
            />
          </Link>

          <div className="hidden md:flex items-center gap-x-3">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-600 hover:text-zinc-800 px-3 py-2 rounded-md text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <UserBar user={user} Links={UserLinks} />
            ) : (
              <Link
                className="bg-[#0A1931] text-white px-4 py-2 mx-2 rounded-md"
                href="/sign-in"
              >
                Sign In
              </Link>
            )}
            {/* <UserBar Links={UserLinks} /> */}

            {/* <Link href="/signIn">
              <button className="bg-[#0A1931] text-white px-4 py-2 mx-2 rounded-md">
                Sign In
              </button>
            </Link> */}
          </div>

          <div className="flex flex-col md:hidden items-center gap-x-3">
            <UserBar Links={UserLinks} />
          </div>
          <div className="flex flex-col md:hidden items-center gap-x-3">
            <SideNave Links={NavLinks} />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center py-4 px-4 md:px-10 md:py-5">
          <Link href={"/"} className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/101989671?s=200&v=4"
              alt="logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold ml-2">BryanAuto</span>
          </Link>
          <div className="flex items-center gap-8">
            <UserBar Links={UserLinks} />
            <Link
              href="/sign-in"
              className="bg-[#0A1931] text-white px-4 py-2 mx-2 rounded-md"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
