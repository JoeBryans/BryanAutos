"use client";
import React, { useEffect, useState } from "react";

// import { Slider } from "@/components/ui/slider";
// import { MobileFilter } from "./MobileFilter";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
const Filter = () => {
  const [formdata, setFormdata] = useState({
    make: "",
    model: "",
    bodyType: "",
    price: 0,
    year: 0,
  });
  const [price, setPrice] = useState(0);
  const urlParams = new URLSearchParams(formdata);
  // console.log("searchParams :", urlParams.get("make"));
  useEffect(() => {
    const make = urlParams.get("make");
    const model = urlParams.get("model");
    const bodyType = urlParams.get("bodyType");
    const price = urlParams.get("price");
    const year = urlParams.get("year");

    console.log("searchParams :", make, model, bodyType, price);
    setFormdata({
      make: make || "",
      model: model || "",
      bodyType: bodyType?.length > 0 ? bodyType : "",
      price: price?.length > 0 ? price : 0,
      year: year ? year : 0,
    });
  }, [formdata]);

  console.log(formdata);
  const handelChange = (e) => {
    console.log(e.target.value);
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleFilter = () => {
    console.log("filter");
    const url = new URL(window.location.href);
    url.searchParams.set("make", formdata.make);
    url.searchParams.set("model", formdata.model);
    url.searchParams.set("bodyType", formdata.bodyType);
    url.searchParams.set("price", formdata.price);
    url.searchParams.set("year", formdata.year);
    window.history.pushState({}, "", url);
  };
  return (
    <>
      <div className="hidden w-60 py-10 sticky inset-y-0 lg:flex flex-col items-center  gap-4 shadow-input shadow-lg rounded-lg bg-neutral-100 p-4 h-[100vh]">
        <h1 className="text-3xl font-bold">Filters</h1>
        <div className="flex flex-col gap-5">
          <LabelInputContainer className="">
            <Label htmlFor="make">Make</Label>
            <Input
              name="make"
              value={formdata.make}
              id="make"
              placeholder="make"
              type="text"
              onChange={handelChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="">
            <Label htmlFor="model">Model</Label>
            <Input
              id="model"
              value={formdata.model}
              placeholder="model"
              type="text"
              name="model"
              onChange={handelChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="">
            <Label htmlFor="bodyType">Body Type</Label>
            <select
              name="bodyType"
              value={formdata.bodyType}
              id=""
              onChange={handelChange}
              className="border p-1.5 rounded-lg w-full"
            >
              <option value="" className="text-neutral-content">
                Select body type
              </option>
              <option value="sedan" className="text-neutral-700">
                Sedan
              </option>
              <option value="coupe" className="text-neutral-700">
                Coupe
              </option>
              <option value="hatchback" className="text-neutral-700">
                Hatchback
              </option>
              <option value="suv" className="text-neutral-700">
                SUV
              </option>
              <option value="convertible" className="text-neutral-700">
                Convertible
              </option>
              <option value="minivan" className="text-neutral-700">
                Minivan
              </option>
              <option value="crossover" className="text-neutral-700">
                Crossover
              </option>
              <option value="wagon" className="text-neutral-700">
                Wagon
              </option>
            </select>
          </LabelInputContainer>

          <LabelInputContainer className="">
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              value={formdata.year}
              placeholder="year"
              type="text"
              name="year"
              onChange={handelChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              value={formdata.price}
              placeholder="price"
              type="range"
              min="0"
              max="999999"
              name="price"
              // step="1"
              onChange={handelChange}
              className={"w-full "}
            />
            <span className="text-sm text-neutral-500 font-semibold">
              $ {formdata.price}
            </span>
            {/* <Slider
            defaultValue={[33]}
            max={100}
            step={1}
            name="price"
            onChange={handelChange}
          /> */}
          </LabelInputContainer>

          <Button
            //   variant=""
            onClick={handleFilter}
            className={
              " hover:bg-[#e64c46] bg-[#C73F3A] text-neutral-content mt-3 cursor-pointer  w-[95%] "
            }
          >
            Filter
          </Button>
        </div>
      </div>
      {/* <div className=" z-40 lg:hidden absolute  flex">
        <MobileFilter
          handelChange={handelChange}
          handleFilter={handleFilter}
          formdata={formdata}
        />
      </div> */}
    </>
  );
};

export default Filter;
const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
