import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
// import CabinListFallback from "./CabinListFallback";

async function CabinList({ filter }) {
  let displayCabin;
  const cabins = await getCabins();
  if (cabins.length < 0) return null;

  if (filter === "all") displayCabin = cabins;
  if (filter === "small")
    displayCabin = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayCabin = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    );
  if (filter === "large")
    displayCabin = cabins.filter(
      (cabin) => cabin.maxCapacity >= 8 && cabin.maxCapacity <= 12,
    );
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabin.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
///*
