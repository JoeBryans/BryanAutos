import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
// import { Cars } from "../home/Carousel";
import Image from "next/image";
import {
  IconArmchair2,
  IconAutomaticGearbox,
  IconRoad,
} from "@tabler/icons-react";
import { LucideFuel } from "lucide-react";
import Link from "next/link";
// const fetchDatas = async () => {
//   const res = await fetch("/api/vehicle/search");
//   const data = await res.json();
//   console.log("search", data);

//   return data;
// };
export default function FilterResults({ data }) {
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center px-5 py-10">
      <Items Cars={data} />
    </div>
  );
}

async function Items({ Cars }) {
  // const Car = await fetchDatas();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 space-y-10 items-center ">
      {Cars?.map((car, index) => (
        <Card key={index} className="h-[400px] ">
          <div className="p- group bg-white rounded-md shadow-md">
            <CardContent className="flex flex-col items-start justify-center px-4 py-6">
              <div className="h-36 w-full rounded-md">
                <Image
                  src={car?.image[0]}
                  alt="car"
                  height={500}
                  width={500}
                  className=" h-32 object-cover w-full rounded-md"
                />
              </div>
              <div className="mt-5">
                <div className="flex  text-zinc-700 items-center line-clamp-1 justify-start gap-2 overflow-hidden mt-3">
                  <span className="text-xl font-semibold ">{car.year}</span>
                  <span className="text-xl font-semibold ">{car.make}</span>
                  <span className="text-xl font-semibold line-clamp-1">
                    {car.model}
                  </span>
                </div>
                <span className="text-xl text-zinc-700 font-semibold">
                  ${car.price}
                </span>
                <div className="grid grid-cols-2 items-center justify-start gap-2 mt-2 text-zinc-700">
                  <span className="flex gap-1 items-center text-xl font-semibold space-x-2">
                    <IconRoad /> {car.mileage ? car.mileage + "m" : null}
                  </span>
                  <span className="flex gap-1 items-center text-xl font-semibold">
                    <IconAutomaticGearbox /> {car.transmission}
                  </span>
                  <span className="flex gap-1 items-center text-xl font-semibold">
                    <LucideFuel /> {car.fuelType}
                  </span>
                  <span className="flex gap-1 items-center text-xl font-semibold">
                    <IconArmchair2 /> {car.seats}
                  </span>
                </div>
              </div>
              <Link
                href={`vehicle/${car?.id}`}
                className="p-1.5 mt-4 w-full text-center rounded-lg cursor-pointer bg-[#0A1931] hover:bg-[#0A1931]/80 cusor-pointer text-white hover:text-white/80"
              >
                View Details
              </Link>
            </CardContent>
          </div>
        </Card>
      ))}{" "}
    </div>
  );
}
