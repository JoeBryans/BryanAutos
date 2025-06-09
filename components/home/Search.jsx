"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

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

export default function SearchBar() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Tabs
        defaultValue="form"
        className={"w-full flex flex-col items-center justify-center space-y-3"}
      >
        <TabsList className={"w-52 flex items-center gap-4"}>
          <TabsTrigger value="form" className={"btn btn-ghost btn-sm"}>
            Form
          </TabsTrigger>
          <TabsTrigger value="ai" className={"btn btn-ghost btn-sm"}>
            AI
          </TabsTrigger>
        </TabsList>
        <TabsContent value="form" className={"max-w-4xl w-full"}>
          <div className="w-full flex flex-wrap items-center py-3 justify-center gap-4 shadow rounded-lg bg-black/80 text-white ">
            {/* <input */}
            <LabelInputContainer className=" md:w-40 w-[95%]">
              <Label htmlFor="keyword">keyword</Label>
              <Input id="keyword" placeholder="keyword" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className=" md:w-40 w-[95%]">
              <Label htmlFor="make">Make</Label>
              <Input id="make" placeholder="make" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className=" md:w-40 w-[95%]">
              <Label htmlFor="model">Model</Label>
              <Input id="model" placeholder="model" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className=" md:w-40 w-[95%]">
              <Label htmlFor="bodyType">Body Type</Label>
              <select
                name="bodyType"
                id=""
                className="   border p-1.5 rounded-lg w-full"
              >
                <option value="" className="text-neutral-content">
                  Select body type
                </option>
                {bodyType.map((item) => (
                  <option value={item.value} className="text-neutral-700">
                    {item.name}
                  </option>
                ))}
              </select>
            </LabelInputContainer>
            <Button
              variant={""}
              className={
                "  hover:bg-[#e64c46] bg-[#C73F3A] text-neutral-content mt-3 cursor-pointer md:w-max w-[95%]"
              }
            >
              Search
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="ai"></TabsContent>
      </Tabs>
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-max flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
