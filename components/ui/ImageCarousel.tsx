'use client';

import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

interface CarouselProps {
  images: string[];
}

function ImageCarousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={image.split('/').pop()}
            className="h-full w-full flex-shrink-0 rounded-lg object-cover"
          />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className={`absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full border bg-white text-xl text-gray-900 shadow-md hover:opacity-50 ${
          currentIndex === 0 ? 'cursor-not-allowed opacity-50' : ''
        }`}
        disabled={currentIndex === 0}
      >
        <HiChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className={`absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full border bg-white text-xl text-gray-900 shadow-md hover:opacity-50 ${
          currentIndex === images.length - 1
            ? 'cursor-not-allowed opacity-50'
            : ''
        }`}
        disabled={currentIndex === images.length - 1}
      >
        <HiChevronRight />
      </button>
    </div>
  );
}

export default ImageCarousel;
