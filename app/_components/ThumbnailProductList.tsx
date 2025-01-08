"use client";

import { faker } from "@faker-js/faker";
import Link from "next/link";
import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import ThumbnailProductCard from "./ThumbnailProductCard";

const capitalizeFirstLetters = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

interface ThumbnailProductListProps {
  category: string;
}

function ThumbnailProductList({ category }: ThumbnailProductListProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);

  // Scroll left by a specific amount (e.g., 200px)
  const scrollLeft = () => {
    if (scrollRef.current && itemRef.current) {
      const itemWidth = itemRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: -(2 * itemWidth), // Scroll by two item width to the left
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  // Scroll right by a specific amount (e.g., 200px)
  const scrollRight = () => {
    if (scrollRef.current && itemRef.current) {
      const itemWidth = itemRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: 2 * itemWidth, // Scroll by two item width to the right
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  return (
    <div className="w-full py-4">
      <div className="flex flex-row gap-2 items-center justify-between w-full mb-4">
        <Link href={`/c/${category}`}>
          <h2 className="text-base md:text-lg font-semibold text-primary-900">
            {capitalizeFirstLetters(category)}
          </h2>
        </Link>
        <Link href={`/c/${category}`}>
          <span className="text-sm md:text-base text-primary-700 underline hover:text-primary-600">
            View all
          </span>
        </Link>
      </div>
      <div className="relative w-full">
        <button
          onClick={scrollLeft}
          className={`absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center border rounded-full shadow-md bg-white text-xl hover:opacity-50`}
        >
          <HiChevronLeft />
        </button>
        <div className="w-full overflow-x-auto scrollbar-none" ref={scrollRef}>
          <div className="flex flex-row gap-4">
            {Array.from({ length: 10 }, (_, index) => (
              <ThumbnailProductCard
                key={index}
                ref={index === 0 ? itemRef : null}
                product={{
                  id: index,
                  name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
                  description: faker.commerce.productDescription(),
                  lender: {
                    name: faker.person.fullName(),
                    city: faker.location.city(),
                  },
                }}
              />
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center border rounded-full shadow-md bg-white text-xl hover:opacity-50`}
        >
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ThumbnailProductList;
