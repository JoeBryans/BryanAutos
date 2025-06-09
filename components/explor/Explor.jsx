import Link from "next/link";
import React from "react";
const Explore = [
  {
    id: 1,
    title: "Value Your Trade",
    content: "Get an estimate for your current vehicle. ",
  },
  {
    id: 2,
    title: "Apply for Financing",
    content: "Start your secure online application today.",
  },
  {
    id: 3,
    title: "Schedule Service",
    content: "Schedule a service appointment with our team of experts.",
  },
  {
    id: 4,
    title: "Current Special Offers",
    content: "Discover our current special offers and promotions.",
  },
];
const Explor = () => {
  return (
    <div className="max-w-7xl w-[98%]  flex flex-col items-center justify-center gap-10 px-5 py-5">
      <h1 className="font-bold text-3xl texr-zinc-800">
        Explore Our Services & Offers
      </h1>
      <div className="grid grid-cols-2 gap-5  items-center justify-center">
        {Explore.map((explor, index) => (
          <Link href="/#" key={index}>
            <div className="flex flex-col items-center bg-white/60 rounded-lg border justify-center gap-2 px-5 py-5 md:px-10">
              <h2 className="text-2xl font-bold text-zinc-800">
                {explor.title}
              </h2>
              <p className="text-sm font-medium text-zinc-600">
                {explor.content}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explor;
