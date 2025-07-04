"use client";
import React, { use, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { redirect, useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CameraIcon, Cloud, Hand, Loader, Loader2, Upload } from "lucide-react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <p className="bg-black/30">Loader...</p>,
});

import "react-quill/dist/quill.snow.css";
import CloudinaryButton from "@/components/CloudinaryButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { generatedFormData } from "@/hooks/store/slice/Slice";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@/components/ui/checkbox";
import { ro } from "date-fns/locale";
// const ReactQuill = dynamic(() => import("react-quill"), {
//   ssr: false, // This is the crucial part
//   loading: () => <p>Loading payment button...</p>, // Optional: show a loading state
// });
// import ReactQuill from "react-quill";

const schema = yup.object({
  make: yup.string().required("Make is required"),
  model: yup.string().required("Model is required"),
  year: yup.number().required("Year is required"),
  interior_color: yup.string().required("Color is required"),
  transmission: yup.string().required("Transmission is required"),
  fuelType: yup.string().required("Fuel Type is required"),
  mileage: yup.number().required("Mileage is required"),
  price: yup.number().required("Price is required"),
  seats: yup.number().required("Seats is required"),
  bodyType: yup.string().required("Body Type is required"),
  description: yup.string().required("Description is required"),
  features: yup.array(),
  sku: yup.string(),
  featured: yup.boolean().required("Featured is required"),
  external_color: yup.string().required("External Color is required"),
});

export function VehicleForm() {
  const carData = useSelector((state) => state.slice.generateData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [carImage, setCarImage] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [activeTab, setActiveTab] = useState("form");

  const [carImageToUpload, setCarImageToUpload] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  // generate form data from carImage
  const [formData, setFormData] = useState([]);
  // cloudinary
  console.log("formData", formData);

  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);
  const images = uploadedImageUrls.map((url, index) => {
    return url;
  });
  console.log("carImage", carImage);

  // Callback when a batch of images is successfully uploaded
  const handleUploadSuccess = ({ secure_url, public_id }) => {
    console.log("Batch upload successful:", results);
    const newUrls = results.map((r) => r.secure_url);
    // You could also show a toast notification here
    alert(`Successfully uploaded ${results.length} images!`);
  };

  // Callback for upload errors
  const handleUploadError = (error) => {
    console.error("Upload failed:", error);
    alert("Image upload failed. Please check the console for details.");
  };

  // HandleFileUpload
  const HandleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    console.log("file", file);
    setFileType(file.type);
    console.log("reader", reader);

    reader.onabort = () => {
      console.log("file reading was aborted");
    };
    reader.onerror = () => {
      console.log("file reading has failed");
    };
    reader.onloadend = () => {
      const carImageUrl = reader.result;
      // console.log("carImageUrl", carImageUrl);
      const carImageBase64 = carImageUrl.split(",")[1];
      // console.log("carImageBase64", carImageBase64);
      setCarImageToUpload(carImageBase64);
      setCarImage(reader.result);

      console.log("file reading is complete");
    };

    reader.readAsDataURL(file);
  };
  useEffect(() => {
    if (formData) {
      setValue("make", formData?.make);
      setValue("model", formData?.model);
      setValue("year", formData?.year);
      setValue("interior_color", formData?.interior_color);
      setValue("transmission", formData?.transmission);
      setValue("fuelType", formData?.fuel_type);
      setValue("mileage", formData?.mileage);
      setValue("price", formData?.price);
      setValue("seats", formData?.seats);
      setValue("bodyType", formData?.body_style);
      setValue("featured", formData?.features?.length > 0 ? true : false);
      setValue("features", formData?.features);
      setValue("external_color", formData?.external_color);
      setValue("description", formData?.description);

      setActiveTab("form");
    }
    router.refresh();
  }, [formData]);

  // handlePredition
  const handlePredition = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/extract-car-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carImage: carImageToUpload,
          fileType: fileType,
        }),
      });
      const resJson = await res.json();
      setFormData(resJson);

      if (res?.ok && res?.status === 200) {
        setLoading(false);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   make: carData?.make,
    //   model: carData?.model,
    //   year: carData?.year,
    //   interior_color: carData?.interior_color,
    //   transmission: carData?.transmission,
    //   fuelType: carData?.fuel_type,
    //   mileage: carData?.mileage,
    //   price: carData?.price,
    //   seats: carData?.seats,
    //   bodyType: carData?.body_style,
    //   featured: carData?.features?.length > 0 ? true : false,
    //   features: carData?.features,
    //   external_color: carData?.external_color,
    //   description: carData?.description,
    // },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("/api/Add-Vehicles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          image: images,
        }).trim(),
      });
      console.log(res);

      const resJson = await res.json();
      console.log("data", resJson);
      if (res?.ok && res?.status === 200) {
        // localStorage.removeItem("generateData");
        setLoading(false);
        router.push("/admin/vehicles");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Tabs
      // defaultValue="form"
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full  p-5 flex flex-col items-center "
    >
      <TabsList>
        <TabsTrigger value="form" className={"cursor-pointer"}>
          Add Vehicle
        </TabsTrigger>
        <TabsTrigger value="ai" className={"cursor-pointer"}>
          Use AI to Predict
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="form"
        className="w-full  p-5 flex flex-col items-center mx-auto "
      >
        <h2 className="text-2xl text-center font-bold text-neutral-800 dark:text-neutral-200">
          Value Your Trade-In{" "}
        </h2>

        <form
          className="max-w-4xl w-[98%] shadow shadow-input flex flex-col   gap-4 my-8 py-5 rounded-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mx-auto w-full flex flex-wrap justify-center gap-8   ">
            <div className="flex flex-col gap-4  items-center  text-lg font-semibold max-w-[400px] w-full">
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="make">Make</Label>
                <Input
                  className={"w-full"}
                  id="make"
                  type="text"
                  {...register("make")}
                />
                {errors.make && (
                  <p className="text-red-500 text-xs italic">
                    {errors.make.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="model">Model</Label>
                <Input
                  className={"w-full"}
                  id="model"
                  type="text"
                  {...register("model")}
                />
                {errors.model && (
                  <p className="text-red-500 text-xs italic">
                    {errors.model.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="price">Price</Label>
                <Input
                  className={"w-full"}
                  id="price"
                  type="text"
                  {...register("price")}
                />
                {errors.price && (
                  <p className="text-red-500 text-xs italic">
                    {errors.price.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="year">Year</Label>
                <Input
                  className={"w-full"}
                  id="year"
                  type="text"
                  {...register("year")}
                />
                {errors.year && (
                  <p className="text-red-500 text-xs italic">
                    {errors.year.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="interior_color">Interior Color</Label>
                <Input
                  className={"w-full"}
                  id="interior_color"
                  type="text"
                  {...register("interior_color")}
                />
                {errors.interior_color && (
                  <p className="text-red-500 text-xs italic">
                    {errors.interior_color.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="transmission">Transmission</Label>
                <Input
                  className={"w-full"}
                  id="transmission"
                  type="text"
                  {...register("transmission")}
                />
                {errors.transmission && (
                  <p className="text-red-500 text-xs italic">
                    {errors.transmission.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="fuelType">Fuel Type</Label>
                <Input
                  className={"w-full"}
                  id="fuelType"
                  type="text"
                  {...register("fuelType")}
                />
                {errors.fuelType && (
                  <p className="text-red-500 text-xs italic">
                    {errors.fuelType.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="mileage">Mileage</Label>
                <Input
                  className={"w-full"}
                  id="mileage"
                  type="text"
                  {...register("mileage")}
                />
                {errors.mileage && (
                  <p className="text-red-500 text-xs italic">
                    {errors.mileage.message}
                  </p>
                )}
              </LabelInputContainer>
            </div>
            <div className=" flex flex-col gap-4  items-center  text-lg font-semibold max-w-96  space-x-2 w-full">
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="seats">Seats</Label>
                <Input
                  className={"w-full"}
                  id="seats"
                  type="text"
                  {...register("seats")}
                />
                {errors.seats && (
                  <p className="text-red-500 text-xs italic">
                    {errors.seats.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="bodyType">Body Type</Label>
                <Input
                  className={"w-full"}
                  id="bodyType"
                  type="text"
                  {...register("bodyType")}
                />
                {errors.bodyType && (
                  <p className="text-red-500 text-xs italic">
                    {errors.bodyType.message}
                  </p>
                )}
              </LabelInputContainer>

              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="sku">Sku</Label>
                <Input
                  className={"w-full"}
                  id="sku"
                  type="text"
                  // placeholder="Tyler Bee"
                  {...register("sku")}
                />
                {errors.sku && (
                  <p className="text-red-500 text-xs italic">
                    {errors.sku.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="external_color">External Color</Label>
                <Input
                  className={"w-full"}
                  id="external_color"
                  type="text"
                  {...register("external_color")}
                />
                {errors.external_color && (
                  <p className="text-red-500 text-xs italic">
                    {errors.external_color.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer
                className={"w-full flex flex-row items-center gap-3"}
              >
                <Label htmlFor="external_color">Featured</Label>
                <Controller
                  name="featured"
                  control={control}
                  rules={{
                    required: "featured is required",
                  }}
                  render={({ field }) => (
                    <Checkbox
                      id="featured"
                      label="Featured"
                      name="featured"
                      className={"w-6 h-6 checked:bg-blue-600"}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                {errors.featured && (
                  <p className="text-red-500 text-xs italic">
                    {errors.featured.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className={"w-full"}>
                {/* <CldUploadButton
                  className="flex flex-col gap-2 py-4 border border-dashed items-center h-max rounded-xl text-lg font-semibold cursor-pointer w-full"
                  uploadPreset="bryan-auto"
                >
                  <CameraIcon />
                  Upload Image
                </CldUploadButton> */}
                <CloudinaryButton
                  // className="flex flex-col gap-2 py-4 border border-dashed items-center h-max rounded-xl text-lg font-semibold cursor-pointer w-full"
                  onUploadSuccess={handleUploadSuccess}
                  onUploadError={handleUploadError}
                  uploadedImageUrls={uploadedImageUrls}
                  setUploadedImageUrls={setUploadedImageUrls}
                  // uploadPreset="bryan-auto"
                />
              </LabelInputContainer>
              <LabelInputContainer className={"w-full"}>
                <Label htmlFor="description">Description</Label>
                {/* {
                Controller
              } */}
                <div className="w-full min-h-44 max-h-60 overflow-y-auto">
                  <Controller
                    name="description"
                    control={control}
                    rules={{
                      required: "description is required",
                    }}
                    render={({ field }) => (
                      <ReactQuill
                        {...field}
                        // error={!!errors.email}
                        // helperText={errors.email ? errors.email.message : ""}
                      />
                    )}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-xs italic">
                      {errors.description.message}
                    </p>
                  )}
                </div>
                {/* <ReactQuill /> */}
              </LabelInputContainer>
            </div>
          </div>

          <div className="mx-auto w-full flex justify-center   ">
            <Button
              type="submit"
              disabled={loading}
              className="bg-[#0A1931] w-max mt-5 hover:bg-[#0A1931]/80 cursor-pointer"

              // className="bg-[#] mt-5 hover:bg-[#FF6B35]/80 text-lg font-semibold cursor-pointer w-max"
            >
              {loading && <Loader2 className="animate-spin" />} Add Vehicle
            </Button>
          </div>
        </form>
      </TabsContent>
      <TabsContent value="ai">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">AI Prediction</h1>
          <Card className="w-full">
            <CardHeader className="text-2xl text-center font-bold">
              Predict the vehicle details
            </CardHeader>
            <CardContent>
              {!carImage ? (
                <LabelInputContainer className={"w-full"}>
                  <p className="text-xs text-zinc-500 font-semibold">
                    Upload the image of the vehicle you want to predict details
                    for.
                  </p>
                  <div className="w-full min-h-44 max-h-60 overflow-y-auto">
                    <Label
                      htmlFor="file"
                      className="flex flex-col gap-2 py-4 border border-dashed items-center h-max rounded-xl text-lg font-semibold cursor-pointer w-full"
                    >
                      <Upload />
                      Upload Image
                    </Label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="hidden"
                      accept="image/*"
                      onChange={HandleFileUpload}
                    />
                  </div>
                </LabelInputContainer>
              ) : (
                <div>
                  <div className="max-w-xl w-full h-full">
                    <img
                      src={carImage}
                      alt="carImage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-5">
                    <Button
                      variant={"outline"}
                      className=" w-max mt-5  cursor-pointer"
                      onClick={() => {
                        setCarImage(null);
                      }}
                    >
                      Remove Image
                    </Button>
                    <Button
                      disabled={loading}
                      className="bg-[#0A1931] w-max mt-5 hover:bg-[#0A1931]/80 cursor-pointer"
                      onClick={handlePredition}
                    >
                      {loading && <Loader className="animate-spin" />}
                      Extract Details
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
    // </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
