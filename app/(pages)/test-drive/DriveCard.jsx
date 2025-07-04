"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar1, ChevronDownIcon, Loader } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
const schema = yup.object({
  selectedDate: yup.date().required("Date is required"),
  selectedTime: yup.string().required("Time is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  desiredVehicle: yup.string().required(),
  additionalNote: yup.string(),
});

const DriveCard = ({ Car }) => {
  const carId = Car?.id;
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      selectedDate: null,
      selectedTime: null,
      desiredVehicle: Car?.make + " " + Car?.model + " " + Car?.year,
    },
  });
  const router = useRouter();
  // time slot
  const generateTimeSlots = useCallback(() => {
    const slots = [];
    for (let i = 9; i <= 17; i++) {
      // 9 AM to 5 PM
      const hour = i > 12 ? i - 12 : i;
      const ampm = i >= 12 ? "PM" : "AM";
      slots.push(`${hour < 10 ? "0" : ""}${hour}:00 ${ampm}`);
      if (i < 17) {
        // Don't add 5:30 PM
        slots.push(`${hour < 10 ? "0" : ""}${hour}:30 ${ampm}`);
      }
    }
    return slots;
  }, []);

  const timeSlots = generateTimeSlots();

  // disable the calendar if the date is not selected
  const isDisabled = (day) => {
    if (day < new Date()) {
      return true;
    }
  };
  const onSubmit = async (data) => {
    console.log("data", data);

    setLoading(true);
    try {
      const res = await fetch(`/api/test-drive`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          carId: carId,
        }),
      });
      const respond = await res.json();
      console.log("data", respond);
      setLoading(false);
      // router.push(`/test-drive/${respond?.id}`);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full flex mx-auto flex-wrap items-start justify-start  gap-2">
      <div className="max-w-lg mx-auto w-full min-h-[60vh] py-3 px-1 rounded-xl">
        <Card>
          <CardContent className="flex flex-col items-start justify-start gap-1 ">
            {Car?.image ? (
              <Image
                src={Car?.image[0]}
                alt="car"
                height={500}
                width={500}
                priority
                className=" object-cover w-full h-96 "
              />
            ) : null}
            <Badge className="text-lg mt-2">{Car?.bodyType}</Badge>
            <div className="flex  items-start justify-start gap-1 text-2xl  md:text-4xl my-2 font-bold text-zinc-700 ">
              <span>{Car?.year}</span>
              <span>{Car?.make}</span>
              <span> {Car?.model}</span>
            </div>
            <ul className="flex max-w-[600px] w-full capitalize flex-col font-semibold items-start justify-start  gap-1  ">
              <li className="flex justify-between items-center border-b-2 rounded-lg p-1.5 text-zinc-600  w-full  ">
                <span className="text-zinc-700 font-bold  ">Color:</span>
                <span>{Car?.external_color}</span>
              </li>
              <li className="flex justify-between items-center border-b-2 rounded-lg p-1.5 text-zinc-600  w-full  ">
                <span className="text-zinc-700 font-bold  ">Condition:</span>
                <span>{Car?.conditions || "Brand new"}</span>
              </li>
              <li className="flex justify-between items-center border-b-2 rounded-lg p-1.5 text-zinc-600  w-full  ">
                <span className="text-zinc-700 font-bold  ">Mileage:</span>
                <span>{Car?.mileage || "0"}</span>
              </li>
              <li className="flex justify-between items-center border-b-2 rounded-lg p-1.5 text-zinc-600  w-full  ">
                <span className="text-zinc-700 font-bold  ">Transmission:</span>
                <span>{Car?.transmission}</span>
              </li>
              <li className="flex justify-between items-center border-b-2 rounded-lg p-1.5 text-zinc-600  w-full  ">
                <span className="text-zinc-700 font-bold  ">Fuel Type:</span>
                <span>{Car?.fuelType}</span>
              </li>
              <li className="flex justify-between items-center border-b-2 rounded-lg p-1.5 text-zinc-600  w-full  ">
                <span className="text-zinc-700 font-bold  ">Seats:</span>
                <span>{Car?.seats}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      {/* form */}
      <div className="flex flex-col mx-auto items-start justify-start gap-1 max-w-2xl w-full">
        <div className="max-w-7xl  w-[95%] shadow-input mx-auto rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black shadow-md">
          <h2 className="text-2xl text-center font-bold text-neutral-800 dark:text-neutral-200">
            Schedule a Test Drive
          </h2>

          <form
            className="max-w-3xl w-[95%] flex flex-col gap-8   my-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <LabelInputContainer className={"w-full"}>
              <Label htmlFor="fullname" className={"w-full"}>
                Select a Date
              </Label>
              <Controller
                name="selectedDate"
                className="w-full "
                control={control}
                render={({ field }) => (
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant={"outline"}
                        className={
                          "w-full items-center gap-2 justify-start font-normal"
                        }
                      >
                        <Calendar1 />
                        {field.value
                          ? format(field.value, "PPP")
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-full overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        disabled={isDisabled}
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.selectedDate && (
                <p className="text-red-500 text-xs italic">
                  {errors.selectedDate.message}
                </p>
              )}
            </LabelInputContainer>

            <LabelInputContainer className="w-full">
              <Label htmlFor="fullname" className={"w-full "}>
                Select a Time
              </Label>
              <Controller
                name="selectedTime"
                className="w-full "
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="w-[500px] "
                  >
                    <SelectTrigger className={"w-full"}>
                      <SelectValue
                        value={field.value || " pick a time"}
                        className="w-full"
                        placeholder="Select Time"
                      />
                    </SelectTrigger>
                    <SelectContent className={"w-[500px]"}>
                      {timeSlots.map((timeSlot, index) => (
                        <SelectItem key={index} value={timeSlot}>
                          {timeSlot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.selectedTime && (
                <p className="text-red-500 text-xs italic">
                  {errors.selectedTime.message}
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
              <Label htmlFor="desired-vehicle">
                Desired Vehicle (Make/Model/Year or Stock #)
              </Label>
              <Input
                id="desired-vehicle"
                placeholder="Toyotal/camery/2022"
                type="text"
                {...register("desiredVehicle")}
              />
              {errors.desiredVehicle && (
                <p className="text-red-500 text-xs italic">
                  {errors.desiredVehicle.message}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="">
              <Label htmlFor="additional-note">
                Additional Note [Optional]
              </Label>
              <Textarea
                id="additional-note"
                placeholder="additional-note"
                type="text"
                {...register("additionalNote")}
              />
            </LabelInputContainer>

            <Button
              type="submit"
              className="bg-[#FF6B35] mt-5 hover:bg-[#FF6B35]/80 text-lg font-semibold cursor-pointer w-full"
              disabled={loading}
            >
              Book a Test Drive {loading && <Loader className="animate-spin" />}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DriveCard;

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
