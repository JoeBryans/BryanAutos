import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
// import { Cars } from "../home/Carousel";
import Image from "next/image";
import { IconAutomaticGearbox } from "@tabler/icons-react";
import { Clock12Icon, LucideFuel, User2Icon } from "lucide-react";
import Link from "next/link";
import CurrencyFormater from "../CurrencyFormater";
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
    <div className="w-full  mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
      {Cars?.map((car, index) => (
        <Card key={index} className="h-max w-[280px] group relative mx-auto">
          <CardContent className="flex flex-col items-start justify-center px-2 ">
            <div className="h-44  w-full rounded-md">
              <Image
                src={car?.image[0]}
                alt="car"
                height={500}
                width={500}
                priority
                className="h-44 object-cover w-full rounded-md"
              />
            </div>
            <Link
              href={`vehicle/${car.year}-${car.make}-${car.model}-${car.id}`}
              className="flex flex-col text-zinc-700 items-start justify-start gap-1 mt-3 hover:underline"
            >
              <span className="text-lg font-medium">{car.make}</span>
              <div className="flex text-zinc-700 items-center justify-start gap-1  hover:underline">
                <span className="text-lg font-medium">{car.year}</span>
                <span className="text-lg font-medium line-clamp-1">
                  {car.model}
                </span>
              </div>
            </Link>
            <span className="text-xl text-orange-500 font-semibold">
              <CurrencyFormater price={car.price} />
            </span>
            <div className="grid grid-cols-2 items-center capitalize justify-start gap-2 mt-2 text-zinc-700">
              <span className="flex gap-1 items-center text-sm font-semibold space-x-2">
                <Clock12Icon />
                {car?.mileage === 0
                  ? "0" + "mile"
                  : car?.mileage + " " + "mile"}
              </span>
              <span className="flex gap-1 items-center text-sm font-semibold">
                <IconAutomaticGearbox /> {car.transmission}
              </span>
              <span className="flex gap-1 items-center text-sm font-semibold">
                <LucideFuel /> {car.fuelType}
              </span>
              <span className="flex gap-1 items-center text-sm font-semibold">
                <User2Icon /> {car.seats}
              </span>
            </div>
            {/* <Button className="mt-4 w-full cursor-pointer bg-[#0A1931] hover:bg-[#0A1931]/80 cusor-pointer">
                                 View Details
                               </Button> */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
