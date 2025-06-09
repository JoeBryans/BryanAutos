import Explor from "@/components/explor/Explor";
import Hero from "@/components/headers/Hero";
import Featured from "@/components/home/Featured";
// import Hero from "@/components/home/Hero";
import ListMakes from "@/components/makes/List_Makes";
import { AnimatedTestimonial } from "@/components/testimonial/Testimonial";
import WhyUs from "@/components/WhyUs/WhyUs";
import Image from "next/image";

export default async function Home() {
  // const res = await fetch("http://localhost:3000/api/vehicle");
  // const data = await res.json();
  // console.log("featured", data?.featured);
  // console.log("featured", data?.cars);
  // console.log("featured", data?.totalCars);
  // console.log("featured", data?.totalPages);
  return (
    <div className="flex flex-col items-center  min-h-[100vh]">
      <Hero />
      <Featured />
      <ListMakes />
      <WhyUs />
      <AnimatedTestimonial/>
      <Explor />
    </div>
  );
}
