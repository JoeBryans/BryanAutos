import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = await params;
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${url}/api/vehicle/${id}`);
  const data = await res.json();
  //   console.log("data", data);
  return (
    <div className="w-full mx-auto ">
      {/* <h1>{id}</h1> */}
      <div className="w-full flex flex-col items-start justify-center gap-2 ">
        <div className="mx-w-full w-full h-[60vh] ">
          {data?.length > 0 ? (
            <Image
              src={data?.image[0]}
              alt="car"
              height={1000}
              width={1000}
              className=" object-cover w-full "
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Page;
