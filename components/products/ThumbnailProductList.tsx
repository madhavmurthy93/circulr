"use client";

import { capitalizeFirstLetters } from "@/utils/categories";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import ThumbnailProductCard from "./ThumbnailProductCard";

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
      <div className="mb-4 flex w-full flex-row items-center justify-between gap-2">
        <Link href={`/c/${category}`}>
          <h2 className="text-base font-semibold text-gray-900 md:text-lg">
            {capitalizeFirstLetters(category)}
          </h2>
        </Link>
        <Link href={`/c/${category}`}>
          <span className="text-sm text-primary-700 underline hover:text-primary-600 md:text-base">
            View all
          </span>
        </Link>
      </div>
      <div className="relative w-full">
        <button
          onClick={scrollLeft}
          className={`absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full border bg-white text-xl text-gray-900 shadow-md hover:opacity-50`}
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
          className={`absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full border bg-white text-xl text-gray-900 shadow-md hover:opacity-50`}
        >
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ThumbnailProductList;
