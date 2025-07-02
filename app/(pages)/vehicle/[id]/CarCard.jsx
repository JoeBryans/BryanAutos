"use client";
import CurrencyFormater from "@/components/CurrencyFormater";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CarCard = ({ data }) => {
  const [image, setImage] = React.useState("");
  const router = useRouter();
  let external_color = data?.external_color?.toLowerCase();
  // const [image, setImage] = React.useState("");
  const iscolor = external_color?.replace(/\s+/g, "");
  let interior_color = data?.interior_color?.toLowerCase();
  const interior = interior_color?.replace(/\s+/g, "");

  return (
    <div className="w-full flex flex-wrap items-start justify-start gap-8">
      {/* <div className="max-w-3xl flex flex-col items-start justify-start gap-8"> */}
      <div className="max-w-2xl mx-auto w-full min-h-[60vh] py-3 px-1 rounded-xl border-2 ">
        {data?.image ? (
          <Image
            src={image ? image : data?.image[0]}
            alt="car"
            height={500}
            width={500}
            priority
            className=" object-cover w-full h-96 "
          />
        ) : null}

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mt-3 mx-auto max-w-md mb-2"
        >
          <CarouselContent>
            {data?.image?.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 md:basis-1/4 lg:basis-1/6"
              >
                <div className={cn("h-full w-full rounded-md")}>
                  <Image
                    src={item}
                    alt="car"
                    height={500}
                    width={500}
                    priority
                    className="w-24 h-14  object-cover "
                    onClick={() => setImage(item)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* <div className="flex flex-wrap gap-2 h-20 w-full">
          {data?.image?.map((item, i) => (
            <Image
              key={i}
              src={item}
              alt="car"
              height={500}
              width={500}
              priority
              className="w-24 object-cover "
              onClick={() => setImage(item)}
            />
          ))}
        </div> */}
      </div>
      <div className="max-w-lg  w-full h-max  flex flex-col items-start   rounded-xl gap-0.5  ">
        <div className="flex  items-start justify-start gap-1 text-2xl  md:text-4xl my-2 font-bold text-zinc-700 ">
          <span>{data?.year}</span>
          <span>{data?.make}</span>
          <span> {data?.model}</span>
        </div>
        <span className="text-2xl font-bold text-orange-500 ">
          <CurrencyFormater price={data?.price} />
        </span>
        <div className="flex gap-10">
          <ul className="flex w-max capitalize flex-col font-semibold items-start justify-start  gap-4 mt-4 ">
            <li className="flex items-center text-zinc-500 justify-start gap-1  ">
              <span className="text-zinc-700 font-bold  ">External Color:</span>
              <span
                style={{
                  color: iscolor,
                }}
              >
                {data?.external_color}
              </span>
              <span
                style={{
                  background: iscolor,
                }}
                className={`h-5 w-10 rounded-sm `}
              ></span>
            </li>
            <li className="flex items-center text-zinc-500 justify-start gap-1  ">
              <span className="text-zinc-700 font-bold  ">Condition:</span>
              <span>{data?.conditions || "Brand new"}</span>
            </li>
            <li className="flex items-center text-zinc-500 justify-start gap-1  ">
              <span className="text-zinc-700 font-bold  ">Mileage:</span>
              <span>{data?.mileage || "0"}</span>
            </li>
            <li className="flex items-center text-zinc-500 justify-start gap-1  ">
              <span className="text-zinc-700 font-bold  ">Transmission:</span>
              <span>{data?.transmission}</span>
            </li>
            <li className="flex items-center text-zinc-500 justify-start gap-1  ">
              <span className="text-zinc-700 font-bold  ">Fuel Type:</span>
              <span>{data?.fuelType}</span>
            </li>
            <li className="flex items-center text-zinc-500 justify-start gap-1  ">
              <span className="text-zinc-700 font-bold  ">Seats:</span>
              <span>{data?.seats}</span>
            </li>
          </ul>
          <ul className="flex w-max capitalize flex-col font-semibold items-start justify-start  gap-4 mt-4 ">
            <li className="flex items-center text-zinc-500 justify-start gap-1  ">
              <span className="text-zinc-700 font-bold  ">Interior Color:</span>
              <span
                style={{
                  color: interior,
                }}
              >
                {data?.interio_color}
              </span>
              <span
                style={{
                  background: interior,
                }}
                className={`h-5 w-10 rounded-sm `}
              ></span>
            </li>
            <li className="flex items-center text-zinc-500 justify-start gap-1  ">
              <span className="text-zinc-700 font-bold  ">Body Type:</span>
              <span>{data?.interio_color}</span>
            </li>
            <li className="flex items-center text-zinc-500 justify-start gap-1  ">
              <span className="text-zinc-700 font-bold  ">Engine:</span>
              <span>{data?.engine}</span>
            </li>
            <li className="flex items-center text-zinc-500 justify-start gap-1  ">
              <span className="text-zinc-700 font-bold  ">Drive Type:</span>
              <span>{data?.driveType}</span>
            </li>
            <li className="flex items-center text-zinc-500 justify-start gap-1  ">
              <span className="text-zinc-700 font-bold  ">Stock:</span>
              <span>{data?.Stock}N6944</span>
            </li>
          </ul>
        </div>

        {/* contact */}
        <div className="w-full flex flex-col items-center justify-center gap-2 ">
          <Button
            type="submit"
            className="bg-[#0A1931] font-bold text-xl mt-5 hover:bg-[#1c355e]  cursor-pointer w-full"
          >
            Check Availability
          </Button>
          <Link
            href={`/test-drive`}
            type="submit"
            className="bg-[#FF6B35] font-bold text-white text-xl p-1.5 rounded-lg text-center  mt-5 hover:bg-[#ff7b4b]  cursor-pointer w-full"
          >
            Schedue a Test Drive
          </Link>
          <Link
            href={`/finance`}
            type="submit"
            className="bg-blue-200 w-full p-1.5 rounded-lg text-center  font-bold text-xl text-blue-600 mt-5 hover:bg-blue-300  cursor-pointer "
          >
            Apply For Financing
          </Link>
        </div>
      </div>
      {/* description */}

      <div className="flex w-full  flec-col items-start gap-2">
        <Tabs
          defaultValue="description"
          className={
            "w-full flex flex-col items-center justify-center space-y-3 shadow bg-white"
          }
        >
          <TabsList
            className={"w-max px-5 py-2  bg-white flex items-center gap-4"}
          >
            <TabsTrigger
              value="description"
              className={"text-xl font-bold p-5 "}
            >
              Description
            </TabsTrigger>
            <TabsTrigger value="features" className={"text-xl font-bold p-5"}>
              Features
            </TabsTrigger>
            <TabsTrigger value="review" className={"text-xl font-bold p-5 "}>
              Review
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="description"
            className={"max-w-4xl w-full text-zinc-600 flex flex-col gap-2"}
          >
            <span className="text-lg font-semibold  ">Description:</span>
            {parse(data?.description || ``)}
          </TabsContent>
          <TabsContent
            value="features"
            className={"max-w-4xl w-full"}
          ></TabsContent>
          <TabsContent
            value="review"
            className={"max-w-4xl w-full"}
          ></TabsContent>
        </Tabs>

        {/* <article> {data?.description}</article> */}
      </div>
    </div>
  );
};

export default CarCard;

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
