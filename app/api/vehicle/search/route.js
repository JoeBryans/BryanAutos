import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const urlParams = new URL(req.url);

  const params = new URLSearchParams(urlParams.searchParams);
  console.log("params", params);
  const keyword = params.get("keyword");
  const name = keyword;
  console.log("name", keyword);

  const make = params.get("make");
  console.log("make", make);

  const model = params.get("model");
  // const make = params.get("make");
  // const model = params.get("model");
  // const year=params.get("year");
  // const transmission=params.get("transmission");
  // const fuelType=params.get("fuelType");
  const mileage = params.get("mileage");
  const price = params.get("price");
  const priceRang = Number(price) || 1000;
  const Mil =Number(mileage) || 0;
    console.log("price", price);

  const bodyType = params.get("bodyType");
  // const features = params.get("features");
  // const external_color = params.get("external_color");

  // const fiter = {
  //   make: make || "",
  //   model: model || "",
  //   mileage: mileage || "",
  //   price: price || "",
  //   bodyType: bodyType || "",
  //   features: features || "",
  //   // external_color,
  // };
  // let whereCondition = {};

  try {
    const cars = await prisma.car.findMany({
      where: {
        OR: [
          { make: { contains: make, mode: "insensitive" }  },
          { model: { contains: model, mode: "insensitive" }},
          { bodyType: { contains: bodyType, mode: "insensitive" } },
          { price: { lte: priceRang } },
          // { mileage: { lte: Mil } },
          // { featured: true },
        ],
      },
      distinct: ["model"],
    });
    console.log("cars", cars);
    return NextResponse.json(cars);
  } catch (error) {
    return NextResponse.json(error);
  }
}
