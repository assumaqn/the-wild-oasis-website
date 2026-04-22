"use client";

import { SkeletonTheme } from "react-loading-skeleton";
import CabinCardSkeleton from "./CabinSkeleton";

export default function CabinListFallback() {
  return (
    <SkeletonTheme baseColor="#222" highlightColor="#334155">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {Array.from({ length: 4 }).map((_, index) => (
          <CabinCardSkeleton key={index} />
        ))}
      </div>
    </SkeletonTheme>
  );
}
