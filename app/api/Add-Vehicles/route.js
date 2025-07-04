import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
export async function POST(req) {
  const user = await getServerSession(authOptions);
  const curentUser = user?.user;
  const userId = curentUser.id;
  console.log("curentUser", curentUser);

  const body = await req.json();
  const {
    make,
    model,
    year,
    interio_color,
    transmission,
    fuelType,
    mileage,
    price,
    seats,
    bodyType,
    features,
    external_color,
  } = body;

  try {
    const newCar = await prisma.car.create({
      data: {
        ...body,
      },
    });
    console.log("newCar", newCar);

    return NextResponse.json(newCar);
  } catch (error) {
    console.log("error", error);
    
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
