import React from "react";
import Dashboard from "./_components/dashboard/Dashboard";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-8">
      <h1 className="text-3xl text-zinx-800 font-bold">Admin Dashboard</h1>
      <p>Welcome to the admin dashboard</p>
      <Dashboard />
    </div>
  );
};
export default page;
