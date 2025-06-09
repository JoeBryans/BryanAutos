"use client";
import React, { use, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const schema = yup.object({
  fullname: yup.string().required("full name is required"),
  phone: yup.string().required("phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  desiredVehicle: yup.string().required(),
  tradeInVehicle: yup.string().required(),
});

export function TradeForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //   const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form submitted", data);
  };
  return (
    <div className="max-w-7xl  w-[95%] shadow-input mx-auto rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black shadow-md">
      <h2 className="text-2xl text-center font-bold text-neutral-800 dark:text-neutral-200">
        Value Your Trade-In{" "}
      </h2>

      <form
        className="max-w-3xl w-[95%] flex flex-col gap-8   my-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <LabelInputContainer className={"w-full"}>
          <Label htmlFor="fullname">Full name</Label>
          <Input
            className={"w-full"}
            id="fullname"
            placeholder="Tyler Bee"
            type="text"
            {...register("fullname")}
          />
          {errors.firstname && (
            <p className="text-red-500 text-xs italic">
              {errors.firstname.message}
            </p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="">
          <Label htmlFor="email">Email Address</Label>
          <Input
            className={"w-full"}
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="">
          <Label htmlFor="phone">phone Address</Label>
          <Input
            className={"w-full"}
            id="phone"
            placeholder="projectmayhem@fc.com"
            type="phone"
            {...register("phone")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="">
          <Label htmlFor="desired-vehicle">
            Desired Vehicle (Make/Model/Year or Stock #)
          </Label>
          <Input
            id="desired-vehicle"
            placeholder="Toyotal/camery/2022"
            type="text"
            {...register("desiredVehicle")}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="">
          <Label htmlFor="trade-in-vehicle">
            Trade-In Vehicle (Make/Model/Year, if any)
          </Label>
          <Input
            id="trade-in-vehicle"
            placeholder="Toyotal/camery/2022"
            type="text"
            {...register("tradeInVehicle")}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </LabelInputContainer>

        <Button
          type="submit"
          className="bg-[#FF6B35] mt-5 hover:bg-[#FF6B35]/80 text-lg font-semibold cursor-pointer w-full"
        >
          Submit Aplication
        </Button>
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
