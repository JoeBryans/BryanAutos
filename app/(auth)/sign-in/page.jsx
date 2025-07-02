import { SigninForm } from "@/components/ui/signIn";
import React from "react";

const page = async () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <SigninForm />
    </div>
  );
};

export default page;
