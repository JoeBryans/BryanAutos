import React from "react";
import TotalVehicle from "./TotalVehicle";
import VehicleSold from "./VehicleSold";
import MonthlyRevenue from "./MonthlyRevenue";
import NewLeads from "./NewLeads";
import { Plus } from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col items-center relative mx-auto">
      <div className="max-w-4xl w-full flex items-center justify-end  p-10 mb-3">
        <Link
          href="/admin/add-vehicle"
          className=" p-5 w-56 flex flex-col gap-2 items-center cursor-pointer hover:bg-blue-100 hover:text-blue-400 bg-blue-200 rounded-lg"
        >
          <Plus size={35} color="blue" className="text-xl" />
          <span className="text-xl md:text-2xl" style={{ color: "blue" }}>
            Add New Vehicle
          </span>
        </Link>
      </div>
      <div className="max-w-4xl w-full mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <TotalVehicle />
        <VehicleSold />
        <MonthlyRevenue />
        <NewLeads />
      </div>
    </div>
  );
};

export default Dashboard;
