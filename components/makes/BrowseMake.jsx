"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import React, { Suspense, useEffect, useState } from "react";
import { SkeletonCard } from "../ui/Loader";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import CurrencyFormater from "../CurrencyFormater";
import { IconAutomaticGearbox, IconRoadOff } from "@tabler/icons-react";
import { Clock12Icon, LucideFuel, User2Icon } from "lucide-react";
const Makes = [
  {
    id: 1,
    name: "Rolls Royce",
    image: "/cars/Rolls-Royce_Motor_Cars-Logo.wine.svg",
  },

  {
    id: 2,
    name: "Ferrari",
    image: "/cars/Ferrari-Logo.wine.svg",
  },
  {
    id: 3,
    name: "BMW",
    image: "/cars/BMW_Motorrad-Logo.wine.svg",
  },
  {
    id: 4,
    name: "Tesla",
    image: "/cars/Tesla,_Inc.-Logo.wine (2).svg",
  },
  {
    id: 5,
    name: "Mercedes",
    image: "/cars/Mercedes-Benz-Logo.wine.svg",
  },

  {
    id: 6,
    name: "Lexus",
    image: "/cars/Lexus-Logo.wine.svg",
  },
  {
    id: 7,
    name: "Toyota",
    image: "/cars/Toyota_Canada_Inc.-Logo.wine.svg",
  },
  {
    id: 8,
    name: "Honda",
    image: "/cars/Honda-Logo.wine.svg",
  },
  {
    id: 9,
    name: "Ford",
    image: "/cars/Ford_India_Private_Limited-Logo.wine.svg",
  },
  {
    id: 10,
    name: "Nissan",
    image: "/cars/Nissan_USA-Logo.wine.svg",
  },
];
//
const Make = () => {
  const [selected, setSelected] = useState("BMW");
  const [carMake, setCarMake] = useState([]);
  // const data = fetchDatas();
  useEffect(() => {
    console.log("selected", selected);
    async function fetchDatas() {
      try {
        const res = await fetch(`/api/getByMake?make=${selected}`);
        const data = await res.json();
        setCarMake(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDatas();
  }, [selected]);

  console.log("carMake", carMake);

  return (
    <div className="w-full">
      <div className="max-w-7xl w-[95%] relative flex flex-col items-center ">
        <CarMakes setSelected={setSelected} selected={selected} />
      </div>

      <div className="w-full mt-10 mx-auto  md:mt-1">
        <Suspense
          fallback={
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
              {[1, 2, 3, 4, 5, 6, 8, 7].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          }
        >
          <Cars Car={carMake} />
        </Suspense>
      </div>
    </div>
  );
};

export default Make;

export function Cars({ Car }) {
  return (
    // <div className="w-full  flex flex-wrap  gap-3 items-center">
    <div className="w-full  grid grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Car?.map((car, index) => (
        <Card key={index} className="h-max w-[280px] group relative mx-auto">
          <CardContent className="flex flex-col items-start justify-center px-2 ">
            <div className="h-44  w-[full] rounded-md">
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
                <Clock12Icon />{" "}
                {car?.mileage === 0
                  ? "0 " + "" + "mile"
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

export function CarMakes({ setSelected, selected }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  max-w-4xl px-4 relative mb-5"
    >
      <CarouselContent className="py-4 ">
        {Makes.map((car, index) => (
          <CarouselItem
            key={index}
            className="basis-1/3  md:basis-2/5 lg:basis-2/10"
          >
            <div
              className={`
               ${
                 car.name === selected
                   ? "border-2 py-1.5 rounded-lg border-zinc-800"
                   : "border-0"
               }
               relative h-20 w-24 flex flex-col items-center justify-center cursor-pointer p-3`}
              onClick={() => setSelected(car.name)}
            >
              <Image
                src={car.image}
                alt="car"
                width={200}
                height={200}
                className="h-full w-full object-cover "
              />
              <h1 className="text-center font-semibold text-xl  text-zinc-800 relative z-20">
                {car.name}
              </h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
