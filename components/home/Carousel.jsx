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
import { LucideFuel } from "lucide-react";

export const Cars = [
  {
    id: 1,
    make: "Honda",
    model: "Civic",
    year: 2022,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1678489822892-4d145d0a57e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: 20000,
    price: 20000,
    seats: 4,
    bodyType: "Sedan",
    description:
      "The Civic is a compact car with a sleek and modern design. It's perfect for those who want a car that's both practical and stylish.",
    features: true,
    saved: false,
    status: "Available",
  },
  {
    id: 2,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1678489822892-4d145d0a57e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: 20000,
    price: 20000,
    seats: 4,
    bodyType: "Sedan",
    description:
      "The Camry is a compact car with a sleek and modern design. It's perfect for those who want a car that's both practical and stylish.",
    features: true,
    saved: false,
    status: "Available",
  },
  {
    id: 3,
    make: "Honda",
    model: "Accord",
    year: 2022,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1678489822892-4d145d0a57e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: 20000,
    price: 20000,
    seats: 4,
    bodyType: "Sedan",
    description:
      "The Accord is a compact car with a sleek and modern design. It's perfect for those who want a car that's both practical and stylish.",
    features: true,
    saved: false,
    status: "Available",
  },
  {
    id: 4,
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1678489822892-4d145d0a57e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: 20000,
    price: 20000,
    seats: 4,
    bodyType: "Sedan",
    description:
      "The Corolla is a compact car with a sleek and modern design. It's perfect for those who want a car that's both practical and stylish.",
    features: true,
    saved: false,
    status: "Available",
  },
  {
    id: 5,
    make: "Honda",
    model: "Civic",
    year: 2022,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1678489822892-4d145d0a57e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: 20000,
    price: 20000,
    seats: 4,
    bodyType: "Sedan",
    description:
      "The Civic is a compact car with a sleek and modern design. It's perfect for those who want a car that's both practical and stylish.",
    features: true,
    saved: false,
    status: "Available",
  },
  {
    id: 6,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1678489822892-4d145d0a57e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: 20000,
    price: 20000,
    seats: 4,
    bodyType: "Sedan",
    description:
      "The Camry is a compact car with a sleek and modern design. It's perfect for those who want a car that's both practical and stylish.",
    features: true,
    saved: false,
    status: "Available",
  },
  {
    id: 7,
    make: "Honda",
    model: "Accord",
    year: 2022,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1678489822892-4d145d0a57e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: 20000,
    price: 20000,
    seats: 4,
    bodyType: "Sedan",
    description:
      "The Accord is a compact car with a sleek and modern design. It's perfect for those who want a car that's both practical and stylish.",
    features: true,
    saved: false,
    status: "Available",
  },
  {
    id: 8,
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1678489822892-4d145d0a57e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: 20000,
    price: 20000,
    seats: 4,
    bodyType: "Sedan",
    description:
      "The Corolla is a compact car with a sleek and modern design. It's perfect for those who want a car that's both practical and stylish.",
    features: true,
    saved: false,
    status: "Available",
  },
  {
    id: 9,
    make: "Honda",
    model: "Civic",
    year: 2022,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1678489822892-4d145d0a57e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: 20000,
    price: 20000,
    seats: 4,
    bodyType: "Sedan",
    description:
      "The Civic is a compact car with a sleek and modern design. It's perfect for those who want a car that's both practical and stylish.",
    features: true,
    saved: false,
    status: "Available",
  },
  {
    id: 10,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1678489822892-4d145d0a57e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    transmission: "Automatic",
    fuelType: "Gasoline",
    mileage: 20000,
    price: 20000,
    seats: 4,
    bodyType: "Sedan",
    description:
      "The Camry is a compact car with a sleek and modern design. It's perfect for those who want a car that's both practical and stylish.",
    features: true,
    saved: false,
    status: "Available",
  },
];

export function CarouselSpacing({ featured }) {
  return (
    <Carousel className="w-[90%] max-w-5xl">
      <CarouselContent className="-ml-1">
        {featured?.map((car, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
            <Card className="h-max ">
              <CardContent className="flex flex-col items-start justify-center px-4 py-6">
                <div className="h-44  w-full rounded-md">
                  <Image
                    src={car?.image[0]}
                    alt="car"
                    height={500}
                    width={500}
                    className="h-44 object-cover w-full rounded-md"
                  />
                </div>
                <div className="flex text-zinc-700 items-center justify-start gap-2 mt-3">
                  <span className="text-xl font-semibold">{car.year}</span>
                  <span className="text-xl font-semibold">{car.make}</span>
                  <span className="text-xl font-semibold">{car.model}</span>
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
                <Button className="mt-4 w-full cursor-pointer bg-[#0A1931] hover:bg-[#0A1931]/80 cusor-pointer">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
