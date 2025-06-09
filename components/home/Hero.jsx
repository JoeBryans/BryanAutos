import React from "react";
import SearchBar from "./Search";

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[80vh]">
      {/* <span className='z-20 text-neutral-content font-bold text-3xl'>Imagine the possibilities</span>
            <span className='z-10 text-neutral-content font-bold text-3xl'>of the future</span>
            <span className='z-0 text-neutral-content font-bold text-3xl'>with BryanAuto</span> */}
      <div className="z-10 w-2xl bg-black/80 py-3 rounded-2xl mb-16  text-center text-white hidden md:block font-bold text-xl">
        <p>Your Journey Starts Here.</p>
        <p> Drive Your Dream Car.</p>
        <p>
          {" "}
          Discover a vast selection of new and pre-owned vehicles, tailored
          financing, and expert service.
        </p>
      </div>
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
      <div className="absolute bottom-20 max-w-4xl w-full h-max">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
