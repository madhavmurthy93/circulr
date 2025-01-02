"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";

const categories = ["all categories", "electronics", "books", "tools", "clothing", "furniture", ,];

const capitalizeFirstLetters = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

function CategoryDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(() => categories[0]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/c/")) {
      const category = pathname.split("/").pop() || categories[0];
      setSelectedCategory(category);
    } else {
      setSelectedCategory(categories[0]);
    }
  }, [pathname]);

  const handleSelect = (category: string) => {
    if (category === categories[0]) {
      router.push("/");
    } else {
      router.push(`/c/${category}`);
    }
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex flex-row gap-1 items-center justify-start hover:bg-gray-100 px-5 py-3 rounded-full"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="text-xl">
          <HiBars3 />
        </span>
        <span className="hidden md:block">{capitalizeFirstLetters(selectedCategory)}</span>
      </button>
      {dropdownOpen && (
        <ul className="absolute top-full transform translate-y-1 left-0 w-48 bg-white border rounded-lg overflow-hidden shadow-lg z-50">
          {categories.map((category) => (
            <li
              key={category}
              className={`px-5 py-3 cursor-pointer hover:bg-gray-100 ${
                category === selectedCategory ? "bg-gray-100" : ""
              }`}
              onClick={() => handleSelect(category)}
            >
              {capitalizeFirstLetters(category)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryDropdown;
