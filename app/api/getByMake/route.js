import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const urls = new URL(req.url);
  const make = new URLSearchParams(urls.searchParams).get("make");
  console.log("url", urls);
  
  try {
    // const { make } = req.query;
    console.log("make", make);
    if (make === null) {
      const cars = await prisma.car.findMany({
       take: 4,
        distinct: ["make"],
      });
      console.log("cars", cars);
      
      return NextResponse.json(cars);
     }
    const data = await prisma.car.findMany({
      where: {
        make: {contains: make, mode: "insensitive"}
      },
      take: 4,
      // distinct: ["model"],
    });
    // console.log("data", data);
    
   return NextResponse.json(data);
  } catch (error) {
    console.log(error);
return NextResponse.json(error);
  }
}