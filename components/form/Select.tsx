"use client";

import { capitalizeFirstLetters } from "@/utils/categories";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

interface SelectProps {
  label: string;
  name: string;
  options: string[];
}

function Select({ label, name, options }: SelectProps) {
  const [value, setValue] = useState<string>(options[0]);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-900 md:text-base">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700 md:text-base"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {capitalizeFirstLetters(option)}
            </option>
          ))}
        </select>
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <HiChevronDown />
        </span>
      </div>
    </div>
  );
}

export default Select;
