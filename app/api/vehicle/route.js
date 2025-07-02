import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const urlParams = new URL(req.url);
  const searchParam = new URLSearchParams(urlParams.searchParams);
  const page = searchParam.get("page") || 1;

  // const model = searchParam.get("model");
  //   const page=
  const PageItems = 10;

  const skip = PageItems * (page - 1) || 0;

  try {

    const cars = await prisma.car.findMany({
      skip: skip,
      take: PageItems,
      orderBy: {
        createdAt: "desc",
      },
    });
    const featured = await prisma.car.findMany({
      where: {
        featured: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    
    const totalCars = await prisma.car.count();
    const totalPages = Math.ceil(totalCars / PageItems);
    console.log("featured", featured);
    const currentPage = Number(page) || 1;
    return NextResponse.json({
      cars,
      currentPage,
      // Makes,
      // Models,
      featured,
      totalCars,
      totalPages,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
