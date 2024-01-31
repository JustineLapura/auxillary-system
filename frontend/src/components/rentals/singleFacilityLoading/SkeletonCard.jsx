import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="w-full h-ful lg:flex justify-between items-center gap-16">
      <Skeleton className="w-full h-[360px] md:w-full rounded-lg" />
      <div className=" w-full h-full">
        <div className="w-full flex justify-between items-center my-4">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="flex items-center h-8 md:hidden rounded-full w-1/4" />
        </div>
        <div className="text-gray-900 py-5">
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-6 w-1/2 mt-4" />
          <Skeleton className="h-6 w-1/2 mt-2" />
          <Skeleton className="h-6 w-1/4 mt-4" />
        </div>
        <div className="hidden lg:block mb-12">
          <Skeleton className="h-14 w-32 rounded-full" />
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};

export default SkeletonCard;
