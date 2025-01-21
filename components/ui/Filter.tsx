"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
  filterField: string;
  options: { value: string; label: string }[];
}

function Filter({ filterField, options }: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(filterField, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-row overflow-hidden rounded-md border border-primary-700 text-sm md:text-base">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-2 py-2 hover:bg-primary-100 md:px-4 ${currentFilter === option.value ? "bg-primary-100" : ""}`}
          onClick={() => handleFilterChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
