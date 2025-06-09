import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IconCash, IconCashBanknote } from "@tabler/icons-react";

const VehicleSold = () => {
  return (
    <div>
      <Card>
        <CardContent className={`flex justify-between items-center`}>
          <div>
            <span className="text-zinc-600 text-lg font-semibold">
              Total Vehicles Sold This Month
            </span>
            <h1 className="text-zinc-800 font-bold text-3xl">100</h1>
          </div>
          <div className="flex items-center w-12 h-12 text-white justify-center rounded-full bg-green-200 p-2 ">
            <IconCashBanknote size={30} color="green" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VehicleSold;
