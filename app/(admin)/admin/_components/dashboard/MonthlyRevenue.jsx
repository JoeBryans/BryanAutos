import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { BanknoteIcon } from "lucide-react";

const MonthlyRevenue = () => {
  return (
    <div>
      <Card>
        <CardContent className={`flex justify-between items-center`}>
          <div>
            <span className="text-zinc-600 text-lg font-semibold">
              Revenue For This Month
            </span>
            <h1 className="text-zinc-800 font-bold text-3xl">$ 1.7M</h1>
          </div>
          <div className="flex items-center w-12 h-12 text-white justify-center rounded-full bg-orange-200 p-2 ">
            <BanknoteIcon size={30} color="orange" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonthlyRevenue;
