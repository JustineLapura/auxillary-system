import React from "react";
import { Skeleton } from "../../ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="h-[300px] w-[300px] text-center flex flex-col justify-center items-center gap-4">
      <div className="w-full h-full">
        <Skeleton className="h-[200px] w-full rounded-xl" />
      </div>
      <Skeleton className="h-10 w-2/3" />
      <Skeleton className="h-12 w-28 rounded-full" />
    </div>
  );
};

export default SkeletonCard;
