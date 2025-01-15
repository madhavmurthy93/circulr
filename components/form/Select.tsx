"use client";

import { capitalizeFirstLetters } from "@/utils/categories";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

interface SelectProps {
  label: string;
  name: string;
  options: string[];
  defaultValue: string;
}

function Select({ label, name, options, defaultValue }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-900">{label}</label>
      <div className="relative max-w-screen-sm">
        <button
          className="flex w-full flex-row items-center gap-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>
            {selectedValue
              ? capitalizeFirstLetters(selectedValue)
              : defaultValue}
          </span>
          <span>
            <HiChevronDown />
          </span>
        </button>
        {dropdownOpen && (
          <ul className="absolute z-10 mb-12 w-full rounded-md border border-gray-300 bg-white shadow-lg">
            {options.map((option) => (
              <li
                key={option}
                className="cursor-pointer px-3 py-2 hover:bg-primary-50"
                onClick={() => {
                  setSelectedValue(option);
                  setDropdownOpen(false);
                }}
              >
                {capitalizeFirstLetters(option)}
              </li>
            ))}
          </ul>
        )}
      </div>
      <select name={name} className="hidden" value={selectedValue}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
