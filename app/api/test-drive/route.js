import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth/next";
export async function POST(req) {
    const body = await req.json();
    const user = await getServerSession(authOptions);
    const curentUser = user?.user;
    const userId = curentUser.id;
    const carId = body.carId;
    console.log("test-drive", userId);
   
    try {
      const existCar = await prisma.testDrive.findUnique({
        where: {
            carId: carId,
        },
       
        
      });
        if (existCar) {
          return NextResponse.json({ message: "Car is already added to test drive" }, { status: 400 });
        }
      console.log("car", car);
      
    const res = await prisma.testDrive.create({
        data: {
          ...body,
        userId:userId,
       
      },
    });
    revalidatePath("/test-drive");
      return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};