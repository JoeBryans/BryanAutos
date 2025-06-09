import { Card, CardContent } from "@/components/ui/card";
import { LineChart } from "lucide-react";
import React from "react";

const NewLeads = () => {
  return (
    <div>
      <Card>
        <CardContent className={`flex justify-between items-center`}>
          <div>
            <span className="text-zinc-600 text-lg font-semibold">
              New Leads This Week{" "}
            </span>
            <h1 className="text-zinc-800 font-bold text-3xl">100</h1>
          </div>
          <div className="flex items-center w-12 h-12 text-white justify-center rounded-full bg-red-200 p-2 ">
            <LineChart size={30} color="red" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewLeads;
