"use client";
import { store } from "@/hooks/store/store";
import { Provider } from "react-redux";
export default function ProviderStore({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
