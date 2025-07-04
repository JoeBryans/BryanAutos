// import { Skeleton } from "@/components/ui/skeleton";

import { Skeleton } from "./skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 ">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[230px]" />
        <Skeleton className="h-4 w-[230px]" />
      </div>
    </div>
  );
}
export function SkeletonImage() {
  return (
    <div className="w-full h-max flex mt-10 justify-center gap-4 ">
      <div className="flex justify-center max-w-7xl mx-auto w-full  space-x-5">
        <Skeleton className="h-[400px] w-[500px] rounded-xl" />
        <div className="space-y-4">
          <Skeleton className="h-10 w-[300px]" />
          <Skeleton className="h-8 w-[300px]" />
          <Skeleton className="h-8 w-[300px]" />
          <Skeleton className="h-5 w-[300px]" />
          <Skeleton className="h-5 w-[300px]" />
          <Skeleton className="h-5 w-[300px]" />
        </div>
      </div>
    </div>
  );
}
