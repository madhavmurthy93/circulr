"use client";

import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

interface CarouselProps {
  images: string[];
}

function ImageCarousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={image.split("/").pop()}
            className="w-full h-full object-cover rounded-lg flex-shrink-0"
          />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center border rounded-full shadow-md bg-white text-xl hover:opacity-50 ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === 0}
      >
        <HiChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center border rounded-full shadow-md bg-white text-xl hover:opacity-50 ${
          currentIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === images.length - 1}
      >
        <HiChevronRight />
      </button>
    </div>
  );
}

export default ImageCarousel;
