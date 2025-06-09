import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
const Service = [
  {
    id: 1,
    title: "Certified Pre-Owned",
    icon: "/mark.png",
    content:
      "Peace of mind knowing that you have a car that is guaranteed to be in good working condition. You can trust that your car will be well-maintained and serviced, ensuring that it will always be a reliable and safe vehicle for you and your family.",
  },
  {
    id: 2,
    title: "Financing Options",
    icon: "/dollar.png",
    content:
      "With a variety of financing options available, you can choose the one that best suits your needs and budget. Whether you're looking for a loan, lease, or a combination of both, there are options available to suit your financial situation.",
  },
  {
    id: 3,
    icon: "/repair-tools.png",
    title: "Expert Service",
    content:
      "Our team of experts is always available to assist you with any questions or concerns you may have about your car. Whether you need help with financing, maintenance, or repairs, our team is here to help.",
  },
  {
    id: 4,
    icon: "/star.png",
    title: "Customer Satisfaction Guaranteed",
    content:
      "We pride ourselves on providing exceptional customer service. Our team of experts is always available to assist you with any questions or concerns you may have about your car. Whether you need help with financing, maintenance, or repairs, our team is here to help.",
  },
];

// title: "Why Choose Bryan Auto?",
// description: "Discover a vast selection of new and pre-owned vehicles, tailored financing, and expert service.",
// image: "/cars/Ferrari-Logo.wine.svg",
export default function WhyUs() {
  return (
    <div className="w-full  flex flex-col items-center justify-center ">
      <div className="max-w-7xl  w-[95%] flex flex-col items-center ">
        <h1 className="text-center font-bold text-3xl mb-8  text-zinc-800 relative z-20">
          Why Choose Bryan Auto?
        </h1>
        <div className="max-w-7xl flex flex-col items-center w-[95%]">
          <Cards />
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <Carousel className="w-[90%] max-w-5xl">
      <CarouselContent className="-ml-1 ">
        {Service.map((card, index) => (
          <CarouselItem key={index} className="pl-1  lg:basis-1/2">
            <Card key={index} className={"w-[400px] px-2 text-zinc-600 "}>
              <div className=" text-pretty flex flex-col items-center justify-center gap-2 px-2 py-10 ">
                <div className="relative  w-12 h-12 overflow-hidden rounded-full">
                  <Image
                    src={card.icon}
                    alt="car"
                    height={100}
                    width={100}
                    className=" w-full rounded-md"
                  />
                </div>
                <h1 className="text-center font-bold text-3xl  text-zinc-800 relative z-20">
                  {card.title}
                </h1>
                <article className="text-pretty mt-2 font-semibold text-xl  text-zinc-800 relative z-20">
                  {card.content}
                </article>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
