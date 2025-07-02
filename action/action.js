import prisma from "@/lib/db";

export const getRelatedCars = async (make) => {
 
  try {
    const res = await prisma.car.findMany({
      where: {
        make:{ contains: make, mode: "insensitive" },
      },
      include: {
        savedBy: true,
      },
      orderBy: {
        price: "asc",
      },
      take: 4,
    });
    
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getByMake = async (make) => {
  console.log("make", make);
 
  try {
    const res = await prisma.car.findMany({
      where: {
        make: {contains: make, mode: "insensitive"},
      },
      include: {
        savedBy: true,
      },
      orderBy: {
        price: "asc",
      },
      take: 4,
      distinct: ["model"],
    });
    
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};



export const getFeaturedCars = async () => {
  try {
    const res = await prisma.car.findMany({
      where: {
        featured: true,
      },
      include: {
        savedBy: true,
      },
      orderBy: {
        price: "asc",
      },
      take: 8,
    });
    
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};


