import React from "react";
import { TradeForm } from "./Form";
const Cards = [
  {
    title: "Competitive Rates",
    content:
      " We work with multiple lenders to find you the best possible auto loan rates.",
  },
  {
    title: "Easy Application",
    content:
      " Our secure online application is quick to fill out and gets you pre-approved fast.",
  },
  {
    title: "All Credit Types",
    content:
      " Good credit, bad credit, or no credit? We're here to help you get financed.",
  },
];
const Finance = () => {
  return (
    <div className="max-w-7xl w-[95%] flex flex-col items-center gap-10 py-10 px-5">
      <h1 className="text-3xl font-bold text-zinc-800">
        Flexible Finance Solutions
      </h1>
      <span className="max-w-2xl w-full text-lg font-semibold text-zinc-600">
        At BryanAuto Motors, we make financing your next vehicle straightforward
        and stress-free. Explore your options and apply online today.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Cards.map((cards, i) => {
          return (
            <div
              key={i}
              className="w-60 border px-4 rounded-lg flex flex-col items-center h-52 justify-center gap-5 "
            >
              <h1 className="text-2xl font-bold text-zinc-800">
                {cards.title}
              </h1>
              <span className="text-lg font-semibold text-zinc-600">
                {cards.content}
              </span>
            </div>
          );
        })}
      </div>
      <div className="max-w-3xl w-full">
        <TradeForm />
      </div>
    </div>
  );
};

export default Finance;
