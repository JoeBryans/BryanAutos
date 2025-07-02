"use client";
import React, { use, useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Camera } from "lucide-react";
import { Button } from "../ui/button";
import { SelectProprty } from "./selected";
import { useRouter } from "next/navigation";
const bodyType = [
  { name: "Sedan", value: "sedan" },
  { name: "Coupe", value: "coupe" },
  { name: "Hatchback", value: "hatchback" },
  { name: "SUV", value: "suv" },
  { name: "Convertible", value: "convertible" },
  { name: "Minivan", value: "minivan" },
  { name: "Crossover", value: "crossover" },
  { name: "Wagon", value: "wagon" },
];
const Search = () => {
  const router = useRouter();
  const [carData, setCarData] = useState([]);
  const [formData, setFormData] = useState("");
  console.log(formData);
  useEffect(() => {
    async function fetchDatas() {
      const res = await fetch("/api/vehicle");
      const data = await res.json();
      console.log("data", data);
      setCarData(data);
    }
    fetchDatas();
  }, []);

  const Makes = carData?.Makes;
  const Models = carData?.Models;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(formData);
    // const   =
    console.log(urlParams);
    router.push(`/vehicles?${urlParams}`);
    // console.log("submit");
    // const
  };
  return (
    <div className="z-20 w-full flex flex-wrap items-center py-3 justify-center gap-4 shadow rounded-lg bg-black/80 text-white ">
      {/* <input */}
      <LabelInputContainer className=" md:w-40 w-[95%]">
        <Label htmlFor="keyword">keyword</Label>
        <Input
          id="keyword"
          placeholder="keyword"
          type="text"
          name="keyword"
          onChange={handleChange}
        />
      </LabelInputContainer>
      <LabelInputContainer className=" md:w-40 w-[95%]">
        <Label htmlFor="make">Make</Label>
        <Input
          id="make"
          placeholder="make"
          type="text"
          name="make"
          onChange={handleChange}
        />
      </LabelInputContainer>
      <LabelInputContainer className=" md:w-40 w-[95%]">
        <Label htmlFor="model">Model</Label>
        <Input
          id="model"
          placeholder="model"
          type="text"
          name="model"
          onChange={handleChange}
        />
      </LabelInputContainer>
      <LabelInputContainer className=" md:w-40 w-[95%]">
        <Label htmlFor="bodyType">Body Type</Label>
        <select
          name="bodyType"
          onChange={handleChange}
          id=""
          className="   border p-1.5 rounded-lg w-full"
        >
          <option value="" className="text-neutral-content">
            Select body type
          </option>
          {bodyType.map((item, i) => (
            <option key={i} value={item.value} className="text-neutral-700">
              {item.name}
            </option>
          ))}
        </select>
      </LabelInputContainer>
      <Button
        variant={""}
        type="submit"
        className={
          "  bg-[#0A1931]  hover:bg-[#1c355e] text-neutral-content mt-3 cursor-pointer md:w-max w-[95%]"
        }
        onClick={handleSubmit}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
const LabelInputContainer = ({ children, className }) => {
  return (
    <div
      className={cn("flex w-full  md:w-[180px]  flex-col space-y-2", className)}
    >
      {children}
    </div>
  );
};
