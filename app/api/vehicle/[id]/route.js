import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const car = await prisma.car.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json(car);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(req, { params }) {
  const { id } = await params();
  const body = await req.json();
  try {
    const car = await prisma.car.update({
      where: {
        id: id,
      },
      data: {
        ...body,
      },
    });
    return NextResponse.json(car);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE({ params }) {
  const { id } = await params();
  try {
    const car = await prisma.car.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(car);
  } catch (error) {
    return NextResponse.json(error);
  }
}
