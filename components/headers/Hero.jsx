"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "../ui/HeroBg";
import Search from "./Search";
import AiSearch from "./AiSearch";
import { Camera } from "lucide-react";

export default function Hero() {
  const [isAiSearch, setIsAiSearch] = React.useState(false);
  return (
    <div className="h-[37rem] relative w-full overflow-hidden  flex flex-col items-center justify-center ">
      {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes /> */}
      <div className="absolute -top-10 left-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        >
          <source src={"/hoj-01-stage-hd.mp4"} type={"video/mp4"} />
          {/* <source src={"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/hoj/hoj-01-stage-hd.mp4"} type={'video/mp4'} /> */}
        </video>
      </div>

      <div className="z-30 flex flex-col items-center gap-3  ">
        <h1
          className={cn(
            "md:text-6xl text-3xl text-center text-white relative z-20"
          )}
        >
          Your Journey Begins from Here.
        </h1>
        <h1 className={cn("md:text-4xl text-2xl text-white relative z-20")}>
          Drive your dreams car with us
        </h1>
        <p className="text-center mt-2 text-zinc-300 relative z-20">
          Discover a vast selection of new and pre-owned vehicles, tailored
          financing, and expert service.
        </p>
      </div>
      <div className="z-30 flex text-lg font-bold items-center gap-3 justify-center max-w-4xl mt-10 w-full h-max text-white ">
        <span>Use our Ai search to find the perfect car for you</span>{" "}
        <Camera
          onClick={() => setIsAiSearch(true)}
          size={30}
          className=" cursor-pointer"
        />
        {/* {isAiSearch ? <AiSearch /> : null} */}
      </div>
      <div className="z-30 max-w-4xl mt-4 w-full h-max">
        {isAiSearch ? <AiSearch /> : <Search />}
      </div>
    </div>
  );
}
