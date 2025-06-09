import React from "react";
import Sidebar from "./_components/dashboard/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="relative flex w-full">
      <Sidebar />
      <main className="min-h-[100vh] relative mx-auto w-full"> {children}</main>
    </div>
  );
};

export default layout;
