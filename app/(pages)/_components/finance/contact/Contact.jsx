"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <div className="max-w-3xl  w-[95%] shadow-input mx-auto rounded-none bg-white p-4 md:rounded-2xl md:p-8 flex flex-col items-center">
      <h2 className="text-2xl text-center font-bold text-zinc-800 ">
        Get In Touch
      </h2>

      <span className="max-w-xl w-full text-lg text-center font-semibold text-zinc-600 ">
        Have questions or ready to visit? Contact us today or stop by our
        dealership. We're here to help!
      </span>

      <form
        className="max-w-xl shadow-md px-5 py-8 w-[95%] flex flex-col gap-8   my-8"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <LabelInputContainer className={"w-full"}>
          <Label htmlFor="fullname">Full name</Label>
          <Input
            className={"w-full"}
            id="fullname"
            placeholder="Tyler Bee"
            type="text"
            // {...register("fullname")}
          />
          {/* {errors.firstname && (
            <p className="text-red-500 text-xs italic">
              {errors.firstname.message}
            </p>
          )} */}
        </LabelInputContainer>

        <LabelInputContainer className="">
          <Label htmlFor="email">Email Address</Label>
          <Input
            className={"w-full"}
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            // {...register("email")}
          />
          {/* {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )} */}
        </LabelInputContainer>

        <LabelInputContainer className="">
          <Label htmlFor="trade-in-vehicle">Message </Label>
          <textarea
            rows={""}
            placeholder="Message..."
            className="w-full h-36 p-5 border rounded-lg "
          />
        </LabelInputContainer>

        <Button
          type="submit"
          className="bg-[#FF6B35] mt-5 hover:bg-[#FF6B35]/80 text-lg font-semibold cursor-pointer w-full"
        >
          Submit Aplication
        </Button>
        <div className="flex flex-col gap-2 items-center w-full">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-zinc-600 ">
              Address:
            </span>
            <span> 123 Auto Drive, Car City, ST 54321 </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-zinc-600 ">Phone:</span>
            <span> (234) 816-237-3317</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-zinc-600 ">Hours:</span>
            <span> Mon-Sat: 9 AM - 7 PM, Sun: Closed</span>
          </div>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
