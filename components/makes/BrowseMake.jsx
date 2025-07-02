"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import React, { useEffect, useState } from "react";
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
// car.name === selected ? "border-2 " : "border-0"
const Make = ({ selected }) => {
  // const res = await getRelatedCars(selected);
  // console.log("Make", res);
  return <div>Make</div>;
};

export default Make;

export function CarMakes({ handleClick }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl mb-5"
    >
      <CarouselContent className="py-4">
        {Makes.map((car, index) => (
          <CarouselItem
            key={index}
            className="basis-1/3  md:basis-1/2 lg:basis-2/10"
          >
            <div
              className={`
                
               relative h-18 w-24 flex flex-col items-center justify-center cursor-pointer p-3`}
              // onClick={}
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
