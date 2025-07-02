import React, { Suspense } from "react";
import { CarouselSpacing } from "./Carousel";
import { SkeletonCard } from "../ui/Loader";
import { getFeaturedCars } from "@/action/action";

export default async function Featured() {
  const res = await getFeaturedCars();
  const data = res;

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center gap-10 px-5 py-20 md:px-20">
      <div className="max-w-7xl  w-[95%] flex flex-col items-center ">
        <h1 className="text-center font-bold text-4xl  text-zinc-800 relative z-20">
          Featured Vehicles
        </h1>
        <span className="text-center mt-2 font-semibold text-xl  text-zinc-800 relative z-20">
          Check out our hand-picked selection of new arrivals and special
          offers.
        </span>

        <div className="mt-5 w-[98%] flex flex-col items-center ">
          <CarouselSpacing featured={data} />
        </div>
      </div>
    </div>
  );
}
