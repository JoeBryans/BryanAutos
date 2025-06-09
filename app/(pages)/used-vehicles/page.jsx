import SideFilter from "@/components/SideFilter";
import FilterResults from "@/components/vehicle/FilterResults";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full flex gap-10 ">
        <SideFilter />

        <div className="flex flex-col items-center gap-4 w-full mt-10 md:mt-1">
          <h1 className="mt-4 text-2xl font-bold text-zinc-800">
            Used Vehicle Inventory
          </h1>
          <span className="max-w-2xl w-[95%] text-lg font-semibold text-zinc-600">
            Browse our extensive collection of new and pre-owned vehicles. Use
            the filters to narrow down your search and find the perfect car for
            you.
          </span>
          <FilterResults />
        </div>
      </div>
    </div>
  );
};

export default page;
