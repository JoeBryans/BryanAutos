import Image from "next/image";
import CarCard from "./CarCard";
import BreadCumber from "@/components/BreadCumber";
import RelatedCars from "./relatedCars";
import prisma from "@/lib/db";
import { getRelatedCars } from "@/action/action";
import { Suspense } from "react";
import { SkeletonCard, SkeletonImage } from "@/components/ui/Loader";

const Page = async ({ params }) => {
  const { id } = await params;
  const carId = id.split("-")[3];
  console.log("id", carId);
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  // const url = "https://bryan-autos.vercel.app";
  const res = await fetch(`${url}/api/vehicle/${carId}`);
  const data = await res.json();
  const make = data?.make;
  const related = await getRelatedCars(make);
  // const relatedCars = await related.json();

  return (
    <div className="w-full mx-auto  ">
      {/* <h1>{id}</h1> */}

      <div className="max-w-7xl  mx-auto w-full flex flex-col items-start justify-center gap-2  my-14">
        <Suspense
          fallback={
            <div className="w-full absolute left-0 h-[100vh] top-0 flex mx-auto justify-center bg-black opacity-35">
              <div className="my-44">
                <SkeletonImage />
              </div>
            </div>
          }
        >
          <CarCard data={data} />
          <RelatedCars relatedCars={related} />

          {/* <div className="flex flex-col space-y-4 mx-w-4xl w-full h-[50vh] ">
          <h1>{data?.make}</h1>
          <h1>{data?.model}</h1>
          <h1>{data?.year}</h1>
        </div> */}
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
