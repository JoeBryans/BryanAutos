import SideFilter from "@/components/SideFilter";
import Filter from "@/components/Filter";
import FilterResults from "@/components/vehicle/FilterResults";
// import { Filter } from "lucide-react";
import React, { Suspense } from "react";
import { SkeletonCard } from "@/components/ui/Loader";

const Vehicles = async ({ searchParams }) => {
  const searchParam = await searchParams;
  console.log(searchParam);
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(
    `${url}/api/vehicle/search?keyword=${searchParam.keywords}&make=${searchParam.make}&model=${searchParam.model}&bodyType=${searchParam.bodyType}`
  );
  const data = await res.json();
  console.log("searchCars", data);
  return (
    <div>
      <div className="w-full flex gap-10 ">
        <SideFilter searchParam={searchParam} />
        {/* <Filter searchParam={searchParam} /> */}

        <div className="mt-10  md:mt-1">
          <Suspense
            fallback={
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
                {[1, 2, 3, 4, 5, 6, 8, 7].map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            }
          >
            <h1 className="mt-4 text-2xl text-center font-bold text-zinc-800">
              Vehicle Inventory
            </h1>
            <FilterResults data={data} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
