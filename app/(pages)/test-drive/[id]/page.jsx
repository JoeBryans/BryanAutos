import { SkeletonCard, SkeletonImage } from "@/components/ui/Loader";
import React, { Suspense } from "react";
import DriveCard from "../DriveCard";

const page = async ({ params }) => {
  const { id } = await params;
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${url}/api/vehicle/${id}`);
  const data = await res.json();
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
          <DriveCard Car={data} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
