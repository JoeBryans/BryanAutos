"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ChevronDown, ChevronRight } from "lucide-react";

// const SHEET_SIDES = ["top", "right", "bottom", "left"];

export function MobileFilter({ handleSubmit, handleChange, formData }) {
  return (
    <div className="md:hidden grid grid-cols-2 gap-2 relative">
      <Sheet className="w-sm">
        <SheetTrigger asChild>
          <button
            className={
              "z-40 flex gap-1 text-white  font-bold bg-[#0A1931] p-1.5 rounded-lg  absolute left-4 cursor-pointer top-6"
            }
          >
            Filter <ChevronRight />
          </button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle className="text-2xl mt-10 mx-auto font-bold text-zinc-800">
              Filter Results
            </SheetTitle>
          </SheetHeader>
          <div className="md:hidden flex  w-full h-[100vh]  flex-col items-center justify-center gap-3 px-5  sticky top-0 left-0 right-0">
            <div className="flex flex-col font-semibold text-zinc-600 items-start justify-center gap-3 px-5 pt-2">
              <h2>keywords</h2>
              <Input
                type="text"
                name="keywords"
                id="keywords"
                value={formData.keywords}
                onChange={handleChange}
                placeholder="Keywords"
              />
              <h2>Make</h2>
              <select
                name="make"
                id="make"
                value={formData.make}
                onChange={handleChange}
                className="w-full md:w-[180px] border-2 p-1.5 rounded-md"
              >
                <option value="All">All</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="ferrari">Ferrari</option>
              </select>
              <h2>Model</h2>
              <select
                name="model"
                value={formData.model}
                id="model"
                onChange={handleChange}
                className="w-full md:w-[180px] border-2 p-1.5 rounded-md"
              >
                <option value="All">All</option>

                <option value="model1">Model1</option>
                <option value="model2">Model2</option>
                <option value="model3">Model3</option>
                <option value="model4">Model4</option>
                <option value="model5">Model5</option>
                <option value="model6">Model6</option>
              </select>
              <h2>Body</h2>
              <select
                name="body"
                value={formData.body}
                id="body"
                onChange={handleChange}
                className="w-full md:w-[180px] border-2 p-1.5 rounded-md"
              >
                <option value="All">All</option>

                <option value="suv">SUV</option>
                <option value="hatchback">Hatchback</option>
                <option value="coupe">Coupe</option>
              </select>
              <h2>Price</h2>
              <Input
                type="number"
                value={formData.price}
                name="price"
                id="Price"
                onChange={handleChange}
                placeholder=" Price"
              />
              {/*mill  */}
              <h2>Max Mileage (Used)</h2>
              <Input
                type="number"
                value={formData.mileage}
                name="mileage"
                id="mileage"
                onChange={handleChange}
                placeholder="Max Mileage"
              />
              <Button
                onClick={handleSubmit}
                className="bg-[#0A1931] w-full mt-5 hover:bg-[#0A1931]/80 cursor-pointer"
              >
                Filter
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
