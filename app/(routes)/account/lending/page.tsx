import { faker } from '@faker-js/faker';
import Link from 'next/link';
import { HiOutlinePlus } from 'react-icons/hi2';

export const metadata = {
  title: 'Lending',
};

export default function Page() {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
          Lending
        </h2>
        <div className="flex flex-row border border-primary-700 text-sm md:text-base">
          <button className="bg-primary-100 px-2 py-2 hover:bg-primary-100 md:px-4">
            All
          </button>
          <button className="px-2 py-2 hover:bg-primary-100 md:px-4">
            Active
          </button>
          <button className="px-2 py-2 hover:bg-primary-100 md:px-4">
            Inactive
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-[1fr,2fr,1.5fr,1.5fr] items-center gap-2 border-b border-primary-700 py-4">
          <div className="text-sm font-semibold text-gray-700 md:text-base"></div>
          <div className="text-sm font-semibold text-gray-700 md:text-base">
            Name
          </div>
          <div className="text-sm font-semibold text-gray-700 md:text-base">
            Category
          </div>
          <div className="text-sm font-semibold text-gray-700 md:text-base">
            Status
          </div>
        </div>
        {Array.from({ length: 12 }).map((_, index) => (
          <Link
            href={`/account/lending/${index}/edit`}
            key={index}
            className="grid grid-cols-[1fr,2fr,1.5fr,1.5fr] items-center gap-2 border-b border-primary-700 py-4 last:border-none hover:bg-primary-50"
          >
            <div>
              <img
                src={`https://picsum.photos/300/300?random=${index}`}
                alt=""
                className="max-h-20 rounded-lg object-cover"
              />
            </div>
            <div className="text-wrap text-sm text-gray-700 md:text-base">
              {faker.commerce.productAdjective()} {faker.commerce.product()}
            </div>
            <div className="truncate text-sm text-gray-700 md:text-base">
              {faker.commerce.department()}
            </div>
            <div className="text-xs font-semibold md:text-sm">
              <span
                className={`rounded-full px-3 py-1 ${
                  index % 3 === 0
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {index % 3 === 0 ? 'Active' : 'Inactive'}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="sticky bottom-4 right-4 flex flex-row justify-end">
        <button className="mr-4 rounded-full bg-primary-700 p-3 text-white shadow-md hover:bg-primary-600">
          <span className="text-xl">
            <HiOutlinePlus />
          </span>
        </button>
      </div>
    </div>
  );
}
