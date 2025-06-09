"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { MobileFilter } from "./MobileFilter";

const SideFilter = ({ searchParam }) => {
  const [formData, setFormData] = useState(searchParam ? searchParam : {});
  console.log("side filter", formData);
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(formData);
    // const   =
    console.log(urlParams);
    router.push(`/vehicles?${urlParams}`);
    // console.log("submit");
    // const
  };
  return (
    <>
      <div className=" relative  ">
        <div className="md:flex hidden w-60 shadow h-[100vh]  flex-col items-center justify-center gap-3 px-5  py-5 sticky top-0 left-0 right-0">
          <h1 className="text-2xl font-bold text-zinc-800 mt-5">
            {" "}
            Filter Results
          </h1>
          <div className="flex flex-col font-semibold text-zinc-600 items-start justify-center gap-5 px-5 pt-2">
            <h2>keywords</h2>
            <Input
              type="text"
              name="keywords"
              id="keywords"
              value={formData.keywords}
              onChange={handleChange}
              placeholder="Keywords"
            />

            <h2>Make</h2>
            <select
              name="make"
              id="make"
              value={formData.make}
              onChange={handleChange}
              className="w-full md:w-[180px] border-2 p-1.5 rounded-md"
            >
              <option value="All">All</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
              <option value="bmw">BMW</option>
              <option value="ferrari">Ferrari</option>
            </select>
            <h2>Model</h2>
            <select
              name="model"
              value={formData.model}
              id="model"
              onChange={handleChange}
              className="w-full md:w-[180px] border-2 p-1.5 rounded-md"
            >
              <option value="All">All</option>

              <option value="model1">Model1</option>
              <option value="model2">Model2</option>
              <option value="model3">Model3</option>
              <option value="model4">Model4</option>
              <option value="model5">Model5</option>
              <option value="model6">Model6</option>
            </select>
            <h2>Body</h2>
            <select
              name="body"
              value={formData.body}
              id="body"
              onChange={handleChange}
              className="w-full md:w-[180px] border-2 p-1.5 rounded-md"
            >
              <option value="All">All</option>

              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="coupe">Coupe</option>
            </select>
            <h2>Price</h2>
            <Input
              type="number"
              value={formData.price}
              name="price"
              id="Price"
              onChange={handleChange}
              placeholder=" Price"
            />
            {/*mill  */}
            <h2>Max Mileage (Used)</h2>
            <Input
              type="number"
              value={formData.mileage}
              name="mileage"
              id="mileage"
              onChange={handleChange}
              placeholder="Max Mileage"
            />
          </div>
          <div className="w-[95%] -mt-2flex items-center justify-center gap-5">
            <Button
              onClick={handleSubmit}
              className="bg-[#0A1931] w-full mt-5 hover:bg-[#0A1931]/80 cursor-pointer"
            >
              Filter
            </Button>
            {/* <Button
          variant={"outline"}
          className="w-max mt-5 cursor-pointer"
          onClick={() => setFormData({})}
        >
          Clear
        </Button> */}
          </div>
          {/* body Type */}
          {/* <div>
        <div>
          <input type="checkbox" name="type" value="sedan" id="sedan" />
          <label htmlFor="sedan">Sedan</label>
        </div>
        <div>
          <input type="checkbox" name="type" value="suv" id="suv" />
          <label htmlFor="suv">SUV</label>
        </div>
        <div>
          <input type="checkbox" name="type" value="hatchback" id="hatchback" />
          <label htmlFor="hatchback">Hatchback</label>
        </div>
        <div>
          <input type="checkbox" name="type" value="coupe" id="coupe" />
          <label htmlFor="coupe">Coupe</label>
        </div>
      </div> */}
        </div>
        {/* <div>{}</div> */}
      </div>
      <MobileFilter
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
    </>
  );
};

export default SideFilter;
