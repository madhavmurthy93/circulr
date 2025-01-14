"use client";

import { capitalizeFirstLetters, categories } from "@/utils/categories";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

function SelectCategoryDropdown() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-900">Category</label>
      <div className="relative max-w-screen-sm">
        <button
          className="flex w-full flex-row items-center gap-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>
            {selectedCategory
              ? capitalizeFirstLetters(selectedCategory)
              : "Select a category"}
          </span>
          <span>
            <HiChevronDown />
          </span>
        </button>
        {dropdownOpen && (
          <ul className="absolute z-10 mb-12 w-full rounded-md border border-gray-300 bg-white shadow-lg">
            {categories.map((category) => (
              <li
                key={category}
                className="cursor-pointer px-3 py-2 hover:bg-primary-50"
                onClick={() => {
                  setSelectedCategory(category);
                  setDropdownOpen(false);
                }}
              >
                {capitalizeFirstLetters(category)}
              </li>
            ))}
          </ul>
        )}
      </div>
      <select name="category" className="hidden" value={selectedCategory}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCategoryDropdown;
