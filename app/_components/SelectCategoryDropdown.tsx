"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { capitalizeFirstLetters, categories } from "../utils/categories";

function SelectCategoryDropdown() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-primary-900">Category</label>
      <div className="relative max-w-screen-sm">
        <button
          className="flex flex-row gap-2 items-center px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-700 focus:border-primary-700"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>
            {selectedCategory ? capitalizeFirstLetters(selectedCategory) : "Select a category"}
          </span>
          <span>
            <HiChevronDown />
          </span>
        </button>
        {dropdownOpen && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mb-12">
            {categories.map((category) => (
              <li
                key={category}
                className="px-3 py-2 hover:bg-primary-50 cursor-pointer"
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
