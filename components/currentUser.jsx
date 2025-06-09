"use client";
import React from "react";
import { useSession } from "next-auth/react";
export const LoggedInUser = () => {
  const { data, status } = useSession();

  console.log("status", status);
  const currentUser = data?.user;
  console.log("currentUser", currentUser);
  return currentUser;
};
