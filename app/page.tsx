import { faker } from "@faker-js/faker";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-8">
      {Array.from({ length: 40 }, (_, index) => {
        const rating = Math.floor(Math.random() * 5) + 1;
        return (
          <div key={index} className="rounded-lg overflow-hidden">
            <Link href={`/products/${index}`}>
              <img
                src={`https://picsum.photos/400/300?random=${index}`}
                alt=""
                className="w-full h-60 object-cover rounded-lg"
              />
              <p className="mt-2 text-gray-500">
                {faker.commerce.productAdjective()} {faker.commerce.product()}
              </p>
            </Link>
            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }, (_, starIndex) => {
                return (
                  <svg
                    key={starIndex}
                    className={`w-4 h-4 ${
                      starIndex < rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.265 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                );
              })}
              <span className="text-sm ml-1">({Math.floor(Math.random() * 100) + 1})</span>
            </div>
            <p className="mt-2 text-gray-400">{faker.person.fullName()}</p>
          </div>
        );
      })}
    </div>
  );
}
