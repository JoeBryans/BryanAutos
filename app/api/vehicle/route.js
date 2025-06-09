import prisma from "@/lib/db";
import { current } from "@reduxjs/toolkit";
import { NextResponse } from "next/server";

export async function GET(req) {
  const urlParams = new URL(req.url);
  const searchParam = new URLSearchParams(urlParams.searchParams);
  const page = searchParam.get("page") || 1;

  //   const page=
  const PageItems = 10;

  const skip = PageItems * (page - 1) || 0;

  try {
    // const allCars = await prisma.product.aggregate({
    //   _count: true,
    // });
    const cars = await prisma.car.findMany({
      skip: skip,
      take: PageItems,
      orderBy: {
        createdAt: "desc",
      },
    });
    const featured = await prisma.car.findMany({
      where: {
        features: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const Makes = await prisma.car.findMany({
      select: {
        make: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
    const Models = await prisma.car.findMany({
      select: {
        model: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
    const totalCars = await prisma.car.count();
    const totalPages = Math.ceil(totalCars / PageItems);

    const currentPage = Number(page) || 1;
    return NextResponse.json({
      cars,
      currentPage,
      Makes,
      Models,
      featured,
      totalCars,
      totalPages,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
