import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CabinCardSkeleton() {
  return (
    <div className="flex bg-primary-900 p-2  rounded-md ">
      {/* LEFT IMAGE */}
      <div className="relative w-[200px] h-[200px] ">
        <Skeleton height="100%" width="100%" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col flex-1 justify-between bg-primary-900">
        {/* TOP CONTENT */}
        <div className="pt-5 pb-4 px-7 bg-primary-900">
          {/* Title */}
          <Skeleton height={26} width={160} style={{ marginBottom: 16 }} />

          {/* Guests row */}
          <div className="flex gap-3 items-center mb-3 bg-primary-900">
            <Skeleton circle height={20} width={20} />
            <Skeleton height={16} width={140} />
          </div>

          {/* Price */}
          <div className="flex justify-end items-baseline gap-3 bg-primary-900">
            <Skeleton height={28} width={70} />
            <Skeleton height={18} width={50} />
          </div>
        </div>

        {/* BOTTOM BUTTON */}
        <div className=" border-t border-primary-800 px-6 py-4 flex justify-end bg-primary-900">
          <Skeleton height={20} width={180} />
        </div>
      </div>
    </div>
  );
}

export default CabinCardSkeleton;
