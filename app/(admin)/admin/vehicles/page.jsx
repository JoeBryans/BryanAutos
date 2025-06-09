// import { Pagination } from "@/components/Pagenation";
import { Paginate } from "@/components/Pagenation";
import Vehicles from "../_components/vehicels/Vehicles";

const Page = async ({ searchParams }) => {
  const urlParams = await searchParams;
  const page = Number(urlParams.page);

  // const currentPage = Number(searchParams.page) || 1;
  // const pageSize = 5;

  // const offset = (currentPage - 1) * pageSize;

  // const posts = await prisma.car.findMany({
  //   skip: offset,
  //   take: pageSize,
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  // const totalPosts = await prisma.post.count();
  // const totalPages = Math.ceil(totalPosts / pageSize);
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${url}/api/vehicle?page=${page}`);
  const data = await res.json();
  console.log(data);
  const cars = data?.cars;
  const totalCars = data?.totalCars;
  const totalPages = data?.totalPages;

  return (
    <div>
      <div className=" max-w-6xl w-full p-5 mx-auto flex flex-col items-center justify-center">
        <h1>Vehicles</h1>
        <Vehicles data={cars} />
        <Paginate data={data} urlParams={urlParams} />
      </div>
    </div>
  );
};

export default Page;
