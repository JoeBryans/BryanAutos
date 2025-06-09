import { Card, CardContent } from "@/components/ui/card";
import { House, HouseIcon, HousePlug } from "lucide-react";
import React from "react";

const TotalVehicle = () => {
  return (
    <div>
      <Card>
        <CardContent className={`flex justify-between items-center`}>
          <div>
            <span className="text-zinc-600 text-lg font-semibold">
              Total Vehicles in Stock
            </span>
            <h1 className="text-zinc-800 font-bold text-3xl">100</h1>
          </div>
          <div className="flex items-center w-12 h-12 text-white justify-center rounded-full bg-blue-200 p-2 ">
            <HouseIcon size={30} color="blue" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default TotalVehicle;
