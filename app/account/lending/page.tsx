import { faker } from "@faker-js/faker";
import Link from "next/link";
import { HiOutlinePlus } from "react-icons/hi2";

export const metadata = {
  title: "Lending",
};

export default function Page() {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-primary-900 font-semibold text-xl md:text-2xl">Lending</h2>
        <div className="flex flex-row text-sm md:text-base border border-primary-700">
          <button className="py-2 px-2 md:px-4 hover:bg-primary-100 bg-primary-100">All</button>
          <button className="py-2 px-2 md:px-4 hover:bg-primary-100">Active</button>
          <button className="py-2 px-2 md:px-4 hover:bg-primary-100">Inactive</button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-[1fr,2fr,1.5fr,1.5fr] gap-2 py-4 border-b border-primary-700 items-center">
          <div className="text-sm md:text-base text-primary-800 font-semibold"></div>
          <div className="text-sm md:text-base text-primary-800 font-semibold">Name</div>
          <div className="text-sm md:text-base text-primary-800 font-semibold">Category</div>
          <div className="text-sm md:text-base text-primary-800 font-semibold">Status</div>
        </div>
        {Array.from({ length: 12 }).map((_, index) => (
          <Link
            href={`/account/lending/${index}/edit`}
            key={index}
            className="grid grid-cols-[1fr,2fr,1.5fr,1.5fr] gap-2 py-4 border-b last:border-none border-primary-700 items-center hover:bg-primary-50"
          >
            <div>
              <img
                src={`https://picsum.photos/300/300?random=${index}`}
                alt=""
                className="object-cover rounded-lg max-h-20"
              />
            </div>
            <div className="text-sm md:text-base text-primary-800 text-wrap">
              {faker.commerce.productAdjective()} {faker.commerce.product()}
            </div>
            <div className="text-sm md:text-base text-primary-800 truncate">
              {faker.commerce.department()}
            </div>
            <div className="text-xs md:text-sm font-semibold">
              <span
                className={`py-1 px-3 rounded-full ${
                  index % 3 === 0
                    ? "text-primary-700 bg-primary-200"
                    : "text-accent-700 bg-accent-200"
                }`}
              >
                {index % 3 === 0 ? "Active" : "Inactive"}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="sticky flex flex-row justify-end bottom-4 right-4">
        <button className="bg-primary-700 text-white rounded-full p-3 mr-4 shadow-md hover:bg-primary-600">
          <span className="text-xl">
            <HiOutlinePlus />
          </span>
        </button>
      </div>
    </div>
  );
}
