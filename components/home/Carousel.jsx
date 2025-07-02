import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  IconArmchair2,
  IconAutomaticGearbox,
  IconAutomation,
  IconChairDirector,
  IconRoad,
  IconRoadOff,
  IconRoadSign,
  IconSettingsAutomation,
} from "@tabler/icons-react";
import { LucideFuel, User2 } from "lucide-react";
import Link from "next/link";

export function CarouselSpacing({ featured }) {
  return (
    <Carousel className="w-[90%] max-w-7xl">
      <CarouselContent className=" space-x-4">
        {featured
          ? featured?.map((car, index) => (
              <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4">
                <Card className="h-max w-[250px]">
                  <CardContent className="flex flex-col items-start justify-center px-2  ">
                    <div className="h-44  w-full rounded-md">
                      <Image
                        src={car?.image[0]}
                        alt="car"
                        height={500}
                        width={500}
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
                    <span className="text-xl text-zinc-700 font-semibold">
                      ${car.price}
                    </span>
                    <div className="grid grid-cols-2 items-center justify-start gap-2 mt-2 text-zinc-700">
                      <span className="flex gap-1 items-center text-sm font-semibold space-x-2">
                        <IconRoad /> {car?.mileage}
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
              </CarouselItem>
            ))
          : null}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
