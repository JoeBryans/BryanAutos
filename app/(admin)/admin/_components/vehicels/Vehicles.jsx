"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDownIcon, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Vehicles({ data }) {
  const cars = data;
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [statusAction, setStatusAction] = useState(null);
  const [actions, setActions] = useState(null);
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Make & Model</TableHead>

          <TableHead>CarId</TableHead>
          <TableHead>year</TableHead>
          <TableHead>Prise </TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
          {/* <TableHead>features</TableHead> */}
          {/* <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars?.map((car, i) => (
          <TableRow key={car.id}>
            <TableCell className="font-medium flex items-center gap-2">
              {car.make} &nbsp;
              <span className="text-zinc-500">{car.model}</span>
            </TableCell>
            <TableCell>{car.model}</TableCell>
            <TableCell>{car.year}</TableCell>
            <TableCell>{car.price}</TableCell>
            <TableCell className={"relative"}>
              {/* <span
                className={cn(
                  car.status === "Available"
                    ? "text-green-500"
                    : car.status === "Sold"
                    ? "text-red-500"
                    : car.status === "Pending"
                    ? "text-yellow-500"
                    : "",
                  "text-sm font-semibold cursor-pointer flex items-center gap-2"
                )}
                onClick={() => {
                  setOpen(false);
                  setStatus(!status);
                  setStatusAction(i);
                }}
              >
                {car.status}
                <ChevronDownIcon className="w-4 h-4" />
              </span> */}
              <select
                // className={`
                //     absolute z-20 top-2 right- w-44 h-max bg-white rounded-lg shadow-lg`}
                onChange={(e) => {
                  console.log("e", e.target.value);
                }}
              >
                <option
                  value={car?.status}
                  className={cn(
                    car.status === "Available"
                      ? "text-green-500"
                      : car.status === "Sold"
                      ? "text-red-500"
                      : car.status === "Pending"
                      ? "text-yellow-500"
                      : "",
                    "text-sm font-semibold cursor-pointer flex items-center gap-2"
                  )}
                >
                  {car?.status}
                </option>
                <option
                  onClick={() => {
                    setStatus(!status);
                  }}
                  value="Available"
                  className="p-4 text-zinc-600"
                >
                  Available
                </option>
                <option
                  onClick={() => {
                    setStatus(!status);
                  }}
                  value="Pending"
                  className="p-4 text-zinc-600"
                >
                  Pending
                </option>
                <option
                  onClick={() => {
                    setStatus(!status);
                  }}
                  value="Sold"
                  className="p-4 text-zinc-600"
                >
                  Sold
                </option>
              </select>
            </TableCell>
            <TableCell
              className={"relative"}
              // onClick={() => {
              //   setOpen(false);
              // }}
            >
              <MoreVertical
                onClick={() => {
                  setOpen(!open);
                  setActions(i);
                }}
                className="cursor-pointer"
              />
              {open && actions === i ? (
                <Card
                  className={`
                      absolute z-20 top-2 -right-20 w-44 h-max bg-white rounded-lg shadow-lg`}
                >
                  <CardContent>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <Button
                        variant={"outline"}
                        className="w-full text-sm font-semibold cursor-pointer"
                      >
                        view
                      </Button>
                      <Button className="w-full text-sm font-semibold cursor-pointer">
                        Edit
                      </Button>
                      <Button className="w-full text-sm font-semibold cursor-pointer">
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : null}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
