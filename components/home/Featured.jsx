import React from "react";
import { CarouselSpacing } from "./Carousel";

export default async function Featured() {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${url}/api/vehicle`);
  const data = await res.json();
  const featured = data?.featured;
  console.log("featured", data?.totalCars);
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center gap-10 px-5 py-20 md:px-20">
      <div className="max-w-7xl  w-[95%] flex flex-col items-center ">
        <h1 className="text-center font-bold text-4xl  text-zinc-800 relative z-20">
          Featured Vehicles
        </h1>
        <span className="text-center mt-2 font-semibold text-xl  text-zinc-800 relative z-20">
          Check out our hand-picked selection of new arrivals and special
          offers.
        </span>
        <div className="mt-5 w-[98%] flex flex-col items-center ">
          <CarouselSpacing featured={featured} />
        </div>
      </div>
    </div>
  );
}

// function CarouselDemo() {
//   const slideData = [
//     {
//       title: "Mystic Mountains",
//       button: "Explore Component",
//       src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Urban Dreams",
//       button: "Explore Component",
//       src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Neon Nights",
//       button: "Explore Component",
//       src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Desert Whispers",
//       button: "Explore Component",
//       src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];
//   return (
//     <div className="relative overflow-hidden w-full h-full py-10 bg-red-500 rounded-md">
//       <CarouselSpacing slides={slideData} />
//     </div>
//   );
// }
