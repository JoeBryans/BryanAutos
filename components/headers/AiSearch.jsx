import { Camera, Loader, Upload } from "lucide-react";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
const AiSearch = () => {
  const [image, setImage] = React.useState("");
  const [imageurl, setImageUrl] = React.useState(null);
  const [fileType, setFileType] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileType(file.type);
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      setImageUrl(imageUrl);

      const imageBase64 = imageUrl.split(",")[1];
      setImage(imageBase64);
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const extractDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/extract-car-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carImage: image,
          fileType: fileType,
        }),
      });
      setLoading(false);
      const resJson = await res.json();
      console.log("resJson", resJson);
      const urlParams = new URLSearchParams();
      urlParams.set("make", resJson?.make);
      urlParams.set("model", resJson?.model);
      urlParams.set("year", resJson?.year);
      urlParams.set("price", resJson?.price);
      urlParams.set("bodyType", resJson?.bodyType || "suv");
      urlParams.set("transmission", resJson?.transmission);
      router.push(`/vehicles?${urlParams.toString()}`);
    } catch (error) {
      setLoading(false);
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-[500px] w-full py-4 h-[300px] mx-auto  flex gap-3 text-white flex-col items-center justify-center">
      {/* <h1 className="font-semibold text-3xl">Ai Search assistant</h1>
      <p className="font-semibold text-xl">Find the perfect car for you</p> */}
      {imageurl === null ? (
        <>
          <Label
            htmlFor="file"
            className={`w-[500px] flex flex-col gap-2   items-center h-max rounded-xl text-lg font-semibold cursor-pointer border border-dotted p-3  `}
          >
            <Upload size={30} />{" "}
            <p className="text-zinc-50 font-semibold">Upload Image</p>
          </Label>
          <Input
            className="hidden"
            type="file"
            id="file"
            onChange={handleFileChange}
          />
        </>
      ) : (
        <div className="relative ">
          <Image
            src={imageurl}
            alt="carImage"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          {loading && (
            <div className="animate-pulse absolute inset-0 w-full h-full bg-black/50 z-10" />
          )}
          <div className="flex justify-between items-center gap-5">
            <Button
              variant={"outline"}
              className=" w-max mt-5  cursor-pointer"
              onClick={() => {
                setImageUrl(null);
              }}
            >
              Remove Image
            </Button>
            <Button
              disabled={loading}
              className="bg-[#0A1931] w-max mt-5 hover:bg-[#0A1931]/80 cursor-pointer"
              onClick={extractDetails}
            >
              {loading && <Loader className="animate-spin" />}
              Search
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiSearch;
