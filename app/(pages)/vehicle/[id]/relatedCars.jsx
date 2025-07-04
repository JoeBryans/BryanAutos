"use client";
import CurrencyFormater from "@/components/CurrencyFormater";
import { Card, CardContent } from "@/components/ui/card";
import { IconAutomaticGearbox, IconRoad } from "@tabler/icons-react";
import { LucideFuel, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const RelatedCars = ({ relatedCars }) => {
  const router = useRouter();

  const handleNavigate = (car) => {
    router.push(`/vehicle/${car.year}-${car.make}-${car.model}-${car.id}`);
  };
  return (
    <div className="w-full flex   flex-col items-center justify-center gap-10 my-14 mx-auto">
      <h1 className="text-center font-bold text-4xl  text-zinc-800 relative z-20">
        Related Cars
      </h1>
      <div className="w-full  mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
        {relatedCars.map((car, index) => (
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
              <div
                className="flex flex-col text-zinc-700 cursor-pointer items-start justify-start gap-1 mt-3 hover:underline"
                onClick={() => handleNavigate(car)}
              >
                <span className="text-lg font-medium">{car.make}</span>
                <div className="flex text-zinc-700 items-center justify-start gap-1  hover:underline">
                  <span className="text-lg font-medium">{car.year}</span>
                  <span className="text-lg font-medium line-clamp-1">
                    {car.model}
                  </span>
                </div>
              </div>
              <span className="text-xl text-orange-500 font-semibold">
                <CurrencyFormater price={car.price} />
              </span>
              <div className="grid grid-cols-2 items-center capitalize justify-start gap-2 mt-2 text-zinc-700">
                <span className="flex gap-1 items-center text-sm font-semibold space-x-2">
                  <IconRoad />{" "}
                  {car?.mileage === 0 ? "new" : car?.mileage + " " + "mil"}
                </span>
                <span className="flex gap-1 items-center text-sm font-semibold">
                  <IconAutomaticGearbox /> {car.transmission}
                </span>
                <span className="flex gap-1 items-center text-sm font-semibold">
                  <LucideFuel /> {car.fuelType}
                </span>
                <span className="flex gap-1 items-center text-sm font-semibold">
                  <User2 /> {car.seats}
                </span>
              </div>
              {/* <Button className="mt-4 w-full cursor-pointer bg-[#0A1931] hover:bg-[#0A1931]/80 cusor-pointer">
                              View Details
                            </Button> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedCars;
