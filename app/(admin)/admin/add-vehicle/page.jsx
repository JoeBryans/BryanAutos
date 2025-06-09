import React from "react";
import { VehicleForm } from "./AddForm";

const page = () => {
  return (
    <div className="w-full flex flex-col relative overflow-hidden items-center mt-10 mx-auto">
      <div className="max-w-7xl  w-[95%]  mx-auto rounded-none bg-white p-4 ">
        <VehicleForm />
      </div>
    </div>
  );
};

export default page;
