"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCumber = () => {
  const path = usePathname();
  const pathName = path.split("/").filter((path) => path);
  console.log(pathName);

  return (
    <div className="w-full ">
      {path === "/" ? null : (
        <ul className="max-w-5xl  w mx-auto flex capitalize items-center text-lg font-semibold text-zinc-600 px-5 py-3 mt-5 gap-2 ">
          <li className="underline py-0.5 flex gap-1 items-center ">
            <Link href={"/"}>home</Link>
            <span>/</span>
          </li>

          {pathName.map((link, i) => {
            let href = `/${pathName.slice(0, i + 1).join("/")}`;
            // let itemsLink = link[0].toUpperCase() + link.slice(1,link.length)
            return (
              <li key={i}>
                <Link
                  href={href}
                  className={cn(
                    path === href
                      ? "text-blue-600 bg-blue-200 rounded-sm py-1 px-2 "
                      : "underline py-0.5"
                  )}
                >
                  {link}
                </Link>
                {pathName.length !== i + 1 ? (
                  <span className="mx-1">/</span>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BreadCumber;
