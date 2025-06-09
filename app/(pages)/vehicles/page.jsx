import SideFilter from "@/components/SideFilter";
import FilterResults from "@/components/vehicle/FilterResults";
import { Filter } from "lucide-react";
import React from "react";

const Vehicles = async ({ searchParams }) => {
  const searchParam = await searchParams;
  console.log(searchParam);
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(
    `${url}/api/vehicle/search?keyword=${searchParam.keyword}&make=${searchParam.make}&model=${searchParam.model}&bodyType=${searchParam.bodyType}`
  );
  const data = await res.json();
  console.log("searchCars", data);
  return (
    <div>
      <div className="w-full flex gap-10 ">
        <SideFilter searchParam={searchParam} />

        <div className="mt-10  md:mt-1">
          <h1 className="mt-4 text-2xl text-center font-bold text-zinc-800">
            Vehicle Inventory
          </h1>
          {/* <FilterResults data={data} /> */}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
