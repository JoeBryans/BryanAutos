import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const About = () => {
  return (
    <div className="max-w-3x w-full px-4 mx-auto flex flex-col items-center gap-10 ">
      <h1 className={"text-3xl font-bold text-zinc-800"}>About BryanAuto </h1>
      <span className={"text-xl font-semibold max-w-2xl w-[95%] text-zinc-600"}>
        Learn more about our dealership, our mission, and our commitment to
        serving the community with quality vehicles and exceptional customer
        service.
      </span>

      <Card className={"max-w-3xl w-full"}>
        <CardContent className={"text-lg font-semibold text-zinc-600"}>
          BryanAuto has been a trusted name in the automotive industry for over
          6 years. We pride ourselves on offering a wide selection of
          high-quality new and pre-owned vehicles to suit every need and budget.
          Our dedicated team is passionate about cars and even more passionate
          about helping our customers find the perfect vehicle. We believe in
          transparency, honesty, and building long-lasting relationships. Visit
          us today and experience the DriveConnect difference!
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
