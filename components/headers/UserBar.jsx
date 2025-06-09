"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User, User2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function UserBar({ Links, user }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="h-10 w-10 rounded-full shadow-sm space-x-1 text-zinc-600 cursor-pointer ">
          {user ? (
            <Image
              src={user?.image}
              alt="profile"
              width={300}
              height={300}
              className="object-cover w-full"
            />
          ) : (
            <User2 />
          )}{" "}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-6">
        {/* <DropdownMenuSeparator /> */}
        <div className="flex flex-col gap-5 items-start px-5 py-4">
          {Links.map((link, i) => (
            <Link
              href={link.href}
              className="tex-zinc-600 hover:text-zinc-800 transition-all ease-in-out "
            >
              {link.name}
            </Link>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
