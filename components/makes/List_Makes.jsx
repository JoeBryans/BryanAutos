import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
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
export default function ListMakes() {
  return (
    <div className="w-full   flex flex-col items-center justify-center gap-10 px-5 py-20 md:px-20">
      <h1 className="text-center font-bold text-4xl  text-zinc-800 relative z-20">
        Browse By Make
      </h1>
      <span className="text-center mt-2 font-semibold text-xl  text-zinc-800 relative z-20">
        Check out our hand-picked selection of new arrivals and special offers.
      </span>
      <div className="max-w-7xl w-[95%] flex flex-col items-center ">
        <CarMakes />
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center"></div>
    </div>
  );
}

function CarMakes() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl mb-5"
    >
      {/* <CarouselContent className="-ml-1 ">
        {Makes.map((make, index) => (
          <CarouselItem
            key={index}
            className="pl-1 text-center basis-1/2 md:basis-1/3 lg:basis-1/6"
          >
            <div
              className={`
                
              relative h-14 w-20 flex items-center justify-center cursor-pointer p-3`}
              // onClick={() => setSelected(car.name)}
            >
             
              {/* <img src={car.image} alt="car" className="w-full  object-cover" /> 
            </div>
         <div className="relative w-24 h-24 overflow-hidden shadow-lg rounded-full">
                
              </div>
              <h1 className="text-center font-semibold text-xl  text-zinc-800 relative z-20">
                {make.name}
              </h1>
            </div> 
          </CarouselItem>
        ))}
      </CarouselContent > */}
      <CarouselContent className="py-4">
        {Makes.map((car, index) => (
          <CarouselItem
            key={index}
            className="basis-1/3  md:basis-1/2 lg:basis-2/10"
          >
            <div
              className={`relative h-18 w-24 flex flex-col items-center justify-center cursor-pointer p-3`}
              // onClick={() => setSelected(car.name)}
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
