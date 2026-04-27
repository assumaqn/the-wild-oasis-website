"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Buttons = [
  { name: "All Cabin", filter: "all" },
  { name: "1—3", filter: "small" },
  { name: "4-7", filter: "medium" },
  { name: "8-12", filter: "large" },
];

function FilterCabin() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params}`, { scroll: false });
  }

  return (
    <div className="flex border border-primary-800">
      {Buttons.map((button) => (
        <button
          className="px-5 py-2 hover:bg-primary-700"
          key={button.name}
          onClick={() => handleFilter(button.filter)}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
}

export default FilterCabin;
